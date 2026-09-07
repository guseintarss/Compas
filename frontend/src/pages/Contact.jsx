export default function Contact() {
  return (
    <section>
      <div className="page-heading">
        <h1>Контакты</h1>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>Телефон горячей линии</h3>
          <p>8 800 000-00-00</p>
          <p className="card-desc">Ежедневно с 9:00 до 21:00</p>
        </div>

        <div className="contact-card">
          <h3>Электронная почта</h3>
          <p>example@example.com</p>
          <p className="card-desc">Ответим в течение рабочего дня</p>
        </div>

        <div className="contact-card">
          <h3>Адрес</h3>
          <p>г. Москва, ул. Примерная, д. 1</p>
          <p className="card-desc">Ежедневно с 9:00 до 20:00</p>
        </div>
      </div>
    </section>
  );
}