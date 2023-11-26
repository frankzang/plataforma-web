import useSWR from 'swr';
import './styles.css';
import { fetchApi } from '../../data/fetchApi';

export default function Eventos() {

  const {data,isLoading} = useSWR('/events', (url) => fetchApi(url))
    console.log({data});


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

          {data?.map(event => {
            return(
            <div className="event-card" key={event.id}>
            <img src="assets/eventos/img/banner-1.png" alt="Evento 1" />
            <h3>{event.nome}</h3>
            <p>{event.description}</p>
            <a href="#" className="event-button">
              Acessar
            </a>
          </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
