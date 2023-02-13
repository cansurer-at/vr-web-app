import React, { useState } from "react";
import Button from "./Button";

const RegisterForm = ({ showRegisterForm, setShowRegisterForm }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [err, setErr] = useState("");

  const { email, password, passwordConfirm } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})/;

    if (!emailRegex.test(email)) {
      setErr("Invalid email format!");
      return;
    } else if (!passwordRegex.test(password)) {
      setErr(
        "The password must contain at least one lowercase letter, one uppercase letter, one digit, one special character (!@#$%^&*) and the length must be between 8 and 20 characters inclusive."
      );
      return;
    } else if (password !== passwordConfirm) {
      setErr("The passwords do not match.");
      return;
    }

    console.log(formData);
    setShowRegisterForm(!showRegisterForm);
    alert("Successfully registered, please login");
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-10 flex justify-center bg-gray-900 bg-opacity-75">
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <div className="px-4 pt-5 pb-4 overflow-hidden transition-all transform bg-white rounded-lg shadow-xl sm:max-w-lg sm:w-full">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="flex justify-center md:space-x-96 lg:space-x-30">
              <h2 className="mb-4 text-lg font-medium">Register</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
                onClick={() => setShowRegisterForm(!showRegisterForm)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <label
              className="block mb-2 font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              autoComplete="username"
              maxLength={100}
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              maxLength={20}
              name="password"
              value={password}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 font-medium text-gray-700"
              htmlFor="passwordConfirm"
            >
              Confirm Password
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline"
              id="passwordConfirm"
              type="password"
              name="passwordConfirm"
              maxLength={20}
              value={passwordConfirm}
              onChange={handleChange}
              autoComplete="new-password"
              required
            />
          </div>
          {err && (
            <div>
              <span className="text-red-500">{err}</span>
            </div>
          )}

          <div className="flex justify-center w-full p-4 mt-6">
            <Button buttonTitle="Register" type="submit"></Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
