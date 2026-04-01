import React, { useState, useEffect } from "react";
import { SignIn, SignUp } from "@clerk/clerk-react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authModal, setAuthModal] = useState(null); // null | "login" | "signup"

  const { isSignedIn } = useAuth();

  const navigate = useNavigate();

 // BEFORE — redirect was trapped inside the resize handler, never triggered on login
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 640) setIsOpen(false);
    if (isSignedIn) navigate("/dashboard"); // ❌ only runs on resize
  };
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

// AFTER — two separate effects, each with a clear responsibility
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 640) setIsOpen(false);
  };
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

useEffect(() => {
  if (isSignedIn) {
    navigate("/dashboard");
  }
}, [isSignedIn, navigate]); // ✅ fires whenever isSignedIn changes

  return (
    <>
      {/* ─── HEADER ─────────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold select-none">
            Contact Manager
          </h1>

          {/* Desktop Buttons */}
          <div className="hidden sm:flex items-center gap-6">
            <button
              onClick={() => setAuthModal("login")}
              className="text-sm font-semibold text-gray-600 hover:text-black transition"
            >
              Login
            </button>
            <button
              onClick={() => setAuthModal("signup")}
              className="text-sm font-semibold bg-black text-white px-5 py-2 rounded-xl hover:opacity-90 transition"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="sm:hidden p-2 rounded-md hover:bg-gray-100 transition text-xl"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* ─── Mobile Dropdown ──────────────────────────────────────── */}
        <div
          className={`sm:hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isOpen
              ? "max-h-[320px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-3"
          } overflow-hidden flex justify-center`}
        >
          <div className="w-[90%] max-w-sm mt-3 mb-4 p-5 rounded-2xl bg-white/80 backdrop-blur-lg border border-gray-200 shadow-2xl ring-1 ring-black/5 flex flex-col gap-4">
            <button
              onClick={() => {
                setAuthModal("login");
                setIsOpen(false);
              }}
              className="w-full py-2.5 rounded-xl text-sm font-semibold border border-gray-300 hover:bg-gray-100 active:scale-95 transition-all duration-200"
            >
              Login
            </button>
            <button
              onClick={() => {
                setAuthModal("signup");
                setIsOpen(false);
              }}
              className="w-full py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-black to-gray-800 text-white hover:opacity-90 active:scale-95 shadow-md transition-all duration-200"
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Spacer so content isn't hidden under fixed header */}
      <div className="h-16 sm:h-20" />

      {/* ─── AUTH MODAL ──────────────────────────────────────────────── */}
      {authModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          onClick={(e) => {
            // Close when clicking the backdrop (not the modal itself)
            if (e.target === e.currentTarget) setAuthModal(null);
          }}
        >
          <div className="bg-white w-full max-w-fit rounded-2xl p-4 sm:p-8 relative shadow-2xl flex flex-col items-center justify-center">
            {/* Close Button */}
            <button
              onClick={() => setAuthModal(null)}
              className="absolute top-4 right-4 z-10 text-gray-400 hover:text-black transition-colors text-xl leading-none"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* ── FIX: routing="virtual" works correctly inside modals ── */}
            <div className="w-full flex justify-center items-center">
              {authModal === "login" && (
                <SignIn
                  routing="virtual"
                  appearance={{
                    elements: {
                      rootBox: "mx-auto",
                      card: "shadow-none border-none",
                    },
                  }}
                />
              )}
              {authModal === "signup" && (
                <SignUp
                  routing="virtual"
                  appearance={{
                    elements: {
                      rootBox: "mx-auto",
                      card: "shadow-none border-none",
                    },
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;