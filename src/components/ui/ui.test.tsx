// @vitest-environment jsdom
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { IntensityScale } from './IntensityScale';
import { Tabs } from './Tabs';

function ControlledScale({ initial = null, onChange = () => undefined }: { initial?: number | null; onChange?: (v: number) => void }) {
  const [value, setValue] = useState<number | null>(initial);
  return (
    <IntensityScale
      label="Intensidad"
      value={value}
      onChange={(v) => {
        setValue(v);
        onChange(v);
      }}
      lowAnchor="0 · nada"
      highAnchor="10 · máxima"
    />
  );
}

describe('IntensityScale', () => {
  it('expone 11 opciones como radiogroup accesible', () => {
    render(<ControlledScale />);
    expect(screen.getByRole('radiogroup', { name: 'Intensidad' })).toBeTruthy();
    expect(screen.getAllByRole('radio')).toHaveLength(11);
    expect(screen.getAllByRole('radio').filter((r) => r.getAttribute('aria-checked') === 'true')).toHaveLength(0);
  });

  it('sin valor, sólo la primera opción es tabulable (roving tabindex)', () => {
    render(<ControlledScale />);
    const tabbable = screen.getAllByRole('radio').filter((r) => r.getAttribute('tabindex') === '0');
    expect(tabbable.map((r) => r.textContent)).toEqual(['0']);
  });

  it('seleccionar con clic marca la opción y avisa del cambio', async () => {
    const onChange = vi.fn();
    render(<ControlledScale onChange={onChange} />);
    await userEvent.click(screen.getByRole('radio', { name: '7' }));
    expect(onChange).toHaveBeenLastCalledWith(7);
    expect(screen.getByRole('radio', { name: '7' }).getAttribute('aria-checked')).toBe('true');
  });

  it('flechas, Inicio y Fin mueven la selección y el foco', async () => {
    const onChange = vi.fn();
    render(<ControlledScale initial={3} onChange={onChange} />);
    screen.getByRole('radio', { name: '3' }).focus();
    await userEvent.keyboard('{ArrowRight}');
    expect(onChange).toHaveBeenLastCalledWith(4);
    expect(document.activeElement?.textContent).toBe('4');
    await userEvent.keyboard('{ArrowLeft}{ArrowLeft}');
    expect(onChange).toHaveBeenLastCalledWith(2);
    await userEvent.keyboard('{End}');
    expect(onChange).toHaveBeenLastCalledWith(10);
    await userEvent.keyboard('{ArrowRight}'); // no pasa de 10
    expect(onChange).toHaveBeenCalledTimes(4);
    await userEvent.keyboard('{Home}');
    expect(onChange).toHaveBeenLastCalledWith(0);
  });
});

describe('Tabs', () => {
  const tabs = [
    { id: 'a', label: 'Primera', content: <p>Contenido A</p> },
    { id: 'b', label: 'Segunda', content: <p>Contenido B</p> },
    { id: 'c', label: 'Tercera', content: <p>Contenido C</p> },
  ];

  it('muestra la primera pestaña y enlaza pestaña y panel', () => {
    render(<Tabs tabs={tabs} />);
    const first = screen.getByRole('tab', { name: 'Primera' });
    expect(first.getAttribute('aria-selected')).toBe('true');
    expect(screen.getByRole('tabpanel').getAttribute('aria-labelledby')).toBe(first.id);
    expect(screen.getByText('Contenido A')).toBeTruthy();
  });

  it('las flechas cambian de pestaña de forma circular y mueven el foco', async () => {
    render(<Tabs tabs={tabs} />);
    screen.getByRole('tab', { name: 'Primera' }).focus();
    await userEvent.keyboard('{ArrowLeft}');
    expect(document.activeElement).toBe(screen.getByRole('tab', { name: 'Tercera' }));
    expect(screen.getByRole('tab', { name: 'Tercera' }).getAttribute('aria-selected')).toBe('true');
    await userEvent.keyboard('{ArrowRight}');
    expect(screen.getByRole('tab', { name: 'Primera' }).getAttribute('aria-selected')).toBe('true');
  });
});
