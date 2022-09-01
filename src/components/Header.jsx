import Image from "../assets/images/header/illustration-working.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="content-wrapper">
          <div className="copy">
            <h1> More than just shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <a href="#"> Get Started</a>
          </div>
          <div className="image">
            <img src={Image} alt="Illustration working" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
