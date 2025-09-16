"use client";

import { useState, useEffect, useRef } from "react";
import {
  Leaf,
  Recycle,
  Camera,
  Truck,
  Gift,
  Star,
  Users,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  User,
  HardHat,
  ShieldCheck,
  Award,
  Smartphone,
  TrendingUp,
  Heart,
  Shield,
  Zap,
  Globe,
  ChevronDown,
  ExternalLink,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
  Building,
  Code,
  MessageCircle,
  FileText,
  HelpCircle,
  Lock,
  Eye,
  ChevronRight,
  Send,
} from "lucide-react";
import Link from "next/link";

export default function SmartWasteLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stats, setStats] = useState({
    users: 0,
    reports: 0,
    credits: 0,
    success: 0,
  });

  const observerRef = useRef();

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Counter animation for stats
  useEffect(() => {
    if (isVisible.stats) {
      const targets = {
        users: 50000,
        reports: 100000,
        credits: 2000000,
        success: 95,
      };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setStats({
          users: Math.floor(targets.users * progress),
          reports: Math.floor(targets.reports * progress),
          credits: Math.floor(targets.credits * progress),
          success: Math.floor(targets.success * progress),
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setStats(targets);
        }
      }, stepTime);

      return () => clearInterval(interval);
    }
  }, [isVisible.stats]);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Camera,
      title: "Smart AI Reporting",
      description:
        "Advanced AI-powered waste detection with precise GPS location tracking",
      color: "from-emerald-400 via-emerald-500 to-emerald-600",
      benefit: "Report 3x faster",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
    {
      icon: Truck,
      title: "Real-time Tracking",
      description:
        "Live collection vehicle monitoring with predictive analytics",
      color: "from-blue-400 via-blue-500 to-blue-600",
      benefit: "Never miss pickup",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Gift,
      title: "Green Rewards",
      description:
        "Earn valuable credits for every eco-friendly action you take",
      color: "from-amber-400 via-amber-500 to-amber-600",
      benefit: "Up to ₹500/month",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Your data protected with military-grade encryption",
      color: "from-purple-400 via-purple-500 to-purple-600",
      benefit: "100% secure",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Environmental Activist, Indore",
      message:
        "Earned ₹1,200 in green credits last month! The AI-powered reporting is incredibly accurate and user-friendly.",
      rating: 5,
      avatar: "PS",
      color: "from-pink-400 to-pink-600",
    },
    {
      name: "Rajesh Kumar",
      role: "Waste Management Worker",
      message:
        "The route optimization feature saved me 2 hours daily. This app revolutionized how I work!",
      rating: 5,
      avatar: "RK",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Dr. Meera Patel",
      role: "City Administrator, Smart City Mission",
      message:
        "Our city cleanliness improved 40% after implementing Smart Waste. Outstanding platform!",
      rating: 5,
      avatar: "MP",
      color: "from-green-400 to-green-600",
    },
  ];

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num.toString();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 relative overflow-x-hidden">
      {/* Google Fonts */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap");

        :root {
          --primary-green: #059669;
          --primary-green-light: #10b981;
          --primary-green-dark: #047857;
        }

        body {
          font-family: "Inter", system-ui, -apple-system, sans-serif;
        }

        .font-poppins {
          font-family: "Poppins", system-ui, sans-serif;
        }

        .font-space {
          font-family: "Space Grotesk", system-ui, sans-serif;
        }

        /* Custom animations */
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
          }
          50% {
            box-shadow: 0 0 40px rgba(16, 185, 129, 0.8);
          }
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .text-gradient {
          background: linear-gradient(135deg, #059669, #10b981, #34d399);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #059669, #10b981);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #047857, #059669);
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-emerald-300/20 to-blue-300/20 rounded-full blur-3xl animate-float"
          style={{
            top: "10%",
            left: "70%",
            animationDelay: "0s",
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-float"
          style={{
            top: "60%",
            left: "10%",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-amber-300/20 to-orange-300/20 rounded-full blur-3xl animate-float"
          style={{
            top: "80%",
            left: "80%",
            animationDelay: "4s",
          }}
        />
      </div>

      {/* Navigation Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 ? "glass-effect shadow-xl" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-2.5 rounded-xl shadow-lg animate-pulse-glow">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-ping" />
              </div>
              <div>
                <h1 className="font-space text-xl font-bold text-gradient">
                  Smart Waste
                </h1>
                <p className="text-xs text-gray-500 font-medium">
                  Green Tech Platform
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["Features", "How it Works", "Testimonials", "Pricing"].map(
                (item, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      scrollToSection(item.toLowerCase().replace(" ", "-"))
                    }
                    className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 group-hover:w-full transition-all duration-300" />
                  </button>
                )
              )}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-lg rounded-2xl mt-2 shadow-xl border border-gray-100">
                {["Features", "How it Works", "Testimonials", "Pricing"].map(
                  (item, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        scrollToSection(item.toLowerCase().replace(" ", "-"))
                      }
                      className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors font-medium"
                    >
                      {item}
                    </button>
                  )
                )}
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <button className="block w-full text-left px-3 py-2 text-gray-700 hover:text-emerald-600 font-medium">
                    Sign In
                  </button>
                  <button className="w-full mt-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2.5 rounded-xl font-semibold">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Hero Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-emerald-50 text-emerald-800 text-sm font-semibold px-4 py-2 rounded-full mb-8 border border-emerald-200 shadow-sm">
            <Star className="w-4 h-4 mr-2 text-emerald-600" />
            Trusted by 50K+ Users Worldwide
            <ChevronRight className="w-4 h-4 ml-2 text-emerald-600" />
          </div>

          {/* Animated Hero Icon */}
          <div className="relative mb-12 flex justify-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 p-12 rounded-3xl shadow-2xl animate-gradient">
                <Recycle
                  className="w-20 h-20 text-white mx-auto animate-spin"
                  style={{ animationDuration: "8s" }}
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-amber-400 to-amber-500 p-4 rounded-2xl animate-bounce shadow-xl">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-6 bg-gradient-to-r from-blue-400 to-blue-500 p-3 rounded-2xl animate-pulse shadow-xl">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div className="absolute top-0 -left-8 bg-gradient-to-r from-purple-400 to-purple-500 p-2 rounded-xl animate-float shadow-lg">
                <Camera className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Hero Title */}
          <h1 className="font-poppins text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Transform Waste into
            <span className="block text-gradient animate-gradient">
              Wealth & Impact
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
            Join India's most advanced waste management ecosystem. Use
            AI-powered reporting, earn substantial rewards, and help build
            sustainable cities - all from your smartphone.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/login">
              <button className="group relative bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-5 px-10 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-3xl overflow-hidden">
                <div className="relative z-10 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 mr-3" />
                  Start Earning Today
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="relative z-10 text-sm opacity-90 mt-1">
                  Free • No Credit Card Required
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </Link>

            <button className="group border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl">
              <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Watch Demo (2 min)
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-emerald-500" />
              <span className="font-medium">Bank-Level Security</span>
            </div>
            <div className="flex items-center">
              <Zap className="w-5 h-5 mr-2 text-amber-500" />
              <span className="font-medium">Instant Setup</span>
            </div>
            <div className="flex items-center">
              <Heart className="w-5 h-5 mr-2 text-red-500" />
              <span className="font-medium">Loved by 50K+ Users</span>
            </div>
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-2 text-blue-500" />
              <span className="font-medium">Works Offline</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        id="stats"
        ref={(el) => el && observerRef.current?.observe(el)}
        className="py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Impact & Results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real numbers from real users making a real difference in their
              communities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                value: formatNumber(stats.users) + "+",
                label: "Active Users",
                color: "from-emerald-500 to-emerald-600",
                bgColor: "from-emerald-50 to-emerald-100",
                borderColor: "border-emerald-200",
              },
              {
                icon: Camera,
                value: formatNumber(stats.reports) + "+",
                label: "Issues Resolved",
                color: "from-blue-500 to-blue-600",
                bgColor: "from-blue-50 to-blue-100",
                borderColor: "border-blue-200",
              },
              {
                icon: Star,
                value: "₹" + formatNumber(stats.credits),
                label: "Credits Earned",
                color: "from-amber-500 to-amber-600",
                bgColor: "from-amber-50 to-amber-100",
                borderColor: "border-amber-200",
              },
              {
                icon: TrendingUp,
                value: stats.success + "%",
                label: "Success Rate",
                color: "from-purple-500 to-purple-600",
                bgColor: "from-purple-50 to-purple-100",
                borderColor: "border-purple-200",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-3xl bg-gradient-to-br ${stat.bgColor} border ${stat.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group`}
              >
                <div
                  className={`bg-gradient-to-r ${stat.color} p-4 rounded-2xl w-fit mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div
                  className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                >
                  {stat.value}
                </div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Features */}
      <section
        id="features"
        className="py-20 px-4 bg-gradient-to-br from-white to-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the future of waste management with cutting-edge AI
              technology and seamless user experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-3xl transition-all duration-500 cursor-pointer group ${
                  activeFeature === index
                    ? `${feature.bgColor} shadow-2xl scale-105 border-2 ${feature.borderColor}`
                    : "bg-white shadow-lg hover:shadow-xl border border-gray-200"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start space-x-6">
                  <div
                    className={`p-5 rounded-2xl bg-gradient-to-r ${feature.color} shadow-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 font-poppins">
                        {feature.title}
                      </h3>
                      <span
                        className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                          activeFeature === index
                            ? "bg-emerald-600 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {feature.benefit}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Active indicator */}
                {activeFeature === index && (
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
                    <div className="absolute top-0 w-3 h-3 bg-emerald-600 rounded-full" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Feature Navigation Dots */}
          <div className="flex justify-center space-x-4">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  activeFeature === index
                    ? "bg-emerald-600 scale-125 shadow-lg"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* User Roles */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for Every Stakeholder
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a citizen, worker, or administrator, we have the
              perfect solution for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: User,
                role: "Citizens",
                description:
                  "Report waste issues, earn rewards, track collections, and contribute to cleaner communities",
                gradient: "from-blue-500 to-purple-600",
                bgGradient: "from-blue-50 to-purple-50",
                borderColor: "border-blue-200",
                features: [
                  "AI-Powered Reporting",
                  "Green Credits System",
                  "Real-time Tracking",
                  "Community Impact",
                ],
              },
              {
                icon: HardHat,
                role: "Workers",
                description:
                  "Optimize routes, update collection status, manage schedules, and improve efficiency",
                gradient: "from-orange-500 to-red-600",
                bgGradient: "from-orange-50 to-red-50",
                borderColor: "border-orange-200",
                features: [
                  "Route Optimization",
                  "Digital Workforce",
                  "Performance Analytics",
                  "Safety Tools",
                ],
              },
              {
                icon: ShieldCheck,
                role: "Administrators",
                description:
                  "Monitor citywide data, analyze trends, make data-driven decisions, and manage operations",
                gradient: "from-emerald-500 to-teal-600",
                bgGradient: "from-emerald-50 to-teal-50",
                borderColor: "border-emerald-200",
                features: [
                  "Dashboard Analytics",
                  "Policy Management",
                  "Resource Planning",
                  "City Reports",
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-3xl bg-gradient-to-br ${item.bgGradient} border ${item.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden`}
              >
                <div
                  className={`bg-gradient-to-r ${item.gradient} p-6 rounded-2xl shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-10 h-10 text-white mx-auto" />
                </div>
                <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-4 text-center">
                  {item.role}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center mb-6">
                  {item.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full mt-8 bg-gradient-to-r ${item.gradient} text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 inline-block ml-2" />
                </button>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 opacity-10">
                  <item.icon className="w-16 h-16 text-gray-900" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Stories, Real Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Smart Waste is transforming lives and communities across
              India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group relative overflow-hidden"
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`bg-gradient-to-r ${testimonial.color} p-4 rounded-2xl mr-4 shadow-lg`}
                  >
                    <span className="text-white font-bold text-lg">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-amber-400 fill-current"
                      />
                    ))}
                  </div>
                </div>

                <blockquote className="text-gray-700 italic leading-relaxed text-lg mb-6">
                  "{testimonial.message}"
                </blockquote>

                <div className="flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Verified User
                </div>

                {/* Decorative gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of users making a difference. Simple setup,
              powerful impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Sign Up & Choose Role",
                desc: "Create your account in under 60 seconds. Select your role as citizen, worker, or administrator and get personalized onboarding.",
                icon: Smartphone,
                color: "from-blue-500 to-blue-600",
                bgColor: "from-blue-50 to-blue-100",
              },
              {
                step: "02",
                title: "Take Smart Action",
                desc: "Use AI-powered tools to report waste, optimize routes, or analyze data. Our intelligent system guides you every step of the way.",
                icon: Camera,
                color: "from-emerald-500 to-emerald-600",
                bgColor: "from-emerald-50 to-emerald-100",
              },
              {
                step: "03",
                title: "Earn & Create Impact",
                desc: "Watch your green credits grow while making real environmental impact. Track your contribution to cleaner, smarter cities.",
                icon: Award,
                color: "from-amber-500 to-amber-600",
                bgColor: "from-amber-50 to-amber-100",
              },
            ].map((item, index) => (
              <div key={index} className="relative text-center group">
                {/* Step Number */}
                <div
                  className={`bg-gradient-to-r ${item.color} text-white w-20 h-20 rounded-3xl flex items-center justify-center font-bold text-2xl shadow-xl mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 font-space`}
                >
                  {item.step}
                </div>

                {/* Content Card */}
                <div
                  className={`bg-gradient-to-br ${item.bgColor} p-8 rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-200`}
                >
                  <div
                    className={`bg-gradient-to-r ${item.color} p-4 rounded-2xl w-fit mx-auto mb-6 shadow-lg`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {item.desc}
                  </p>
                </div>

                {/* Connecting Line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-full w-12 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm20 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl w-32 h-32 mx-auto mb-12 shadow-2xl">
            <Download className="w-16 h-16 text-white mx-auto mt-4" />
          </div>

          <h2 className="font-poppins text-4xl md:text-6xl font-bold mb-8">
            Ready to Transform Your City?
          </h2>
          <p className="text-emerald-100 mb-12 leading-relaxed text-xl max-w-2xl mx-auto">
            Join 50,000+ users already making their cities cleaner and earning
            rewards. Start your sustainable journey today!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="group bg-white text-emerald-600 font-bold py-5 px-10 rounded-2xl shadow-2xl hover:bg-gray-50 transition-all transform hover:scale-105 flex items-center">
              <Smartphone className="w-6 h-6 mr-3" />
              Launch Web App
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex space-x-4">
              <button className="bg-black/20 backdrop-blur-sm text-white py-5 px-6 rounded-2xl font-semibold flex items-center border border-white/20 hover:bg-black/30 transition-all shadow-lg">
                <span className="mr-3 text-2xl">📱</span>
                App Store
              </button>
              <button className="bg-black/20 backdrop-blur-sm text-white py-5 px-6 rounded-2xl font-semibold flex items-center border border-white/20 hover:bg-black/30 transition-all shadow-lg">
                <span className="mr-3 text-2xl">🤖</span>
                Google Play
              </button>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-white/20">
            <div className="flex items-center text-white/90">
              <Shield className="w-5 h-5 mr-2" />
              <span className="font-medium">Bank-Level Security</span>
            </div>
            <div className="flex items-center text-white/90">
              <Globe className="w-5 h-5 mr-2" />
              <span className="font-medium">Works Offline</span>
            </div>
            <div className="flex items-center text-white/90">
              <Zap className="w-5 h-5 mr-2" />
              <span className="font-medium">Instant Setup</span>
            </div>
            <div className="flex items-center text-white/90">
              <Award className="w-5 h-5 mr-2" />
              <span className="font-medium">Reward Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-3 rounded-xl">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-space text-2xl font-bold text-gradient">
                    Smart Waste
                  </h3>
                  <p className="text-gray-400 font-medium">
                    Green Tech Platform
                  </p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg mb-6 max-w-md">
                Revolutionizing waste management through AI-powered technology,
                creating cleaner cities and sustainable communities across
                India.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 p-3 rounded-xl hover:bg-emerald-600 transition-colors duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 font-poppins">Platform</h4>
              <ul className="space-y-3">
                {[
                  "Features",
                  "How it Works",
                  "Pricing",
                  "API Documentation",
                  "System Status",
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 flex items-center group"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold text-lg mb-6 font-poppins">Support</h4>
              <ul className="space-y-3">
                {[
                  "Help Center",
                  "Contact Us",
                  "Privacy Policy",
                  "Terms of Service",
                  "Security",
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 flex items-center group"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <div className="bg-emerald-600 p-3 rounded-xl mr-4">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Call us</p>
                  <p className="text-white font-semibold">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-emerald-600 p-3 rounded-xl mr-4">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email us</p>
                  <p className="text-white font-semibold">
                    hello@smartwaste.in
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-emerald-600 p-3 rounded-xl mr-4">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Visit us</p>
                  <p className="text-white font-semibold">
                    Indore, Madhya Pradesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 Smart Waste. All rights reserved. Made with ❤️ in India.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Powered by</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-emerald-400 font-medium">
                  AI Technology
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 z-50 group"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </div>
  );
}
