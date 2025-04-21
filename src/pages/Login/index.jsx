import config from "@/config";
import { getCurrentUser } from "@/features/auth/authSlice";
import httpRequest from "@/utils/httpRequest";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

function Login() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const [email, setEmail] = useState("vinh@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [hasError, setHasError] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formValues = { email, password };

    try {
      const res = await httpRequest.post("/auth/login", formValues);
      httpRequest.setToken(res.data.access_token);
      dispatch(getCurrentUser());
      navigate(params.get("continue") || config.routes.home);
    } catch (error) {
      console.error(error);
      setHasError(true);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setHasError(false);
          }}
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setHasError(false);
          }}
        />
        <br />
        {hasError && <p>Email hoặc mật khẩu không hợp lệ.</p>}
        <button>Login</button>
      </form>
      <Link to="/register">Register</Link>
    </div>
  );
}

export default Login;
