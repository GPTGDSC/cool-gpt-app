import PropTypes from 'prop-types'
import './summarizeLevel.css'

const SummarizeLevel = ({ setConciseness }) => {
    const handleRadioSelect = ( event ) => {
        setConciseness(event.target.value)
    }
    return (
        <div className="container" onChange={handleRadioSelect}>
            <label><input type="radio" name="e" value='bullet-short' defaultChecked/> Short bullets</label>
            <label><input type="radio" name="e" value='bullet-detail' /> Detailed bullets</label>
            <label><input type="radio" name="e" value='para-short' /> Short paragraph</label>
            <label><input type="radio" name="e" value='para-detail' /> Detailed Paragraph</label>
        </div>
    )
}

SummarizeLevel.propTypes = {
    conciseness: PropTypes.string,
    setConciseness: PropTypes.func.isRequired
  }

export default SummarizeLevel