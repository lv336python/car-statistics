import threading
from flask import render_template
from app import app
from flask_socketio import SocketIO

socketio = SocketIO(app)


@app.route('/notification')
def notification():
    return render_template('notification.html')


#TODO intergate into email sending code
def trigger_my_notification():
    threading.Timer(30.0, trigger_my_notification).start()
    print("Hello world")
    socketio.emit('my notification')

trigger_my_notification()
