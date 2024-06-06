import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SIPCalculator from './SIPCalculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <SIPCalculator />
      </div>
    </>
  )
}

export default App
