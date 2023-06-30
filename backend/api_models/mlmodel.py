from core.model_runner import MLModel

def detect_img(image) -> str:
    yolov5 = MLModel()
    detected_image = yolov5.detect_img(image)
    return detected_image