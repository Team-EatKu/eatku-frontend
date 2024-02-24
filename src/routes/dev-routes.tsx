import { RouteType } from "@typings/routes/routeType.ts";
import Sample from "@pages/dev/page/sample";
import Detail from "@pages/dev/page/detail";
import Card from "@pages/dev/page/card";
import Main from "@pages/dev/page/main";

export const devRoutes: RouteType[] = [
  {
    path: "dev/sample",
    element: <Sample />,
  },
  {
    path: "dev/detail",
    element: <Detail />,
  },
  {
    path: "dev/card",
    element: <Card />,
  },
  {
    path: "dev/main",
    element: <Main />,
  },
];
