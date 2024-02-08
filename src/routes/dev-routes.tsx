import { RouteType } from "@typings/routes/routeType.ts";
import Sample from "@pages/dev/page/sample";

export const devRoutes: RouteType[] = [
  {
    path: "dev/sample",
    element: <Sample />,
  },
  {
    path: "dev/card",
    element: <>dev</>,
  },
];
