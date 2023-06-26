import os

class MLModels:
    def __init__(self) -> None:
        self.models = []

    def get_models(self) -> list:
        models = []
        models_folder = os.path.join('core', 'models')
        for item in os.listdir(models_folder):
            if os.path.isdir(os.path.join(models_folder, item)):
                models.append(item)
        return models   