import StraatNaamBord from "../components/StraatNaamBord";
import "./StraatNamenGrid.css";

const StraatNamenGrid = (props) => {
  return (
    <div className="container">
      <div className="grid-container">
        {props.straatNamen.map((straatname) => (
          <div className="card grid-item">
            <StraatNaamBord>{straatname}</StraatNaamBord>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StraatNamenGrid;
