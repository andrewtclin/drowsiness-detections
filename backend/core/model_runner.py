import os
import shutil
import numpy as np
import matplotlib.pyplot as plt
import torch

class MLModel:
    def __init__(self) -> None:
        cwd = os.getcwd()
        yolov5_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'model', 'yolov5')
        os.chdir(yolov5_dir)
        print(os.getcwd())
        print('loading YOLOv5...')
        print('YOLOv5 loaded')
        os.chdir(cwd)
        print(os.getcwd())

    def detect_img(self, img:str) -> str:
        current_dir = os.path.dirname(os.path.abspath(__file__))
        output_dir = os.path.join(current_dir, 'detections')
        output_img = os.path.join(output_dir, 'output.png')
        if os.path.exists(output_dir):
            shutil.rmtree(output_dir, ignore_errors=True)
        os.makedirs(output_dir, exist_ok=True)
        
        detections = self.__yolov5(img)
        detections.print()
        plt.imshow(np.squeeze(detections.render()))
        plt.savefig(output_img)
        return output_img

