from fastapi import APIRouter
from controllers.trainer_controller.camp_for_trainer import get_camp
from validation_models.models import Trainer
from fastapi import Request

router = APIRouter()

@router.post("/camp_for_trainer")
async def camp_for_trainer(trainer : Trainer, requests: Request):
    data = await get_camp(trainer, requests)
    return data
