import './App.css'

import axios from "axios"

import TextInput from './components/TextInput'
import TextOutput from './components/textOutput'

function App() {

  const handleBtnClick = async () => {
    const response = await axios({
      method: "GET",
      url: "http://127.0.0.1:5000/",
    })
    console.log(response) 
    
  }

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
            <TextInput/>
            <button 
              className='button-5'
              id='summarize-button'
              onClick={handleBtnClick}
            >Summarize</button>
          </div>
          <div id='output-summarize-container'>
            <TextOutput/>
          </div>
        </div>
      </div>
  )
}

export default App
