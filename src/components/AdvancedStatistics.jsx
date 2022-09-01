import IconBrand from "../assets/images/statistics/icon-brand-recognition.svg";
import IconDetailed from "../assets/images/statistics/icon-detailed-records.svg";
import IconFully from "../assets/images/statistics/icon-fully-customizable.svg";

import ShortenInput from "./ShortenInput";

const AdvancedStatistics = () => {
  return (
    <section className="statistics">
      <ShortenInput />
      <div className="container">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="cards">
          <div className="card">
            <span>
              <img src={IconBrand} alt="Icon Brand" />
            </span>
            <h3> Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="card">
            <span>
              <img src={IconDetailed} alt="Icon Brand" />
            </span>
            <h3> Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="card">
            <span>
              <img src={IconFully} alt="Icon Brand" />
            </span>
            <h3> Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedStatistics;
