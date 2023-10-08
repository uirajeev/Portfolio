import { Subject } from 'rxjs';
import { TOTAL_PAGES } from '../utilities/common';

export default class ScrollService {
  static scrollHandler = new ScrollService();

  static currentScreenBroadCaster = new Subject();
  static currentScreenFadeIn = new Subject();

  constructor() {
    window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);
  }

  scrollToContact = () => {
    let contactMeScreen = document.getElementById('ContactMe');
    if (!contactMeScreen) return;
    contactMeScreen.scrollIntoView({ behavior: 'smooth' });
  };

  scrollToHome = () => {
    let homeScreen = document.getElementById('Home');
    if (!homeScreen) return;
    homeScreen.scrollIntoView({ behavior: 'smooth' });
  };

  isElementInView = (elm, type) => {
    const ract = elm.getBoundingClientRect();
    const elmTop = ract.top;
    const elmBottom = ract.bottom;

    let partial = elmTop < window.innerHeight && elmBottom >= 0;
    let complete = elmTop >= 0 && elmBottom <= window.innerHeight;

    switch (type) {
      case 'partial':
        return partial;
      case 'complete':
        return complete;
      default:
        return false;
    }
  };

  checkCurrentScreenUnderViewport = (event) => {
    if (!event || Object.keys(event).length < 1) return;

    for (let screen of TOTAL_PAGES) {
      let screenFromDOM = document.getElementById(screen.screen_name);
      if (!screenFromDOM) continue;

      let fullyVisible = this.isElementInView(screenFromDOM, 'complete');
      let partiallyVisible = this.isElementInView(screenFromDOM, 'partial');

      if (fullyVisible || partiallyVisible) {
        if (partiallyVisible && !screen.alreadyRendered) {
          //BROADCAST FADE IN EFFECT
          ScrollService.currentScreenFadeIn.next({
            fadeInScreen: screen.screen_name,
          });
          screen['alreadyRendered'] = true;
          break;
        }

        if (fullyVisible) {
          // BROADCAST SCREEN NAME
          ScrollService.currentScreenBroadCaster.next({
            screenInView: screen.screen_name,
          });
          break;
        }
      }
    }
  };
}
