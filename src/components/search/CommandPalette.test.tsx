// @vitest-environment jsdom
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const push = vi.fn();
vi.mock('next/navigation', () => ({ useRouter: () => ({ push }) }));

const { default: CommandPalette } = await import('./CommandPalette');

describe('CommandPalette', () => {
  beforeEach(() => push.mockReset());

  it('con la búsqueda vacía muestra los accesos rápidos', () => {
    render(<CommandPalette open onClose={() => undefined} />);
    expect(screen.getByText('Accesos rápidos')).toBeTruthy();
    expect(screen.getAllByRole('option').length).toBeGreaterThan(0);
  });

  it('busca, navega con flechas y abre con Enter (patrón combobox)', async () => {
    const onClose = vi.fn();
    render(<CommandPalette open onClose={onClose} />);
    const input = screen.getByRole('combobox');
    await userEvent.type(input, 'respiracion');
    const options = screen.getAllByRole('option');
    expect(options[0].getAttribute('aria-selected')).toBe('true');
    expect(input.getAttribute('aria-activedescendant')).toBe(options[0].id);
    await userEvent.keyboard('{ArrowDown}');
    expect(screen.getAllByRole('option')[1].getAttribute('aria-selected')).toBe('true');
    await userEvent.keyboard('{Enter}');
    expect(onClose).toHaveBeenCalled();
    expect(push).toHaveBeenCalledWith(expect.stringMatching(/^\//));
  });

  it('informa cuando no hay resultados', async () => {
    render(<CommandPalette open onClose={() => undefined} />);
    await userEvent.type(screen.getByRole('combobox'), 'zzzzqqq');
    expect(screen.queryAllByRole('option')).toHaveLength(0);
    expect(screen.getByText(/Sin resultados/)).toBeTruthy();
  });

  it('Escape cierra', async () => {
    const onClose = vi.fn();
    render(<CommandPalette open onClose={onClose} />);
    await userEvent.type(screen.getByRole('combobox'), '{Escape}');
    expect(onClose).toHaveBeenCalled();
  });
});
