import React from "react";
import Hero from "./components/Hero";
import useTheam from "./hooks/useTheam";

const App = () => {
  const { isDarkMode, toggleDarkMode } = useTheam();

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 relative transition-colors duration-300 isolate">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-30 dark:hidden"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute inset-0 dark:hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>
      <button
        onClick={toggleDarkMode}
        className="fixed z-10 top-3 lg:top-4 right-3 lg:right-4 size-9 lg:size-9 flex justify-center items-center rounded-full bg-teal-500 text-neutral-950 shadow-lg hover:bg-teal-600 transition-colors cursor-pointer"
      >
        <i
          className={`bx bx-${
            !isDarkMode ? "moon" : "sun"
          } text-lg lg:text-xl dark:text-neutral-200`}
        />
      </button>
      <Hero />
    </div>
  );
};

export default App;
