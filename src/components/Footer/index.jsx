import React from "react";
import logo from "./logo.jpg";
import { Link } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="mx-auto px-4 sm:px-6 lg:px-8 bg-white py-4 flex flex-col justify-center items-center lg:flex-row lg:justify-between">
      <div className="flex flex-col items-center">
        <Link to="/" title="Ir para a página inicial">
          <img
            src={logo}
            alt="Logo Intermares Pousada Tênis"
            className="w-24 h-24 mb-4"
          />
        </Link>

        <div className="flex flex-col items-center lg:flex-row">
          <p className="font-medium text-xl md:text-2xl lg:text-xl">
            Siga-nos:
          </p>
          <div className="flex gap-2 pb-4 lg:pb-0 lg:gap-1">
            <a
              className="text-2xl md:text-4xl lg:text-3xl"
              href="https://www.instagram.com/intermarespousada/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram Intermares Pousada Tênis"
            >
              <AiOutlineInstagram />
            </a>
            <a
              className="text-2xl md:text-4xl lg:text-3xl"
              href="https://api.whatsapp.com/send?phone=558398644064"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp Intermares Pousada Tênis"
            >
              <AiOutlineWhatsApp />
            </a>
          </div>
        </div>
      </div>

      <div className="flex gap-1 items-center">
        <p className="md:text-lg lg:text-lg">
          &copy; 2023 Intermares Pousada - Cabedelo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
