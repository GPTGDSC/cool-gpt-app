import axios from "axios"
const baseUrl = "http://127.0.0.1:5000"

const summarizeText = async (text) => {
    const summaryObject = {
        content: text 
    }
    return await axios.post(`${baseUrl}/summarize`, summaryObject)
}

export default { 
    summarizeText
 }