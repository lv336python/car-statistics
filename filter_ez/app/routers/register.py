'''
Module for register views
'''
import json

from flask import request, url_for
from werkzeug.security import check_password_hash

from app.models import User
from app import APP
from app.services.token_service import generate_confirmation_token
from app.services.mail_service import send_email

from app.services.schema_validate import data_validator
from app.helper.constant_status_codes import Status


@APP.route('/api/register', methods=['POST'])
@data_validator
def register():
    """
    POST methods for registration
    :return: Registered user or
     incorrect responses
    """

    data = request.get_json()
    email = data['email']
    password = data['password']

    user = User.query.filter(User.email == email).first()
    if user:
        if user.confirmed:
            return json.dumps({
                'message': f'email: {email} already exist'
            }), Status.HTTP_401_UNAUTHORIZED

    if not user:
        user = User.create(email, password)

    password = check_password_hash(pwhash=user.password, password=data['password'])

    if not password:
        return json.dumps({
            'message': 'You entered incorrect password please reset your password'
        }), Status.HTTP_400_BAD_REQUEST

    token = generate_confirmation_token(user.email)

    confirm_url = url_for('index', _external=True) + 'confirm/' + token.decode('utf-8')
    html = f'Link: {confirm_url}'
    subject = "Please confirm your email"
    send_email(user.email, subject, html)

    return json.dumps({
        'message': f'Please confirm registration'
    }), Status.HTTP_201_CREATED
