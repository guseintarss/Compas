from pydantic import BaseModel


class ProductOut(BaseModel):
    id: int
    title: str
    description: str
    price: float | None
    image_url: str | None
    link: str | None
    category: str | None

    model_config = {"from_attributes": True}


class ServiceOut(BaseModel):
    id: int
    title: str
    description: str
    price: float | None

    model_config = {"from_attributes": True}