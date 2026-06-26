"use client";

import { useState } from "react";
import { Link } from "@heroui/react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  const navLinks = (
    <>
      <Link href="/add-expense">
        <li className={`${pathName === "/add-expense" ? "text-blue-600" : ""}`}>
          Add Expense
        </li>
      </Link>

      <Link href="/expense-list">
        <li
          className={`${pathName === "/expense-list" ? "text-blue-600" : ""}`}
        >
          Expense List
        </li>
      </Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="max-w-330 mx-auto flex py-3 items-center justify-between px-3">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div>
            <Link href="/">
              <h2 className="font-bold text-xl md:text-2xl text-[]">
                Expense Tracker
              </h2>
            </Link>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">{navLinks}</ul>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">{navLinks}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
