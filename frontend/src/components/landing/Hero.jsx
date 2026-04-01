const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 px-4 sm:px-6 bg-[#f8fafb] overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute top-0 right-0 w-[80%] h-[60%] bg-[radial-gradient(ellipse_at_center,_rgba(62,207,142,0.13)_0%,_transparent_70%)]"></div>
      <div className="absolute bottom-0 left-0 w-[60%] h-[50%] bg-[radial-gradient(ellipse_at_center,_rgba(62,207,142,0.07)_0%,_transparent_70%)]"></div>
    </div>

    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
      <div className="space-y-6 text-center md:text-left">
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#3ecf8e] bg-[#3ecf8e]/10 border border-[#3ecf8e]/20 px-4 py-1.5 rounded-full uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3ecf8e] animate-pulse"></span>
          Now with AI-powered insights
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight font-display text-[#0d0d12]">
          Manage Your<br />
          <span className="relative inline-block">
            Contacts
            <span className="absolute -bottom-1 left-0 w-full h-3 bg-[#3ecf8e]/30 -z-10 rounded"></span>
          </span>
          <br />Smarter.
        </h1>
        <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-md mx-auto md:mx-0 font-light font-body">
          One elegant hub for every connection you've ever made — organized, searchable, and always in sync across all your devices.
        </p>
        <div className="flex items-center gap-4 justify-center md:justify-start pt-2">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">User</div>
            ))}
          </div>
          <p className="text-sm text-slate-500"><span className="font-bold text-[#0d0d12]">12,000+</span> professionals trust us</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center mt-6 md:mt-0">
        <div className="absolute w-64 h-64 bg-[#3ecf8e]/15 rounded-full blur-3xl"></div>
        <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-6 w-full max-w-sm border border-gray-100 animate-[bounce_6s_infinite]">
          <div className="flex items-center justify-between mb-5">
            <span className="font-display font-bold text-[#0d0d12]">My Contacts</span>
            <span className="text-xs bg-[#3ecf8e]/10 text-[#3ecf8e] font-semibold px-2.5 py-1 rounded-full">248 saved</span>
          </div>
          <div className="space-y-3">
            {[
              { name: "James Donovan", email: "james@company.io", initial: "JD", color: "from-violet-400 to-purple-600" },
              { name: "Sarah Chen", email: "s.chen@design.co", initial: "SC", color: "from-rose-400 to-pink-600", active: true },
              { name: "Marco Klein", email: "marco@studio.de", initial: "MK", color: "from-amber-400 to-orange-500" }
            ].map((contact, i) => (
              <div key={i} className={`flex items-center gap-3 p-2.5 rounded-xl ${contact.active ? 'bg-[#3ecf8e]/5 border border-[#3ecf8e]/20' : 'hover:bg-gray-50 transition-colors cursor-pointer'}`}>
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${contact.color} flex items-center justify-center text-white font-bold text-xs shrink-0`}>
                  {contact.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate">{contact.name}</p>
                  <p className="text-xs text-slate-400 truncate">{contact.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;