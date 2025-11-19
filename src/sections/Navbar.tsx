import React from "react";

const Navbar: React.FC = () => {
  return (
    // Transparent header fixed at the top
    <header className="fixed inset-x-0 top-5 z-50">
      <nav className="flex items-center justify-between px-24 py-3">
        {/* Left side: initials */}
        <div className="text-3xl font-bold text-slate-900 uppercase">
          jvb
        </div>

        {/* Right side: actions group */}
        <div className="flex items-center gap-5">
          {/* Theme toggle button (light/dark) */}
          {/* TODO: wire this up to a real theme toggle (light/dark mode) */}
          <button
            type="button"
            className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gray-200 shadow-sm"
            aria-label="Toggle theme"
          >
            {/* TODO: replace this placeholder with a moon icon component */}
            <span className="text-lg">C</span>
          </button>

          {/* Contact button */}
          {/* TODO: add hover animation to the small circle indicator */}
          {/* TODO: later this button can scroll to the contact section or open a modal */}
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-50"
          > 
            <span className="text-xl font-semibold tracking-[-0.02em] uppercase">Let's talk</span>
            <span className="ml-2 h-1.5 w-1.5 rounded-full bg-white" />
          </button>

          {/* Menu button */}
          {/* TODO: connect this button to a dropdown / overlay menu with navigation links */}
          {/* TODO: add subtle hover animation to the double dots */}
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-gray-200 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em]"
          >
            <span className="text-xl font-semibold tracking-[-0.02em] uppercase">Menu</span>
            <span className="ml-2 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-black" />
              <span className="h-1.5 w-1.5 rounded-full bg-black" />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
