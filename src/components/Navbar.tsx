// src/components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["hero", "about", "skills", "projects", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    // <nav
    //   className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
    //     scrolled 
    //       ? "bg-white/98 dark:bg-gray-950/98 backdrop-blur-2xl shadow-sm border-b border-gray-100/40 dark:border-gray-800/40" 
    //       : "bg-transparent"
    //   }`}
    // >
    //   <div className="max-w-6xl mx-auto flex items-center justify-between px-6 lg:px-12 py-5">
    //     {/* Minimal Logo */}
    //     <a
    //       href="#hero"
    //       className="flex items-center space-x-3 group"
    //     >
    //       <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-100 dark:to-slate-200 rounded-full flex items-center justify-center transform group-hover:scale-105 transition-all duration-500 shadow-inner">
    //         <span className="text-white dark:text-slate-900 font-light text-sm tracking-widest">MR</span>
    //       </div>
    //       <span className="text-lg font-light text-slate-800 dark:text-slate-200 tracking-wide">
    //         Mijanur Rahman
    //       </span>
    //     </a>

    //     {/* Desktop Menu - Minimal */}
    //     <div className="hidden md:flex items-center gap-8">
    //       {navItems.map((item) => (
    //         <a
    //           key={item.name}
    //           href={item.href}
    //           className={`relative font-normal text-sm tracking-wide transition-all duration-500 ${
    //             activeSection === item.id
    //               ? "text-slate-900 dark:text-white"
    //               : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
    //           }`}
    //         >
    //           {item.name}
    //           {activeSection === item.id && (
    //             <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-slate-900 dark:bg-white rounded-full"></div>
    //           )}
    //         </a>
    //       ))}
    //     </div>

    //     {/* CTA Button - Subtle */}
    //     <div className="hidden md:flex">
    //       <a
    //         href="#contact"
    //         className="px-5 py-2.5 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-normal text-sm tracking-wide rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-500 hover:border-slate-400 dark:hover:border-slate-600"
    //       >
    //         Get in Touch
    //       </a>
    //     </div>

    //     {/* Mobile Menu Button - Refined */}
    //     <button
    //       className="md:hidden relative w-8 h-8 focus:outline-none group"
    //       onClick={() => setMenuOpen(!menuOpen)}
    //     >
    //       <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
    //         menuOpen ? "opacity-0 rotate-90" : "opacity-100"
    //       }`}>
    //         <div className="w-5 h-[1px] bg-slate-700 dark:bg-slate-300 mb-1.5 transition-all group-hover:w-6"></div>
    //         <div className="w-5 h-[1px] bg-slate-700 dark:bg-slate-300 mb-1.5 transition-all group-hover:w-6"></div>
    //         <div className="w-5 h-[1px] bg-slate-700 dark:bg-slate-300 transition-all group-hover:w-6"></div>
    //       </div>
    //       <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg transition-all duration-500 ${
    //         menuOpen ? "opacity-100 text-slate-700 dark:text-slate-300" : "opacity-0 -rotate-90"
    //       }`}>
    //         ×
    //       </div>
    //     </button>
    //   </div>

    //   {/* Mobile Menu - Elegant */}
    //   <div className={`md:hidden transition-all duration-700 overflow-hidden ${
    //     menuOpen 
    //       ? "max-h-96 opacity-100 bg-white/98 dark:bg-gray-950/98 backdrop-blur-2xl border-t border-gray-100/40 dark:border-gray-800/40" 
    //       : "max-h-0 opacity-0"
    //   }`}>
    //     <div className="px-6 py-8 space-y-6">
    //       {navItems.map((item) => (
    //         <a
    //           key={item.name}
    //           href={item.href}
    //           onClick={() => setMenuOpen(false)}
    //           className={`block py-3 font-normal text-base tracking-wide transition-all duration-500 border-l-2 pl-4 ${
    //             activeSection === item.id
    //               ? "text-slate-900 dark:text-white border-slate-900 dark:border-white bg-slate-50/50 dark:bg-slate-800/20"
    //               : "text-slate-600 dark:text-slate-400 border-transparent hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-600"
    //           }`}
    //         >
    //           {item.name}
    //         </a>
    //       ))}
    //       <a
    //         href="#contact"
    //         onClick={() => setMenuOpen(false)}
    //         className="block py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-normal text-base tracking-wide rounded-lg text-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-500 mt-6"
    //       >
    //         Get in Touch
    //       </a>
    //     </div>
    //   </div>
    // </nav>




    <nav
  className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
    scrolled
      ? "bg-[#08131F]/90 backdrop-blur-xl border-b border-white/[0.08]"
      : "bg-transparent border-b border-transparent"
  }`}
>
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-3.5">

    {/* Logo */}
    <a
      href="#hero"
      className="flex items-center gap-3 group"
      aria-label="Go to home"
    >
     

     <span className="hidden sm:block text-[15px] font-medium tracking-wide text-slate-200">
  Fatema Akther
</span>
    </a>

    {/* Desktop Navigation */}
    <div className="hidden md:flex items-center gap-7">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <a
            key={item.name}
            href={item.href}
            className={`relative py-2 text-sm font-medium transition-colors duration-300 ${
              isActive
                ? "text-cyan-400"
                : "text-slate-400 hover:text-slate-100"
            }`}
          >
            {item.name}

            <span
              className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-cyan-400 transition-all duration-300 ${
                isActive ? "w-full opacity-100" : "w-0 opacity-0"
              }`}
            />
          </a>
        );
      })}
    </div>

    {/* Desktop CTA */}
    <div className="hidden md:flex">
      <a
        href="#contact"
        className="
          inline-flex items-center justify-center
          rounded-lg
          border border-slate-600
          px-4 py-2
          text-sm font-medium
          text-slate-200
          transition-all duration-300
          hover:border-cyan-400/70
          hover:bg-cyan-400/[0.08]
          hover:text-cyan-300
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-cyan-400/60
        "
      >
        Get in Touch
      </a>
    </div>

    {/* Mobile Menu Button */}
    <button
      type="button"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={menuOpen}
      className="
        md:hidden
        flex h-9 w-9
        items-center justify-center
        rounded-lg
        border border-white/10
        text-slate-200
        transition-colors duration-300
        hover:border-cyan-400/40
        hover:text-cyan-300
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-cyan-400/60
      "
    >
      <div className="relative h-4 w-5">
        <span
          className={`absolute left-0 top-0 h-[1.5px] w-5 bg-current transition-all duration-300 ${
            menuOpen ? "top-[7px] rotate-45" : ""
          }`}
        />

        <span
          className={`absolute left-0 top-[7px] h-[1.5px] w-5 bg-current transition-all duration-300 ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        />

        <span
          className={`absolute left-0 top-[14px] h-[1.5px] w-5 bg-current transition-all duration-300 ${
            menuOpen ? "top-[7px] -rotate-45" : ""
          }`}
        />
      </div>
    </button>
  </div>

  {/* Mobile Navigation */}
  <div
    className={`md:hidden overflow-hidden border-t border-white/[0.06] bg-[#08131F]/95 backdrop-blur-xl transition-all duration-300 ${
      menuOpen
        ? "max-h-[500px] opacity-100"
        : "max-h-0 border-transparent opacity-0"
    }`}
  >
    <div className="px-6 py-5">
      <div className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`relative rounded-lg px-3 py-3 text-[15px] font-medium transition-all duration-300 ${
                isActive
                  ? "bg-cyan-400/[0.08] text-cyan-400"
                  : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              {item.name}

              {isActive && (
                <span className="absolute left-0 top-1/2 h-5 w-[2px] -translate-y-1/2 rounded-full bg-cyan-400" />
              )}
            </a>
          );
        })}
      </div>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="
          mt-5
          flex w-full items-center justify-center
          rounded-lg
          border border-cyan-400/40
          px-4 py-3
          text-sm font-medium
          text-cyan-300
          transition-all duration-300
          hover:border-cyan-400
          hover:bg-cyan-400/[0.08]
        "
      >
        Get in Touch
      </a>
    </div>
  </div>
</nav>
  );
}