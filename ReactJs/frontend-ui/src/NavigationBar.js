import "./App.css";
import { Link } from "react-router-dom";
// import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
function Navigator() {

  return (
    <div className="Navigator">
      <nav>
        <h2> Prediction Bank</h2>
        <ul className="nvlink">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/batchProcessing">
            <li>Batch Processing</li>
          </Link>
          <Link to="/">
            <li>Home Loan</li>
          </Link>
          <Link to="/personal">
            <li>Personal Loan</li>
          </Link>
          <Link to="/vehicle">
            <li>Vehicle Loan</li>
          </Link>
          {/* <select>
            <option>Home Loan</option>
            <option><Link to="/vehical">Vehical Loan</Link></option>
            <option>Personal Loan</option>
          </select> */}
        </ul>
      </nav>
    </div>
  );
}

export default Navigator;
