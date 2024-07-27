from fastapi import APIRouter
from controllers.admin_controller.camp_on_weekend import get_camp
from validation_models.models import Weekend 
from fastapi import Request

router = APIRouter()

@router.post("/camp_on_weekend")
async def camp_on_weekend(weekend : Weekend, requests: Request):
    data = await get_camp(weekend, requests)
    return data
