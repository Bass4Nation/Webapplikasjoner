import { useState } from 'react';

const Alert = ({ setInputFromChild }) => {
    const [title, setTitle] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    const handleIsClicked = () => {
        setIsClicked(true);
        if (isClicked === true) {
            setInputFromChild(title);
        } else {
            console.log('isClicked still on false. Click one more time');
        }
    };

    const handleLiveConsoleInput = (event) => {
        setTitle(event.currentTarget.value);
        console.log(event.currentTarget.value);
    };

    const handleInputInConsole = () => {
        console.log(title);
    };

    return (
        <>
            <input
                type="text"
                placeholder="Fyll inn noe her"
                onChange={handleLiveConsoleInput}
            ></input>
            <button onClick={handleInputInConsole}>
                For samlet (printer i console){' '}
            </button>
            <br />
            <button onClick={handleIsClicked}>For LiftState oppgaven</button>
        </>
    );
};

export default Alert;
