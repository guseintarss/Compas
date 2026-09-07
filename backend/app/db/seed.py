from sqlalchemy import select

from app.db.db import Base, SessionLocal, engine
from app.models import Product, Service


def init_db() -> None:
    Base.metadata.create_all(bind=engine)

    with SessionLocal() as session:
        if not session.execute(select(Product)).scalars().first():
            session.add_all(
                [
                    Product(
                        title="Смартфон Компас X1 Pro",
                        description="Флагман с 6.7\" OLED-экраном, камерой 200 МП и чипом последнего поколения.",
                        price=89990,
                        category="Смартфоны",
                    ),
                    Product(
                        title="Ноутбук AirBook 14",
                        description="Тонкий ультрабук, 16 ГБ ОЗУ, SSD 512 ГБ, до 14 часов автономности.",
                        price=74990,
                        category="Ноутбуки",
                    ),
                    Product(
                        title="Смарт-часы Watch S2",
                        description="GPS, мониторинг сна, пульса и кислорода в крови, 7 дней без подзарядки.",
                        price=19990,
                        category="Смарт-часы",
                    ),
                    Product(
                        title="Наушники Buds Air ANC",
                        description="Беспроводные TWS-наушники с активным шумоподавлением.",
                        price=9990,
                        category="Аудио",
                    ),
                ]
            )

        if not session.execute(select(Service)).scalars().first():
            session.add_all(
                [
                    Service(
                        title="Доставка по России",
                        description="Курьерская доставка или пункты выдачи. Бесплатно от 3 000 ₽.",
                        price=0,
                    ),
                    Service(
                        title="Гарантия и сервис",
                        description="Официальная гарантия до 24 месяцев и расширенный сервис.",
                        price=2990,
                    ),
                ]
            )

        session.commit()