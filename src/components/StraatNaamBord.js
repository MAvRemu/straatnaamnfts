const StraatNaamBord = (props) => {
  return (
      <div className="straatnaam-outer">
        <div className="straatnaam-sm">{props.children}</div>
      </div>
  );
};

export default StraatNaamBord;
