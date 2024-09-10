import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

if (import.meta.env.MODE === "production") {
  if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    for (const [key, value] of Object.entries(
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__
    )) {
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] =
        typeof value === "function" ? () => {} : null;
    }
  }

  window.addEventListener("contextmenu", (event) => event.preventDefault());

  window.addEventListener("keydown", (event) => {
    if (
      (event.ctrlKey && event.shiftKey && event.key === "I") || // Ctrl+Shift+I
      (event.ctrlKey && event.shiftKey && event.key === "C") || // Ctrl+Shift+C
      (event.ctrlKey && event.shiftKey && event.key === "J") || // Ctrl+Shift+J
      (event.ctrlKey && event.key === "U") || // Ctrl+U
      event.key === "F12" // F12
    ) {
      event.preventDefault();
    }
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
