import config from "@/config";
import { getCurrentUser } from "@/features/auth/authSlice";
import authService from "@/services/authService";
import httpRequest from "@/utils/httpRequest";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";

function Login() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const [email, setEmail] = useState("vinh@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [hasError, setHasError] = useState(false);

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  if (currentUser) {
    return <Navigate to={params.get("continue") || config.routes.home} />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formValues = { email, password };

    try {
      const data = await authService.login(formValues);
      httpRequest.setToken(data.access_token, data.refresh_token);
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
