import { useState } from 'react'
import './App.css'

import TextInput from './components/textInput'
import TextOutput from './components/textOutput'
import api from './services/api'

function App() {
  const [outputText, setOutputText] = useState('')
  const [inputText, setInputText] = useState('')

  const [busy, setbusy] = useState(false);

  const handleBtnClick = async () => {
    if (busy) {
      return
    }

    setbusy(true);
    const response = await api.summarizeText(inputText)

    setOutputText(response.data);
    setbusy(false);
  }

  const style = busy ? {} : { display: 'none' }

  return (

    <div id='main'>
      <div id='main-content-container'>
        <div id="sidebar">
          <h1>Thoughtful summarizer</h1>
          <p>Summarize your files</p>
        </div>
        <div id="paste-summarize-container">
          <div className="upload-btn-wrapper">
            <button className="upload-btn">Upload a file</button>
            <input type="file" name="myfile" />
          </div>
          <TextInput setInputText={setInputText} />
          <button
            className='button-5'
            id='summarize-button'
            onClick={handleBtnClick}
          >Summarize</button>
        </div>
        <div
          className="lds-roller"
          style={style}
        ><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

        <div id='output-summarize-container'>
          <TextOutput outputText={outputText} />
        </div>
      </div>
    </div>
  )
}

export default App
