import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import './events.jsx';
import Events from './events.jsx';
import { Initial } from './initial';
import Meteors from "@/components/ui/meteors";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Initial />
      <Meteors number={40} />
      <Events />
    </>
  )
}

export default App
