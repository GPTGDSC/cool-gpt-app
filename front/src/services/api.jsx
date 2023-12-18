import axios from "axios"

const baseUrl = "https://quicksum.onrender.com/"

const summarizeText = async (text, conciseness) => {
    const summaryObject = {
        content: text,
        conciseness: conciseness,
        key: import.meta.env.VITE_SUMMARIZE_KEY
    }
    
    try {
        return await axios.post(`${baseUrl}/summarize`, summaryObject)
    } catch (e) {
        console.log("Failed to post to summarize", e);
        return ""
    }
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