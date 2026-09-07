import { NavLink, Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="topbar">Бесплатная доставка по всей России от 3 000 ₽</div>

      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="logo">
            КОМПАС<span className="dot">.</span>
          </Link>

          <form className="search" onSubmit={(e) => e.preventDefault()}>
            <input type="search" placeholder="Поиск по каталогу..." aria-label="Поиск" />
            <button type="submit">Найти</button>
          </form>

          <div className="header-actions">
            <a className="action" href="mailto:example@example.com" title="Контакты">
              <span className="icon">✆</span>
              Связаться
            </a>
            <a className="action" href="#cart" title="Корзина">
              <span className="icon">
                🛒 <span className="cart-badge">0</span>
              </span>
              Корзина
            </a>
          </div>
        </div>

        <nav className="nav-bar">
          <div className="nav-inner">
            <NavLink to="/" end>
              Главная
            </NavLink>
            <NavLink to="/portfolio">Каталог</NavLink>
            <NavLink to="/services">Услуги</NavLink>
            <NavLink to="/contact">Контакты</NavLink>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <h4>КОМПАС</h4>
            <p style={{ margin: 0, color: "#ccc" }}>
              Онлайн-магазин школьных и офисных товаров.
            </p>
          </div>
          <div>
            <h4>Покупателям</h4>
            <ul>
              <li>
                <Link to="/portfolio">Каталог</Link>
              </li>
              <li>
                <Link to="/services">Доставка и оплата</Link>
              </li>
              <li>
                <NavLink to="/contact">Контакты</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h4>Контакты</h4>
            <ul>
              <li>8 800 000-00-00</li>
              <li>example@example.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">© {new Date().getFullYear()} КОМПАС. Все права защищены.</div>
      </footer>
    </>
  );
}