import { useCallback, useEffect, useState } from "react";

import { getPortfolio } from "../api/portfolio";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(() => {
    setLoading(true);
    setError(null);
    getPortfolio()
      .then(setProjects)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <section>
      <div className="page-heading">
        <h1>Каталог</h1>
        <div className="filters">
          <button className="filter-btn active" type="button">Все</button>
          <button className="filter-btn" type="button">Новинки</button>
          <button className="filter-btn" type="button">Хиты</button>
        </div>
      </div>

      {loading ? (
        <p className="loading">Загрузка каталога...</p>
      ) : error ? (
        <div className="empty">
          <p>Не удалось загрузить товары: API недоступен.</p>
          <p className="card-desc">Убедитесь, что backend запущен на порту 8000, затем повторите запрос.</p>
          <button type="button" className="btn small" onClick={load}>
            Повторить
          </button>
        </div>
      ) : (
        <div className="grid">
          {projects.map((project) => (
            <article className="card" key={project.id}>
              <div className="card-image">
                {project.image_url ? (
                  <img src={project.image_url} alt={project.title} />
                ) : (
                  "💻"
                )}
              </div>
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-desc">{project.description}</p>
                <div className="card-price">
                  {project.price != null
                    ? `${project.price.toLocaleString("ru-RU")} ₽`
                    : "Цена по запросу"}
                </div>
                <button type="button" className="btn card-btn small">
                  В корзину
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}