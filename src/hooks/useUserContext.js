import { UserContext } from "@/contexts/UserContext";
import { useContext } from "react";

const useUserContext = () => {
  const userContext = useContext(UserContext);
  return userContext;
};

export default useUserContext;
