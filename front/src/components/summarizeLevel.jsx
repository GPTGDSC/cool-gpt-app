import './summarizeLevel.css'

const SummarizeLevel = () => {
    return (
        <div className="container">
            <label><input type="radio" name="e"/> Short bullets</label>
            <label><input type="radio" name="e"/> Detailed bullets</label>
            <label><input type="radio" name="e"/> Short paragraph</label>
            <label><input type="radio" name="e"/> Detailed Paragraph</label>
        </div>
    )
}

export default SummarizeLevel