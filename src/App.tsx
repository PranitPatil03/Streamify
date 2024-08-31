import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { Settings } from "lucide-react";
import Performance from "./page/Performance";
import { SidebarDemo } from "./page/Dashboard";
import UserAnalytics from "./page/UserAnalytics";
import DashboardContent from "./page/DashboardContent";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SidebarDemo />}>
      <Route index element={<DashboardContent />} />
      <Route path="/user-analytics" element={<UserAnalytics />} />
      <Route path="/performance" element={<Performance />} />
      <Route path="/settings" element={<Settings />} />
    </Route>
  )
);

function App() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900 min-h-screen overflow-y-auto font-montserrat">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
