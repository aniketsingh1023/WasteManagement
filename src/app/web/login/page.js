"use client";

import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Lock,
  ChevronDown,
  Eye,
  EyeOff,
  TreePine,
  Shield,
  Users,
  Building,
  Sparkles,
} from "lucide-react";

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState("govt");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [particles, setParticles] = useState([]);

  const roles = [
    {
      value: "govt",
      label: "Government Official",
      icon: Building,
      color: "from-blue-500 to-blue-600",
      description: "Manage forest policies and regulations",
    },
    {
      value: "ngo",
      label: "NGO Representative",
      icon: Shield,
      color: "from-emerald-500 to-emerald-600",
      description: "Monitor forest rights implementation",
    },
    {
      value: "community",
      label: "Community Member",
      icon: Users,
      color: "from-amber-500 to-amber-600",
      description: "Access and claim forest rights",
    },
  ];

  // Generate particles only on client side to avoid hydration mismatch
  useEffect(() => {
    const generatedParticles = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 3,
      animationDuration: 3 + Math.random() * 2,
    }));
    setParticles(generatedParticles);
  }, []);

  const selectedRoleData = roles.find((role) => role.value === selectedRole);
  const SelectedIcon = selectedRoleData?.icon || Building;

  const handleLogin = () => {
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      window.location.href = "/web/dashboard";
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements - Only render after hydration */}
      <div className="absolute inset-0 opacity-10">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-20 animate-bounce"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative Background Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div
        className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 blur-xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-15 blur-xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div
        className="w-full max-w-md transform transition-all duration-700 ease-out"
        style={{
          animation: `slideUp 0.8s ease-out forwards`,
        }}
      >
        <style jsx>{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          @keyframes shimmer {
            0% {
              background-position: -200% center;
            }
            100% {
              background-position: 200% center;
            }
          }
        `}</style>

        {/* Header */}
        <div
          className="text-center mb-8 transform transition-all duration-700 ease-out"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-green-600 rounded-2xl shadow-lg transform rotate-3 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-emerald-400 via-teal-400 to-green-500 rounded-2xl p-4 shadow-xl">
              <TreePine className="w-8 h-8 text-white" />
              <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-300 animate-pulse" />
            </div>
          </div>

          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent mb-3">
            FRA Atlas & DSS
          </h1>
          <p className="text-slate-600 text-lg font-medium">
            AI-powered Forest Rights Management
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto mt-3"></div>
        </div>

        {/* Login Card */}
        <div
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 transform transition-all duration-700 ease-out relative overflow-hidden"
          style={{ animationDelay: "0.4s" }}
        >
          {/* Card shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse opacity-0 hover:opacity-100 transition-opacity duration-1000"></div>

          <div className="text-center mb-8 relative z-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Welcome Back
            </h2>
            <p className="text-slate-500">Please sign in to your account</p>
          </div>

          <div className="space-y-6 relative z-10">
            {/* Role Selection */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <SelectedIcon className="w-4 h-4" />
                Select Your Role
              </label>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between p-4 bg-white border-2 border-slate-200 rounded-2xl hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${selectedRoleData?.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <SelectedIcon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <span className="font-semibold text-slate-900 block">
                        {selectedRoleData?.label}
                      </span>
                      <span className="text-sm text-slate-600">
                        {selectedRoleData?.description}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-all duration-300 ${
                      isDropdownOpen ? "rotate-180 text-emerald-500" : ""
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <div
                    className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl z-20 overflow-hidden transform transition-all duration-300 ease-out"
                    style={{
                      animation: "slideUp 0.3s ease-out forwards",
                    }}
                  >
                    {roles.map((role, index) => {
                      const RoleIcon = role.icon;
                      return (
                        <button
                          key={role.value}
                          onClick={() => {
                            setSelectedRole(role.value);
                            setIsDropdownOpen(false);
                          }}
                          className="w-full flex items-center space-x-4 p-4 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-300 group border-b border-slate-100 last:border-b-0"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div
                            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            <RoleIcon className="w-5 h-5 text-white" />
                          </div>
                          <div className="text-left">
                            <span className="font-semibold text-slate-900 block group-hover:text-emerald-600 transition-colors duration-300">
                              {role.label}
                            </span>
                            <span className="text-sm text-slate-600">
                              {role.description}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <div className="relative group">
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 blur-sm transition-all duration-300 ${
                    focusedField === "email" ? "opacity-20" : ""
                  }`}
                ></div>
                <div className="relative">
                  <Mail
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                      focusedField === "email"
                        ? "text-emerald-500"
                        : "text-slate-400"
                    }`}
                  />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 bg-white backdrop-blur-sm placeholder:text-slate-400 text-slate-800 font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Password
              </label>
              <div className="relative group">
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 blur-sm transition-all duration-300 ${
                    focusedField === "password" ? "opacity-20" : ""
                  }`}
                ></div>
                <div className="relative">
                  <Lock
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                      focusedField === "password"
                        ? "text-emerald-500"
                        : "text-slate-400"
                    }`}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedField("password")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-12 py-4 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 bg-white backdrop-blur-sm placeholder:text-slate-400 text-slate-800 font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-emerald-500 transition-colors duration-300"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-3 cursor-pointer group">
                <div className="relative">
                  <input type="checkbox" className="sr-only" />
                  <div className="w-5 h-5 bg-white border-2 border-slate-300 rounded group-hover:border-emerald-400 transition-colors duration-300"></div>
                  <div className="absolute inset-0 w-5 h-5 bg-gradient-to-br from-emerald-500 to-teal-500 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors duration-300">
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="text-sm text-emerald-600 hover:text-emerald-800 font-medium hover:underline transition-all duration-300"
              >
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:via-teal-600 hover:to-emerald-700 text-white font-semibold py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing you in...</span>
                </div>
              ) : (
                <span className="relative z-10">Sign In</span>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>

            {/* Divider */}
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gradient-to-r from-transparent via-slate-200 to-transparent" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white text-slate-500 text-sm font-medium">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Guest Access */}
            <button
              onClick={handleLogin}
              className="w-full border-2 border-slate-200 hover:border-emerald-300 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 text-slate-700 hover:text-emerald-700 font-semibold py-4 rounded-2xl flex items-center justify-center space-x-3 transition-all duration-300 transform hover:scale-[1.02] group"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-slate-200 to-slate-300 group-hover:from-emerald-200 group-hover:to-teal-200 rounded-xl flex items-center justify-center transition-all duration-300">
                <User className="w-4 h-4 text-slate-600 group-hover:text-emerald-600 transition-colors duration-300" />
              </div>
              <span>Continue as Guest</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div
          className="text-center mt-8 transform transition-all duration-700 ease-out"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-slate-600">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-emerald-600 hover:text-emerald-800 font-semibold hover:underline transition-all duration-300"
            >
              Request Access
            </a>
          </p>
          <div className="flex items-center justify-center space-x-4 mt-4 text-xs text-slate-400">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span>Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}
