import PropTypes from 'prop-types'

const TextOutput = ({ outputText }) => {

    return (
        <div>
            <textarea 
                placeholder="Output comes out here" 
                value={outputText}>
            </textarea>
        </div>
    )
}

TextOutput.propTypes = {
    outputText: PropTypes.string
}

export default TextOutput