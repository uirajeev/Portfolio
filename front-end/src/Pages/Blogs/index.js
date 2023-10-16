import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//OWL imports
import OwlCarousel from 'react-owl-carousel';
import Headings from '../../component/Headings/Headings';
import ScrollService from '../../services/scrollService';
import Animations from '../../utilities/Animations';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './style.scss';

const Blogs = ({ id }) => {
  const fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== id) return;

    Animations.animations.fadeInScreen(id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    magin: 0,
    animateIn: 'bounceInRight',
    animateOut: 'bounceOutRight',
    dots: true,
    autoplay: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);
  return (
    <div className=" fade-in" id={id || ''}>
      <Headings title={'Blogs'} subtitle={'Ideas are easy.'} />
      <section className="blogs-section">
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="blogs-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="blogs-item">
                  <div className="blogs-comment">
                    <p>
                      <FontAwesomeIcon icon="fa fa-quote-left" />
                      I patronized Ehizeex and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime.
                      <FontAwesomeIcon icon="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <FontAwesomeIcon icon="fa fa-star" />
                      </li>
                      <li>
                        <FontAwesomeIcon icon="fa fa-star" />
                      </li>
                      <li>
                        <FontAwesomeIcon icon="fa fa-star" />
                      </li>
                      <li>
                        <FontAwesomeIcon icon="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <FontAwesomeIcon icon="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src="img/mike.png" alt="no internet" />
                    <h4>My Name</h4>
                    <p>Development Officer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="blogs-item">
                  <div className="blogs-comment">
                    <p>
                      <FontAwesomeIcon icon="fa fa-quote-left" />
                      I patronized Ehizeex and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime.
                      <FontAwesomeIcon icon="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <FontAwesomeIcon icon="fa fa-star" />
                      </li>
                      <li>
                        <FontAwesomeIcon icon="fa fa-star" />
                      </li>
                      <li>
                        <FontAwesomeIcon icon="fa fa-star" />
                      </li>
                      <li>
                        <FontAwesomeIcon icon="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <FontAwesomeIcon icon="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src="img/mike.png" alt="no internet" />
                    <h4>My Name</h4>
                    <p>Development Officer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="blogs-item">
                  <div className="blogs-comment">
                    <p>
                      <FontAwesomeIcon icon="fa fa-quote-left" />
                      I patronized Ehizeex and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime.
                      <FontAwesomeIcon icon="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <FontAwesomeIcon icon="fa fa-star" />
                      </li>
                      <li>
                        <FontAwesomeIcon icon="fa fa-star" />
                      </li>
                      <li>
                        <FontAwesomeIcon icon="fa fa-star" />
                      </li>
                      <li>
                        <FontAwesomeIcon icon="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <FontAwesomeIcon icon="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src="img/mike.png" alt="no internet" />
                    <h4>My Name</h4>
                    <p>Development Officer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="blogs-item">
                  <div className="blogs-comment">
                    <p>
                      <FontAwesomeIcon icon="fa fa-quote-left" />
                      I patronized Ehizeex and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime.
                      <FontAwesomeIcon icon="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <FontAwesomeIcon icon="fa fa-star" />
                      </li>
                      <li>
                        <FontAwesomeIcon icon="fa fa-star" />
                      </li>
                      <li>
                        <FontAwesomeIcon icon="fa fa-star" />
                      </li>
                      <li>
                        <FontAwesomeIcon icon="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <FontAwesomeIcon icon="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src="img/mike.png" alt="no internet" />
                    <h4>My Name</h4>
                    <p>Development Officer</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="blogs-footer-image">
        <img
          src={require('../../assets/images/shape-bg.png')}
          alt="Photo not responding"
        />
      </div>
    </div>
  );
};

export default Blogs;
