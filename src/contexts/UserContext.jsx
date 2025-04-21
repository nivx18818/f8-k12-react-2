import { getCurrentUser } from "@/features/auth/authSlice";
import { createContext, useEffect } from "react";
import { useDispatch } from "react-redux";

const UserContext = createContext();

function UserProvider() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return null;
}

export { UserContext, UserProvider };
