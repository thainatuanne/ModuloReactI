import { useEffect, useState } from 'react'

export function App() {
  const [showTimer, setShowTimer] = useState(false)

  function Timer() {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(prevState => prevState + 1)
      }, 1000);
    

    return() => {
      clearInterval(interval);
      console.log('Intervalo de tempo limpo na desmontagem.')
    }
  }, []);

  return <p>Segunods: {seconds}</p>

}
  
  return (
    <>
    <button onClick={() => setShowTimer(!showTimer)}>
      {showTimer ? 'Parar timer' : 'Iniciar Timer'}
    </button>

    {showTimer && <Timer />}
    </>
  )
}

export default App