import './styles.css';

export default function Eventos() {
  return (
    <div className="container">
      <div className="sidebar">
        <img
          src="assets/eventos/img/imagem perfil.jpg"
          alt="Perfil"
          className="profile-img"
        />
        <h2>Eric Cartman</h2>
        <h3>Sistema de informação</h3>
        <nav className="menu">
          <ul>
            <li>
              <a href="/">Feed</a>
            </li>
            <li>
              <a href="/central">Central do aluno</a>
            </li>
            <li>
              <a href="/eventos">Eventos</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="right-content">
        <header className="top-menu">
          <img src="assets/eventos/img/logo-unifap.png" alt="Logo UNIFAP" />
          <ul>
            <li>
              <a href="#">Cursos</a>
            </li>
            <li>
              <a href="#">Fale Conosco</a>
            </li>
          </ul>
        </header>
        <div className="events-grid">
          <div className="event-card">
            <img src="assets/eventos/img/banner-1.png" alt="Evento 1" />
            <h3>Evento 1</h3>
            <p>Descrição do Evento 1.</p>
            <a href="#" className="event-button">
              Acessar
            </a>
          </div>
          <div className="event-card">
            <img src="assets/eventos/img/banner-1.png" alt="Evento 2" />
            <h3>Evento 2</h3>
            <p>Descrição do Evento 2.</p>
            <a href="#" className="event-button">
              Acessar
            </a>
          </div>
          <div className="event-card">
            <img src="assets/eventos/img/banner-1.png" alt="Evento 3" />
            <h3>Evento 3</h3>
            <p>Descrição do Evento 3.</p>
            <a href="#" className="event-button">
              Acessar
            </a>
          </div>
          <div className="event-card">
            <img src="assets/eventos/img/banner-1.png" alt="Evento 4" />
            <h3>Evento 4</h3>
            <p>Descrição do Evento 4.</p>
            <a href="#" className="event-button">
              Acessar
            </a>
          </div>
          <div className="event-card">
            <img src="assets/eventos/img/banner-1.png" alt="Evento 5" />
            <h3>Evento 5</h3>
            <p>Descrição do Evento 5.</p>
            <a href="#" className="event-button">
              Acessar
            </a>
          </div>
          <div className="event-card">
            <img src="assets/eventos/img/banner-1.png" alt="Evento 6" />
            <h3>Evento 6</h3>
            <p>Descrição do Evento 6.</p>
            <a href="#" className="event-button">
              Acessar
            </a>
          </div>
          <div className="event-card">
            <img src="assets/eventos/img/banner-1.png" alt="Evento 7" />
            <h3>Evento 7</h3>
            <p>Descrição do Evento 7.</p>
            <a href="#" className="event-button">
              Acessar
            </a>
          </div>
          <div className="event-card">
            <img src="assets/eventos/img/banner-1.png" alt="Evento 8" />
            <h3>Evento 8</h3>
            <p>Descrição do Evento 8.</p>
            <a href="#" className="event-button">
              Acessar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
