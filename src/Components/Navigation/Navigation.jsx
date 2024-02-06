import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav className="navigation-menu">
        <div className="navigation-menu__container">
        <div>
            <Link to="/" className="link">
              Dashboard
            </Link>
          </div>
          <div>
            <Link to="/active_sprint" className="link">
              Active Sprint
            </Link>
          </div>
          <div>
            <Link to="/admin_panel" className="link">
              Admin Panel
            </Link>
          </div>
          </div>
      </nav>
    </div>
  );
};

export default Navigation;
