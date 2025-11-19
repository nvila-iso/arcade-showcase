import { useAuth } from "../../context/AuthContext.jsx";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import logo from "../../assets/lostark-logo.png";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState(null);

  const handleLogin = async (FormData) => {
    const username = FormData.get("username");
    const password = FormData.get("password");
    const credentials = {
      username,
      password,
    };

    try {
      await login(credentials);
      navigate("admin-panel");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center px-5 py-10 overflow-hidden">
        <div className="w-80 h-100 border-3 border-black/40 rounded bg-black/20 backdrop-blur-sm p-5 flex flex-col gap-5 items-center shadow-md">
          <img src={logo} alt="Lost Ark X Logo" />
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-center">Admin Login</p>
            <form action={handleLogin} className="mt-1 flex flex-col gap-3">
              <input
                required
                name="username"
                type="text"
                className="w-full rounded-full px-3 py-2 bg-white hover:bg-white hover:shadow-[0px_6px_0px_rgb(212_212_216_/_1)] focus:shadow-[0px_6px_0px_rgb(212_212_216_/_1)] focus:bg-white transition"
                placeholder="username"
              />
              <input
                required
                name="password"
                type="password"
                className="w-full rounded-full px-3 py-2 bg-white hover:bg-white hover:shadow-[0px_6px_0px_rgb(212_212_216_/_1)] focus:shadow-[0px_6px_0px_rgb(212_212_216_/_1)] focus:bg-white transition"
                placeholder="password"
              />
              <button className="mt-2 mb-1 w-30 mx-auto bg-emerald-200 px-2 py-1 shadow-[0px_6px_0px_rgb(0_212_146_/_1)] hover:shadow-[0px_0px_0px_rgb(0_212_146_/_1)] hover:bg-emerald-300 transition rounded">
                LOGIN
              </button>
            </form>
            {error && <output>{error}</output>}
            <p className="text-center underline italic">reset password</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
