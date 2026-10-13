// @vitest-environment jsdom
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { TEMPLATE_BY_TYPE } from '@/domain/journal';
import { useProgressStore } from '@/store/useProgressStore';
import { JournalEditor } from './JournalEditor';

const template = TEMPLATE_BY_TYPE['saboreo'];

describe('JournalEditor', () => {
  const logJournal = vi.fn();
  beforeEach(() => {
    logJournal.mockReset();
    useProgressStore.setState({ logJournal });
  });

  it('no permite guardar hasta completar los campos obligatorios', async () => {
    render(<JournalEditor template={template} onSaved={() => undefined} onCancel={() => undefined} />);
    const save = screen.getByRole('button', { name: 'Guardar entrada' }) as HTMLButtonElement;
    expect(save.disabled).toBe(true);
    await userEvent.type(screen.getByLabelText('El momento'), 'Café al sol');
    await userEvent.type(screen.getByLabelText(/Lo que viste/), 'Luz tibia');
    expect(save.disabled).toBe(true); // falta "emoción"
    await userEvent.type(screen.getByLabelText(/La emoción/), 'calma');
    expect(save.disabled).toBe(false);
  });

  it('guarda los valores sin espacios sobrantes y omite los opcionales vacíos', async () => {
    const onSaved = vi.fn();
    render(<JournalEditor template={template} onSaved={onSaved} onCancel={() => undefined} />);
    await userEvent.type(screen.getByLabelText('El momento'), '  Café al sol  ');
    await userEvent.type(screen.getByLabelText(/Lo que viste/), 'Luz tibia');
    await userEvent.type(screen.getByLabelText(/La emoción/), 'calma');
    await userEvent.click(screen.getByRole('button', { name: 'Guardar entrada' }));
    expect(logJournal).toHaveBeenCalledWith({ type: 'saboreo', values: { momento: 'Café al sol', sentidos: 'Luz tibia', emocion: 'calma' } });
    expect(onSaved).toHaveBeenCalled();
  });

  it('recupera un borrador de la sesión', () => {
    sessionStorage.setItem('eudaimonia-draft-saboreo', JSON.stringify({ momento: 'Paseo' }));
    render(<JournalEditor template={template} onSaved={() => undefined} onCancel={() => undefined} />);
    expect((screen.getByLabelText('El momento') as HTMLInputElement).value).toBe('Paseo');
    expect(screen.getByText(/Recuperamos el borrador/)).toBeTruthy();
  });

  it('pide confirmación antes de descartar texto escrito', async () => {
    const onCancel = vi.fn();
    render(<JournalEditor template={template} onSaved={() => undefined} onCancel={onCancel} />);
    await userEvent.type(screen.getByLabelText('El momento'), 'algo');
    await userEvent.click(screen.getByRole('button', { name: /Diario/ }));
    expect(onCancel).not.toHaveBeenCalled();
    expect(screen.getByRole('alertdialog', { name: 'Cambios sin guardar' })).toBeTruthy();
    await userEvent.click(screen.getByRole('button', { name: 'Descartar' }));
    expect(onCancel).toHaveBeenCalled();
  });
});
