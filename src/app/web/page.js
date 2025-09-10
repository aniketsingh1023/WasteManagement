"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Map,
  FileText,
  Globe,
  Brain,
  AlertTriangle,
  Users,
  Clock,
  ShieldCheck,
  Upload,
  ScanText,
  Layers,
  CheckCircle,
  FileCheck,
  ArrowRight,
  TreePine,
  Sparkles,
  ChevronRight,
  PlayCircle,
  Shield,
  BarChart3,
} from "lucide-react";

// ScrollLink component for smooth scrolling
function ScrollLink({ id, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <a href={`#${id}`} onClick={handleClick} className="cursor-pointer">
      {children}
    </a>
  );
}

export default function LandingPage() {
  const features = [
    {
      title: "Intelligent Multi-lingual OCR",
      description:
        "Advanced AI-powered document processing with 94%+ accuracy for handwritten and printed FRA documents in multiple regional languages.",
      icon: FileText,
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-100",
    },
    {
      title: "WebGIS Atlas & Monitoring",
      description:
        "Interactive geospatial mapping platform with real-time satellite imagery and comprehensive boundary visualization.",
      icon: Globe,
      color: "from-emerald-500 to-green-600",
      bgColor: "from-emerald-50 to-green-100",
    },
    {
      title: "AI-Powered Decision Support",
      description:
        "Smart recommendation engine that matches FRA holders with relevant government schemes and benefits.",
      icon: Brain,
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-100",
    },
    {
      title: "Anomaly & Risk Detection",
      description:
        "Proactive monitoring system that identifies potential issues and compliance risks in real-time.",
      icon: AlertTriangle,
      color: "from-amber-500 to-orange-600",
      bgColor: "from-amber-50 to-orange-100",
    },
  ];

  const benefits = [
    {
      title: "Empowering Communities",
      description:
        "Transparent access to information and streamlined claim processes for forest communities.",
      icon: Users,
      stats: "2,340+ Communities",
    },
    {
      title: "Faster Verification",
      description:
        "Reduced processing time from months to days with automated validation systems.",
      icon: Clock,
      stats: "78% Faster Processing",
    },
    {
      title: "Transparent Implementation",
      description:
        "End-to-end visibility with audit trails and real-time status tracking.",
      icon: ShieldCheck,
      stats: "100% Transparency",
    },
  ];

  const workflow = [
    {
      step: "1",
      title: "Upload Document",
      description: "Scan and upload FRA documents using our secure platform",
      icon: Upload,
    },
    {
      step: "2",
      title: "OCR & AI Processing",
      description: "Advanced AI extracts and validates data with high accuracy",
      icon: ScanText,
    },
    {
      step: "3",
      title: "Atlas Visualization",
      description: "View claims on interactive maps with satellite imagery",
      icon: Layers,
    },
    {
      step: "4",
      title: "DSS Recommendations",
      description: "Get personalized scheme recommendations and benefits",
      icon: CheckCircle,
    },
    {
      step: "5",
      title: "Report Generation",
      description: "Comprehensive reports and analytics for stakeholders",
      icon: FileCheck,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer flex items-center space-x-3"
          >
            <TreePine className="w-8 h-8 text-[#00BFA6]" />
            <span className="text-[#0D1B2A] font-bold text-xl">FRA Portal</span>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <ScrollLink id="hero">
                <span className="text-[#0D1B2A] hover:text-[#00BFA6] transition-colors duration-300 cursor-pointer">
                  Home
                </span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink id="features">
                <span className="text-[#0D1B2A]  hover:text-[#00BFA6] transition-colors duration-300 cursor-pointer">
                  Features
                </span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink id="benefits">
                <span className="text-[#0D1B2A]  hover:text-[#00BFA6] transition-colors duration-300 cursor-pointer">
                  Benefits
                </span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink id="how-it-works">
                <span className="text-[#0D1B2A]  hover:text-[#00BFA6] transition-colors duration-300 cursor-pointer">
                  How It Works
                </span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink id="contact">
                <span className="text-[#0D1B2A]  hover:text-[#00BFA6] transition-colors duration-300 cursor-pointer">
                  Contact
                </span>
              </ScrollLink>
            </li>
          </ul>

          {/* Login Button */}
          <button
            onClick={() => (window.location.href = "/web/login")}
            className="hidden md:block bg-[#00BFA6] hover:bg-green-500 text-[#0D1B2A] font-semibold px-6 py-2 rounded-lg transition-all duration-300"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center px-4 py-20"
        >
        

          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 mb-8">
                  <div className="relative bg-gradient-to-br from-[#00BFA6] to-[#FFC107] rounded-3xl p-6 shadow-2xl">
                    <Map className="w-12 h-12 text-white" />
                    <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-300 animate-pulse" />
                  </div>
                </div>

                <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-[#0D1B2A] ">
                  AI-Powered FRA Atlas
                  <br />
                  <span className="bg-gradient-to-r from-[#00BFA6] to-[#FFC107] bg-clip-text text-transparent">
                    & Decision Support System
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto">
                  Digitizing, Mapping, and Empowering Communities under the{" "}
                  <span className="font-semibold text-[#00BFA6]">
                    Forest Rights Act (FRA)
                  </span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              >
                <button
                  onClick={() => (window.location.href = "/web/login")}
                  className="group px-8 py-4 bg-[#00BFA6] text-[#0D1B2A] rounded-2xl hover:bg-[#FFC107] transition-all duration-300 font-semibold text-lg shadow-xl transform hover:scale-105 flex items-center space-x-3"
                >
                  <span>Login to Portal</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <ScrollLink id="features">
                  <button className="group px-8 py-4 border-2 border-[#00BFA6] text-[#00BFA6] rounded-2xl hover:bg-[#00BFA6] hover:text-[#0D1B2A] transition-all duration-300 font-semibold text-lg flex items-center space-x-3">
                    <PlayCircle className="w-5 h-5" />
                    <span>Learn More</span>
                  </button>
                </ScrollLink>
              </motion.div>

              {/* Hero Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
              >
                {[
                  {
                    label: "Claims Processed",
                    value: "1,247+",
                    icon: FileText,
                  },
                  { label: "Districts Covered", value: "156", icon: Map },
                  { label: "Success Rate", value: "94.2%", icon: BarChart3 },
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg border border-white/20 p-6 text-center"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00BFA6] to-[#FFC107] rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gray-700 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
                Powerful Features
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our comprehensive platform combines cutting-edge AI technology
                with geospatial mapping to transform FRA implementation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-8 h-full hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 relative overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                      ></div>

                      <div className="relative z-10">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>

                        <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                          {feature.title}
                        </h3>

                        <p className="text-slate-600 leading-relaxed">
                          {feature.description}
                        </p>

                        <div className="mt-6 flex items-center text-emerald-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span>Learn More</span>
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          id="benefits"
          className="py-24 px-4 bg-gradient-to-r from-slate-100 to-emerald-50"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-8">
                  Why FRA Atlas?
                </h2>
                <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                  Transforming forest rights implementation through technology,
                  ensuring transparency and empowerment for all stakeholders.
                </p>

                <div className="space-y-8">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <motion.div
                        key={benefit.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-6 group"
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-[#00BFA6] to-[#FFC107] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                            {benefit.title}
                          </h3>
                          <p className="text-slate-600 mb-3 leading-relaxed">
                            {benefit.description}
                          </p>
                          <div className="text-[#00BFA6] font-bold text-lg">
                            {benefit.stats}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-12 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#00BFA6] to-[#FFC107] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                    <Shield className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-6">
                    Secure & Compliant Platform
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    Built with government-grade security standards, ensuring
                    data protection and regulatory compliance for all
                    stakeholders.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#00BFA6] mb-1">
                        256-bit
                      </div>
                      <div className="text-sm text-slate-600">Encryption</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#00BFA6] mb-1">
                        99.9%
                      </div>
                      <div className="text-sm text-slate-600">Uptime</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
                How It Works
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our streamlined workflow ensures efficient processing from
                document upload to final report generation
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#00BFA6] to-[#FFC107] transform -translate-y-1/2 hidden lg:block"></div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {workflow.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="relative group"
                    >
                      <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-8 text-center hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

                        <div className="relative z-10">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#00BFA6] to-[#FFC107] rounded-xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {step.step}
                          </div>

                          <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-emerald-100 group-hover:to-teal-100 transition-all duration-300">
                            <Icon className="w-8 h-8 text-slate-600 group-hover:text-emerald-600 transition-colors duration-300" />
                          </div>

                          <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                            {step.title}
                          </h3>

                          <p className="text-slate-600 text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-[#00BFA6] to-[#FFC107] rounded-full shadow-lg hidden lg:block group-hover:scale-125 transition-transform duration-300"></div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 bg-[#00BFA6] rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-20 right-20 w-80 h-80 bg-[#FFC107] rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Transforming FRA Implementation
                <br />
                <span className="bg-gradient-to-r from-[#00BFA6] to-[#FFC107] bg-clip-text text-transparent">
                  with AI + GIS
                </span>
              </h2>

              <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                Join the digital revolution in forest rights management. Empower
                communities, streamline processes, and ensure transparent
                implementation.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => (window.location.href = "/web/login")}
                className="group px-12 py-6 bg-gradient-to-r from-[#00BFA6] to-[#FFC107] text-[#0D1B2A] rounded-2xl hover:from-[#FFC107] hover:to-[#00BFA6] transition-all duration-300 font-bold text-xl shadow-2xl flex items-center space-x-4 mx-auto"
              >
                <span>Get Started</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-[#0D1B2A] text-white py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00BFA6] to-[#FFC107] rounded-xl flex items-center justify-center">
                    <TreePine className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold">FRA Atlas & DSS</span>
                </div>
                <p className="text-slate-400 leading-relaxed max-w-md">
                  Empowering forest communities through technology. Transforming
                  FRA implementation with AI-powered solutions and transparent
                  processes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="block text-slate-400 hover:text-[#00BFA6] transition-colors duration-300"
                  >
                    About FRA
                  </a>
                  <a
                    href="#"
                    className="block text-slate-400 hover:text-[#00BFA6] transition-colors duration-300"
                  >
                    Documentation
                  </a>
                  <a
                    href="#"
                    className="block text-slate-400 hover:text-[#00BFA6] transition-colors duration-300"
                  >
                    Support
                  </a>
                  <a
                    href="#"
                    className="block text-slate-400 hover:text-[#00BFA6] transition-colors duration-300"
                  >
                    Contact
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-6">Contact</h3>
                <div className="space-y-3 text-slate-400">
                  <p>Ministry of Tribal Affairs</p>
                  <p>Government of India</p>
                  <p>support@fraatlas.gov.in</p>
                  <p>+91-11-1234-5678</p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
              <p>
                &copy; 2025 FRA Atlas & DSS. All rights reserved. | Government
                of India Initiative
              </p>
            </div>
          </div>
        </footer>
      </main>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </div>
  );
}
