import { Link } from "react-router-dom";
import './Navigation.scss';
const Navigation = () => {
  return (
    <div>
      <nav className="navigation-menu">
        <div className="navigation-menu__container">
        <div>
            <Link to="/" className="link">
              Главная
            </Link>
          </div>
          <div>
            <Link to="/active_sprint" className="link">
              Активные спринты
            </Link>
          </div>
          <div>
            <Link to="/admin_panel" className="link">
            Панель администратора
            </Link>
          </div>
          </div>
      </nav>
    </div>
  );
};

export default Navigation;
