from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

@app.route("/img/<path:filename>")
def img(filename):
    return send_from_directory(os.path.join(app.root_path, "img"), filename)

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
