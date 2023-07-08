import bannerAbout from "../assets/bannerAbout.png";
import bannerAboutMobile from "../assets/bannerAboutMobile.png";
import "../styles/BannerAbout.scss";

const BannerAbout = () => {
  return (
    <div className="bannerAbout">
      <picture>
        <source media="(max-width: 600px)" srcSet={bannerAboutMobile} />
        <img src={bannerAbout} alt="montagnes enneigées" />
      </picture>
    </div>
  );
};

export default BannerAbout;
