import { useRef } from 'react';
import StyledInput from './hooks/useRef/useRef/StyledInput';
import Temporizador from './hooks/useRef/useRef/useRef';
import ContadorComUseRef from './hooks/useRef/useRef/contador-useRef';

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focarInput = () => {
    inputRef.current?.focus();
  };

  const limparInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Exemplo de Input Estilizado com Props e forwardRef</h1>
      <StyledInput ref={inputRef} placeholder="Digite seu texto aqui..." />
      <div style={{ marginTop: '20px' }}>
        <button onClick={focarInput} style={{ marginRight: '10px' }}>
          Focar no Input
        </button>
        <button onClick={limparInput}>Limpar Input</button>
      </div>
      <ContadorComUseRef />
      <Temporizador />
    </div>
  );
}

export default App;

// useRef cria uma referência no componente pai.
// ref = { inputRef } passa essa referência para StyledInput.
// focarInput chama focus() no < input > dentro do filho.