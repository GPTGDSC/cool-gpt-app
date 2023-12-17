import axios from "axios"
import dotenv from 'dotenv'

const baseUrl = "https://quicksum.onrender.com/"
dotenv.config()

const summarizeText = async (text, conciseness) => {
    const summaryObject = {
        content: text,
        conciseness: conciseness,
        summarizeKey: process.env.REACT_APP_SUMMARIZE_KEY
    }
    return await axios.post(`${baseUrl}/summarize`, summaryObject)
}

const uploadFile = async (file) => {
    let formData = new FormData()
    formData.append('pdf', file)

    const response = await axios.post(
        `${baseUrl}/upload-pdf`, 
        formData,
        {headers: {'Content-Type': 'multipart/form-data'}}
    ) 

    return response.data
}

export default { 
    summarizeText,
    uploadFile
 }