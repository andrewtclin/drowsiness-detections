from core.model_runner import MLModel

def detect_img(image) -> str:
    yolov5 = MLModel()
    output_path = yolov5.detect_img(image)
    return output_path