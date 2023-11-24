import PropTypes from 'prop-types'

const TextInput = ({ setInputText }) => {
    const handleChange = (event) => {
        setInputText(event.target.value)
    }
    return (
        <div>
            <textarea 
                placeholder="...or paste your text here"
                onChange={handleChange}
            ></textarea>
                
        </div>
    )
}

TextInput.propTypes = {
    setInputText: PropTypes.func.isRequired
}

export default TextInput;
