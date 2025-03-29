import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import config from "@/config";
import httpRequest from "@/utils/httpRequest";
import registerSchema from "@/schema/registerSchema";
import authService from "@/services/authService";
import { useEffect } from "react";
import Input from "@/components/Input";

let timerId = null;

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    // clearErrors,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const email = watch("email");

  useEffect(() => {
    if (!email) return;

    clearTimeout(timerId);
    timerId = setTimeout(async () => {
      if (errors.email) return;

      const alreadyExist = await authService.checkEmail(email);

      if (alreadyExist) {
        setError("email", { message: "Email already exists" });
      }
    }, 500);
  });

  const onSubmit = async (userInfo) => {
    console.log(userInfo);
    const data = await authService.register(userInfo);

    if (data.status === "success") {
      httpRequest.setToken(data.access_token);
      navigate(config.routes.home);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="firstName"
          register={register}
          errorMessage={errors.firstName?.message}
          placeholder="First name..."
        />

        <Input
          name="lastName"
          register={register}
          errorMessage={errors.lastName?.message}
          placeholder="Last name..."
        />

        <Input
          name="email"
          register={register}
          errorMessage={errors.email?.message}
          placeholder="Email..."
        />

        <Input
          name="password"
          register={register}
          errorMessage={errors.password?.message}
          placeholder="Password..."
        />

        <Input
          name="password_confirmation"
          register={register}
          errorMessage={errors.password_confirmation?.message}
          placeholder="Password confirmation..."
        />

        <button>Register</button>
      </form>

      <Link to="/login">Login</Link>
    </div>
  );
}

export default Register;
