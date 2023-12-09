import axios from "axios"
const baseUrl = "http://127.0.0.1:5000"

const summarizeText = async (text, conciseness) => {
    const summaryObject = {
        content: text,
        conciseness: conciseness
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