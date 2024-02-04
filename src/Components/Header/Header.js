import "./Header.css";
import { FaUser, FaAdjust } from 'react-icons/fa';

import Logo from "../../Assets/Images/Food_Fiesta_Logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div className="center">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
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
