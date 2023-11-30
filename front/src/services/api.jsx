import axios from "axios"
const baseUrl = "http://127.0.0.1:5000"

const summarizeText = async (text) => {
    const summaryObject = {
        content: text 
    }
    return await axios.post(`${baseUrl}/summarize`, summaryObject)
}

const uploadFile = async (file) => {
    let formData = new FormData()
    formData.append('pdf', file)

    return await axios.post(
        `${baseUrl}/upload-pdf`, 
        formData,
        {headers: {'Content-Type': 'multipart/form-data'}}
    )
}

export default { 
    summarizeText,
    uploadFile
 }