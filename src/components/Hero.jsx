import React from "react";
import Button from "./ui/Button";
import Badge from "./ui/Badge";
import Editor from "./Editor";

const Hero = () => {
  const navigateTo = (link) => () => {
    window.open(link, "_blank");
  };

  const genRanNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const users = [
    `https://randomuser.me/api/portraits/women/${genRanNum(1, 100)}.jpg`,
    `https://randomuser.me/api/portraits/men/${genRanNum(1, 100)}.jpg`,
    `https://randomuser.me/api/portraits/women/${genRanNum(1, 100)}.jpg`,
  ];

  return (
    <main className="isolate">
      {/* Circle pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-teal-400 dark:bg-teal-500 rounded-full blur-3xl opacity-25" />
      </div>

      {/* Section Container */}
      <section className="container mx-auto px-6 py-20 md:py-24 lg:py-28 xl:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Left Column */}
          <div className="flex-1 space-y-6 lg:space-y-7">
            <div className="space-y-4 lg:space-y-5">
              {/* Tags */}
              <div className="flex items-center">
                <span className="flex items-center pt-1 px-2 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-teal-200 mr-2">
                  New
                </span>
                <span className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-sm font-medium bg-neutral-900 text-teal-400 backdrop-blur-sm border border-neutral-800/50 mr-2">
                  <i className="bx bx-trending-up mr-1" />
                  Next Generation Design System
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                <span className="block mb-1">Design</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-teal-400 to-teal-600">
                  Without Limits
                </span>
              </h1>
              {/* Content */}
              <p className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl font-light">
                Elevate your web projects with our streamlined design system
                powered with Tailwind CSS v4 and take your website to the next
                level with stunning user experience with state-of-the-art theam
                switching.
              </p>
              <div className="flex gap-3 items-center">
                <span className="h-px bg-neutral-300 dark:bg-neutral-700 w-12" />
                <p className="uppercase text-xs tracking-widest text-neutral-500 dark:text-neutral-400 font-medium">
                  Transition seamlessly
                </p>
              </div>
            </div>

            {/* Links and Btns */}
            <div className="flex flex-wrap gap-3 lg:gap-4">
              <Button className="bg-neutral-900 hover:bg-black text-white dark:bg-teal-500 dark:hover:bg-teal-600 dark:text-neutral-900 font-medium shadow-lg hover:shadow-neutral-900/20 dark:shadow-teal-500/20">
                <i className="bx bx-code-alt mr-2 lg:mr-3 text-lg group-hover:rotate-12 transition-transform" />
                <span>Start coding</span>
              </Button>

              <Button
                onClick={navigateTo(
                  "https://tailwindcss.com/blog/tailwindcss-v4"
                )}
                className="bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white"
              >
                <i className="bx bx-book-open mr-2 lg:mr-3 text-lg opacity-70 group-hover:opacity-100 transition-opacity" />
                <span>Documentation</span>
              </Button>
            </div>

            {/* Users */}
            <div className="flex flex-col sm:flex-row gap-5 sm:items-center pt-6 lg:pt-7 border-t border-neutral-200 dark:border-neutral-800">
              <div className="flex -space-x-3">
                {users.map((user, i) => (
                  <img
                    key={i}
                    src={user}
                    alt="User"
                    className="size-9 lg:size-10 rounded-full border-2 border-neutral-200 dark:border-neutral-900 object-cover"
                  />
                ))}

                <span className="flex items-center justify-center size-9 lg:size-10 rounded-full border-2 border-neutral-200 dark:border-neutral-900 bg-neutral-900 dark:bg-teal-500 text-white dark:text-neutral-900 text-xs font-medium">
                  +5K
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center">
                  {[...Array(4)].map((_, i) => (
                    <i key={i} className="bx bxs-star text-teal-500 mr-1" />
                  ))}
                  <i className="bx bxs-star-half text-teal-500 mr-1" />
                  <span className="text-sm text-neutral-600 dark:text-neutral-400 ml-1">
                    4.8/5
                  </span>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Trusteg by
                  <span className="font-bold text-neutral-900 dark:text-white">
                    {" "}
                    5,000+
                  </span>{" "}
                  developers world wide
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 w-full">
            <Editor />
          </div>
        </div>
      </section>

      <Badge
        className="top-16 right-[15%] lg:top-20 lg:right-[20%] delay-75"
        text="Accessable"
      />
      <Badge
        className="bottom-8 left-8 lg:bottom-10 lg:left-10"
        text="Responsive"
      />
    </main>
  );
};

export default React.memo(Hero);
