from pydantic import BaseModel

class Camp(BaseModel):
    id : int
    location: str
    date: str
    camp_size : int

class TrainerToCamp(BaseModel):
    camp_id: int
    trainer_id: int