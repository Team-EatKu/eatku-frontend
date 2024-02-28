import { RouteType } from "@typings/routes/routeType.ts";
import Detail from "@pages/detail/pages/detail";

export const detailRoutes: RouteType[] = [
  {
    path: "/detail",
    element: <Detail />,
  },
];
