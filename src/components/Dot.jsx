const Dot = ({ mode }) => {
  return (
    <div className={`dot ${mode ? 'dot--' + mode : ''}`}>
      <div className="dot__inner"></div>
    </div>
  );
};

export default Dot;
