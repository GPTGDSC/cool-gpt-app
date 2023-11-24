import PropTypes from 'prop-types'

const TextOutput = ({ outputText }) => {

    return (
        <div>
            <div id='text-output'>
                <p>{outputText}</p>
            </div>
        </div>
    )
}

TextOutput.propTypes = {
    outputText: PropTypes.string
}

export default TextOutput