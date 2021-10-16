import { fireEvent, render, screen } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';
import { UseTesting } from "../UseTesting";

it('Check if boolean changing from false to true ', () => {

    const { result } = renderHook(() => UseTesting())

    expect(result.current.testState).toBe(false)

    act(() => {
        result.current.changeTestStateTrue()
    });

    expect(result.current.testState).toBe(true)
})


it('Check if boolean changing from false to true to false ', () => {

    const { result } = renderHook(() => UseTesting())

    expect(result.current.testState).toBe(false)

    act(() => {
        result.current.changeTestStateTrue()
    });
    expect(result.current.testState).toBe(true);
    act(() => {
        result.current.changeTestStateFalse()
    });

    expect(result.current.testState).toBe(false)
})

it('Check if numbers is 0', ()=> {
    const {result} = renderHook(() => UseTesting());

    expect(result.current.number).toBe(0);
})

it('Check if numbers is incrementing with 1', ()=> {
    const {result} = renderHook(() => UseTesting());

    act(() => {
        result.current.increment();
    })
    expect(result.current.number).toBe(1);
})

it('Check if title string is "empty" ', () =>{
    const {result } = renderHook(()=> UseTesting());

    expect(result.current.title).toBe("Empty");
})
it('Check if title string is "empty" ', () =>{
    const {result } = renderHook(()=> UseTesting());

    expect(result.current.title).toBe("Empty");

    act(() => {
        result.current.changeTitle();
    })

    expect(result.current.title).toBe("Test");
})