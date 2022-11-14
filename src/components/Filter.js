import { useState } from "react";
import "./Filter.css"

const Filter = (props) => {
  const filterHandler = (event) => {
    if (event.target.textContent === "Available") {
      props.filter("available");
      setFilterAll("available")
    } else if (event.target.textContent === "Sold") {
      props.filter("sold");
      setFilterAll("sold")
    } else if (event.target.textContent === "Your Cart") {
      props.filter("cart");
      setFilterAll("cart")
    } else {
      props.filter("all");
      setFilterAll("all")
    }
  };

  const [filterAll, setFilterAll] = useState("all");

  return (
    <div className="filter">
      <button onClick={filterHandler} className={`filter-item '+ ${ filterAll === "all" ? ' main-color': ' '}`}>All</button>
      <button onClick={filterHandler} className={`filter-item '+ ${ filterAll === "available" ? ' main-color': ' '}`}>Available</button>
      <button onClick={filterHandler} className={`filter-item '+ ${ filterAll === "cart" ? ' main-color': ' '}`}>Your Cart</button>
      <button onClick={filterHandler} className={`filter-item '+ ${ filterAll === "sold" ? ' main-color': ' '}`}>Sold</button>
    </div>
  );
};

export default Filter;
