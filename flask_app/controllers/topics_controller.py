from flask_app import app
from flask import render_template, redirect, request, flash, session
from flask_app.models.user_model import User
from flask_app.models.topic_model import Topic

# ALL TOPICS PAGE
@app.route('/forum')
def forum_dash():
    if 'user_id' not in session:
        return redirect('/')
    # data = {
    #     "id":session['user_id']
    # }
    # logged_user = User.get_by_id(data)
    logged_user = User.get_by_id({"id": session['user_id']})

    return render_template("forum.html", logged_user = logged_user)


# NEW TOPIC FORM
@app.route('/topics/new')
def new_topic():
    if 'user_id' not in session:
        return redirect('/')
    return render_template("topic_new.html")

# Create New Topic
@app.route('/topics/create', methods = ['POST'])
def create_topic():
    if 'user_id' not in session:
        return redirect('/')
