import Home from '../Pages/Home';
import About from '../Pages/About';
import Resume from '../Pages/Resume';
import Blogs from '../Pages/Blogs';
import Contact from '../Pages/Contact';

export const TOTAL_PAGES = [
  {
    screen_name: 'Home',
    component: Home,
  },
  {
    screen_name: 'AboutMe',
    component: About,
  },
  {
    screen_name: 'Resume',
    component: Resume,
  },
  {
    screen_name: 'Blogs',
    component: Blogs,
  },
  {
    screen_name: 'ContactMe',
    component: Contact,
  },
];

export const GET_SCREEN_INDEX = (screen_name) =>
  TOTAL_PAGES.findIndex((item) => item.screen_name === screen_name);

export const titleCase = (str) =>
  str.replace(/([A-Z]+)*([A-Z][a-z])/g, '$1 $2');
