"""
Different utils like small functions that a used in different scripts
"""

import os
import pandas as pd
import pickle
import time
import xlrd
import xlsxwriter

from io import BytesIO
from app import app, logger
from app.models import Dataset
from app.models.files import File
from hashlib import md5
from werkzeug.utils import secure_filename


def file_ext(filename):
    """
    Function will extract suffix from file name
    :param filename: filename.ext
    :return: suffix 'ext' from given filename
    """
    name = secure_filename(filename)
    suffix = name.rsplit('.', 1)[-1].lower()
    return suffix


def ext_free(filename):
    """
    Function will delete suffix from file name
    :param filename: filename.ext
    :return: filename without extension
    """
    name = filename.rsplit('.', 1)[0]
    return name


def create_dir(dir_path):
    """
    Function verify that given folder exists if not it creates it
    :param dir_path: directory to check
    :return: if path doesnt exist it will make dirs recursively
    """
    return os.path.isdir(dir_path) or os.makedirs(dir_path)


def user_dir(user_id):
    """
    Function returns path where user file is located
    :param user_id: id of file owner(user that uploaded this file)
    :return: path to the file directory like /user/file/
    """
    upload_dir = os.path.join(os.path.dirname(app.root_path),
                              app.config['DATA_FOLDER'],
                              app.config['UPLOAD_FOLDER'])
    directory = os.path.join(upload_dir, str(user_id))
    return directory


def save_path(directory, filename, user_id):
    """
    Function gives full path to file, filename will by hashed,
    extension will be added to file name.
    :param directory: directory file should be stored
    :param filename: name of file we want to save in directory
    :param user_id: id of User
    :return: file name with path to the file like /user/file/sample.txt
    """
    file_name = secure_filename(filename)
    suffix = file_ext(file_name)
    clear_name = ext_free(file_name)
    name_hash = hash_name(clear_name, user_id)
    name = f'{name_hash}.{suffix}'
    path_to_file = os.path.join(directory, name)
    return path_to_file


def hash_name(filename, user_id):
    """
    Function will hash filename with md5 algorithm
    :param filename: name to be hashed
    :param user_id: id of File owner
    :return: hashed name
    """
    ask = app.config['SECRET_KEY']
    hashed = md5(f'{ask}{filename}{user_id}'.encode()).hexdigest()
    return hashed


def attributes(file_path):
    """
    Get attributes of file to be stored in DB via json
    :param file_path: file which will be added to DB
    :return: json with file attributes
    """
    attrbts = {'loaded': 'new'}
    return attrbts


def get_user_file(file_id, user_id):
    """
    Function get path to user file by getting file name from DB
    and join it with user folder path
    :param file_id: id of needed file
    :param user_id: id of file owner
    :return: path to file
    """
    file = File.query.get(file_id)
    filename = file.path
    file_path = os.path.join(user_dir(user_id), filename)
    return file_path


def dataset_to_excel(dataset_id):
    """
    Writes dataset to excel file in-memory without creating excel file in the local storage
    :param dataset_id: id of dataset to create
    :return: BytesIO object or None
    """
    try:
        t1 = time.time()
        logger.warning("Start creating file: %s", t1)
        dataset = Dataset.query.get(dataset_id)
        byte_writer = BytesIO()

        excel_writer = xlsxwriter.Workbook(byte_writer)
        sheet = excel_writer.add_worksheet('Sheet1')
        path_to_file = get_user_file(dataset.file_id, dataset.user_id)

        with open(serialized_file(path_to_file), 'rb') as file:
            df = pickle.load(file)

        df = df.iloc[dataset.included_rows].values.tolist()

        for i in range(len(dataset.included_rows)):
            for j in range(len(df[i])):
                sheet.write(i, j, df[i][j])

        excel_writer.close()
        byte_writer.seek(0)
        logger.warning("Finished creating file in %s", time.time() - t1)
        return byte_writer
    except Exception as e:
        print(e)



def serialize(file):
    """
    Serializes DataFrame extracted from .xls file.
    Create serialized DataFrame in the same directory where given file exist
    Serialized file has the same name but another extension.
    To get this file instead excel file use function serialized_file()
    :param file: path to file to serialize
    :return: shape of DataFrame
    """
    file_pth = ext_free(file)
    df_to_serialize = pd.read_excel(file)
    shape = df_to_serialize.shape
    df_to_serialize.to_pickle(f'{file_pth}.pkl')
    return shape


def serialized_file(file):
    """
    Function substitutes serialized file instead excel file
    :param file: path to file to be substituted
    :return: path to serialized file
    """
    file_pth = ext_free(file)
    return (f'{file_pth}.pkl')
