from fastapi import APIRouter
from controllers.camp_controller import camp, trainer

router = APIRouter()

router.post("/addcamp")(camp.add_camp)
router.post("/addtrainertocamp")(trainer.add_trainer_to_camp)
