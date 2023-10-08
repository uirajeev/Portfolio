import Header from '../../component/Header';
import BannerBottom from './BannerBottom/BannerBottom';
import Profile from './Profile/Profile';
import './style.scss';

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Profile />
      <BannerBottom />
    </div>
  );
};

export default Home;
