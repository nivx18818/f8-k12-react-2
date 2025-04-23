import httpRequest from "@/utils/httpRequest";

export const getAll = async () => httpRequest.get("/users");
export const getUserById = async (id) => httpRequest.get(`/users/${id}`);
export const getUserByUsername = async (username) =>
  httpRequest.get(`/users/${username}`);

export default {
  getAll,
  getUserById,
  getUserByUsername,
};
