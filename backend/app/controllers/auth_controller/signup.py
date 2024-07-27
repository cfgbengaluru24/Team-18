from fastapi import Request

async def signup(signup: dict, requests: Request):
    result = requests.app.database['trainer'].insert_one(signup.dict())
    return {"status": "success", "inserted_id": str(result.inserted_id)}