import { useEffect, useState } from "react";

import { getPortfolio } from "../api/portfolio";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPortfolio()
      .then(setProjects)
      .finally(() => setLoading(false));
  }, []);

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