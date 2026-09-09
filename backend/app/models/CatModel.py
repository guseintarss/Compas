import sqlalchemy as sa
from sqlalchemy.orm import relationship
from backend.app.models.base import BaseModel
from sqlalchemy import Column, String, Integer, ForeignKey
from db import Base

class Category(BaseModel, Base):
    __tablename__ = "category"

    name = sa.Column(sa.String, nullable=False)
    description = sa.Column(sa.String, nullable=True)
    services = relationship("Service", back_populates="catalog")
