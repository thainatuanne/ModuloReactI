import { UseEffectExample } from "./useEffect"
import CounterFunction from "./useState"
import { useState } from "react"

function App() {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <>
    {isVisible && <UseEffectExample />}
    <button onClick={() => setIsVisible(!isVisible)}>Clique para esconder</button> 
  
    <CounterFunction />
    </>
  )
}

export default App
