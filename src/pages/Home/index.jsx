import './home.scss';

const Home = () => {
  return (
    <>
      <section className="main-banner">
        <div className="main-banner__bg"></div>
        <div className="container">
          <div className="main-banner__block">
            <div className="main-banner__content">
              <h1 className="main-banner__content-title">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="main-banner__content-descriptions">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Numquam tempora eligendi sunt libero consequuntur nulla ex odio
                assumenda,
              </p>
            </div>
            <button type="button" className="main-banner__btn">
              View more
            </button>
          </div>
        </div>
      </section>
      <section className="list-service container">
        <ul className="list-service__wrap">
          <li className="list-service__item">
            <a href="#immersion"> Lorem ipsum</a>
          </li>
          <li className="list-service__item">
            <a href="#analitics"> Lorem ipsum</a>
          </li>
          <li className="list-service__item">
            <a href="#dedicated-development-team"> Lorem ipsum</a>
          </li>
          <li className="list-service__item">
            <a href="#qa"> Lorem ipsum</a>
          </li>
          <li className="list-service__item">
            <a href="#support"> Lorem ipsum</a>
          </li>
          <li className="list-service__item">
            <a href="#ux-design"> Lorem ipsum</a>
          </li>
        </ul>
      </section>
      <section className="container">
        <div id="engineering-expertise" className="engineering-expertiser">
          <h2 className="section-title"> Lorem ipsum</h2>
          <div className="engineering-expertiser__wrap">
            <div className="engineering-expertiser-item">
              <p className="engineering-expertiser-item__title">Lorem ipsum</p>
              <p className="engineering-expertiser-item__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis voluptates aliquam iure aspernatur iusto perferendis.
                Sequi eos illum pariatur iste, placeat ad dolorum assumenda illo
                harum, aut, veritatis incidunt possimus?
              </p>
            </div>
            <div className="engineering-expertiser-item">
              <p className="engineering-expertiser-item__title">Lorem ipsum</p>
              <p className="engineering-expertiser-item__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis voluptates aliquam iure aspernatur iusto perferendis.
                Sequi eos illum pariatur iste, placeat ad dolorum assumenda illo
                harum, aut, veritatis incidunt possimus?
              </p>
            </div>
            <div className="engineering-expertiser-item">
              <p className="engineering-expertiser-item__title"> Lorem ipsum</p>
              <p className="engineering-expertiser-item__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis voluptates aliquam iure aspernatur iusto perferendis.
                Sequi eos illum pariatur iste, placeat ad dolorum assumenda illo
                harum, aut, veritatis incidunt possimus?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="our-service" className="services">
        <h2 className="section-title">Our services</h2>
        <div
          id="immersion"
          className="services__item-wrap services__item-wrap_right"
        >
          <div className="services__wrap-content">
            <div className="services__content">
              <p className="services__item-label">professionals</p>
              <p className="services__item-title">Immersion </p>
              <p className="services__item-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis voluptates aliquam iure aspernatur iusto perferendis.
                Sequi eos illum pariatur iste, placeat ad dolorum assumenda illo
                harum, aut, veritatis incidunt possimus?
              </p>
            </div>
          </div>
          <div className="services__img">
            <img src={require('../../image/camper2.jpeg')} alt="" />
          </div>
        </div>
        <div
          className="services__item-wrap services__item-wrap_left"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-out"
        >
          <div
            id="analitics"
            className="services__wrap-content services__wrap-content_left"
          >
            <div className="services__content">
              <p className="services__item-label">attention to detail</p>
              <p className="services__item-title">
                Lorem ipsum
                <br /> dolor
              </p>
              <p className="services__item-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis voluptates aliquam iure aspernatur iusto perferendis.
                Sequi eos illum pariatur iste, placeat ad dolorum assumenda illo
                harum, aut, veritatis incidunt possimus?
              </p>
            </div>
          </div>
          <div className="services__img">
            <img src={require('../../image/camper2.jpeg')} alt="" />
          </div>
        </div>
        <div
          id="dedicated-development-team"
          className="services__item-wrap services__item-wrap_right"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-out"
        >
          <div className="services__wrap-content">
            <div className="services__content">
              <p className="services__item-label">GEt Started</p>
              <p className="services__item-title">
                Lorem ipsum
                <br /> dolor
              </p>
              <p className="services__item-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis voluptates aliquam iure aspernatur iusto perferendis.
                Sequi eos illum pariatur iste, placeat ad dolorum assumenda illo
                harum, aut, veritatis incidunt possimus?
              </p>
            </div>
          </div>
          <div className="services__img">
            <img src={require('../../image/camper2.jpeg')} alt="" />
          </div>
        </div>
        <div className="services__item-wrap services__item-wrap_left">
          <div
            id="qa"
            className="services__wrap-content services__wrap-content_left"
          >
            <div className="services__content">
              <p className="services__item-label">attention to detail</p>
              <p className="services__item-title">
                Lorem ipsum
                <br /> dolor
              </p>
              <p className="services__item-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis voluptates aliquam iure aspernatur iusto perferendis.
                Sequi eos illum pariatur iste, placeat ad dolorum assumenda illo
                harum, aut, veritatis incidunt possimus?
              </p>
            </div>
          </div>
          <div className="services__img">
            <img src={require('../../image/camper2.jpeg')} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
