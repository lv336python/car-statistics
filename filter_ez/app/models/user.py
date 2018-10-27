'''
Module for User model description
Added UserMixin for handling User login
session
'''
from datetime import datetime

from flask_login import UserMixin

from marshmallow import fields, Schema, validate, post_load

from werkzeug.security import generate_password_hash

from app import DB


class User(DB.Model, UserMixin):
    '''
    User model for SQL database
    '''
    __tablename__ = 'users'

    id = DB.Column(DB.Integer, primary_key=True, autoincrement=True)
    email = DB.Column(DB.String, unique=True, nullable=False)
    password = DB.Column(DB.String, nullable=False)
    create_date = DB.Column(DB.DateTime, nullable=False, default=datetime.utcnow())
    confirmed_date = DB.Column(DB.DateTime, nullable=True)
    confirmed = DB.Column(DB.Boolean, nullable=False, default=False)


    def __init__(self, email, password):
        self.email = email
        self.password = generate_password_hash(password)

    def __repr__(self):
        return f'User: {self.email}'

    @staticmethod
    def create(email, password):
        """
        Method that creates user
        :param email:
        :param password:
        :return: user
        """
        schema = UserSchema()
        user = schema.load({'email': email, 'password': password}).data

        DB.session.add(user)
        DB.session.commit()
        return user

class UserSchema(Schema):
    """
    Data validation
    with library marshmallow
    """
    reg_email = r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)"
    reg_pass = r"^[A-Za-z0-9_-]*$"
    email = fields.Email(required=True, validate=validate.Regexp(regex=reg_email, flags=0))
    password = fields.String(required=True,
                             validate=validate.Regexp(regex=reg_pass,
                                                      flags=0,
                                                      error='Password must include '
                                                            'only letters and numbers'))

    @post_load
    def make_user(self, data):# pylint: disable=R0201
        """
        Method that creates user
        :param data:
        :return: User object
        """
        return User(**data)
