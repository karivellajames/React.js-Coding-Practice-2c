const Box = (props) => {
  const { boxClass, boxText } = props;
  return (
    <div className={boxClass}>
      <p className="box-text">{boxText}</p>
    </div>
  );
};

const element = (
  <div className="boxes-bg-container">
    <h1 className="main-heading">Boxes</h1>
    <div className="boxes-container">
      <Box boxClass="box-small" boxText="Small" />
      <Box boxClass="box-medium" boxText="Medium" />
      <Box boxClass="box-large" boxText="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
