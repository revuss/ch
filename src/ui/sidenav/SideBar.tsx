/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/context/authContext";
import { useUserLogout } from "@/features/admin/login/loginHook";
import {
  ChevronDown,
  CircleX,
  FileCog,
  HardDriveUpload,
  House,
  LogIn,
  LogOut,
  Menu,
  Repeat2,
} from "lucide-react";
import { useState } from "react";
import { useMenus } from "@/context/MenusContext";
import AppLoader from "../AppLoader";
import { NavLink } from "react-router-dom";
import {
  COMPANY_NAME,
  CREATE_API,
  EDIT_API,
  REQUESTS,
} from "@/utils/appConstants";

export function SideBar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: string]: boolean;
  }>({});
  const { state } = useAuth();
  const { handleLogout } = useUserLogout();

  const { headersData, gettingData, error, isSuccess } = useMenus();

  if (gettingData) return <AppLoader />;
  if (error) return <p>Error loading menu headings.</p>;

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = (category: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        aria-expanded={isSidebarOpen}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <Menu className="text-primary" />
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 rounded-r-sm select-none font-primary bg-gray-100 dark:bg-orange-500 left-0 z-40 w-64 h-screen transition-transform -translate-x-full ${
          isSidebarOpen ? "opacity-100" : "translate-x-0"
        }`}
        aria-label="Sidebar"
      >
        <div className="flex justify-between">
          <Badge className="my-5 text-md  font-semibold mx-5">
            {COMPANY_NAME}
          </Badge>
          <CircleX
            className="md:hidden mt-6 mr-3 text-primary"
            onClick={toggleSidebar}
          />
        </div>

        <div className="h-full px-3 text-xs overflow-y-auto my-2">
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to={""}
                className={({ isActive }) =>
                  `flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-950 group hover:text-white ${
                    isActive ? "bg-gray-950 text-white" : "hover:bg-gray-100"
                  }`
                }
              >
                <House className="flex-shrink-0 w-5 h-5 transition duration-75" />
                <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
              </NavLink>
            </li>
            <li>
              <button
                type="button"
                onClick={() => toggleDropdown(REQUESTS)}
                aria-expanded={openDropdowns[REQUESTS] || false}
                className="flex items-center w-full p-2 mb-1 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-950"
              >
                <Repeat2 className="flex-shrink-0 w-5 h-5 transition duration-75" />
                <span className="flex-1 text-xs ms-3 text-left rtl:text-right whitespace-nowrap">
                  {REQUESTS}
                </span>
                <ChevronDown className="w-5 h-5" />
              </button>
              <ul
                id="dropdown-example"
                className={`mb-1 ${
                  openDropdowns[REQUESTS] ? "opacity-100" : "hidden opacity-0"
                }`}
              >
                {isSuccess &&
                  Object.entries(headersData.navItems).map(
                    ([category, items]) => {
                      return (
                        <li key={category} className="ml-7">
                          <button
                            type="button"
                            onClick={() => toggleDropdown(category)}
                            aria-expanded={openDropdowns[category] || false}
                            className="flex items-center w-full p-2 mb-1  text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-950"
                          >
                            <span className="flex-1 text-xs ms-3 text-left rtl:text-right whitespace-nowrap">
                              {category.charAt(0).toUpperCase() +
                                category.slice(1)}
                            </span>
                            <ChevronDown className="w-5 h-5" />
                          </button>
                          <ul
                            id={`dropdown-${category}`}
                            className={`pl-4 ${
                              openDropdowns[category]
                                ? "opacity-100"
                                : "hidden opacity-0"
                            }`}
                          >
                            {(items as any[]).map((item) => (
                              <li key={item.id} className="mb-1 ml-7">
                                <NavLink
                                  to={`/doc/${item.id}`}
                                  className={({ isActive }) =>
                                    `flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-950 group hover:text-white ${
                                      isActive
                                        ? "bg-gray-950 text-white"
                                        : "hover:bg-gray-100"
                                    }`
                                  }
                                >
                                  {item.name}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </li>
                      );
                    }
                  )}
              </ul>
            </li>

            {state.isAuthenticated && (
              <>
                <li>
                  <NavLink
                    to={"createDoc"}
                    className={({ isActive }) =>
                      `flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-950 group hover:text-white ${
                        isActive
                          ? "bg-gray-950 text-white"
                          : "hover:bg-gray-100"
                      }`
                    }
                  >
                    <HardDriveUpload className="flex-shrink-0 w-5 h-5 transition duration-75" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      {CREATE_API}
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"editDoc"}
                    className={({ isActive }) =>
                      `flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-950 group hover:text-white ${
                        isActive
                          ? "bg-gray-950 text-white"
                          : "hover:bg-gray-100"
                      }`
                    }
                  >
                    <FileCog className="flex-shrink-0 w-5 h-5 transition duration-75" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      {EDIT_API}
                    </span>
                  </NavLink>
                </li>
              </>
            )}

            {!state.isAuthenticated && (
              <>
                <li>
                  <NavLink
                    to={"login"}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-950 group"
                  >
                    <LogIn className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Sign In
                    </span>
                  </NavLink>
                </li>
              </>
            )}

            {state.isAuthenticated && (
              <>
                <NavLink
                  to={""}
                  className="absolute bottom-4 w-[90%]"
                  onClick={() => handleLogout()}
                >
                  <span className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-950 group">
                    <LogOut className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Logout
                    </span>
                  </span>
                </NavLink>
              </>
            )}
          </ul>
        </div>
      </aside>
    </>
  );
}
