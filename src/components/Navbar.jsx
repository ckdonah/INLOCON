import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { logo } from "../utils/images";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`w-full z-50 transition-all duration-500 ${
          scrollY > 50
            ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100"
            : "bg-white"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img
                src={logo.main}
                alt="INLOCON AG - Informationslogistik & Consulting"
                className="h-10 w-auto"
              />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#benefits"
                className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
              >
                Benefits
              </a>
              <a
                href="#process"
                className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
              >
                Prozess
              </a>
              <a
                href="#gallery"
                className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
              >
                Galerie
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
              >
                Über uns
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
              >
                Kontakt
              </a>
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                Portal testen
              </button>
            </div>

            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-xl transition-all duration-300 relative z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-1 left-0 w-6 h-0.5 bg-gray-800 transition-all duration-300 transform ${
                    isMenuOpen ? "rotate-45 translate-y-2" : "rotate-0"
                  }`}
                ></span>
                <span
                  className={`absolute top-3 left-0 w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute top-5 left-0 w-6 h-0.5 bg-gray-800 transition-all duration-300 transform ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : "rotate-0"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br from-white via-indigo-50 to-purple-50 backdrop-blur-xl transition-all duration-500 ${
            isMenuOpen ? "scale-100" : "scale-95"
          }`}
        ></div>

        <div
          className={`relative h-full flex flex-col pt-24 pb-8 px-6 transition-all duration-700 delay-100 ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-8 opacity-0"
          }`}
        >
          <div className="flex-1 flex flex-col justify-center space-y-6">
            {[
              { href: "#benefits", text: "Benefits", delay: "delay-150" },
              { href: "#process", text: "Prozess", delay: "delay-200" },
              { href: "#gallery", text: "Galerie", delay: "delay-250" },
              { href: "#about", text: "Über uns", delay: "delay-300" },
              { href: "#contact", text: "Kontakt", delay: "delay-350" },
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`block py-4 text-center text-gray-700 font-semibold text-2xl hover:text-indigo-600 transform hover:scale-105 transition-all duration-500 ${
                  item.delay
                } ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                } relative group`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">{item.text}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300 opacity-50"></div>
              </a>
            ))}
          </div>

          <div
            className={`transition-all duration-700 delay-400 ${
              isMenuOpen
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-8 opacity-0 scale-95"
            }`}
          >
            <button
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">Portal testen</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full animate-ping"></div>
            </button>
          </div>

          <div
            className={`absolute top-32 right-8 w-32 h-32 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-20 blur-2xl transition-all duration-1000 ${
              isMenuOpen ? "scale-100 rotate-180" : "scale-0 rotate-0"
            }`}
          ></div>
          <div
            className={`absolute bottom-32 left-8 w-24 h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 blur-xl transition-all duration-1000 delay-200 ${
              isMenuOpen ? "scale-100 -rotate-90" : "scale-0 rotate-0"
            }`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;