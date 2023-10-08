import { useContext } from "react";
import logo from "/public/logo.png";
import { AuthContext } from "../context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { signUp } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signUp(email, password)
      .then((result) => {
        console.log(result.user)
        toast.success('Account created succesfully!')
        setTimeout(() => {
          navigate (from, { replace : true });
        },1500)
      })
      .catch((error) => console.log(error));

    form.reset();
  };

  return (
    <div className="bg-gray-100 py-20 font-poppins">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-7 sm:h-8" src={logo} alt="" />
          </div>

          <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
            Register
          </h3>

          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
            Create a new account
          </p>

          <form onSubmit={handleRegister}>
            <div className="w-full mt-4">
              <h3 className=" text-gray-600">Email</h3>
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="email"
                id="email"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="w-full mt-4">
            <h3 className="text-gray-600 ">Password</h3>
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                name="password"
                id="password"
                placeholder="*******"
              />
            </div>

            <div className="flex items-center justify-end mt-4">
            <button type="submit" className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-cyan-700 rounded-lg hover:bg-cyan-900 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
            Register
          </button>
            </div>
          </form>
        <p className="mt-4 text-sm font-light text-center text-gray-400">
        {" "}
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-cyan-700 dark:text-gray-200 hover:underline"
        >
          Login
        </Link>
      </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
