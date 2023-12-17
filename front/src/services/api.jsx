import axios from "axios"
import dotenv from "dotenv"
dotenv.config()

const baseUrl = "https://quicksum.onrender.com/"

const summarizeText = async (text, conciseness) => {
    const summaryObject = {
        content: text,
        conciseness: conciseness,
        key: import.meta.env.SUMMARIZE_KEY
    }

    console.log("TEST", summaryObject);
    
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