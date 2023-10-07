import logo from "/public/logo.png";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-blue-100 font-poppins">
      <footer className="footer container mx-auto p-10 text-base-content">
        <nav className="text-cyan-700">
          <header className="footer-title">Services</header>
          <a className="link link-hover">Wedding</a>
          <a className="link link-hover">Anniversary</a>
          <a className="link link-hover">Birthday</a>
          <a className="link link-hover">Baby Shower</a>
        </nav>
        <nav className="text-cyan-700">
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="text-cyan-700">
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="space-y-5 container mx-auto py-4 border-t bg-blue-100 border-blue-300">
        <img className="w-2/12 mx-auto" src={logo} alt="" />
        <div className="gap-4">
        <p className="text-cyan-700 text-center pb-7">
          EvenTree Social Events Ltd. <br />
          Providing reliable social events since 2012
        </p>
        <div className="flex gap-3 pb-3 cursor-pointer text-cyan-800 text-lg justify-center items-center">
          <p>
            <FaTwitter></FaTwitter>
          </p>
          <p>
            <FaFacebookF></FaFacebookF>
          </p>
          <p>
            <FaYoutube></FaYoutube>
          </p>
        </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
