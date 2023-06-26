import os
import shutil
import numpy as np
import matplotlib.pyplot as plt
import torch

class MLModel:
    def __init__(self) -> None:
        print('loading YOLOv5...')
        self.__yolov5 = torch.hub.load('ultralytics/yolov5', 'yolov5s')
        print('YOLOv5 loaded')

    def __detect_img(self, img:str) -> None:
        current_dir = os.path.dirname(os.path.abspath(__file__))
        output_dir = os.path.join(current_dir, 'detections')
        if os.path.exists(output_dir):
            shutil.rmtree(output_dir, ignore_errors=True)
        os.makedirs(output_dir, exist_ok=True)

        detections = self.__yolov5(img)
        detections.print()
        plt.imshow(np.squeeze(detections.render()))
        plt.savefig(os.path.join(output_dir, 'output.png'))

    def get_models(self) -> list:
        models = []
        models_folder = os.path.join('core', 'models')
        for item in os.listdir(models_folder):
            if os.path.isdir(os.path.join(models_folder, item)):
                models.append(item)
        return models   