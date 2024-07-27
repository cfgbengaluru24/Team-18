from fastapi import APIRouter
from controllers.auth_controller import login as login_controller
from controllers.auth_controller import signup as signup_controller
from validation_models.models import LoginRequest
from validation_models.models import Trainer
from fastapi import Request

router = APIRouter()

@router.get("/login")
async def login(login: LoginRequest, requests: Request):
    data = await login_controller.login(login, requests)
    return data

@router.get("/signup")
async def login(signup: Trainer, requests: Request):
    data = await signup_controller.signup(signup, requests)
    return data