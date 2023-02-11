import React, { useState } from "react";
import Button from "./Button";

const RegisterForm = (
  {showRegisterForm,
  setShowRegisterForm,
  showLoginForm,
  setShowLoginForm}
) => {
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
    if (password !== passwordConfirm) {
      setErr("Passwords do not match!");
    } else {
      console.log(formData);
      setShowRegisterForm(!showRegisterForm);
      alert('Successfully registered please login')
    }
  };

  return (
    <div className="fixed  flex justify-center top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-75">
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <div className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="flex justify-center md:space-x-96 lg:space-x-30">
              <h2 className="text-lg font-medium mb-4">Register</h2>
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
              className="block font-medium mb-2 text-gray-700"
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
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-medium mb-2 text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-medium mb-2 text-gray-700"
              htmlFor="passwordConfirm"
            >
              Confirm Password
            </label>
            <input
              className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline"
              id="passwordConfirm"
              type="password"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={handleChange}
              required
            />
          </div>
          {err && (
            <div>
              <span className="text-red-500">{err}</span>
            </div>
          )}

          <div className="mt-6 w-full flex justify-center p-4">
            <Button buttonTitle="Register" type="submit"></Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
  
  
  