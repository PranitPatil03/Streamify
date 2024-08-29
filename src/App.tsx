import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { SidebarDemo } from "./components/Dashboard";
import DashboardContent from "./components/DashboardContent";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<SidebarDemo />}>
        <Route index element={<DashboardContent />} />
        <Route path="*" element={<h1>404: Page not found</h1>} />
      </Route>
    )
  );

  return (
    <div className="w-full h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
