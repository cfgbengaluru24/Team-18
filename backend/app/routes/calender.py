from fastapi import APIRouter
from controllers.camp_controller import camp as camp_controller
from validation_models.models import Camp
from fastapi import Request

router = APIRouter()

@router.post("/add_camp")
async def add_camp(camp: Camp, requests: Request):
    data = await camp_controller.add_camp(camp, requests)
    return camp

# @router.post("/add_trainer_to_camp")
# async def add_trainer_to_camp(trainer_to_camp: trainer.TrainerToCamp):
#     await trainer.add_trainer_to_camp(trainer_to_camp)
