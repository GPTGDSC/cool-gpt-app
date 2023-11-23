import { useState } from 'react'
import './App.css'

import TextInput from './components/TextInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div id='header-container'>
          <h1>Text summarizer</h1>
          <p>Summarize your files</p>
        </div>
        <div id='main-content-container'>
          <div id="paste-summarize-container">
          <div className="upload-btn-wrapper">
            <button className="upload-btn">Upload a file</button>
            <input type="file" name="myfile" />
          </div>
            <p>...or paste your text here</p>
            <TextInput/>
            <button className='button-5'id='summarize-button'>Summarize</button>
          </div>
          <div id='output-summarize-container'>

          </div>
        </div>
      </div>
        
    </>
  )
}

export default App
