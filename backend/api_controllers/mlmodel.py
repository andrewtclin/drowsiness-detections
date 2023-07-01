from flask import request

from api_controllers import mlmodel_controller as controller
from api_models import mlmodel as model

from api_utils import api_result

@controller.route('/detect', methods=['POST'])
def detect_img():
    image = request.form.get('image')
    if image is None:
        image = request.files['image']
    detected_image = model.detect_img(image)
    if image:
        return api_result.status_result(200, data=detected_image)
    else:
        return api_result.status_result(400, data='')
    
@controller.route('/real-time-detect', methods=['GET'])
def real_time_detect():
    if not model.detect_webcam():
        return api_result.status_result(400, data='No webcame available')
    else:
        return api_result.status_result(200, data='Completed')