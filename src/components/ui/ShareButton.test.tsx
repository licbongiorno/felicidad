// @vitest-environment jsdom
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ShareButton } from './ShareButton';

describe('ShareButton', () => {
  it('sin menú de compartir, copia sólo la dirección pública', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true });
    Object.defineProperty(navigator, 'share', { value: undefined, configurable: true });
    render(<ShareButton title="Píldora" path="/biblioteca/pildoras/x" />);
    await userEvent.click(screen.getByRole('button', { name: 'Compartir' }));
    expect(writeText).toHaveBeenCalledWith(`${window.location.origin}/biblioteca/pildoras/x`);
    expect(await screen.findByText('Enlace copiado')).toBeTruthy();
  });

  it('con menú de compartir, pasa título y dirección', async () => {
    const share = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'share', { value: share, configurable: true });
    render(<ShareButton title="Artículo" path="/biblioteca/a" />);
    await userEvent.click(screen.getByRole('button', { name: 'Compartir' }));
    expect(share).toHaveBeenCalledWith({ title: 'Artículo', url: `${window.location.origin}/biblioteca/a` });
  });
});
