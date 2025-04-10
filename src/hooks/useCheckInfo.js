import { useEffect } from "react";
import authService from "@/services/authService";
import useDebounce from "./useDebounce";

const useCheckInfo = (type, formControl) => {
  const {
    watch,
    formState: { errors },
    setError,
  } = formControl;
  const value = watch(type);
  const debouncedEmail = useDebounce(value, 500);

  useEffect(() => {
    if (!debouncedEmail || errors[type]) return;

    const checkInfo = async () => {
      const alreadyExist = await authService.checkInfo(
        type,
        debouncedEmail
      );

      if (alreadyExist) {
        const name = type[0].toUpperCase() + type.slice(1);
        setError(type, { message: `${name} already exists` });
      }
    };

    checkInfo();
  }, [type, debouncedEmail, errors, setError]);
};

export default useCheckInfo;
