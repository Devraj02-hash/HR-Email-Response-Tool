from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    position = data.get('position')
    status = data.get('status')

    # simulate email sending
    print(f"Sending {status} email to {name} ({email}) for position {position}")

    return jsonify({"message": f"Email sent to {name} ({email}) for {status}."})

if __name__ == "__main__":
    app.run(debug=True)
