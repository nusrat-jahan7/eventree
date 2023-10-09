import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "#706e75" : "#067c8a",
          textDecorationLine: isActive ? "underline" : "none",
        })}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "#706e75" : "#067c8a",
          textDecorationLine: isActive ? "underline" : "none",
        })}
        to="/services"
      >
        Services
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "#706e75" : "#067c8a",
          textDecorationLine: isActive ? "underline" : "none",
        })}
        to="/gallery"
      >
        Gallery
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "#706e75" : "#067c8a",
          textDecorationLine: isActive ? "underline" : "none",
        })}
        to="/contact"
      >
        Contact
      </NavLink>
    </>
  );

  console.log(user);

  return (
    <nav className="drop-shadow-lg relative">
      <div className="navbar container py-5 mx-auto">
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
              className="menu menu-md text-lg dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-36"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="">
            <img className="w-32" src="/logo.png" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-10 px-1 font-medium text-lg text-cyan-700">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="flex items-center gap-2">
              <p className="justify-between font-semibold">
                {user?.displayName?.split(" ")[0] ?? "User"}
              </p>
              <div className="w-10 rounded-full">
                <img
                  className="rounded-full"
                  src={user?.photoURL ?? "user.jpg"}
                />
              </div>
              <button
                onClick={() => logOut()}
                className="hidden sm:block bg-cyan-700 btn font-semibold border-0 hover:bg-cyan-900 text-white"
              >
                Logout
              </button>
              <button
                onClick={() => logOut()}
                className="bg-cyan-700 rounded-full p-2 sm:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
              </button>
            </div>
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
