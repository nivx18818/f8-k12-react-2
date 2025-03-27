import config from "@/config";

import NoHeaderLayout from "@/layouts/NoHeaderLayout";
import NoFooterLayout from "@/layouts/NoFooterLayout";

import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import ProductDetail from "@/pages/ProductDetail";
import Products from "@/pages/Products";
import Users from "@/pages/Users";
import Login from "@/pages/Login";

const routes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.products,
    component: Products,
    layout: NoFooterLayout,
  },
  {
    path: config.routes.productDetail,
    component: ProductDetail,
    layout: null,
  },
  {
    path: config.routes.login,
    component: Login,
  },
  {
    path: config.routes.users,
    component: Users,
    protected: true,
  },
  {
    path: config.routes.notFound,
    component: NotFound,
    layout: NoHeaderLayout,
  },
];

export default routes;
