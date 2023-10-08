import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "/public/logo.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { formatFirebaseAuthErrorMessage } from "../helpers";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { signIn, googleSignIn, loading } = useContext(AuthContext);

  const handleEmailLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login successfully!");
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1500);     
      })
      .catch((error) => {
        const errorMessage = formatFirebaseAuthErrorMessage(error);
        toast.error(errorMessage);
      });

    form.reset();
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("Login successfully!");
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1500); 
      })
      .catch((error) => {
        const errorMessage = formatFirebaseAuthErrorMessage(error);
        toast.error(errorMessage);
      });
  };

  return (
    <div className="bg-gray-100 py-20">
      <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white font-poppins rounded-lg shadow-lg">
        <div className="flex justify-center mx-auto">
          <img className="w-auto h-7 sm:h-8" src={logo} alt="" />
        </div>

        <div>
          <h1 className="text-2xl text-cyan-700 font-semibold text-center mt-4">
            LOGIN
          </h1>
        </div>

        <form onSubmit={handleEmailLogin} className="mt-6">
          <div>
            <label htmlFor="username" className="block text-sm text-gray-800">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm text-gray-800">
                Password
              </label>
            </div>

            <input
              type="password"
              name="password"
              id="password"
              placeholder="•••••••••"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button
            disabled={loading}
              type="submit"
              className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-cyan-700 rounded-lg hover:bg-cyan-900 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 disabled:bg-cyan-700/50"
            >
              {
                loading ? "Loading" : "Login"
              }
              
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b lg:w-1/5"></span>

          <a
            href="#"
            className="text-xs text-center text-gray-500 uppercase hover:underline"
          >
            or login with Social Media
          </a>

          <span className="w-1/5 border-b lg:w-1/5"></span>
        </div>

        <div className="flex items-center mt-6 -mx-2">
          <button
            onClick={() => handleGoogleSignIn()}
            type="submit"
            className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-cyan-700 rounded-lg hover:bg-cyan-900 focus:bg-cyan-700 focus:outline-none"
          >
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>

            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
          </button>
        </div>

        <p className="mt-8 text-sm font-light text-center text-gray-400">
          {" "}
          Do not have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-cyan-700 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
