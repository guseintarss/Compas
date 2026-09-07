import { Link } from "react-router-dom";

export default function Home() {
  const featured = [
    { emoji: "💻", title: "Ноутбуки", desc: "Мощные ультрабуки для работы и игр" },
    { emoji: "⌚", title: "Смарт-часы", desc: "Трекеры активности и здоровья" },
    { emoji: "📱", title: "Смартфоны", desc: "Флагманы с топ-камерами" },
    { emoji: "🎧", title: "Аудио", desc: "Беспроводные наушники и колонки" },
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-glow" />
        <h1>
          Технологии <span className="accent">будущего</span> уже здесь
        </h1>
        <p>
          Флагманские смартфоны, ноутбуки и умные устройства с доставкой по
          всей России
        </p>
        <div className="hero-actions">
          <Link to="/portfolio" className="btn">
            Смотреть каталог
          </Link>
          <Link to="/services" className="btn-outline">
            Условия доставки
          </Link>
        </div>

        <div className="hero-scene">
          <span className="earbuds">🎧</span>
          <div className="phone">
            <div className="phone-screen" />
            <div className="phone-notch" />
          </div>
        </div>
      </section>

      <section className="featured">
        <h2 className="section-title">
          Популярные <span className="accent">категории</span>
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