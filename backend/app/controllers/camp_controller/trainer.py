from validation_models.models import TrainerToCamp

async def add_trainer_to_camp(trainer_to_camp: TrainerToCamp, collection):
    trainer_to_camp = dict(trainer_to_camp)
    collection.insert_one(trainer_to_camp)
    return trainer_to_camp
