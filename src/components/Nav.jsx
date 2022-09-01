import Logo from "../assets/images/nav/logo.svg";

const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div className="content-wrapper">
          <div className="logo">
            <img src={Logo} alt="Shortly Logo" />
          </div>
          <div className="nav-wrapper">
            <div className="nav-primary">
              <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
              </ul>
            </div>
            <div className="nav-secondary">
              <ul>
                <li>Login</li>
                <li>
                  <a href="#" className="btn-sign-up">
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
