import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="col-md-2 text-white min-vh-100 p-3"
      style={{ background: "#1e293b" }}
    >
      <h4 className="mb-4 text-center">IMS</h4>

      <ul className="nav flex-column">

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/">
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/products">
            <i className="bi bi-box-seam me-2"></i>
            Products
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/categories">
            <i className="bi bi-tags me-2"></i>
            Categories
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/reports">
            <i className="bi bi-graph-up me-2"></i>
            Reports
          </Link>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;