import footer from "../../assets/logo-footer.png";
import "./index.scss";

const Footer = () => {
  return (
    <div className="footer">
      <img src={footer} alt="logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
