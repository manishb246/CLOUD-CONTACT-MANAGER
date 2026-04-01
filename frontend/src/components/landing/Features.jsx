import React from 'react';

const Features = () => {
  const featureList = [
    {
      title: "Smart Organization",
      desc: "Categorize contacts with custom tags and AI-driven smart groups for instant access.",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    },
    {
      title: "Military-Grade Security",
      desc: "Your data is encrypted with AES-256 bit protocols. We prioritize your privacy above all.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
      title: "Global Search",
      desc: "Find any contact by name, company, email, or even a specific note in milliseconds.",
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    },
  ];

  return (
    <section id="features" className="bg-[#0d0d12] py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#3ecf8e]/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Text */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-[#3ecf8e] text-sm font-bold tracking-[0.2em] uppercase mb-4">
            Powerful Capabilities
          </h2>
          <h3 className="text-white text-4xl sm:text-5xl font-extrabold font-display leading-tight">
            Everything you need to <span className="text-slate-400">scale your network.</span>
          </h3>
          <p className="mt-6 text-slate-400 text-lg leading-relaxed max-w-2xl font-light">
            We've built the most comprehensive toolset for professionals who take their relationships seriously. 
            No bloat, just performance.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-[#3ecf8e]/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#3ecf8e]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg 
                  className="w-7 h-7 text-[#3ecf8e]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.5" 
                    d={feature.icon} 
                  />
                </svg>
              </div>
              <h4 className="text-white text-xl font-bold mb-3 font-display">
                {feature.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;