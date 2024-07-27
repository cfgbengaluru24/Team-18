from pydantic import BaseModel

class Camp(BaseModel):
    location: str
    date: str
    campsize : int