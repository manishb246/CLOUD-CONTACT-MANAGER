import { UserButton } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";

const UserNavbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-3">
        {/* Left — Logo (Clickable) */}
        <NavLink to="/dashboard" className="flex items-center gap-2 min-w-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-black flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="5" cy="5" r="2.5" fill="white" />
              <circle cx="11" cy="5" r="2.5" fill="white" opacity="0.5" />
              <path
                d="M1 13c0-2.21 1.79-4 4-4s4 1.79 4 4"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M9 13c0-2.21 1.79-4 4-4"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
          <span className="text-sm sm:text-lg font-bold tracking-tight text-gray-900 select-none truncate">
            Contact Manager
          </span>
        </NavLink>

        {/* Right — Clerk UserButton */}
        <UserButton
          appearance={{
            elements: {
              avatarBox:
                "w-9 h-9 ring-2 ring-black/10 hover:ring-black/30 transition-all duration-200 rounded-full",
            },
          }}
        />
      </nav>
    </header>
  );
};

export default UserNavbar;
