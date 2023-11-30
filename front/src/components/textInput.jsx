import PropTypes from 'prop-types'

const TextInput = ({ setInputText, inputText }) => {
    const handleChange = (event) => {
        setInputText(event.target.value) 
    }
    return (
        <div>
            <textarea 
                placeholder="...or paste your text here"
                onChange={handleChange}
                value={inputText}
            ></textarea>
                
        </div>
    )
}

TextInput.propTypes = {
    setInputText: PropTypes.func.isRequired,
    inputText: PropTypes.string
}

export default TextInput;
