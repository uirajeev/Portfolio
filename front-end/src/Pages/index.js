import { TOTAL_PAGES } from '../utilities/common';
const Pages = () => {
  return (
    <div className="portfolio-container">
      {TOTAL_PAGES.map((screen) =>
        screen.component ? (
          <screen.component
            screenName={screen.screen_name}
            key={screen.screen_name}
            id={screen.screen_name}
          />
        ) : (
          <div key={screen.screen_name}></div>
        )
      )}
    </div>
  );
};

export default Pages;
