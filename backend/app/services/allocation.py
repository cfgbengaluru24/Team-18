from pymongo.database import Database
import datetime

def allocate(db : Database):
    
    camps = db['camp'].find()
    for camp in camps:
        if camp["date"] == (datetime.datetime.now() + datetime.timedelta(days=21)).date():
            finalizeallocation(camp["_id"], db)
        
def finalizeallocation(camp_id, db):
    
    trainer_count = db['camp'].find_one({"id": camp_id})["camp_size"]
    trainers = db['temp_alloc'].find({"camp_id": camp_id})
    male_trainers = trainers.sort("experience", -1).limit(trainer_count // 2)
    female_trainers = trainers.sort("experience", -1).limit(trainer_count // 2)
    
    # Update status of male trainers
    db['temp_alloc'].update_many({"_id": {"$in": [trainer["_id"] for trainer in male_trainers]}}, {"$set": {"status": "assigned"}})
    
    # Update status of female trainers
    db['temp_alloc'].update_many({"_id": {"$in": [trainer["_id"] for trainer in female_trainers]}}, {"$set": {"status": "assigned"}})
    
    # Update status of remaining trainers
    db['temp_alloc'].update_many({"_id": {"$nin": [trainer["_id"] for trainer in male_trainers + female_trainers]}}, {"$set": {"status": "cancelled"}})
