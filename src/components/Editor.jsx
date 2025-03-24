import React from "react";

const Editor = () => {
  return (
    <div className="relative">
      {/* Editor */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-green-900 rounded-2xl blur-xl opacity-50 animate-pulse" />
      <div className="relative bg-white dark:bg-neutral-900 p-4 lg:p-5 xl:p-6 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800">
        {/* Editor-header */}
        <div className="flex items-center justify-between mb-3 lg:mb-4">
          <div className="flex items-center gap-2">
            <span className="rounded-full size-2.5 lg:size-3 bg-red-500" />
            <span className="rounded-full size-2.5 lg:size-3 bg-teal-500" />
            <span className="rounded-full size-2.5 lg:size-3 bg-green-500" />
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            useTheam.jsx
          </p>
        </div>

        {/* Editor-content */}
        <div className="h-56 md:h-64 lg:h-60 xl:h-72 rounded-lg bg-neutral-100 dark:bg-neutral-800 overflow-hidden relative">
          <img
            src="./assets/code-light.png"
            alt="Code snippets"
            className="w-full h-full object-cover object-left-top dark:hidden"
          />
          <img
            src="./assets/code-dark.png"
            alt="Code snippets"
            className="w-full h-full object-cover object-left-top dark:block"
          />
          <div className="absolute bottom-4 right-4">
            <div className="size-12 lg:size-14 rounded-full bg-gradient-to-r from-teal-500 to-green-900 flex items-center justify-center text-white shadow-lg animate-pulse">
              <i className="bx bx-brightness text-xl lg:text-2xl" />
            </div>
          </div>
        </div>

        {/* Editor-footer */}
        <div className="mt-3 lg:mt-4 flex justify-between items-center">
          <div className="flex gap-2">
            <span className="px-2.5 py-1 lg:px-3 rounded-full bg-neutral-900 text-teal-400 text-xs font-medium flex items-center">
              <i className="bx bxl-tailwind-css mr-1" />
              <span>Tailwind v4</span>
            </span>
            <span className="px-2.5 py-1 lg:px-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-green-900 dark:text-green-400 border border-neutral-200 dark:border-neutral-700 text-xs font-medium flex items-center">
              <i className="bx bxl-react mr-1" />
              <span>React v18</span>
            </span>
          </div>
          <button className="size-8 lg:size-9 xl:size-10 flex items-center justify-center rounded-full bg-teal-500 text-neutral-900 hover:bg-teal-600 transition-colors">
            <i className="bx bx-copy text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editor;
