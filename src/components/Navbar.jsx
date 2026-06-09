import { useState, useEffect } from "react";
import { Menu, X, Cpu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Education", id: "education" },
    { label: "Achievements", id: "achievements" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy logic
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-cyber-bg/75 backdrop-blur-md border-b border-cyber-blue/15 shadow-glass-glow"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="relative">
            <Cpu className="w-8 h-8 text-cyber-blue transition-transform duration-500 group-hover:rotate-180" />
            <div className="absolute inset-0 bg-cyber-blue blur-md opacity-25 group-hover:opacity-60 transition-opacity"></div>
          </div>
          <span className="font-cyber font-bold tracking-widest text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyber-blue via-indigo-300 to-cyber-purple">
            GS // PORTFOLIO
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`font-cyber text-xs uppercase tracking-widest transition-all duration-300 relative py-1 ${
                activeSection === item.id
                  ? "text-cyber-blue text-glow-blue font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyber-blue shadow-glow-blue animate-pulse" />
              )}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="cyber-btn cyber-btn-blue text-xs px-4 py-2"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Nav Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-cyber-blue transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden fixed inset-x-0 top-[60px] bg-cyber-bg/95 backdrop-blur-lg border-b border-cyber-blue/15 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`font-cyber text-sm uppercase tracking-widest py-2 text-left transition-all ${
                activeSection === item.id
                  ? "text-cyber-blue text-glow-blue font-semibold border-l-2 border-cyber-blue pl-3"
                  : "text-gray-400 pl-3 border-l-2 border-transparent hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="cyber-btn cyber-btn-blue text-sm py-3 w-full text-center mt-2"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}
