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
        return str(e)
    return text

@app.route("/")
def hello_world():
    return {'data': 'if you dont see this then its broken'}

@app.route('/upload-pdf', methods=['POST'])
def upload_pdf():
    print(request.files['pdf'])

    text = extractPDFText(request.files['pdf'])
    print(text)

    return text

@app.route('/summarize')
def my_form():
    return render_template('summariser-page.html')

@app.route('/summarize', methods=['POST'])
def my_form_post():
    data = request.get_json()
    text = data['content']
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo", 
        messages=[
            {
                "role": "user", 
                "content": f"Summarize the following for me: \"{text}\""
            }
        ]
    )

    return completion.choices[0].message.content
