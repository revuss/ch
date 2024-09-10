/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQueryClient } from "@tanstack/react-query";
import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface AuthState {
  user: any | null;
  isAuthenticated: boolean;
}

interface AuthAction {
  type: "LOGIN" | "LOGOUT";
  payload?: any;
}

interface AuthContextType {
  state: AuthState;
  login: (userInfo: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: {
      email: sessionStorage.getItem("usdeml"),
      id: sessionStorage.getItem("usdid"),
      username: sessionStorage.getItem("usdnme"),
    },
    isAuthenticated: sessionStorage.getItem("isAuthenticated") === "true",
  });
  const navigate = useNavigate();

  const login = (userInfo: any) => {
    sessionStorage.setItem("usdeml", userInfo.email);
    sessionStorage.setItem("usdid", userInfo.id);
    sessionStorage.setItem("usdnme", userInfo.username);
    sessionStorage.setItem("isAuthenticated", "true");
    dispatch({ type: "LOGIN", payload: userInfo });
  };

  const queryClient = useQueryClient();

  const logout = () => {
    sessionStorage.clear();
    queryClient.invalidateQueries();
    dispatch({ type: "LOGOUT" });
    navigate("/login", { replace: true });
  };

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
