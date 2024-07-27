from pydantic import BaseModel

class Camp(BaseModel):
    location: str
    date: str
    campsize : int

class TrainerToCamp(BaseModel):
    camp_id: int
    trainer_id: int