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

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createBrowserRouter([
  ...adminRoutes,
  ...authRoutes,
  ...detailRoutes,
  ...searchRoutes,
  ...mainRoutes,
  ...devRoutes,
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <div style={{ fontSize: "16px" }}>
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
