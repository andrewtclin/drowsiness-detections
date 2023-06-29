import os
import shutil
import numpy as np
import matplotlib.pyplot as plt
import torch

class MLModel:
    def __init__(self) -> None:
        self.__core_dir = os.path.dirname(os.path.abspath(__file__))
        self.__weights_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'model')
        cwd = os.getcwd()
        os.chdir(self.__weights_dir)
        print('loading YOLOv5...')
        self.__yolov5 = torch.hub.load('ultralytics/yolov5', 'yolov5s')
        print('YOLOv5 loaded')
        os.chdir(cwd)

    def detect_img(self, img:str) -> str:
        output_dir = os.path.join(self.__core_dir, 'detections')
        output_img = os.path.join(output_dir, 'output.png')
        if os.path.exists(output_dir):
            shutil.rmtree(output_dir, ignore_errors=True)
        os.makedirs(output_dir, exist_ok=True)
        try:
            detections = self.__yolov5(img)
            detections.print()
            print('done')
            plt.imshow(np.squeeze(detections.render()))
            plt.savefig(output_img)
            return output_img
        except Exception as e:
            print('Cannot recognize image', e)
            return ''
        

