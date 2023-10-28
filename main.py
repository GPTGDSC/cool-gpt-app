from flask import Flask, request, render_template
import openai

openai.api_key = ""

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/summarize')
def my_form():
    return render_template('summariser-page.html')

@app.route('/summarize', methods=['POST'])
def my_form_post():
    text = request.form['text']
    completion = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": f"Summarize the following for me: {text}"}])

    return completion.choices[0].message.content
