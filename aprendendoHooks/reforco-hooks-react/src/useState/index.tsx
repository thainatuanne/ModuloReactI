import { useState } from "react";

// declarar uma varival com useState e atualizar o valor, avisando o react que foi atualizado, para ele renderizar
function CounterFunction() {
    // Define o tipo inicial como number e o valor inicial como 0
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <h2>Contador usando Hook useState</h2>
            <p>Contagem: {count}</p>
            <button onClick={increment}>Adicionar</button>
        </div>
    );
}

export default CounterFunction;