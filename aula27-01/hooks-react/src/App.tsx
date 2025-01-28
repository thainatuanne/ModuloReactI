import { useRef } from 'react';
import StyledInput from './hooks/useRef/useRef/StyledInput';
import CustomInput from './hooks/useRef/useRef/customInput';
import Temporizador from './hooks/useRef/useRef/useRef';
import ContadorComUseRef from './hooks/useRef/useRef/contador-useRef';

function App() {
  // 🔹 Criando refs separadas para StyledInput e CustomInput
  const styledInputRef = useRef<HTMLInputElement>(null);
  const customInputRef = useRef<{ focar: () => void; limpar: () => void } | null>(null);

  // 🔹 Funções para manipular o StyledInput
  const focarStyledInput = () => {
    styledInputRef.current?.focus();
  };

  const limparStyledInput = () => {
    if (styledInputRef.current) {
      styledInputRef.current.value = '';
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Exemplo de Input Estilizado com Props e forwardRef</h1>

      {/* 🔹 Componente StyledInput */}
      <StyledInput ref={styledInputRef} placeholder="Digite seu texto aqui..." />
      <div style={{ marginTop: '20px' }}>
        <button onClick={focarStyledInput} style={{ marginRight: '10px' }}>
          Focar no Input
        </button>
        <button onClick={limparStyledInput}>Limpar Input</button>
      </div>

      <h1>Exemplo de useRef + forwardRef + useImperativeHandle</h1>

      {/* 🔹 Componente CustomInput */}
      <CustomInput ref={customInputRef} placeholder="Digite algo..." />
      <button onClick={() => customInputRef.current?.focar()}>Focar</button>
      <button onClick={() => customInputRef.current?.limpar()}>Limpar</button>

      {/* 🔹 Outros Componentes */}
      <div>
        <ContadorComUseRef />
        <Temporizador />
      </div>

    </div>
  );
}

export default App;


// useRef cria uma referência no componente pai.
// ref = { inputRef } passa essa referência para StyledInput.
// focarInput chama focus() no < input > dentro do filho.