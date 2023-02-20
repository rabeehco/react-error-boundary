import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ErrorBoundary from './ErrorBoundary'

function App() {
    const [name, setName] = useState('moto')
  return (
    <div className="App">
        <GreetTwo/>
      <ErrorBoundary>
        <Greet/>
      </ErrorBoundary>
        <img src={reactLogo} />
        
    </div>
  )
}

function Greet() {
  throw new Error('Some Error')
}

function GreetTwo(){
  return <h2>Hello User!</h2>
}

export default App
