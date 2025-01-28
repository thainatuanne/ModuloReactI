import { useRef } from 'react';

function ContadorComUseRef() {
    const contador = useRef(0); // Guardamos o contador dentro de uma "caixinha" com useRef.

    const handleClick = () => {
        contador.current += 1; // Atualizamos o valor do contador.
        console.log(`O botão foi clicado ${contador.current} vezes.`);
    };

    return (
        <div>
            <button onClick={handleClick}>Clique em mim</button>
            <p>Abra o console para ver o número de cliques.</p>
        </div>
    );
}

export default ContadorComUseRef;

