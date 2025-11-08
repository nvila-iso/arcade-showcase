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
      navigate("/admin-panel");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center px-5 py-10 overflow-hidden">
        <div className="w-80 h-100 border-3 border-white rounded bg-white/20 backdrop-blur-sm p-5 flex flex-col gap-5 items-center shadow-md">
          <img src={logo} alt="Lost Ark X Logo" />
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-center">Admin Login</p>
            <form action={handleLogin} className="flex flex-col gap-3">
              <input
                required
                name="username"
                type="text"
                className="border-3 border-purple-500 rounded px-3 py-1 bg-purple-200 shadow-[4px_3px_0px_rgb(226_77_93_/_1)]"
                placeholder="username"
              />
              <input
                required
                name="password"
                type="text"
                className="border-3 border-purple-500 rounded px-3 py-1 bg-purple-200 shadow-[4px_3px_0px_rgb(226_77_93_/_1)]"
                placeholder="password"
              />
              <button className="bg-emerald-500 py-1 text-white/80 font-semibold shadow-[0px_2px_0px_rgb(173_70_255_/_1)] hover:shadow-[0px_3px_10px_rgb(173_70_255_/_1)] transition">
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
