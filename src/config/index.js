const config = {
  routes: {
    home: "/",
    products: "/products",
    productDetail: "/products/:slug",
    login: "/login",
    register: "/register",
    users: "/users",
    profile: "/p/:username",
    notFound: "*",
  },
};

export default config;
