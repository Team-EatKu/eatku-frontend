import { RouteType } from "@typings/routes/routeType.ts";
import Sample from "@pages/dev/page/sample";
import Detail from "@pages/dev/page/detail";

export const devRoutes: RouteType[] = [
  {
    path: "dev/sample",
    element: <Sample />,
  },
  {
    path: "dev/detail",
    element: <Detail />,
  },
];
