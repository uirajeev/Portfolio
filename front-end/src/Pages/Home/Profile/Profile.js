import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TypeAnimation } from 'react-type-animation';
import tagline from './tagline';

import './style.scss';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="col">
            <div className="col-icon">
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
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I am <span className="highlighted-text">Name</span>
            </span>
          </div>
          <div className="profile-details-quotes">
            <TypeAnimation
              sequence={tagline}
              wrapper="h1"
              speed={40}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />
            <div className="profile-details-tagline">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </div>
          </div>
          <div className="profile-options">
            {/* onClick={() => ScrollService.scrollHandler.scrollToHireMe()} */}
            <button className="btn primary-btn"> Contact Me </button>
            <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
              <button className="btn highlighted-btn">View Profile</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-bg"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
