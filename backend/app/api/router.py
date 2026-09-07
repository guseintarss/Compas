from fastapi import APIRouter

from app.api.routes import portfolio, services

api_router = APIRouter()
api_router.include_router(portfolio.router, prefix="/portfolio", tags=["portfolio"])
api_router.include_router(services.router, prefix="/services", tags=["services"])