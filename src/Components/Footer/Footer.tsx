"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white/80 backdrop-blur-lg">
      <div className="max-w-330 mx-auto px-3 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo + Description */}
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                Expense Tracker
              </h2>
            </div>

            <p className="mt-4 text-gray-600 leading-7 max-w-100">
              Track your daily expenses, manage budgets, and gain better control
              over your finances with smart insights and analytics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/add-expense">Add Expense</Link>
              </li>
              <li>
                <Link href="/expense-list">Expense List</Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Features</h3>
            <ul className="space-y-3 text-gray-600">
              <li>Expense Tracking</li>
              <li>Budget Planning</li>
              <li>Financial Analytics</li>
              <li>Monthly Reports</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                <FaTwitter size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} Expense Tracker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
