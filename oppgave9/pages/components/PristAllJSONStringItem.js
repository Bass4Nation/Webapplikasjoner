
const PrintAllJSONStringItem = ({arr}) =>{

    const click = document.getElementById('button')

    const buttonPressed = (click) =>{

        if(click == true){
            console.log('true')
        }else{
            console.log('false')
        }

    }

    var buttonId = 0;

    return(
        <>
        <h3>{arr.question}</h3>
        {arr.answers.map((item) => (
            <button className={"answer"}  value={item.correct} onClick={buttonPressed(item.correct)}>{item.answere}</button>
        ))}
        </>
    )
}

export default PrintAllJSONStringItem;