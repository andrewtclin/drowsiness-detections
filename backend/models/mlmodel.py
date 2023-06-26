from core.ml_models import MLModels

def get_models() -> list:
    models = MLModels()
    return models.get_models()