import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { SidebarDemo } from "./page/Dashboard";
import DashboardContent from "./page/DashboardContent";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SidebarDemo />}>
      <Route index element={<DashboardContent />} />
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
