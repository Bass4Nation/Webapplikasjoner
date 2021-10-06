const Food = (food) => {
    return (
        <>
            <ul>
                {food.map((foodOrDrinks) => (
                    <li key={foodOrDrinks}>{foodOrDrinks}</li>
                ))}
            </ul>
        </>
    );
};

export default Food;
