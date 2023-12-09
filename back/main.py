from flask import Flask, request, render_template
from flask_cors import CORS, cross_origin
from openai import OpenAI
from key import key

import PyPDF2

client = OpenAI(
    api_key=key
)

app = Flask(__name__)
CORS(app)

def extractPDFText(file):
    text = ""
    try:
        pdf_reader = PyPDF2.PdfReader(file)
        for page_num in range(len(pdf_reader.pages)):
            text += pdf_reader.pages[page_num].extract_text()
    except Exception as e:
        return str(e), 500
    return text, 200

def getConciseString(conciseness: str) -> str | int:
    if conciseness == "bullet-short":
        return "with very concise bullet points"
    elif conciseness == "bullet-detail":
        return "in detail with bullet points"
    elif conciseness == "para-short":
        return "with a very concise paragraph"
    elif conciseness == "para-detail":
        return "in detail with a paragraph"
    else:
        return -1

@app.route("/")
def hello_world():
    return {'data': 'if you dont see this then its broken'}

@app.route('/upload-pdf', methods=['POST'])
def upload_pdf():
    text = extractPDFText(request.files['pdf'])

    return text

@app.route('/summarize')
def my_form():
    return render_template('summariser-page.html')

@app.route('/summarize', methods=['POST'])
def my_form_post():
    data = request.get_json()
    if 'content' not in data or 'conciseness' not in data:
        return 'Missing JSON key(s)', 400
    
    text = data['content']
    conciseness = data['conciseness']
    detail = getConciseString(conciseness)

    if detail == -1:
        return "Invalid conciseness level", 400

    completion = client.chat.completions.create(
        model="gpt-3.5-turbo", 
        messages=[
            {
                "role": "user", 
                "content": f"Imagine you are a student taking notes. Summarize the following for me {detail}: \"{text}\""
            }
        ]
    )

    return completion.choices[0].message.content, 200
