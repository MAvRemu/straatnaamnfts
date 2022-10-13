import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";

const Filter = (props) => {
  const filterHandler = (event) => {
    if (event.target.textContent === "Available") {
      props.filter("available");
    }
    else {
      props.filter("all");
    }
  };

  return (
    <div>
      filter
      <button onClick={filterHandler}>All</button>
      <button onClick={filterHandler}>Available</button>
    </div>
  );
};

export default Filter;
