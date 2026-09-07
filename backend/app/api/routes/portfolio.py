from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.db.db import get_db
from app.models import Product
from app.schemas import ProductOut

router = APIRouter()


@router.get("", response_model=list[ProductOut])
async def get_portfolio(db: Session = Depends(get_db)) -> list[ProductOut]:
    products = db.scalars(select(Product).order_by(Product.id)).all()
    return [ProductOut.model_validate(p) for p in products]