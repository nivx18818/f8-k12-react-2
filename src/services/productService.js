import httpRequest from "@/utils/httpRequest";

export const getAll = async (page = 1, perPage = 10) => {
  const res = await httpRequest.get("/products", {
    params: {
      page,
      per_page: perPage,
    },
  });

  return res;
};

export const getOne = async (slug) => {
  const res = await httpRequest.get(`/products/${slug}`);
  return res;
};

export default {
  getAll,
  getOne,
};
