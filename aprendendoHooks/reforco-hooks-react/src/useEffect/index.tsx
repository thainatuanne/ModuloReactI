import { useEffect, useState } from "react";

export function UseEffectExample() {
    const [value, setValue] = useState('initial value');
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        console.log('Hello from useEffect');

        return () => {
            console.log('Hello from destruction') // destruição de um componente
        }
    }, []); // ou value

    return (
        <div> 
            <input 
                type="text" 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
            />
            <input 
                type="checkbox" 
                checked={checked} 
                onChange={(e) => setChecked(e.target.checked)} 
            />
        </div>
    )
}