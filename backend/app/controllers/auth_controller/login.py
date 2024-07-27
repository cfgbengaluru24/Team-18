from validation_models.models import Camp
from fastapi import Request

async def login(login: dict, requests: Request):
    login_dict=login.dict()
    result = requests.app.database['admin'].find_one()
    print(result["email"]==login_dict["email"])

    return "done"
