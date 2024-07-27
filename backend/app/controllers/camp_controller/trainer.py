from validation_models.models import TrainerToCamp
from fastapi import Request

async def add_trainer_to_camp(trainer_to_camp: TrainerToCamp, requests: Request):
    result = requests.app.database['temp_alloc'].insert_one(trainer_to_camp.model_dump())
    return {"status": "success", "inserted_id": str(result.inserted_id)}
