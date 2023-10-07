import { Link } from "react-router-dom";
import logo from "/public/logo.png";

const Navbar = () => {
  const links = (
    <>
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </>
  );

  return (
    <nav className="shadow-lg bg-blue-100">
      <div className="navbar bg-blue-100 container py-5 mx-auto font-poppins">
        <div className="navbar-start">
          <div className="dropdown">
            <div className="">
              <img className="w-32" src={logo} alt="" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-10 px-1 font-medium text-lg text-cyan-700">
            {links}
          </ul>
        </div>
        <div className="navbar-end ">
          <Link
            to="/login"
            className="bg-cyan-700 btn font-semibold border-0 hover:bg-cyan-900 text-white"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
