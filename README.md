# Portfolio & Services Website

Сайт портфолио и услуг на **FastAPI** (backend) и **React + Vite** (frontend).

## Структура

```
My_Desing/
├── backend/    # FastAPI приложение
│   └── app/
│       ├── api/routes/    # эндпоинты (portfolio, services)
│       ├── core/          # конфигурация
│       ├── db/            # база данных
│       ├── models/        # ORM модели
│       ├── schemas/       # Pydantic схемы
│       └── main.py        # точка входа
└── frontend/   # React + Vite
    └── src/
        ├── components/    # Layout
        ├── pages/         # Home, Portfolio, Services, Contact
        ├── api/           # клиенты API
        └── hooks/         # React хуки
```

## Запуск backend

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload
```

API доступно на http://localhost:8000, документация — http://localhost:8000/docs

## Запуск frontend

```bash
cd frontend
npm install
npm run dev
```

Приложение доступно на http://localhost:5173. Vite проксирует `/api` на backend.