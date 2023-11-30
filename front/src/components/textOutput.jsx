import PropTypes from 'prop-types'

const TextOutput = ({ outputText }) => {

    return (
        <div>
            <textarea 
                id='output-textarea'
                placeholder='Output comes out here' 
                value={outputText}
                readOnly={true}>
            </textarea>
        </div>
    )
}

TextOutput.propTypes = {
    outputText: PropTypes.string
}

export default TextOutput