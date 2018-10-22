"""This module contains class DataBaseManager which aggregates all the
functionality needed to work with database
"""
from app.models.user import User
from app.models.files import File, Dataset, Filter
from app import db


class DataBaseManager:
    """
    Class for working with database. It provides all necessary
    functionality to work with database
    """
    def get_user_by_id(self, user_id):
        """
        Method for getting user by id
        :param user_id:
        :return: user record by id
        """
        user = User.query.get(user_id)
        return user

    def get_user_by_email(self, email):
        """
        Method for getting user by email
        :param email:
        :return: user record by email
        """
        user = User.query.filter(User.email == email).first()
        return user

    def get_dataset_by_id(self, dataset_id):
        """
        Method for getting dataset by id
        :param dataset_id:
        :return: dataset record
        """
        dataset = Dataset.query.filter(Dataset.id == dataset_id).first()
        return dataset

    def get_last_dataset(self):
        """
        Method for getting last dataset
        :return: dataset record
        """
        dataset = Dataset.query.all()[-1]
        return dataset

    def get_dataset_id(self, file_id):
        """
        Method for getting dataset id by file id
        :param file_id:
        :return: dataset_id
        """
        dataset_id = Dataset.query.filter(Dataset.file_id == file_id).first().id
        return dataset_id

    def get_file_by_id(self, file_id):
        """
        Method for getting file by id
        :param file_id:
        :return: file record
        """
        file = File.query.get(file_id)
        return file

    def create_user(self, email, password):
        """
        Method for creating user
        :param email:
        :param password:
        :return: user record
        """
        user = User.create(email, password)
        return user

    def get_subsets_by_filter(self, file_id):
        """
        Method for getting subset by file id and whith included rows
        :param file_id:
        :return: subset
        """
        subsets = Dataset.query.filter_by(file_id=file_id).filter(Dataset.included_rows != None).all()
        return subsets

    def getting_params_for_filtering(self, filter_id):
        """
        Method for getting parameters for filter
        :param filter_id:
        :return: filter parameters
        """
        filters = Filter.query.get(filter_id).params
        return filters

    def getting_filedata_to_be_updated(self, name):
        """
        Method for getting filedata
        :param name:
        :return: filedata
        """
        upd_file = File.query.filter_by(path=name).first()
        return upd_file

    def get_subsets_by_id(self, file_id):
        """
        Method for getting subsets by file id
        :param file_id:
        :return: subsets
        """
        subsets = Dataset.query.filter_by(file_id=file_id).all()
        return subsets

    def add_record_to_db(self, obj):
        """
        Method for add record to db
        :param obj: obj (for example user record)
        """
        db.session.add(obj)
        db.session.commit()

    def delete_record_from_db(self, obj):
        """
        Method for delete record to db
        :param obj: obj (for example user record)
        """
        db.session.delete(obj)
        db.session.commit()

    def flush(self):
        """
        Method for communicate a series of operations to the database
        """
        db.session.flush()
