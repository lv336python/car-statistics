# pylint: disable=invalid-name
"""This module contains class IDataSet which aggregates all the
functionality needed to work with files
"""
class IDataSet:
    """
    Class for working with files
    It provides all necessary functionality
    to work with files
    """
    def read(self, filename):  # pylint: disable=missing-docstring
        raise NotImplementedError

    def get_column_names(self):  # pylint: disable=missing-docstring
        raise NotImplementedError

    def get_column_values(self, cl_name):  # pylint: disable=missing-docstring
        raise NotImplementedError

    def amount_of_rows(self, number_of_rows): # pylint: disable=missing-docstring
        raise NotImplementedError

    def filter_set(self, filter): # pylint: disable=missing-docstring
        raise NotImplementedError

    def get_rows_by_indexes(self, included_rows):
        raise NotImplementedError # pylint: disable=missing-docstring