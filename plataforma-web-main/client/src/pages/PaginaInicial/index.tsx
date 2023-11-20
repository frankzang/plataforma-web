import './styles.css';

export default function PaginaInicial() {
  let currentSlide = 0;

  function switchSlide(slideIndex) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    currentSlide = slideIndex;
    const slideWidth = slides[0].clientWidth || 0;
    const a = document.querySelector('.slide-container') as any;
    if (a != null) {
      a.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
      dots.forEach((dot) => dot.classList.remove('active-dot'));
      dots[currentSlide].classList.add('active-dot');
    }
  }

  setInterval(() => {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + 1) % slides.length;
    switchSlide(currentSlide);
  }, 5000);

  return (
    <div className="container">
      <div className="sidebar">
        <img src="assets/pagina-inicial/img/imagem perfil.jpg" alt="" />
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
        <header>
          <div className="menu-superior">
            <img src="src/assets/pagina-inicial/img/logo-unifap.png" alt="" />
            <ul>
              <li>
                <a href="#">Cursos</a>
              </li>
              <li>
                <a href="#">Fale Conosco</a>
              </li>
            </ul>
          </div>
        </header>
        <div
          id="bannerCarousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#bannerCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#bannerCarousel" data-slide-to="1"></li>
            <li data-target="#bannerCarousel" data-slide-to="2"></li>
            <li data-target="#bannerCarousel" data-slide-to="3"></li>
            <li data-target="#bannerCarousel" data-slide-to="4"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="assets/pagina-inicial/img/banner-1.png"
                className="d-block w-100"
                alt="Banner 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="assets/pagina-inicial/img/banner-2.png"
                className="d-block w-100"
                alt="Banner 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="assets/pagina-inicial/img/banner-3.png"
                className="d-block w-100"
                alt="Banner 3"
              />
            </div>
            <div className="carousel-item">
              <img
                src="assets/pagina-inicial/img/banner-4.png"
                className="d-block w-100"
                alt="Banner 4"
              />
            </div>
            <div className="carousel-item">
              <img
                src="assets/pagina-inicial/img/banner-5.png"
                className="d-block w-100"
                alt="Banner 5"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#bannerCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Anterior</span>
          </a>
          <a
            className="carousel-control-next"
            href="#bannerCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Próximo</span>
          </a>
        </div>
        <div className="Cursos">
          <h3>Cursos Disponiveis</h3>
        </div>

        <div id="courseCards" className="card-deck">
          <div className="card">
            <img
              src="assets/pagina-inicial/img/imagem-curso-1.png"
              className="card-img-top"
              alt="Imagem do Curso 1"
            />
            <div className="card-body">
              <h5 className="card-title">Curso 1</h5>
              <p className="card-text">Breve descrição do Curso 1.</p>
              <a href="#" className="btn btn-primary">
                Inscreva-se
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="assets/pagina-inicial/img/imagem-curso-2.png"
              className="card-img-top"
              alt="Imagem do Curso 2"
            />
            <div className="card-body">
              <h5 className="card-title">Curso 2</h5>
              <p className="card-text">Breve descrição do Curso 2.</p>
              <a href="#" className="btn btn-primary">
                Inscreva-se
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="assets/pagina-inicial/img/imagem-curso-3.jpg"
              className="card-img-top"
              alt="Imagem do Curso 3"
            />
            <div className="card-body">
              <h5 className="card-title">Curso 3</h5>
              <p className="card-text">Breve descrição do Curso 3.</p>
              <a href="#" className="btn btn-primary">
                Inscreva-se
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="assets/pagina-inicial/img/imagem-curso-4.jpg"
              className="card-img-top"
              alt="Imagem do Curso 4"
            />
            <div className="card-body">
              <h5 className="card-title">Curso 4</h5>
              <p className="card-text">Breve descrição do Curso 4.</p>
              <a href="#" className="btn btn-primary">
                Inscreva-se
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="assets/pagina-inicial/img/imagem-curso-5.jpg"
              className="card-img-top"
              alt="Imagem do Curso 5"
            />
            <div className="card-body">
              <h5 className="card-title">Curso 5</h5>
              <p className="card-text">Breve descrição do Curso 5.</p>
              <a href="#" className="btn btn-primary">
                Inscreva-se
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
