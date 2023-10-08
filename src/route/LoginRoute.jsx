/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  if (user) {
    navigate("/");
  }

  return children;
};

export default LoginRoute;
