import { RouteType } from "@typings/routes/routeType.ts";
import Main from "@pages/main/pages/main";

export const mainRoutes: RouteType[] = [
  {
    path: "/",
    element: <Main />,
  },
];
