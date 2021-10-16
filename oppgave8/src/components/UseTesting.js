import { useCallback, useState } from "react";

export const UseTesting = (initital = false, startNumber = 0, emptyString ="Empty") =>{
    const [number, setNumber] = useState(startNumber);
    const [testState, setTestState] = useState(initital);
    const [title, setTitle] = useState(emptyString);

    const increment = useCallback(() => setNumber(number => number + 1), [setNumber]);
    const decrement = useCallback(() => setNumber(number => number - 1), [setNumber]);

    const changeTestStateTrue = useCallback(() => setTestState(testState =>  testState = true), [setTestState]);
    const changeTestStateFalse = useCallback(() => setTestState(testState =>  testState = false), [setTestState]);

    const changeTitle = useCallback(()=>setTitle(title => title = "Test"), [setTitle] );

    return {
        title,
        number,
        testState,
        changeTitle,
        increment,
        decrement,
        changeTestStateTrue,
        changeTestStateFalse
    }
}