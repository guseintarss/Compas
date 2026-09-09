import { Link } from "react-router-dom";

export default function Home() {
  const featured = [
    { emoji: "💻", title: "Ноутбуки", desc: "Ультрабуки для работы и игр" },
    { emoji: "⌚", title: "Смарт-часы", desc: "Аккуратные и функциональные" },
    { emoji: "📱", title: "Смартфоны", desc: "Флагманы с топ-камерами" },
    { emoji: "🔊", title: "Аудио", desc: "Колонки и наушники" },
  ];

  return (
    <>
      <section className="hero">
        <h1>
          Компас <span className="accent">X1 Pro</span>
        </h1>
        <p>
          Флагманский смартфон с камерой 200 МП и дисплеем 120 Гц. Бесплатная
          доставка по всей России.
        </p>
        <div className="hero-actions">
          <Link to="/portfolio" className="btn">
            Купить
          </Link>
          <Link to="/portfolio" className="btn-outline">
            Смотреть каталог
          </Link>
        </div>

        <div className="hero-scene">
          <div className="phone">
            <div className="phone-screen">
              <div className="phone-notch" />
              <span className="phone-iso">📷</span>
              <span className="phone-line short" />
              <span className="phone-line long" />
              <span className="phone-callout">Компас X1 Pro</span>
            </div>
          </div>
        </div>
      </section>

      <section className="featured">
        <h2 className="section-title">
          Категории
        </h2>
        <div className="grid">
          {featured.map((item) => (
            <article className="card" key={item.title}>
              <div className="card-image">{item.emoji}</div>
              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}