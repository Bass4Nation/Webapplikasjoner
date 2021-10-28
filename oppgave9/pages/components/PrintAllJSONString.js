import PrintAllJSONStringItem from './PristAllJSONStringItem'

const PrintAllJSONString = ({JsonString}) =>{
    // console.log(JsonString);

    const parsed = JSON.parse(JsonString);

    // parsed.map((assd)=>{
    //     console.log(assd.question)
    // })


    const printer = JsonString;


    return(
        <>
        {parsed.map((info)=>(
            <PrintAllJSONStringItem arr={info} />
        ))}
        <h3>JSON Raw Text</h3>
        <p>{printer}</p>

        </>
    )
}

export default PrintAllJSONString;