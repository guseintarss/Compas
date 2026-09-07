import { useEffect, useState } from "react";

import { getServices } from "../api/services";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServices()
      .then(setServices)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <div className="page-heading">
        <h1>Услуги и доставка</h1>
      </div>

      {loading ? (
        <p className="loading">Загрузка...</p>
      ) : (
        <div className="grid">
          {services.map((service) => (
            <article className="card" key={service.id}>
              <div className="card-image">🚚</div>
              <div className="card-body">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-desc">{service.description}</p>
                {service.price ? (
                  <div className="card-price">
                    {service.price} ₽{" "}
                    <span className="rub">/ усл.</span>
                  </div>
                ) : (
                  <div className="card-price">
                    По запросу
                  </div>
                )}
                <button type="button" className="btn card-btn small">
                  Заказать
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}