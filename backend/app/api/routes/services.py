from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.db.db import get_db
from app.models import Service
from app.schemas import ServiceOut

router = APIRouter()


@router.get("", response_model=list[ServiceOut])
async def get_services(db: Session = Depends(get_db)) -> list[ServiceOut]:
    services = db.scalars(select(Service).order_by(Service.id)).all()
    return [ServiceOut.model_validate(s) for s in services]