'''
Module for confirmation view
'''
import json
from flask import flash, request

from werkzeug.security import generate_password_hash

from app import app
from app import db
from app.services.token_service import confirm_token
from app.models import User


@app.route('/api/password_reset/<token>', methods=['PUT'])
def reset_with_token(token):
    """
    PUT view tht updates password in our db
    :param token:
    :return: updated password for user
    """
    try:
        email = confirm_token(token)
    except ValueError:
        flash('The confirmation link is invalid or has expired.', 'danger')
    data = request.get_json()
    password = generate_password_hash(data['password'])

    if password:
        user = User.query.filter(User.email == email).first()
        if user:
            user.password = password
            db.session.add(user)# pylint: disable=E1101
            db.session.commit()# pylint: disable=E1101
            return json.dumps({
                'token': token
            }), 200

    return json.dumps({'status': 404, 'message': 'user doesnt exist'}), 404
