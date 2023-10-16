import { useEffect } from 'react';
import ScrollService from '../../services/scrollService';
import Animations from '../../utilities/Animations';
import Headings from '../../component/Headings/Headings';

import './style.scss';

const About = ({ id }) => {
  const fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== id) return;

    Animations.animations.fadeInScreen(id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  const SCREEN_CONSTSANTS = {
    bullets: [
      'Customer Trust: Responsible to maintain the trust that policyholders place in LIC.',
      'Legal Compliance: Adhering to all relevant laws and regulations is crucial.',
      'Timely Responses: Timely resolution of issues is a hallmark of responsible service.',
      'Risk Assessment: Insurance underwriters must accurately assess risks when underwriting policies.',
      "Financial Prudence: Managing the company's finances responsibly is critical for long-term stability.",
    ],
  };

  const bulletsPoints = SCREEN_CONSTSANTS.bullets.map((item, i) => (
    <div className="about-highlight" key={i}>
      <div className="about-highlight-blob"></div>
      <span>{item}</span>
    </div>
  ));
  return (
    <div className="about-container screen-container fade-in" id={id || ''}>
      <div className="about-parent">
        <Headings title={'About Me'} subtitle={'Why choose me?'} />
        <div className="about-card">
          <div className="about-profile"></div>
          <div className="about-details">
            <div className="about-desc">
              <p>
                Hello,
                <br />I am [Your Name], proud to serve as a Development Officer
                (DO) at the renowned Life Insurance Corporation (LIC) of India.
                With a deep passion for financial security and a commitment to
                helping individuals and families achieve their life goals, I
                consider it an honor to be a part of the LIC family.
              </p>
              <p>
                My journey with LIC has been a fulfilling one, marked by a
                dedication to serving our valued policyholders with unwavering
                integrity and professionalism. Over the years, I have had the
                privilege of working with diverse clients, understanding their
                unique needs, and crafting customized insurance solutions that
                provide them with peace of mind and financial stability.
              </p>
            </div>
            <div className="about-highlights">
              <div className="about-highlights-heading">
                As a DO, I am committed to:
              </div>
              {bulletsPoints}
            </div>
            <div className="about-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToContact()}
              >
                Contact Me
              </button>
              <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
                <button className="btn highlighted-btn">Download</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
