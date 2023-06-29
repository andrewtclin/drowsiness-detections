from flask import request

from api_controllers import mlmodel_controller as controller
from api_models import mlmodel as model

from api_utils import api_result

@controller.route('/detect', methods=['POST'])
def detect_img():
    # model_list = model.detect_img()
    image = request.form.get('image')
    print(model.detect_img(image))
    return api_result.status_result(200)