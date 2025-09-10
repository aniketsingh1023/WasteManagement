"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Brain,
  User,
  ChevronDown,
  CheckCircle,
  AlertTriangle,
  Star,
  TrendingUp,
  Shield,
  Info,
  Lightbulb,
  Target,
  Award,
  FileText,
  Users,
  MapPin,
  Calendar,
  Zap,
  Download,
  Share2,
} from "lucide-react";
import Navbar from "@/components/web/core/Navbar";

export default function DSSPage() {
  const [selectedHolder, setSelectedHolder] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const fraHolders = [
    {
      id: "1",
      name: "Rajesh Kumar Mahato",
      village: "Jhilimili",
      district: "Purulia",
      area: "2.45 acres",
      claimType: "Individual",
    },
    {
      id: "2",
      name: "Sunita Devi",
      village: "Sareikela",
      district: "East Singhbhum",
      area: "1.8 acres",
      claimType: "Individual",
    },
    {
      id: "3",
      name: "Arjun Singh",
      village: "Chaibasa",
      district: "West Singhbhum",
      area: "3.2 acres",
      claimType: "Community",
    },
    {
      id: "4",
      name: "Kamala Oraon",
      village: "Ranchi",
      district: "Ranchi",
      area: "4.1 acres",
      claimType: "Community",
    },
  ];

  const selectedHolderData = fraHolders.find(
    (holder) => holder.id === selectedHolder
  );

  const recommendations = [
    {
      scheme: "Mahatma Gandhi NREGA",
      description:
        "Employment guarantee scheme for rural households under forest rights",
      eligibility: 95,
      benefits: "₹2,50,000 annual work guarantee + skill development",
      priority: "High",
      icon: "🏗️",
      color: "from-emerald-500 to-green-600",
      bgColor: "from-emerald-50 to-green-100",
      estimatedAmount: "₹2,50,000/year",
      timeline: "15-30 days",
    },
    {
      scheme: "PM-KISAN Scheme",
      description:
        "Direct income support to small and marginal farmer families",
      eligibility: 88,
      benefits: "₹6,000 per year direct benefit transfer to bank account",
      priority: "High",
      icon: "🌾",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-100",
      estimatedAmount: "₹6,000/year",
      timeline: "7-14 days",
    },
    {
      scheme: "Forest Development Agency",
      description:
        "Sustainable forest management and livelihood enhancement program",
      eligibility: 92,
      benefits: "Technical training + equipment support + market linkage",
      priority: "Medium",
      icon: "🌲",
      color: "from-amber-500 to-orange-600",
      bgColor: "from-amber-50 to-orange-100",
      estimatedAmount: "₹75,000 support",
      timeline: "30-45 days",
    },
    {
      scheme: "Skill Development Program",
      description:
        "Vocational training and capacity building for forest communities",
      eligibility: 76,
      benefits: "Free training + certification + placement assistance",
      priority: "Medium",
      icon: "🎓",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-100",
      estimatedAmount: "Free training",
      timeline: "60-90 days",
    },
  ];

  const trustworthinessFactors = [
    {
      factor: "Document Authenticity",
      score: 94,
      status: "verified",
      details: "All documents verified against government database",
    },
    {
      factor: "Land Survey Validation",
      score: 89,
      status: "verified",
      details: "Boundaries confirmed through GPS mapping",
    },
    {
      factor: "Community Verification",
      score: 91,
      status: "verified",
      details: "Local gram sabha approval received",
    },
    {
      factor: "Legal Compliance",
      score: 87,
      status: "verified",
      details: "Meets all FRA Act 2006 requirements",
    },
  ];

  const analysisMetrics = [
    {
      label: "Overall Eligibility",
      value: "87%",
      icon: Target,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      label: "Risk Assessment",
      value: "Low",
      icon: Shield,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      label: "Processing Time",
      value: "15 days",
      icon: Calendar,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      label: "Success Rate",
      value: "94%",
      icon: Star,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  const runDSSAnalysis = () => {
    if (selectedHolder) {
      setIsAnalyzing(true);

      // Simulate analysis process
      setTimeout(() => {
        setIsAnalyzing(false);
        setShowResults(true);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          className="mb-8 transform transition-all duration-700 ease-out"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4 mb-4">
            <button
              onClick={() => (window.location.href = "/web/dashboard")}
              className="flex items-center space-x-2 text-slate-600 hover:text-emerald-600 transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:border-emerald-300 group-hover:bg-emerald-50 transition-all duration-300">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <span className="font-medium">Back to Dashboard</span>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Decision Support System
              </h1>
              <p className="text-slate-600 text-lg">
                AI-powered scheme recommendations and eligibility analysis
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Panel */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6 h-fit">
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                Analysis Input
              </h2>

              <div className="space-y-6">
                {/* FRA Holder Selection */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700">
                    Select FRA Holder
                  </label>
                  <div className="relative">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full flex items-center justify-between p-4 bg-white border-2 border-slate-200 rounded-xl hover:border-emerald-400 hover:shadow-lg transition-all duration-300 group"
                    >
                      {selectedHolderData ? (
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                            <User className="w-5 h-5 text-white" />
                          </div>
                          <div className="text-left">
                            <p className="font-semibold text-slate-800">
                              {selectedHolderData.name}
                            </p>
                            <p className="text-sm text-slate-600">
                              {selectedHolderData.village},{" "}
                              {selectedHolderData.district}
                            </p>
                            <p className="text-xs text-slate-500">
                              {selectedHolderData.area} •{" "}
                              {selectedHolderData.claimType}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                            <User className="w-5 h-5 text-slate-400" />
                          </div>
                          <span className="text-slate-500 font-medium">
                            Choose FRA Holder for Analysis
                          </span>
                        </div>
                      )}
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-all duration-300 ${
                          isDropdownOpen ? "rotate-180 text-emerald-500" : ""
                        }`}
                      />
                    </button>

                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl z-20 overflow-hidden max-h-80 overflow-y-auto"
                      >
                        {fraHolders.map((holder, index) => (
                          <motion.button
                            key={holder.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => {
                              setSelectedHolder(holder.id);
                              setIsDropdownOpen(false);
                              setShowResults(false);
                            }}
                            className="w-full flex items-center space-x-4 p-4 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-300 text-left border-b border-slate-100 last:border-b-0"
                          >
                            <div className="w-10 h-10 bg-gradient-to-br from-slate-400 to-slate-500 rounded-xl flex items-center justify-center">
                              <User className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-slate-800">
                                {holder.name}
                              </p>
                              <p className="text-sm text-slate-600">
                                {holder.village}, {holder.district}
                              </p>
                              <div className="flex items-center space-x-4 mt-1">
                                <span className="text-xs text-slate-500">
                                  {holder.area}
                                </span>
                                <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full">
                                  {holder.claimType}
                                </span>
                              </div>
                            </div>
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Analysis Button */}
                <button
                  onClick={runDSSAnalysis}
                  disabled={!selectedHolder || isAnalyzing}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    selectedHolder && !isAnalyzing
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg transform hover:scale-105"
                      : "bg-slate-200 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  {isAnalyzing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <Brain className="w-5 h-5" />
                      <span>Run DSS Analysis</span>
                    </>
                  )}
                </button>

                {/* Processing Steps */}
                {isAnalyzing && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    <h4 className="text-sm font-semibold text-slate-700">
                      Processing Steps:
                    </h4>
                    {[
                      "Analyzing FRA holder profile",
                      "Matching scheme criteria",
                      "Calculating eligibility scores",
                      "Generating recommendations",
                    ].map((step, index) => (
                      <div key={step} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-sm text-slate-600">{step}</span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* Info Panel */}
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mt-0.5">
                      <Info className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">
                        How DSS Works
                      </h4>
                      <div className="text-sm text-blue-800 space-y-1">
                        <p>• Analyzes FRA holder profile and land details</p>
                        <p>• Matches against 200+ government scheme criteria</p>
                        <p>• Uses AI to provide prioritized recommendations</p>
                        <p>• Validates eligibility and legal compliance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Panel */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {!showResults ? (
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-8 h-full flex items-center justify-center">
                <div className="text-center max-w-md">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">
                    Ready for AI Analysis
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Select an FRA holder and run DSS analysis to get
                    personalized scheme recommendations with eligibility scores
                    and detailed insights.
                  </p>
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Analysis Metrics */}
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    Analysis Overview
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {analysisMetrics.map((metric, index) => {
                      const Icon = metric.icon;
                      return (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + index * 0.1 }}
                          className="text-center p-4 rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
                        >
                          <div
                            className={`w-12 h-12 ${metric.bgColor} rounded-xl flex items-center justify-center mx-auto mb-3`}
                          >
                            <Icon className={`w-6 h-6 ${metric.color}`} />
                          </div>
                          <p className="text-2xl font-bold text-slate-800 mb-1">
                            {metric.value}
                          </p>
                          <p className="text-sm text-slate-600 font-medium">
                            {metric.label}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Recommended Schemes */}
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-slate-800 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                        <Lightbulb className="w-4 h-4 text-white" />
                      </div>
                      Recommended Schemes
                    </h3>
                    <div className="flex space-x-2">
                      <button className="p-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {recommendations.map((scheme, index) => (
                      <motion.div
                        key={scheme.scheme}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="p-6 rounded-2xl border-2 border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                      >
                        {/* Background gradient */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${scheme.bgColor} opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                        ></div>

                        <div className="relative z-10">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-start space-x-4">
                              <div
                                className={`w-12 h-12 bg-gradient-to-br ${scheme.color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}
                              >
                                {scheme.icon}
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-bold text-slate-800 mb-2">
                                  {scheme.scheme}
                                </h4>
                                <p className="text-slate-600 mb-3 leading-relaxed">
                                  {scheme.description}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                  <div>
                                    <span className="font-semibold text-slate-700">
                                      Benefits:
                                    </span>
                                    <p className="text-slate-600">
                                      {scheme.benefits}
                                    </p>
                                  </div>
                                  <div>
                                    <span className="font-semibold text-slate-700">
                                      Amount:
                                    </span>
                                    <p className="text-slate-600">
                                      {scheme.estimatedAmount}
                                    </p>
                                  </div>
                                  <div>
                                    <span className="font-semibold text-slate-700">
                                      Timeline:
                                    </span>
                                    <p className="text-slate-600">
                                      {scheme.timeline}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center space-x-2 mb-2">
                                <span className="text-2xl font-bold text-slate-800">
                                  {scheme.eligibility}%
                                </span>
                                <CheckCircle className="w-6 h-6 text-emerald-500" />
                              </div>
                              <span
                                className={`px-3 py-1 text-sm font-semibold rounded-full ${
                                  scheme.priority === "High"
                                    ? "bg-red-100 text-red-700 border border-red-200"
                                    : "bg-amber-100 text-amber-700 border border-amber-200"
                                }`}
                              >
                                {scheme.priority} Priority
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Trustworthiness Assessment */}
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    Trustworthiness Assessment
                  </h3>

                  <div className="p-4 bg-gradient-to-r from-emerald-50 to-green-100 border border-emerald-200 rounded-xl mb-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <CheckCircle className="w-6 h-6 text-emerald-600" />
                      <span className="text-lg font-bold text-emerald-800">
                        High Trustworthiness Score
                      </span>
                      <span className="px-3 py-1 bg-emerald-200 text-emerald-800 rounded-full text-sm font-semibold">
                        90.25%
                      </span>
                    </div>
                    <p className="text-sm text-emerald-700 mb-2 font-medium">
                      <strong>Legal Reference:</strong> Section 3(a) & 4(5) –
                      Forest Rights Act 2006
                    </p>
                    <p className="text-sm text-emerald-700">
                      All verification criteria successfully met. Claim is
                      authentic and fully complies with FRA guidelines and
                      regulatory requirements.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {trustworthinessFactors.map((factor, index) => (
                      <motion.div
                        key={factor.factor}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="p-4 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-slate-800">
                            {factor.factor}
                          </span>
                          <div className="flex items-center space-x-3">
                            <div className="w-32 bg-slate-200 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-emerald-500 to-green-600 h-2 rounded-full transition-all duration-700"
                                style={{ width: `${factor.score}%` }}
                              />
                            </div>
                            <span className="text-lg font-bold text-slate-800 w-12">
                              {factor.score}%
                            </span>
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                          </div>
                        </div>
                        <p className="text-sm text-slate-600">
                          {factor.details}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action Required Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-amber-800 mb-2">
                        Next Steps Required
                      </h4>
                      <div className="space-y-3 text-sm text-amber-700">
                        <div className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mt-2"></span>
                          <p>
                            <strong>Document Verification:</strong> Schedule
                            physical verification within 30 days
                          </p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mt-2"></span>
                          <p>
                            <strong>Field Visit:</strong> Contact local forest
                            officer for site inspection appointment
                          </p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-amber-500 rounded-full mt-2"></span>
                          <p>
                            <strong>Application Submission:</strong> Submit
                            scheme applications through designated portal
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Action Buttons */}
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex justify-center space-x-4"
          >
            <button
              onClick={() => {
                setShowResults(false);
                setSelectedHolder("");
              }}
              className="px-8 py-3 border-2 border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 hover:border-emerald-300 transition-all duration-300 font-semibold"
            >
              Run New Analysis
            </button>
            <button
              onClick={() => (window.location.href = "/web/reports")}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg flex items-center space-x-2"
            >
              <FileText className="w-4 h-4" />
              <span>Generate Report</span>
            </button>
            <button
              onClick={() => (window.location.href = "/web/dashboard")}
              className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 font-semibold shadow-lg"
            >
              Back to Dashboard
            </button>
          </motion.div>
        )}
      </div>

     
    </div>
  );
}
