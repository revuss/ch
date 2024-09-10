import { Toggle } from "@/components/ui/toggle";
import useTheme from "./context";
import { Sun } from "lucide-react";

export function ButtonTheme() {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const handleToggleChange = () => {
    if (themeMode === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <>
      <nav className="flex justify-end mx-5 lg:mx-10 md:mt-5">
        <Toggle
          aria-label="Toggle theme"
          onClick={handleToggleChange}
          pressed={themeMode === "dark"}
        >
          <Sun />
        </Toggle>
      </nav>
    </>
  );
}
