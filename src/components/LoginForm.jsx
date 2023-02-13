import React, { useState } from "react";
import Button from "./Button";
import RegisterForm from "./RegisterForm";
import { useDispatch } from "react-redux";
import { login } from "../pages/reducers/authSlice";
import { getUser } from "../service/getUser";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})/;

const LoginForm = ({ showLoginForm, setShowLoginForm }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }
    event.preventDefault();
    dispatch(login());
    getUser();
    setShowLoginForm(!showLoginForm);

    console.log("Login success");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be 8-20 characters, including at least one lowercase, one uppercase, one numeric, and one special character";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setErrors({});
  };

  if (showRegisterForm) {
    return (
      <RegisterForm
        showRegisterForm={showLoginForm}
        setShowRegisterForm={setShowRegisterForm}
        showLoginForm={showLoginForm}
        setShowLoginForm={setShowLoginForm}
      />
    );
  } else {
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 z-10 flex justify-center bg-gray-900 bg-opacity-75">
        <div className="max-w-xs p-8 m-auto bg-white rounded-lg shadow-xl">
          <form onSubmit={handleSubmit} className="mx-auto z-200">
            <div className="flex justify-center space-x-40">
              <h2 className="mb-4 text-lg font-medium">Sign In</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
                onClick={() => setShowLoginForm(!showLoginForm)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <input
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={100}
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  name="email"
                  placeholder="Email"
                  required
                  autoComplete="username"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium"
              >
                Password
              </label>
              <div className="relative">
                <input
                  value={formData.password}
                  onChange={handleChange}
                  maxLength={100}
                  type="password"
                  id="password"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  name="password"
                  placeholder="Password"
                  required
                  autoComplete="current-password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  className="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out form-checkbox"
                />
                <label
                  htmlFor="remember_me"
                  className="block ml-2 text-sm leading-5 text-gray-900"
                >
                  Remember me
                </label>
              </div>
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
            <div className="flex justify-center w-full p-4 mt-6">
              <Button buttonTitle="Log-in" />
              <Button
                buttonTitle="Register"
                onClick={() => setShowRegisterForm(true)}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default LoginForm;
