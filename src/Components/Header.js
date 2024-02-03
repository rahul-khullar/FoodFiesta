const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <img src="logo.png" alt="Logo" className="logo" />
      </div>
      <div className="center">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>
      <div className="right">
        <button>Login/Logout</button>
        <button>Toggle Theme</button>
      </div>
    </header>
  );
};
export default Header;
