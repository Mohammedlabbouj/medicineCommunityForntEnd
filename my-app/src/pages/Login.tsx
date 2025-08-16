import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setEmail } from "../features/email/emailSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const email = useAppSelector((state) => state.email.email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    try {
      const response = await fetch("http://localhost:3000/api/v1/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Login failed");
        return;
      }

      console.log("Login successful:", data);
      console.log("Email from state:", email);
      navigate("/home");
      // Redirect, set auth, etc.
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-blue-300 ">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Email address"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Password"
            required
          />
          <div className="flex items-center justify-between flex-wrap">
            <label
              htmlFor="remember-me"
              className="text-sm text-gray-900 cursor-pointer"
            >
              <input
                type="checkbox"
                id="remember-me"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="mr-2"
              />
              Remember me
            </label>
            <a
              href="#"
              className="text-sm text-blue-500 hover:underline mb-0.5"
            >
              Forgot password?
            </a>
            <p className="text-gray-900 mt-4">
              Don't have an account?{" "}
              <Link
                to={"/createAcount"}
                className="text-sm text-blue-500 hover:underline mt-4"
              >
                Signup
              </Link>
            </p>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            onClick={() => dispatch(setEmail(formData.email))}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
