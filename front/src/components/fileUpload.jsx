import api from '../services/api'

const FileUpload = () => {
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
    
        if (file == null) {
          return;
        }
        
        api.uploadFile(file)
      }
    
    return (
        <input 
            type="file" 
            accept='.pdf'
            onChange={handleFileChange}
        />
    )
}

export default FileUpload;