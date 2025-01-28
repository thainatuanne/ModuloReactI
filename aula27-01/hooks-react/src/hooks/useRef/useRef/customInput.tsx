import React, { forwardRef, useRef, useImperativeHandle } from 'react';

interface CustomInputMethods {
    focar: () => void;
    limpar: () => void;
}

const CustomInput = forwardRef<CustomInputMethods, React.InputHTMLAttributes<HTMLInputElement>>(
    (props, ref) => {
        const inputRef = useRef<HTMLInputElement>(null);

        useImperativeHandle(ref, () => ({
            focar() {
                inputRef.current?.focus();
            },
            limpar() {
                inputRef.current!.value = '';
            }
        }));

        return <input ref={inputRef} {...props} style={{ padding: '10px', border: '2px solid #6200ee' }} />;
    }
);

export default CustomInput;
// useImperativeHandle permite definir métodos personalizados (focar, limpar).
// ref = { inputRef } mantém a referência ao <input>.
// focar() aplica.focus(), e limpar() apaga o valor do campo.