import  { useRef, useState } from 'react';

function Temporizador() {
    const timerRef = useRef<number | null>(null); // Armazena o ID do intervalo
    const [segundos, setSegundos] = useState(0);

    const iniciar = () => {
        if (timerRef.current) return; // Evita criar múltiplos intervalos

        timerRef.current = window.setInterval(() => {
            setSegundos((prev) => prev + 1);
        }, 1000);
    };

    const parar = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current); // Limpa o intervalo
            timerRef.current = null;
        }
    };

    return (
        <div>
            <p>Segundos: {segundos}</p>
            <button onClick={iniciar}>Iniciar</button>
            <button onClick={parar}>Parar</button>
        </div>
    );
}

export default Temporizador;

