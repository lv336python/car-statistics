"""Module including DataSet Class"""

from app.helper import DataSetPandas
from app.models import Dataset


class UsersDataset:
    """
    Class for working with datasets. It hold methods to manipulate dataset.
    """
    def __init__(self, dataset_id):
        """Initialise instance of DataSet by getting all attributes of given DataSet from DB"""
        self.id = dataset_id  # pylint: disable=C0103
        self.file_id = self.get_dataset().file_id
        self.user_id = self.get_dataset().user_id
        self.filter_id = self.get_dataset().filter_id
        self.included_rows = self.get_dataset().included_rows

    def get_dataset(self):
        """Retrieve DataSet from DB"""
        return Dataset.query.get(self.id)

    def is_dataset(self):
        """Checks if DataSet is origin File"""
        return bool(self.filter_id)

    def is_owner(self, user_id):
        """Checks if user have rights to this DataSet"""
        return self.user_id == int(user_id)

    def to_dataframe(self, include_ids=False):
        """
        Returns DataFrame from DataSet by retrieving included rows from source File.
        If DataSet is origin File forms DataFrame from whole File
        """
        data = DataSetPandas(self.id)

        if include_ids:
            data = data.with_ids()

        if self.included_rows:
            return data.from_rows(self.included_rows)

        return data.dataframe

    def apply_filter(self):
        """Apply filter to DataSet, returns ID of new DataSet created from origin DataSet"""
        pass

    def delete(self):
        """Deletes DataSet from DB"""
        pass

    def append(self, indexes):
        """Append rows to DataSet, is used to edit DataSet manually"""
        return self.included_rows.append(indexes)

    def remove(self, indexes):
        """Removes rows from DataSet, is used to edit DataSet manually"""
        return [
            self.included_rows.remove(idx)
            for idx in indexes
            if idx in self.included_rows
        ]
