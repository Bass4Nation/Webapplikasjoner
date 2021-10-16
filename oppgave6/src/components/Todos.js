import Todo from './Todo'


const Todos = ({array}) =>{
    console.log(array);

    return(
        <>
        <h1>My Todos</h1>
        <section className={"flexContainer"}>
        {array.map((arr) => (
            
            <Todo title={arr}/>))
            }
        </section>
        </>
    );
};

export default Todos;