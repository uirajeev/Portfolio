import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Headings from '../../component/Headings/Headings';
import ScrollService from '../../services/scrollService';
import Animations from '../../utilities/Animations';

import './style.scss';

const Contact = ({ id }) => {
  const fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== id) return;

    Animations.animations.fadeInScreen(id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [banner, setBanner] = useState('');
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="contact-container" id={id || ''}>
      <Headings title={'Contact Me'} subtitle={"Let's keep in touch"} />
      <div className="central-form">
        <div className="col">
          <h2>
            Get in touch 📧<span>|</span>
          </h2>
          <a>
            <FontAwesomeIcon icon="fa-brands fa-facebook-square" />
          </a>
          <a>
            <FontAwesomeIcon icon="fa-brands fa-google-plus-square" />
          </a>
          <a>
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
          </a>
          <a>
            <FontAwesomeIcon icon="fa-brands fa-youtube-square" />
          </a>
          <a>
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h3>Send your email here!</h3>
            <img
              src={require('../../assets/images/mailz.jpeg')}
              alt="no internet"
            />
          </div>
          <form action="">
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              onChange={handleName}
              value={name}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              onChange={handleEmail}
              value={email}
            />

            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Your 10 digit phone number"
              onChange={handlePhone}
              value={phone}
            />

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="What you want to share with me..."
              onChange={handleMessage}
              value={message}
            ></textarea>

            <div className="send-btn">
              <button type="submit">
                Send
                <FontAwesomeIcon icon="fa fa-paper-plane" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
