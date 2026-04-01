import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    Product: ['Features', 'Security', 'Cloud Sync', 'Pricing'],
    Company: ['About Us', 'Careers', 'Privacy Policy', 'Terms of Service'],
    Support: ['Help Center', 'API Docs', 'Status', 'Contact Support'],
  };

  return (
    <footer className="bg-[#0d0d12] text-white pt-20 pb-10 border-t border-white/5 font-display">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          <div className="lg:col-span-2 space-y-6">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#3ecf8e]/20 transition-colors">
                <svg className="w-5 h-5 text-[#3ecf8e]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight">Contact Manager</span>
            </a>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed font-light">
              The world's most intuitive platform for managing professional relationships. 
              Secure, fast, and built for modern teams.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-5">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-[#3ecf8e] text-sm transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {currentYear} Contact Manager Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;