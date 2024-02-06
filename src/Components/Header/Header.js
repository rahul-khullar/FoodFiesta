import "./Header.css";
import { FaUser, FaAdjust } from 'react-icons/fa';
import Logo from "../../Assets/Images/Food_Fiesta_Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div className="center">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
        </ul>
      </div>
      <div className="right">
        <FaUser className="icon" />
        <FaAdjust className="icon" />
      </div>
    </header>
  );
};
export default Header;
