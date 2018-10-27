'''
Token generation and validation functions
'''


import jwt
from app.helper.date_time_manager import DateTimeManager
from app import APP


def generate_confirmation_token(email):
    '''
    Accept user email and return generated token with expiration date
    :param email:
    :return: encoded token
    '''
    token = jwt.encode({'email': email,
                        'exp': DateTimeManager.expiration_time(hours=1)},
                       APP.config['SECRET_KEY'],
                       algorithm='HS256')
    return token


def confirm_token(token):
    '''
    Verify token  and decode it for email returning
    :param token:
    :return: return decoded token
    '''
    try:
        decoded_token = jwt.decode(token, APP.config['SECRET_KEY'], algorithms='HS256')

    except jwt.InvalidTokenError:
        return None
    return decoded_token['email']
