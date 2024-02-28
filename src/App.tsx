import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  adminRoutes,
  authRoutes,
  detailRoutes,
  searchRoutes,
  mainRoutes,
  devRoutes,
} from "@routes";

const router = createBrowserRouter([
  ...adminRoutes,
  ...authRoutes,
  ...detailRoutes,
  ...searchRoutes,
  ...mainRoutes,
  ...devRoutes,
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
