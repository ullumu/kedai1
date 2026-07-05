"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import HeaderLink from "./Navigation/HeaderLink";
import MobileHeaderLink from "./Navigation/MobileHeaderLink";
import { Icon } from "@iconify/react/dist/iconify.js";
import { HeaderData } from "@/data/data";

const Header: React.FC = () => {
  const headerLink = HeaderData;

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 20);
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        navbarOpen
      ) {
        setNavbarOpen(false);
      }
    },
    [navbarOpen],
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside, navbarOpen]);

  useEffect(() => {
    document.body.style.overflow = navbarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navbarOpen]);

  return (
    <header
      className={`fixed top-0 z-40 py-4 w-full transition-all duration-300 ${
        sticky ? "shadow-lg bg-white" : "shadow-none"
      }`}
    >
      <div>
        <div className="container flex items-center justify-between">
          <div>
            <Logo />
          </div>
          <nav className="hidden lg:flex grow items-center gap-4 xl:gap-6  justify-center">
            {headerLink.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className="flex items-center gap-2 lg:gap-3">
            <a
              href="https://wa.me/081933703167"
              target="_blank"
              rel="noreferrer"
              aria-label="Hubungi kami via WhatsApp"
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:scale-105 hover:bg-[#1ea952] sm:px-4 md:px-4 lg:px-4 xl:px-4"
            >
              <Icon icon="mdi:whatsapp" className="text-lg" />
              <span className="hidden md:inline">Hubungi Kami</span>
            </a>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-2 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
              <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${
            navbarOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <div className="flex items-center justify-between gap-2 p-4">
            <div>
              <Logo />
            </div>
            <button
              onClick={() => setNavbarOpen(false)}
              className="hover:cursor-pointer"
              aria-label="Close menu Modal"
            >
              <Icon
                icon="material-symbols:close-rounded"
                width={24}
                height={24}
                className="text-black hover:text-primary text-24 inline-block me-2"
              />
            </button>
          </div>
          <a
            href="https://wa.me/081933703167"
            target="_blank"
            rel="noreferrer"
            aria-label="Hubungi kami via WhatsApp"
            className="mt-6 ml-4 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-3 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-105 hover:bg-[#1ea952]"
          >
            <Icon icon="mdi:whatsapp" className="text-xl" />
            <span className="hidden md:inline">Hubungi Kami</span>
          </a>
          <nav className="flex flex-col items-start p-4">
            {headerLink.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
