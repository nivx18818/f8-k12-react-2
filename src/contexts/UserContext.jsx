import authService from "@/services/authService";
import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      setIsLoading(true);

      const data = await authService.me();

      if (data.status === "success") {
        setCurrentUser(data.user);
      } else {
        console.error(data?.message);
      }

      setIsLoading(false);
    };
    fetchCurrentUser();
  }, []);

  const value = {
    currentUser,
    isLoading,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
