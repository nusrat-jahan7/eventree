import { Link } from "react-router-dom";
import logo from "/public/logo.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

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
    <nav className="drop-shadow-lg">
      <div className="navbar container py-5 mx-auto font-poppins">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <div className="">
            <img className="w-32" src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-10 px-1 font-medium text-lg text-cyan-700">
            {links}
          </ul>
        </div>
        <div className="navbar-end ">
          {user?.email ? (
            <button
              onClick={() => logOut()}
              className="bg-cyan-700 btn font-semibold border-0 hover:bg-cyan-900 text-white"
            >
              Log out
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-cyan-700 btn font-semibold border-0 hover:bg-cyan-900 text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
