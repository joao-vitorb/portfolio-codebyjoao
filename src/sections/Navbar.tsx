import React, { useEffect, useRef, useState } from "react";
import arrowRight from "../assets/icons/arrow-right.svg";
import arrowRightBlack from "../assets/icons/arrow-right-black.svg";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        menuButtonRef.current?.contains(target) ||
        dropdownRef.current?.contains(target)
      ) {
        return;
      }

      setIsMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About me" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experiences" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-5 z-50">
      <nav className="relative flex items-center justify-between px-6 py-3 lg:px-24">
        {/* Left: logo / initials */}
        <div className="text-3xl font-bold text-slate-900 uppercase">jvb</div>

        {/* Right: actions */}
        <div className="flex items-center gap-5">
          {/* LET'S TALK */}
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer group relative inline-flex h-[52px] items-center justify-center overflow-hidden rounded-full bg-[#161f30] px-8 text-xs font-semibold uppercase tracking-[0.18em] text-slate-50 transition-colors duration-200 hover:bg-[#1458ff]"
          >
            <span className="pointer-events-none absolute inset-y-0 left-6 flex items-center opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
              <img
                src={arrowRight}
                alt=""
                className="h-4 w-4 transform transition-transform duration-200 group-hover:scale-110"
              />
            </span>

            <span className="relative flex items-center gap-2">
              <span className="text-xl font-semibold tracking-[-0.02em] uppercase transition-transform duration-200 group-hover:translate-x-3">
                LET&apos;S TALK
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-white transition-opacity duration-150 group-hover:opacity-0" />
            </span>
          </button>

          {/* MENU / CLOSE */}
          <button
            type="button"
            ref={menuButtonRef}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={`cursor-pointer group inline-flex items-center gap-2 rounded-full bg-gray-200 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-200 hover:bg-gray-300 ${
              isMenuOpen ? "bg-gray-300" : ""
            }`}
            aria-expanded={isMenuOpen}
          >
            {/* label com animação vertical */}
            <span className="relative h-6 w-[70px] overflow-hidden">
              <span
                className={`absolute inset-0 flex items-center text-xl font-semibold tracking-[-0.02em] uppercase transition-all duration-200 ${
                  isMenuOpen
                    ? "-translate-y-full opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              >
                Menu
              </span>
              <span
                className={`absolute inset-0 flex items-center text-xl font-semibold tracking-[-0.02em] uppercase transition-all duration-200 ${
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0"
                }`}
              >
                Close
              </span>
            </span>

            {/* dots */}
            <span className="flex h-3 w-3 items-center justify-center">
              <span
                className={`flex w-full items-center justify-between transition-transform duration-300 ${
                  isMenuOpen ? "rotate-90" : "group-hover:rotate-90"
                }`}
              >
                <div className="flex gap-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-black" />
                  <span className="h-1.5 w-1.5 rounded-full bg-black" />
                </div>
              </span>
            </span>
          </button>
        </div>

        {/* DROPDOWN */}
        {isMenuOpen && (
          <div
            ref={dropdownRef}
            className="nav-dropdown-enter absolute right-6 top-full mt-4 w-64 rounded-3xl bg-white p-6 shadow-lg ring-1 ring-gray-200 lg:right-24"
          >
            <ul className="space-y-4 text-left">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className="cursor-pointer group flex w-full items-center justify-between rounded-full px-4 py-2 text-left text-lg font-semibold uppercase tracking-[0.12em] transition-all duration-200 hover:bg-[#e7e9ff]"
                  >
                    <span>{item.label}</span>

                    <span className="ml-3 flex h-4 w-4 items-center justify-center opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                      <img src={arrowRightBlack} alt="" className="h-4 w-4" />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
