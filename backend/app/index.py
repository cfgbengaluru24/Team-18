import os
from fastapi import FastAPI
from routes.calender import router as calender
from routes.auth_router import router as auth_router
from pymongo import MongoClient

app = FastAPI()


@app.on_event("startup")
def startup_db_client():
    atlas_uri = "mongodb+srv://sadvaithas:12345@expa.ia6icol.mongodb.net/"
    db_name = "exap"

    if not atlas_uri or not db_name:
        raise ValueError("Environment variables ATLAS_URI and DB_NAME must be set")

    app.mongodb_client = MongoClient(atlas_uri)
    app.database = app.mongodb_client[db_name]
    # print(app.database.admin.find_one())
    # os.chdir("app")

@app.on_event("shutdown")
def shutdown_db_client():
    app.mongodb_client.close()

app.include_router(calender, prefix="/calender")
app.include_router(auth_router, prefix="/auth_router")