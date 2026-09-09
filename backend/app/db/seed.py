from sqlalchemy import select

from app.db.db import Base, SessionLocal, engine
from app.models import Product, Service


def _products() -> list[Product]:
    return [
        Product(
            title="Смартфон Компас X1 Pro",
            description='Флагман с 6.7" OLED-экраном 120 Гц, камерой 200 МП и чипом последнего поколения.',
            price=89990,
            category="Смартфоны",
            image_url="https://placehold.co/600x450/171717/f0a500?text=X1+Pro",
        ),
        Product(
            title="Смартфон Компас X1",
            description='Сбалансированный смартфон с 6.5" AMOLED-экраном и тройной камерой 50 МП.',
            price=54990,
            category="Смартфоны",
            image_url="https://placehold.co/600x450/171717/f0a500?text=Kompass+X1",
        ),
        Product(
            title="Смартфон Lite S",
            description="Доступный и надёжный смартфон для повседневных задач.",
            price=25990,
            category="Смартфоны",
            image_url="https://placehold.co/600x450/171717/f0a500?text=Lite+S",
        ),
        Product(
            title="Ноутбук AirBook 14",
            description="Тонкий ультрабук, 16 ГБ ОЗУ, SSD 512 ГБ, до 14 часов автономности.",
            price=74990,
            category="Ноутбуки",
            image_url="https://placehold.co/600x450/171717/f0a500?text=AirBook+14",
        ),
        Product(
            title="Ноутбук AirBook 16 Pro",
            description="Мощный ноутбук для работы и творчества: 32 ГБ ОЗУ, дискретная графика.",
            price=129990,
            category="Ноутбуки",
            image_url="https://placehold.co/600x450/171717/f0a500?text=AirBook+16",
        ),
        Product(
            title="Игровой ноутбук Volt G15",
            description="Игровой ноутбук с RTX 4060 и 165 Гц экраном для максимальной производительности.",
            price=149990,
            category="Ноутбуки",
            image_url="https://placehold.co/600x450/171717/f0a500?text=Volt+G15",
        ),
        Product(
            title="Смарт-часы Watch S2",
            description="GPS, мониторинг сна, пульса и кислорода в крови, 7 дней без подзарядки.",
            price=19990,
            category="Смарт-часы",
            image_url="https://placehold.co/600x450/171717/f0a500?text=Watch+S2",
        ),
        Product(
            title="Смарт-часы Watch S2 Sport",
            description="Прочные часы для фитнеса с 50 спортивными режимами и защитой 5 ATM.",
            price=24990,
            category="Смарт-часы",
            image_url="https://placehold.co/600x450/171717/f0a500?text=Watch+S2+Sport",
        ),
        Product(
            title="Наушники Buds Air ANC",
            description="Беспроводные TWS-наушники с активным шумоподавлением.",
            price=9990,
            category="Аудио",
            image_url="https://placehold.co/600x450/171717/f0a500?text=Buds+Air",
        ),
        Product(
            title="Наушники Max Studio",
            description="Полноразмерные наушники с качественным звуком и до 40 часов работы.",
            price=23990,
            category="Аудио",
            image_url="https://placehold.co/600x450/171717/f0a500?text=Max+Studio",
        ),
        Product(
            title="Умная колонка Smart Home Mini",
            description="Компактная умная колонка с голосовым помощником и отличным звуком.",
            price=4990,
            category="Аудио",
            image_url="https://placehold.co/600x450/171717/f0a500?text=Smart+Mini",
        ),
        Product(
            title="Планшет Pad 11",
            description='11" планшет с дисплеем 120 Гц и стилусом в комплекте.',
            price=39990,
            category="Планшеты",
            image_url="https://placehold.co/600x450/171717/f0a500?text=Pad+11",
        ),
    ]


def _services() -> list[Service]:
    return [
        Service(
            title="Доставка по России",
            description="Курьерская доставка или пункты выдачи. Бесплатно от 3 000 ₽.",
            price=0,
        ),
        Service(
            title="Экспресс-доставка в день заказа",
            description="Доставка по Москве и Санкт-Петербургу в течение 4 часов.",
            price=499,
        ),
        Service(
            title="Расширенная гарантия",
            description="Официальная гарантия до 24 месяцев и приоритетный сервис.",
            price=2990,
        ),
        Service(
            title="Настройка устройства",
            description="Перенос данных, настройка аккаунтов и установка программ.",
            price=990,
        ),
    ]


def init_db() -> None:
    Base.metadata.create_all(bind=engine)

    with SessionLocal() as session:
        if not session.execute(select(Product)).scalars().first():
            session.add_all(_products())

        if not session.execute(select(Service)).scalars().first():
            session.add_all(_services())

        session.commit()