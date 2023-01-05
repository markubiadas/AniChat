from flask_app import app
from flask import render_template, redirect, request, flash, session
from flask_bcrypt import Bcrypt
from flask_app.models.user_model import User
from flask_socketio import SocketIO, send, emit
# from flask_app.models.comment_model import Comment

bcrypt = Bcrypt(app)
socketio = SocketIO(app, cors_allowed_origins="*")

# Default page route
@app.route('/')
def index():
    if 'user_id' in session:
        return redirect('/dashboard')
    return render_template("login.html")

# Login
@app.route('/users/login', methods = ['POST'])
def log_in():
    data = {
        'username': request.form['username']
    }
    user_in_db = User.get_by_username(data)
    if not user_in_db:
        flash("Email and Password does not match", 'log')
        return redirect('/')
    if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
        flash("Email and Password does not match", 'log')
        return redirect('/')
    session['user_id'] = user_in_db.id
    return redirect('/dashboard')

# Register User Form
@app.route('/users/create')
def reg_form():
    if 'user_id' in session:
        return redirect('/dashboard')
    return render_template('/register.html')

# Register User
@app.route('/users/register', methods = ['POST'])
def user_reg():
    if not User.validator(request.form):
        return redirect('/users/create')
    hashed_pass = bcrypt.generate_password_hash(request.form['password'])
    data = {
        **request.form,
        'password': hashed_pass
    }
    user_id = User.create(data)
    session['user_id'] = user_id
    return redirect ('/dashboard')

# Dashboard
@app.route('/dashboard')
def dash():
    if 'user_id' not in session:
        return redirect('/')
    data = {
        'id': session['user_id']
    }
    logged_user = User.get_by_id(data)
    return render_template('dashboard.html', logged_user = logged_user)

# Logout
@app.route('/users/logout')
def log_out():
    del session['user_id']
    return redirect('/')

#================ CHAT FEATURE ===================


# @socketio.on("message")
# def sendMessage(message):
#     print("hello")
#     send(message, broadcast=True)
#     # send() function will emit a message vent by default


# @app.route("/users/chat")
# def message():
#     print("hi there")
#     return render_template("message.html")

@app.route("/dashboard")
def message():
    print("hi there")
    return render_template("dashboard.html")