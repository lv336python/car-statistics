"""
Module for filtering files
"""
from app import app, db
from flask import request, jsonify, make_response, json, session
from app.models.files import File, Filter, Dataset
from app.services.file_data import fields_definition
import pandas as pd

from app.services.utils import get_user_file, serialized_file


@app.route('/api/save_filter', methods=['POST'])
def save_filter():
    """
    Saving filter and dataset, based on filter parameters
    :return:
    """
    data = json.loads(request.data)
    parameters = data['params']
    name = data['name']
    file_id = data['file_id']

    # file = File.query.get(file_id)
    # xl_file = pd.read_excel(file.path)

    # for elem in parameters:
    #     if 'quantity' in elem:
    #         xl_file = xl_file[mask_f(xl_file, elem)].head(elem['quantity'])
    #     else:
    #         xl_file = xl_file[mask_f(xl_file, elem)]
    #
    # included_rows = xl_file.index.tolist()
    #
    # new_filter = Filter(name, parameters)
    # db.session.add(new_filter)
    # db.session.commit()
    # db.session.flush()
    #
    # new_dataset = Dataset(user_id=1, file_id=file_id, filter_id=new_filter.id, included_rows=included_rows)
    # db.session.add(new_dataset)
    # db.session.commit()

    return make_response(jsonify({'success': 'filter was succesfully saved'}), 200)


@app.route('/api/get_metadata', methods=['POST'])
def get_metadata():
    """
        Getting metadata: list of column and values for file
         :return: Response with metadata
    """
    data = json.loads(request.data)
    file_id = data['file_id']
    file_path = get_user_file(file_id, int(session['user_id']))
    metadata = fields_definition(file_path)
    count_rows = pd.read_pickle(serialized_file(file_path)).shape[0]
    result = {'rows': count_rows, 'metadata': metadata}
    return make_response(jsonify(result), 200)


@app.route('/api/count_rows', methods=['POST'])
def filter_num_rows():
    """
        Getting number of rows applying filter_params
        :return: Response number rows
    """
    data = json.loads(request.data)
    params = data['params']
    file_id = data['file_id']

    file_path = get_user_file(file_id, int(session['user_id']))
    xl_file = pd.read_pickle(serialized_file(file_path))

    if type(params) is list or type(params) is tuple:
        for elem in params:
            if 'quantity' in elem:
                xl_file = xl_file[mask_f(xl_file, elem)].head(elem['quantity'])
            else:
                xl_file = xl_file[mask_f(xl_file, elem)]
    else:
        if 'quantity' in params:
            xl_file = xl_file[mask_f(xl_file, params)].head(params['quantity'])
        else:
            xl_file = xl_file[mask_f(xl_file, params)]

    return make_response(jsonify(xl_file.shape[0]), 200)


def mask_f(data_frame, params):
    """
        Return criteria for data_frame depends on operator between column and value
    :param data_frame:
    :param params:
    :return: criteria value
    """
    column = params['column']
    operator = params['operator']
    value = params['value']
    if operator == '==':
        criteria = (data_frame[column] == value)
    elif operator == '!=':
        criteria = (data_frame[column] != value)
    elif operator == '>':
        criteria = (data_frame[column] > value)
    elif operator == '<':
        criteria = (data_frame[column] < value)
    else:
        criteria = 'error'

    return criteria


