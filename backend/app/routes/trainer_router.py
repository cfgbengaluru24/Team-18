from fastapi import APIRouter
from controllers.trainer_controller.camp_for_trainer import get_camp
from validation_models.models import Trainer
from fastapi import Request, Depends
from middleware.auth_middleware import verify_token
from fastapi import Request

router = APIRouter()

@router.post("/camp_for_trainer")
async def camp_for_trainer(trainer : Trainer, requests: Request):
    data = await get_camp(trainer, requests)
    return data

@router.get("/get_details")
async def get_details(requests: Request, token: str = Depends(verify_token)):
    data = requests.app.database['trainer'].find_one({requests.state.user_id})
    return {"status": "success", "details": data}
