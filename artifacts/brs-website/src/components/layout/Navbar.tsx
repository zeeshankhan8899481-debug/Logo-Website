import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Transformations", href: "#transformations" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="flex items-center gap-3">
            <img src="/logo.png" alt="Body Reshaping Studio" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover" />
            <span className="font-display font-bold text-xl sm:text-2xl tracking-wider text-white">
              BRS
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm font-medium text-gray-300 hover:text-primary transition-colors uppercase tracking-wider"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-none px-6" asChild>
              <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>Start Now</a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col py-4 px-4 sm:px-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="py-3 text-sm font-medium text-gray-300 hover:text-primary transition-colors uppercase tracking-wider border-b border-border/50"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-none" asChild>
                  <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>Start Now</a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
