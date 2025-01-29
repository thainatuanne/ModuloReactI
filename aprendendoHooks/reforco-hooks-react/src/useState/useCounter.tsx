import { useCounter } from "../hooks/useCounter"; // Certifique-se de que o caminho está correto

export function Counter() {
    const { valorAtual, increment, decrement } = useCounter();

    return (
        <div>
            <h2>Contador usando hook useState com increment + decrement</h2>
            <p>Contagem: {valorAtual}</p>
            <button onClick={increment}>Adicionar</button>
            <button onClick={decrement}>Remover</button>
        </div>
    );
}

export default Counter;
