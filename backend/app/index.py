import os
from fastapi import FastAPI
from routes import calender

app = FastAPI()

app.include_router(calender.router)