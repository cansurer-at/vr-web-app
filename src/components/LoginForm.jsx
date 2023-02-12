import React, { useState } from "react";
import Button from "./Button";
import RegisterForm from "./RegisterForm";
import { useDispatch } from "react-redux";
import { login } from "../pages/reducers/authSlice";
import { getUser } from "../service/getUser";

const LoginForm = ({ showLoginForm, setShowLoginForm }) => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login());
    alert("Sign in successful!");
    getUser();
    setShowLoginForm(!showLoginForm);
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
      <div className="fixed z-10  flex justify-center top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75">
        <div className="m-auto max-w-xs p-8  bg-white rounded-lg shadow-xl">
          <form onSubmit={handleSubmit} className="mx-auto z-200">
            <div className="flex justify-center space-x-40">
              <h2 className="text-lg font-medium mb-4">Sign In</h2>
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
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Email"
                  autoComplete="current-password"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Password"
                  autoComplete="on"
                />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm leading-5 text-gray-900"
                >
                  Remember me
                </label>
              </div>
            </div>
            <div className="mt-6 w-full flex justify-center p-4">
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
