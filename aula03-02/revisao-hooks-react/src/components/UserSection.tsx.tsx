import { useCounter } from "../contexts/hooks/useCounter";

import { CounterButton } from "./counterButton";

export function UserSection() {
    const { count } = useCounter();

    return (
        <>
            <h2>User Section</h2>
            <p>O valor atual do contador é: {count}</p>

            <CounterButton />
        </>
    );
}