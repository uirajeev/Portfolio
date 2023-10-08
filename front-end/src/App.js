// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import './App.scss';
import Pages from './Pages';

function App() {
  return (
    <div className="App">
      <Pages />
    </div>
  );
}

export default App;

library.add(fab, fas, far);
