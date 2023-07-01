from core.model_runner import MLModel
import cv2
import numpy as np

def detect_img(image) -> str:
    yolov5 = MLModel()
    detected_image = yolov5.detect_img(image)
    return detected_image

def detect_webcam() -> bool:
    yolov5 = MLModel()
    model = yolov5.get_model()

    cap = None

    for i in range(10): 
        temp_cap = cv2.VideoCapture(i, cv2.CAP_DSHOW)

        if temp_cap.isOpened():
            print(f"Using webcam device: {i}")
            cap = temp_cap
            break
        else:
            print(f"Webcam device {i} is not available")

    if cap is None or not cap.isOpened():
        print("No webcam devices found")
        return False

    window_name = 'YOLOv5 Detection'
    cv2.namedWindow(window_name)

    while cap.isOpened():
        ret, frame = cap.read()

        results = model(frame)

        cv2.imshow(window_name, np.squeeze(results.render()))

        if cv2.getWindowProperty(window_name, cv2.WND_PROP_VISIBLE) <1:
            break
        if cv2.waitKey(10) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()
    return True