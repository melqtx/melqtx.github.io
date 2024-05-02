from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/posts')
def posts():
    posts = [
        {"title": "Blog 1", "url": "blog1", "date": "2024-04-25"},
        {"title": "Blog 2", "url": "blog2", "date": "2024-04-20"},
        {"title": "Blog 3", "url": "blog3", "date": "2024-04-15"}
    ]
    return render_template('posts.html', posts=posts)

@app.route('/blog1')
def blog1():
    return render_template('blog1.html')

if __name__ == '__main__':
    app.run(debug=True)