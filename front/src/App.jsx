import { useState } from 'react'
import './App.css'

import TextInput from './components/TextInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>Text summarizer</h1>
        <div id="paste-summarize-container">
          <TextInput/>
          <button className='button-5'id='summarize-button'>Summarize</button>
        </div>
      </div>
        
    </>
  )
}

export default App
