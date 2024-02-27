import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  adminRoutes,
  authRoutes,
  detailRoutes,
  listRoutes,
  mainRoutes,
  devRoutes,
} from "@routes";

const router = createBrowserRouter([
  ...adminRoutes,
  ...authRoutes,
  ...detailRoutes,
  ...listRoutes,
  ...mainRoutes,
  ...devRoutes,
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
