import { useState } from 'react'
import './App.css'

import TextInput from './components/TextInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <TextInput/>
      </div>
        
    </>
  )
}

export default App
