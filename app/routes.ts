import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/hello.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
