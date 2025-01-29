import { useState } from "react";

export function useCounter() {  
    const [valorAtual, setValorAtual] = useState<number>(0);

    const increment = (): void => {
        setValorAtual(prevCount => prevCount + 1);
    };

    const decrement = (): void => {
        setValorAtual(prevCount => prevCount - 1);
    };

    return {
        valorAtual,
        decrement,
        increment
    };
}
