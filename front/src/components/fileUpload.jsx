import { PDFDocument } from 'pdfjs-dist'

const FileUpload = () => {
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
    
        if (file == null) {
          return;
        }
    
        try {
            const reader = new FileReader()
            reader.onload = async (e) => {
                const contents = e.target.result
                const pdf = await PDFDocument.load(contents)
                const pages = pdf.getPages()
                let extractedText = ''
          
                for (const page of pages) {
                    const textContent = await page.getTextContent()
                    const pageText = textContent.items.map((item) => item.str).join(' ')
                    extractedText += pageText
                }

                console.log(extractedText);
            }
        } catch (error) {
          console.log('PDF Parsing error', error)
        }
        
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