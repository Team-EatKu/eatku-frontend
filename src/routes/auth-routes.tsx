import { RouteType } from "@typings/routes/routeType.ts";
import Login from "@pages/auth/pages/login";
import SingUp from "src/pages/auth/pages/sign-up";

export const authRoutes: RouteType[] = [
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/sign-up",
    element: <SingUp />,
  },
];
