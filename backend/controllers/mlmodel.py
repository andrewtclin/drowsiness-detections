from controllers import mlmodel_controller as controller
from models import mlmodel as model

from utils import api_result

@controller.route('/', methods=['GET'])
def get_models():
    model_list = model.get_models()
    return api_result.status_result(200, model_list)