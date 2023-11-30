import PropTypes from 'prop-types'
import api from '../services/api'

const FileUpload = ({ setInputText }) => {
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file == null) {
          return;
        }
        
        const text = await api.uploadFile(file)
        await setInputText(text)
      }
    
    return (
        <input 
            type="file" 
            accept='.pdf'
            onChange={handleFileChange}
        />
    )
}

FileUpload.propTypes = {
  setInputText: PropTypes.func.isRequired
}

export default FileUpload;