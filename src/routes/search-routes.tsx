import { RouteType } from "@typings/routes/routeType.ts";
import Search from "@pages/search/pages/search";

export const searchRoutes: RouteType[] = [
  {
    path: "/search",
    element: <Search />,
  },
];
