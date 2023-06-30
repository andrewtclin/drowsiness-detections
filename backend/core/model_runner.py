from flask import request
from typing import Union
import io
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

    def detect_img(self, img) -> str:
        output_dir = 'detections'
        output_img = os.path.join(output_dir, 'output.png')
        if os.path.exists(output_dir):
            shutil.rmtree(output_dir, ignore_errors=True)
        os.makedirs(output_dir, exist_ok=True)

        if type(img) is not str:
            img_data_dir = os.path.join(self.__core_dir, 'image_data')
            if os.path.exists(img_data_dir):
                shutil.rmtree(img_data_dir, ignore_errors=True)
            os.makedirs(img_data_dir, exist_ok=True)
            print('in2')
            print(os.path.splitext(img.filename)[1])
            img_name = 'img' + os.path.splitext(img.filename)[1]
            img.save(os.path.join(img_data_dir, img_name))
            img = os.path.join(img_data_dir, img_name)

        try:
            detections = self.__yolov5(img)
            detections.print()
            plt.imshow(np.squeeze(detections.render()))
            plt.savefig(output_img)
            return os.path.join(request.host_url, output_img)
        except Exception as e:
            print('Cannot recognize image', e)
            return ''
        

