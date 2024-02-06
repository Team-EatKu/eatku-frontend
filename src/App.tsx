import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { devRoutes, mainRoutes } from "@routes";

const router = createBrowserRouter([...mainRoutes, ...devRoutes]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
