import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserContext from "../context/UserContex";

const LoginPage = () => {
  const { login } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      const loginSuccess = login(email, password);

      if (loginSuccess) {
        navigate("/dashboard");
      } else {
        alert("Incorrect credentials. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-md rounded-md">
        <h1 className="text-3xl text-black font-extrabold text-center">
          Login
        </h1>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username:
            </label>
            <input
              id="username"
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              id="password"
              type="password"
              className="mt-1 p-2 w-full border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              type="button"
              className="w-full p-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={handleLogin}
            >
              Login
            </button>
            <p className="text-center py-5 text-black">
              New Here?{" "}
              <Link to="/signup" className="text-blue-500">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
