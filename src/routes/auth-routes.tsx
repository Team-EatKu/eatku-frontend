import { RouteType } from "@typings/routes/routeType.ts";
import Login from "@pages/auth/pages/login";

export const authRoutes: RouteType[] = [
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/signup",
    element: <></>,
  },
];
