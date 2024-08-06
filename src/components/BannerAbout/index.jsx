import bannerAbout from "../../assets/bannerAbout.png";
import bannerAboutMobile from "../../assets/bannerAboutMobile.png";
import "./index.scss";

const BannerAbout = () => {
  
  return (
    <div className="bannerAbout">
      <picture>
        <source media="(max-width: 768px)" srcSet={bannerAboutMobile} />
        <img src={bannerAbout} alt="montagnes enneigées" />
      </picture>
    </div>
  );
};

export default BannerAbout;
