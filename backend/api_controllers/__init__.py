from flask import Blueprint

mlmodel_controller = Blueprint('mlmodel', __name__, url_prefix='/mlapi/v1/mlmodel')

from . import mlmodel