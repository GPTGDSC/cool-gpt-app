const TextInput = () => {
    const handleChange = (event) => {
        console.log(`${event.target.value}!!!!`)
    }
    return (
        <div>
            <textarea 
                placeholder="Enter text here..."
                onChange={handleChange}
            ></textarea>
                
        </div>
    )
}

export default TextInput;
