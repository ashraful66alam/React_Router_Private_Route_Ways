import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Header({ children }) {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/dashboard">
          <li>Dashboard</li>
        </Link>
      </ul>
      {children}
    </div>
  );
}

export default Header;
