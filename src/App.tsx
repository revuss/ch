import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { SideBar } from "./ui/sidenav/SideBar";
import HomePage from "./features/home/HomePage";
import Login from "./features/admin/login/Login";
import { ButtonTheme } from "./features/theme/Button";
import useThemeMode from "./features/theme/useThemeMode";
import { ThemeProvider } from "./features/theme/context";
import Main from "./ui/singleService/Main";
import NotFound from "./ui/NotFound";
import { Toaster } from "sonner";
import { AuthProvider } from "./context/authContext";
import { CheckRoute } from "./context/CheckRoute";
import { MenusProvider } from "./context/MenusContext";
import { AnimatePresence } from "framer-motion";
import { ProtectedRoute } from "./context/ProtectedRoute";
import CreateMain from "./features/createdocs/CreateMain";
import EditMain from "./features/editadmin/EditMain";

function App() {
  const { themeMode, darkTheme, lightTheme } = useThemeMode();
  return (
    <>
      <MenusProvider>
        <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
          <Router>
            <AuthProvider>
              <SideBar />
              <Toaster richColors position="top-right" />
              <ButtonTheme />
              <AnimatePresence>
                <Routes>
                  <Route index path="/" element={<HomePage />} />
                  <Route
                    path="/createDoc"
                    element={
                      <ProtectedRoute>
                        <CreateMain />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/editDoc"
                    element={
                      <ProtectedRoute>
                        <EditMain />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/login"
                    element={
                      <CheckRoute>
                        <Login />
                      </CheckRoute>
                    }
                  />
                  <Route path="/doc/:id" element={<Main />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AnimatePresence>
            </AuthProvider>
          </Router>
        </ThemeProvider>
      </MenusProvider>
    </>
  );
}

export default App;
