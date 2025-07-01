from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/contact', methods=['POST'])
def contact():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")
    return jsonify({"message": f"Thanks {name}, we’ve received your message!"})

@app.route('/tools')
def tools():
    return render_template('tools.html')

app.run(host='0.0.0.0', port=81)
