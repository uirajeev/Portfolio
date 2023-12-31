import { useState, useEffect } from 'react';
import ScrollService from '../../services/scrollService';
import Animations from '../../utilities/Animations';
import Headings from '../../component/Headings/Headings';

import './style.scss';

const Resume = ({ id }) => {
  const [selectedPoint, setSelectedPoint] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});
  const fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== id) return;

    Animations.animations.fadeInScreen(id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = ({
    heading,
    fromDate,
    toDate,
    subHeading,
    description,
  }) => (
    <div className="resume-heading">
      <div className="resume-heading-main">
        <div className="resume-heading-bullet"></div>
        <span>{heading ? heading : ''}</span>
        {fromDate && toDate ? (
          <div className="resume-date">{fromDate + '-' + toDate}</div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="resume-heading-sub">
        <span>{subHeading ? subHeading : ''}</span>
      </div>
      <div className="resume-heading-desc">
        <span>{description ? description : ''}</span>
      </div>
    </div>
  );

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: 'Education', logoSrc: 'education.svg' },
    { label: 'Work History', logoSrc: 'work-history.svg' },
    { label: 'Skills', logoSrc: 'programming-skills.svg' },
    { label: 'Projects/Works', logoSrc: 'projects.svg' },
    { label: 'Interests', logoSrc: 'interests.svg' },
  ];

  //here we have
  const skillsDetails = [
    { skill: 'Sales/Marketing Skills', ratingPercentage: 85 },
    { skill: 'Product Knowledge', ratingPercentage: 85 },
    { skill: 'Customer Relationship Management', ratingPercentage: 85 },
    { skill: 'Communication Skills', ratingPercentage: 89 },
    { skill: 'Financial Planning', ratingPercentage: 89 },
    { skill: 'Market Research', ratingPercentage: 70 },
    { skill: 'Networking', ratingPercentage: 80 },
    { skill: 'Time Management', ratingPercentage: 80 },
    { skill: 'Training and Development', ratingPercentage: 80 },
    { skill: 'Teamwork', ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: 'Personal Portfolio Website',
      duration: { fromDate: '2020', toDate: '2021' },
      description:
        'A Personal Portfolio website to showcase all my details and projects at one place.',
      subHeading: 'Technologies Used: React JS, Bootsrap',
    },
    {
      title: 'Mobile E-shop ',
      duration: { fromDate: '2020', toDate: '2021' },
      description:
        'An ecommerce application designed to sell products online wth payment system integration',
      subHeading:
        'Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux.',
    },
    {
      title: 'Ecommerce Website ',
      duration: { fromDate: '2020', toDate: '2021' },
      description:
        'Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe',
      subHeading:
        'Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.',
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <h3 className="resume-mobile-title">
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${resumeBullets[0].logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{resumeBullets[0].label}</span>
      </h3>
      <ResumeHeading
        heading={'University of Legon Accra, Ghana'}
        subHeading={'BACHELOR OF SCIENCE INFORMATION TECHNOLOGY'}
        fromDate={'2014'}
        toDate={'2018'}
      />

      <ResumeHeading
        heading={'National Youth Service Corps'}
        subHeading={'Ministry Of Science And Technogy. Uyo Akwa Ibom State'}
        fromDate={'2019'}
        toDate={'2020'}
      />
      <ResumeHeading
        heading={'High School '}
        subHeading={'Command Secondary School Mbiri'}
        fromDate={'2007'}
        toDate={'2012'}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <h3 className="resume-mobile-title second">
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${resumeBullets[1].logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{resumeBullets[1].label}</span>
      </h3>
      <div className="experience-container">
        <ResumeHeading
          heading={'Ehizeex Technoloy'}
          subHeading={'FULL STACK DEVELOPER INTERN'}
          fromDate={'2021'}
          toDate={'Present'}
        />
        <div className="experience-description">
          <span className="experience-description-text">
            Currently working as MERN stack web and mobile developer and also an
            online instructor on udemy.
          </span>
        </div>
        <div className="experience-description">
          <span className="experience-description-text">
            - Developed an ecommerce website for client with the dashboard for
            managing the products, managing reviews, users, payment etc. .
          </span>
          <br />
          <span className="experience-description-text">
            - Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.{' '}
          </span>
          <br />
          <span className="experience-description-text">
            - I stretch my mental capacity to develope UI as per the given
            designs.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div className="resume-screen-container" key="skills">
      <h3 className="resume-mobile-title second">
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${resumeBullets[2].logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{resumeBullets[2].label}</span>
      </h3>
      <div className="skills-container">
        {skillsDetails.map((skill) => (
          <div className="skills-parent" key={skill.skill}>
            <div className="resume-heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skills-percentage">
              <div
                style={{ width: skill.ratingPercentage + '%' }}
                className="active-percentage-bar"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      <h3 className="resume-mobile-title second">
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${resumeBullets[3].logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{resumeBullets[3].label}</span>
      </h3>
      {projectsDetails.map((projectsDetails) => (
        <ResumeHeading
          key={projectsDetails.title}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <h3 className="resume-mobile-title second">
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${resumeBullets[4].logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{resumeBullets[4].label}</span>
      </h3>
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: 'translateY(' + index * offsetHeight * -1 + 'px)' },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedPoint(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedPoint ? 'bullet selected-bullet' : 'bullet'
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container fade-in" id={id || ''}>
      <div className="resume-content">
        <Headings title="Resume" subtitle="My formal Bio Details" />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="resume-bullets-container">
              <div className="resume-bullets-icons"></div>
              <div className="resume-bullet">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullets-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
