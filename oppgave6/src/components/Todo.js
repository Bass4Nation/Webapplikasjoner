
const Todo = ({title}) =>{

    return(
        <section className="flexItem">
            <h3 className="flexElement">{title.title}</h3>
            <a className="flexElement">{title.todo}</a>
            <button className="flexElement buttonGreen">Complete</button>
        </section>
    );
}

export default Todo;