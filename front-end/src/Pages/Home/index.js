import Header from '../../component/Header';
import BannerBottom from './BannerBottom/BannerBottom';
import Profile from './Profile/Profile';
import './style.scss';

const Home = ({ id }) => {
  return (
    <div className="home-container" id={id || ''}>
      <Header />
      <Profile />
      <BannerBottom />
    </div>
  );
};

export default Home;
