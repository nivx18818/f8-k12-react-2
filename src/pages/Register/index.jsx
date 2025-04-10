import { Link, useNavigate } from "react-router-dom";

import config from "@/config";
import registerSchema from "@/schema/registerSchema";
import authService from "@/services/authService";
import httpRequest from "@/utils/httpRequest";

import { Form, TextInput } from "@/components/Form";

function Register() {
  const navigate = useNavigate();

  // const email = watch("email");

  // useEffect(() => {
  //   if (!email) return;

  //   clearTimeout(timerId);
  //   timerId = setTimeout(async () => {
  //     if (errors.email) return;

  //     const alreadyExist = await authService.checkEmail(email);

  //     if (alreadyExist) {
  //       setError("email", { message: "Email already exists" });
  //     }
  //   }, 500);
  // });

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
      <Form
        schema={registerSchema}
        formProps={{ mode: "onChange" }}
        onSubmit={onSubmit}
      >
        <TextInput name="firstName" placeholder="First name..." />
        <TextInput name="lastName" placeholder="Last name..." />
        <TextInput name="email" placeholder="Email..." />
        <TextInput name="password" placeholder="Password..." />
        <TextInput
          name="password_confirmation"
          placeholder="Password confirmation..."
        />
        <button>Register</button>
      </Form>

      <Link to="/login">Login</Link>
    </div>
  );
}

export default Register;
