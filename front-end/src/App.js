import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import './App.scss';
import Pages from './Pages';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Pages />
      <Footer />
    </div>
  );
}

export default App;

library.add(fab, fas, far);
