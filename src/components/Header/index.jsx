import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./logo.jpg";

export default function Header() {
  const links = [
    {
      name: "Apresentação",
      url: "/apresentacao",
    },
    {
      name: "Fotos",
      url: "/fotos",
    },
    {
      name: "Localização",
      url: "/localizacao",
    },
    {
      name: "Regulamento",
      url: "/regulamento",
    },
    {
      name: "Reserva",
      url: "/reserva",
    },
    {
      name: "Contato",
      url: "/contato",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <header className="bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-28" role="navigation">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" aria-label="Home">
              <img src={logo} alt="Logo Intermares Pousada Tênis" className="w-24 h-24" />
            </Link>
          </div>
          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <ul className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <li key={link.url}>
                  <Link
                    to={link.url}
                    className="text-gray-800 transition-all duration-500 hover:bg-verde-oliva hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Mobile Nav */}
          <div className="-mr-2 flex lg:hidden">
            <button
              type="button"
              onClick={handleMenuToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-400"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open Main Menu</span>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <li key={link.url}>
                <Link
                  to={link.url}
                  className="text-gray-800 hover:bg-verde-oliva hover:text-white block px-3 py-2 rounded-md text-base font-texto font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
