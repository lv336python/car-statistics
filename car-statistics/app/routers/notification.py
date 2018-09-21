from flask import render_template
from app import app
from flask_socketio import SocketIO

socketio = SocketIO(app)


@app.route('/notification')
def notification():
    return render_template('notification.html')


@socketio.on('trigger notification')
def trigger_my_notification(data):
    print('received my event: ' + str(data))
    socketio.emit('my notification')

