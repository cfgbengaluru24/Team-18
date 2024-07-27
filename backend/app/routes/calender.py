from fastapi import APIRouter
from controllers import camp_controller

router = APIRouter()

router.post("/addcamp")(camp_controller.add_camp)
router.post("/addtrainertocamp")(camp_controller.add_trainer_to_camp)
