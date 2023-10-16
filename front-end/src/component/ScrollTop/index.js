import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollService from '../../services/scrollService';

import './style.scss';

const ScrollTop = () => {
  return (
    <div
      className="scroll-container"
      onClick={() => ScrollService.scrollHandler.scrollToHome()}
    >
      <button className="btn-scroll">
        <FontAwesomeIcon icon="fa fa-arrow-up" />
      </button>
    </div>
  );
};

export default ScrollTop;
