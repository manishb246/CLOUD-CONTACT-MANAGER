import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white py-16 sm:py-24 lg:py-28 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="space-y-5 text-center md:text-left">
          <span className="text-xs font-bold tracking-widest text-sage uppercase">
            About the product
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Your entire network, always within reach.
          </h2>
          <p className="text-slate-500 leading-relaxed text-sm sm:text-base font-light max-w-md mx-auto md:mx-0">
            Contact Manager was built to provide a single, elegant home for
            every person you know—professionally or personally.
          </p>
          <ul className="space-y-3 text-left max-w-sm mx-auto md:mx-0">
            {[
              "Import from Google & LinkedIn",
              "Smart duplicate detection",
              "Secure enterprise-grade sync",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-sm font-medium text-slate-700"
              >
                <span className="w-5 h-5 rounded-full bg-sage/15 flex items-center justify-center shrink-0">
                  <svg
                    className="w-3 h-3 text-sage"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-mist rounded-3xl p-8 text-center border border-gray-100">
          <p className="text-4xl font-extrabold font-display text-ink">12k+</p>
          <p className="text-sm text-slate-500 mt-1">Active users worldwide</p>
        </div>
      </div>
    </section>
  );
};

export default About;
