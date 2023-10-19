import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Headings from '../../component/Headings/Headings';
import ScrollTop from '../../component/ScrollTop';
import ScrollService from '../../services/scrollService';
import Animations from '../../utilities/Animations';

import './style.scss';

const Contact = ({ id }) => {
  const fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== id) return;

    Animations.animations.fadeInScreen(id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [message, setMessage] = useState('');
  const [banner, setBanner] = useState('');
  const [bool, setBool] = useState(false);

  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneNumberRegex = /^[6-9]\d{9}$/;

  const handleName = (e) => {
    const val = e.target.value;
    setName(val);
    setNameError(!nameRegex.test(val));
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleEmailError = (e) => {
    setEmailError(!emailRegex.test(e.target.value));
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handlePhoneError = (e) => {
    setPhoneError(!phoneNumberRegex.test(e.target.value));
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        phone,
        message,
      };
      if (
        name.length === 0 ||
        nameError ||
        email.length === 0 ||
        emailError ||
        phone.length === 0 ||
        phoneError ||
        message.length === 0
      ) {
        toast.error('Please fill the all fields');
        setBanner('Please fill the all fields');
        return;
      }
      setBool(true);
      const res = await axios.post('/contact', data);
      if (res.status === 200) {
        const { msg } = res.data;
        toast.success(msg);
        setBanner(msg);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        const { msg } = res.data;
        toast.error(msg);
        setBanner(msg);
      }
      setBool(false);
    } catch (error) {
      console.log(error);
      setBool(false);
    }
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="contact-container fade-in" id={id || ''}>
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
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              onChange={handleName}
              value={name}
              className={nameError ? 'error' : ''}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              onChange={handleEmail}
              onBlur={handleEmailError}
              className={emailError ? 'error' : ''}
              value={email}
            />

            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Your 10 digit phone number"
              onChange={handlePhone}
              onBlur={handlePhoneError}
              className={phoneError ? 'error' : ''}
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
                Send <FontAwesomeIcon icon="fa fa-paper-plane" />
              </button>
              {bool ? (
                <b className="load">
                  <img src={require('../../assets/images/load2.gif')} alt="" />
                </b>
              ) : (
                ''
              )}
            </div>
          </form>
        </div>
      </div>
      <ScrollTop />
    </div>
  );
};

export default Contact;
