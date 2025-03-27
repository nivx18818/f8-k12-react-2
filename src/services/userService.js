import httpRequest from "@/utils/httpRequest";

export const getAll = async () => {
  const res = await httpRequest.get("/users");
  return res;
};

export default {
  getAll,
};
