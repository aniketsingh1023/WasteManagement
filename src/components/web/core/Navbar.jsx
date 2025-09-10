"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  ScanText,
  Map,
  Brain,
  FileText,
  LogOut,
  User,
  TreePine,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { href: "/web/dashboard", label: "Dashboard", icon: Home },
  { href: "/web/ocr", label: "OCR Scanner", icon: ScanText },
  { href: "/web/atlas", label: "FRA Atlas", icon: Map },
  { href: "/web/dss", label: "DSS Analysis", icon: Brain },
  { href: "/web/reports", label: "Reports", icon: FileText },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <motion.nav
      className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 mx-4  mb-6 relative overflow-hidden"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-500/10 opacity-50"></div>

      <div className="relative z-10 flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
            <TreePine className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-slate-800 font-bold text-xl">FRA Portal</span>
            <p className="text-slate-500 text-xs hidden sm:block">
              Forest Rights Management
            </p>
          </div>
        </motion.div>

        {/* Desktop Navigation Links */}
        <motion.div
          className="hidden md:flex items-center space-x-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <motion.div
                key={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Link href={item.href}>
                  <button
                    className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 relative group ${
                      isActive
                        ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg transform scale-105"
                        : "text-slate-700 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 border border-slate-200 hover:border-emerald-300"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden lg:inline">{item.label}</span>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 w-1 h-1 bg-white rounded-full"
                        layoutId="activeIndicator"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ transform: "translateX(-50%)" }}
                      />
                    )}

                    {/* Hover effect */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    )}
                  </button>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* User Actions & Mobile Menu Button */}
        <motion.div
          className="flex items-center space-x-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* User Info - Desktop */}
          <div className="hidden sm:flex items-center space-x-3 px-3 py-2 bg-slate-100 rounded-xl">
            <div className="w-8 h-8 bg-gradient-to-br from-slate-400 to-slate-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="hidden lg:block">
              <p className="text-sm font-semibold text-slate-800">Admin User</p>
              <p className="text-xs text-slate-500">Government Official</p>
            </div>
          </div>

          {/* Logout Button - Desktop */}
          <button
            onClick={() => (window.location.href = "/web/login")}
            className="hidden sm:flex items-center space-x-2 px-4 py-2.5 text-sm font-semibold rounded-xl text-slate-700 border border-slate-200 hover:bg-red-50 hover:text-red-600 hover:border-red-300 transition-all duration-300 group"
          >
            <LogOut className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            <span className="hidden lg:inline">Logout</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 transition-all duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </motion.div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden border-t border-slate-200 bg-white/90 backdrop-blur-sm"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 space-y-2">
            {/* Mobile Navigation Links */}
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={item.href}>
                    <button
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white"
                          : "text-slate-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 hover:text-emerald-600"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  </Link>
                </motion.div>
              );
            })}

            {/* Mobile User Info & Logout */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <div className="flex items-center space-x-3 px-4 py-2">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-400 to-slate-500 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Admin User
                  </p>
                  <p className="text-xs text-slate-500">Government Official</p>
                </div>
              </div>

              <button
                onClick={() => (window.location.href = "/web/login")}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold text-red-600 hover:bg-red-50 border border-red-200 transition-all duration-300"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
