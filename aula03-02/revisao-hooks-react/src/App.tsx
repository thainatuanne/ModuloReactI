import { useEffect, useState } from "react";

export function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log(`O contador foi atualizado para ${count}`);
  }, [count]); // Adicionando dependência para evitar execução contínua

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Você clicou {count} vezes.
      </button>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}