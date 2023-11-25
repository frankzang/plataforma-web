import { useEffect } from 'react';
import './styles.css';
import { logoutUser } from '../../loaders/user';

export default function Central() {
  useEffect(() => {
    changeContent('disciplinas');
  }, []);

  function changeContent(contentId) {
    document.querySelectorAll('.content').forEach(function (content) {
      content.style.display = 'none';
    });

    document
      .querySelectorAll('.content-buttons button')
      .forEach(function (button) {
        button.classList.remove('active');
      });
    const a = document.getElementById('btn-' + contentId);
    const b = document.getElementById('content-' + contentId);

    a.classList.add('active');
    b.style.display = 'block';
  }

  return (
    <div className="container">
      <div className="sidebar">
        <img src="assets/central-aluno/img/imagem perfil.jpg" alt="Perfil" />
        <h2>Eric Cartman</h2>
        <h3>Sistema de informação</h3>
        <button
          onClick={() => {
            try {
              logoutUser();
              window.location.reload();
            } catch (error) {
              console.log({ error });
            }
          }}
        >
          Sair
        </button>
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
        <header>
          <div className="menu-superior">
            <img
              src="assets/central-aluno/img/logo-unifap.png"
              alt="Logo UNIFAP"
            />
            <ul>
              <li>
                <a href="#">Cursos</a>
              </li>
              <li>
                <a href="#">Fale Conosco</a>
              </li>
            </ul>
          </div>
          <div className="content-buttons">
            <button
              id="btn-disciplinas"
              onClick={() => changeContent('disciplinas')}
            >
              Disciplinas
            </button>
            <button id="btn-notas" onClick={() => changeContent('notas')}>
              Notas e Frequências
            </button>
            <button id="btn-horarios" onClick={() => changeContent('horarios')}>
              Horários
            </button>
          </div>
        </header>
        <div id="content-disciplinas" className="content active">
          <div className="card-disciplina">
            <img
              src="assets/central-aluno/img/imagem-curso-1.png"
              alt="Nome da Disciplina"
            />
            <h4>Nome da Disciplina</h4>
            <p>Detalhes da Disciplina</p>
          </div>
          <div className="card-disciplina">
            <img
              src="assets/central-aluno/img/imagem-curso-1.png"
              alt="Nome da Disciplina"
            />
            <h4>Nome da Disciplina</h4>
            <p>Detalhes da Disciplina</p>
          </div>
          <div className="card-disciplina">
            <img
              src="assets/central-aluno/img/imagem-curso-1.png"
              alt="Nome da Disciplina"
            />
            <h4>Nome da Disciplina</h4>
            <p>Detalhes da Disciplina</p>
          </div>
          <div className="card-disciplina">
            <img
              src="assets/central-aluno/img/imagem-curso-1.png"
              alt="Nome da Disciplina"
            />
            <h4>Nome da Disciplina</h4>
            <p>Detalhes da Disciplina</p>
          </div>
          <div className="card-disciplina">
            <img
              src="assets/central-aluno/img/imagem-curso-1.png"
              alt="Nome da Disciplina"
            />
            <h4>Nome da Disciplina</h4>
            <p>Detalhes da Disciplina</p>
          </div>
          <div className="card-disciplina">
            <img
              src="assets/central-aluno/img/imagem-curso-1.png"
              alt="Nome da Disciplina"
            />
            <h4>Nome da Disciplina</h4>
            <p>Detalhes da Disciplina</p>
          </div>
        </div>
        <div id="content-notas" className="content">
          <table className="table">
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>Avaliação Parcial 1</th>
                <th>Avaliação Parcial 2</th>
                <th>Trabalho 1</th>
                <th>Trabalho 2</th>
                <th>Trabalho 3</th>
                <th>Trabalho 4</th>
                <th>Avaliação Final</th>
                <th>Frequência</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Matemática Discreta</td>
                <td>7.5</td>
                <td>8.0</td>
                <td>9.0</td>
                <td>9.5</td>
                <td>8.5</td>
                <td>10.0</td>
                <td>9.0</td>
                <td>0%</td>
              </tr>
              <tr>
                <td>Cálculo I</td>
                <td>6.0</td>
                <td>7.0</td>
                <td>8.0</td>
                <td>7.5</td>
                <td>8.0</td>
                <td>7.0</td>
                <td>8.5</td>
                <td>5%</td>
              </tr>
              <tr>
                <td>Programação I</td>
                <td>8.0</td>
                <td>7.5</td>
                <td>9.5</td>
                <td>9.0</td>
                <td>10.0</td>
                <td>8.5</td>
                <td>8.0</td>
                <td>5%</td>
              </tr>
              <tr>
                <td>Física I</td>
                <td>5.0</td>
                <td>6.5</td>
                <td>7.0</td>
                <td>6.0</td>
                <td>6.5</td>
                <td>7.5</td>
                <td>7.0</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Estrutura de Dados</td>
                <td>9.0</td>
                <td>8.5</td>
                <td>9.0</td>
                <td>8.5</td>
                <td>9.5</td>
                <td>9.0</td>
                <td>9.5</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Banco de Dados</td>
                <td>8.5</td>
                <td>8.0</td>
                <td>9.0</td>
                <td>9.5</td>
                <td>9.5</td>
                <td>10.0</td>
                <td>9.0</td>
                <td>15%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="content-horarios" className="content">
          <table className="table">
            <thead>
              <tr>
                <th>Horário</th>
                <th>Segunda</th>
                <th>Terça</th>
                <th>Quarta</th>
                <th>Quinta</th>
                <th>Sexta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>08:00 - 09:50</td>
                <td>Matemática Discreta</td>
                <td>Cálculo I</td>
                <td>Programação I</td>
                <td>Física I</td>
                <td>Estrutura de Dados</td>
              </tr>
              <tr>
                <td>10:00 - 11:50</td>
                <td>Cálculo I</td>
                <td>Física I</td>
                <td>Estrutura de Dados</td>
                <td>Programação I</td>
                <td>Matemática Discreta</td>
              </tr>
              <tr>
                <td>14:00 - 15:50</td>
                <td>Estrutura de Dados</td>
                <td>Programação I</td>
                <td>Matemática Discreta</td>
                <td>Cálculo I</td>
                <td>Física I</td>
              </tr>
              <tr>
                <td>16:00 - 17:50</td>
                <td>Programação I</td>
                <td>Estrutura de Dados</td>
                <td>Física I</td>
                <td>Matemática Discreta</td>
                <td>Cálculo I</td>
              </tr>
              <tr>
                <td>18:00 - 19:50</td>
                <td>Banco de Dados</td>
                <td>Banco de Dados</td>
                <td>Banco de Dados</td>
                <td>Banco de Dados</td>
                <td>Banco de Dados</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
