import banner from "../assets/banner.png";
import "../styles/Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} alt="falaise sur la mer" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default Banner;
