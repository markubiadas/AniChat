from flask_app import app
from flask_app.controllers import users_controller
from flask_app.controllers import topics_controller
from flask_socketio import SocketIO, send
socketio = SocketIO(app, cors_allowed_origins="*")


@socketio.on("message")
def sendMessage(message):
    print("hello")
    send(message, broadcast=True)
    # send() function will emit a message vent by default

if __name__ == "__main__":
    socketio.run(app, port = 5003)
    # app.run(debug=True, port = 5001)