import { useState } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import {
  IconAlpha,
  IconArrowLeft,
  IconBrandTabler,
  IconChartBar,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import "../App.css";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ModeToggle } from "../components/mode-toggle";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebar";
import { useNavigate } from "react-router-dom";
import DashboardContent from "./DashboardContent";
import UserAnalytics from "./UserAnalytics";
import Performance from "./Performance";
import Settings from "./Settings";

export function SidebarDemo() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    {
      label: "Dashboard",
      href: "/",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />
      ),
    },
    {
      label: "User Analytics",
      href: "/user-analytics",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />
      ),
    },
    {
      label: "Performance",
      href: "/performance",
      icon: (
        <IconChartBar className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "/settings",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "/logout",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />
      ),
    },
  ];

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-gray-50 dark:bg-neutral-900 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen w-full"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 border-r border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <div key={idx} onClick={() => navigate(link.href)}>
                  <SidebarLink link={link} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Pranit Patil",
                href: "#",
                icon: (
                  <img
                    src="https://avatars.githubusercontent.com/u/91155068?s=400&u=d56f9587068c31cfd3f8196071a3fef4836fc563&v=4"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      to="/"
      className="text-xl font-normal flex space-x-2 items-center text-black py-1 relative z-20"
    >
      <IconAlpha className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Streamify
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      to="/"
      className="font-normal flex space-x-2 items-center text-2xl text-black py-1 relative z-20"
    >
      <IconAlpha className="text-neutral-700 dark:text-neutral-200 h-7 w-7 flex-shrink-0" />
    </Link>
  );
};

export const Dashboard = () => {
  const location = useLocation();

  const getTitle = () => {
    const path = location.pathname;
    switch (path) {
      case "/":
        return "Dashboard";
      case "/user-analytics":
        return "User Analytics";
      case "/performance":
        return "Performance";
      case "/settings":
        return "Settings";
      default:
        return "Dashboard";
    }
  };

  return (
    <div className="flex flex-1 overflow-hidden bg-gray-50 dark:bg-neutral-900">
      <div className="flex flex-col w-full h-full">
        <div className="flex justify-between p-4 pb-4 border-b border-neutral-200 dark:border-neutral-700">
          <p className="text-4xl">{getTitle()}</p>
          <ModeToggle />
        </div>
        <div className="flex-1 overflow-y-auto p-2 md:p-10">
          <Routes>
            <Route path="/" element={<DashboardContent />} />
            <Route path="/user-analytics" element={<UserAnalytics />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<h1>404: Page not found</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
