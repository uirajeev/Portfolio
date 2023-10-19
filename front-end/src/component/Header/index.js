import { useState, useEffect } from 'react';
import {
  TOTAL_PAGES,
  GET_SCREEN_INDEX,
  titleCase,
} from '../../utilities/common';
import ScrollService from '../../services/scrollService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';

const Header = () => {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;
    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };

  let currentScreenSubscription =
    ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen);

  const getHeaderOptions = () =>
    TOTAL_PAGES.map((screen, i) => (
      <div
        key={screen.screen_name}
        className={getHeaderOptionsClass(i)}
        onClick={() => switchScreen(i, screen)}
      >
        <span>{titleCase(screen.screen_name)}</span>
      </div>
    ));

  const getHeaderOptionsClass = (index) => {
    let clases = 'header-option';
    if (index < TOTAL_PAGES.length - 1) {
      clases += ' header-option-seperator';
    }
    if (index === selectedScreen) {
      clases += ' selected-header-option';
    }

    return clases;
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: 'smooth' });
    setSelectedScreen(index);
    setShowHeaderOptions(false);
  };

  useEffect(() => {
    return () => {
      currentScreenSubscription.unsubscribe();
    };
  }, [currentScreenSubscription]);

  return (
    <div className="header-container">
      <div className="header-parent">
        <div
          className="header-hamburger"
          onClick={() => setShowHeaderOptions(!showHeaderOptions)}
        >
          <FontAwesomeIcon
            className="header-hamburger-bars"
            icon="fa-solid fa-bars"
          />
        </div>
        <div className="header-logo">
          <span>R SINGH</span>
        </div>
        <div
          className={
            showHeaderOptions
              ? 'header-options show-hamburger-options'
              : 'header-options'
          }
        >
          <div
            className="header-menu-close"
            onClick={() => setShowHeaderOptions(!showHeaderOptions)}
          >
            <FontAwesomeIcon
              className="header-hamburger-bars"
              icon="fa-regular fa-circle-xmark"
            />
          </div>
          {getHeaderOptions()}
        </div>
      </div>
    </div>
  );
};

export default Header;
