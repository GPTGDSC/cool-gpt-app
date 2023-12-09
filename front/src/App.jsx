import { useState } from 'react'
import './App.css'

import TextInput from './components/textInput'
import TextOutput from './components/textOutput'
import FileUpload from './components/fileUpload'
import SummarizeLevel from './components/summarizeLevel'

import api from './services/api'

function App() {
  const [outputText, setOutputText] = useState('')
  const [inputText, setInputText] = useState('')
  const [conciseness, setConciseness] = useState('bullet-short')

  const [busy, setbusy] = useState(false);

  const handleBtnClick = async () => {
    if (busy) {
      return
    }
   
    setbusy(true);
    const response = await api.summarizeText(inputText, conciseness)

    setOutputText(response.data);
    setbusy(false);
  }

  const style = busy ? {} : { display: 'none' }

  return (

    <div id='main'>
      <div id="sidebar">
        <h1>Quick sum</h1>
        <p>Summarize your files</p>
        <SummarizeLevel setConciseness={setConciseness}/>
      </div>
      <div id="main-content">
        <div id="paste-summarize-container">
          <div className="upload-btn-wrapper">
            <button className="upload-btn">Upload a file</button>
            <FileUpload setInputText={setInputText}/>
          </div>
          <TextInput setInputText={setInputText} inputText={inputText} />
          <button
            className='button-5'
            id='summarize-button'
            onClick={handleBtnClick}
          >Summarize</button>
          <div
            className="lds-roller"
            style={style}
          ><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>

        <div id='output-summarize-container'>
          <TextOutput outputText={outputText} />
        </div>
      </div>
    </div>  
  )
}

export default App
