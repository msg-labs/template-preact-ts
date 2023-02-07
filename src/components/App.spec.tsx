import { h } from 'preact';
import { render, screen } from '@testing-library/preact';
import { App } from './App';

describe('App', () => {
    it('Renders hello world', () => {
        render(<App />);
        const expected = 'Hello world';
        const current = screen.getByTestId('greeting').textContent;
        expect(current).toStrictEqual(expected);
    });
});
