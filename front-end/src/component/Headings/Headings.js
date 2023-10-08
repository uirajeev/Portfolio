import './style.scss';

const Headings = ({ title, subtitle }) => {
  return (
    <div className="heading-container">
      <div className="heading-title">
        <span>{title}</span>
      </div>
      {subtitle ? (
        <div className="heading-subtitle">
          <span>{subtitle}</span>
        </div>
      ) : (
        ''
      )}
      <div className="heading-seperator">
        <div className="heading-seperator-line">
          <div className="heading-seperator-line-blob">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headings;
