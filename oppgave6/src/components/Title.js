const Title = ({title}, {style}) =>{
    console.log(title)
    console.log(style)
    return(
        <>
        <h1 className={style}>{title}</h1>
        </>
    );
};

export default Title;