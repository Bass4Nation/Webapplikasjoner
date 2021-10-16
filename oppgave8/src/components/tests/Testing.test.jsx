import {fireEvent, render, screen } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';
import { Testing } from '../Testing';



it('Should start with number 0', () =>{
    render(<Testing />);

    const text = screen.getByText(/Number is:/);
    expect(text).toHaveTextContent('Number is: 0');
})

it('Check if number increase with one', () =>{
    render(<Testing />);

    const text = screen.getByText(/Number is:/);
    expect(text).toHaveTextContent('Number is: 0');
    fireEvent.click(screen.getByText('+'));
    expect(text).toHaveTextContent('Number is: 1');
})

it('Check if number decrease with one', () => {
    render(<Testing />);

    const text = screen.getByText(/Number is:/);
    expect(text).toHaveTextContent('Number is: 0');
    fireEvent.click(screen.getByText('-'));
    expect(text).toHaveTextContent('Number is: -1');
})

it('Check multiple button presses', () => {
    render(<Testing />);

    const text = screen.getByText(/Number is:/);
    expect(text).toHaveTextContent('Number is: 0');
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('+'));
    expect(text).toHaveTextContent('Number is: 2');
})