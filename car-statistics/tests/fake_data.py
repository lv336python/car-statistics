from werkzeug.security import generate_password_hash

from flask_login import UserMixin


class FakeUser(UserMixin):
    """
    Fake confirmed user
    """
    id = 1
    email = "fake_user@gmai.com"
    password = generate_password_hash("admin1234")
    confirmed = True

    def __repr__(self):
        return self.email


class FakeSession:
    """
    Fakesession
    """
    fake_session = {'user_id': FakeUser.id}
    no_session = {}


SESSION = FakeSession.fake_session
NO_SESSION = FakeSession.no_session