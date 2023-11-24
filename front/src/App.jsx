import { useState } from 'react'
import './App.css'

import TextInput from './components/TextInput'
import TextOutput from './components/textOutput'
import api from './services/api'

function App() {
  const [outputText, setOutputText] = useState('Output appears here')
  const [inputText, setInputText] = useState('')

  const [showSpinner, setShowSpinner] = useState(false);

  const handleBtnClick = async () => {
    setShowSpinner(true);
    const response = await api.summarizeText(inputText)

    setOutputText(response.data);
    setShowSpinner(false);
  }

  const style = showSpinner ? {} : {display: 'none'} 

  return (

      <div id='main'>
        <div id='header-container'>
          <h1>Thoughtful summarizer</h1>
          <p>Summarize your files</p>
        </div>
        <div id='main-content-container'>
          <div id="paste-summarize-container">
          <div className="upload-btn-wrapper">
            <button className="upload-btn">Upload a file</button>
            <input type="file" name="myfile" />
          </div>
            <p>...or paste your text here</p>
            <TextInput setInputText={setInputText}/>
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
            <TextOutput outputText={outputText}/>
          </div>
        </div>
      </div>
  )
}

export default App
