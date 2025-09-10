"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  FileText,
  Download,
  Filter,
  Calendar,
  Search,
  Eye,
  Share2,
  BarChart3,
  PieChart,
  TrendingUp,
  MapPin,
  Users,
  Clock,
  CheckCircle,
  AlertTriangle,
  FileBarChart,
  Printer,
  Mail,
  RefreshCw,
  Zap,
  Target,
  Settings,
  ChevronDown,
  FileSpreadsheet,
  Activity,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/web/core/Navbar";

export default function ReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");
  const [selectedReport, setSelectedReport] = useState("overview");
  const [selectedState, setSelectedState] = useState("All States");
  const [isGenerating, setIsGenerating] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const reportTypes = [
    {
      id: "overview",
      name: "System Overview",
      icon: BarChart3,
      description: "Comprehensive system performance and usage statistics",
      lastUpdated: "2 hours ago",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-100",
    },
    {
      id: "claims",
      name: "Claims Analysis",
      icon: FileText,
      description: "Detailed analysis of FRA claims and processing status",
      lastUpdated: "4 hours ago",
      color: "from-emerald-500 to-green-600",
      bgColor: "from-emerald-50 to-green-100",
    },
    {
      id: "geographic",
      name: "Geographic Report",
      icon: MapPin,
      description: "State-wise and district-wise data visualization",
      lastUpdated: "6 hours ago",
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-100",
    },
    {
      id: "schemes",
      name: "Schemes Performance",
      icon: PieChart,
      description: "Government schemes recommendation and success rates",
      lastUpdated: "1 day ago",
      color: "from-amber-500 to-orange-600",
      bgColor: "from-amber-50 to-orange-100",
    },
  ];

  const timePeriods = [
    { value: "weekly", label: "Last 7 Days" },
    { value: "monthly", label: "Last 30 Days" },
    { value: "quarterly", label: "Last Quarter" },
    { value: "yearly", label: "Last Year" },
  ];

  const states = [
    "All States",
    "Jharkhand",
    "Odisha",
    "Chhattisgarh",
    "Madhya Pradesh",
    "West Bengal",
  ];

  const summaryStats = [
    {
      title: "Total Reports Generated",
      value: "1,456",
      change: "+23%",
      icon: FileBarChart,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      description: "This month",
    },
    {
      title: "Data Points Analyzed",
      value: "2.3M",
      change: "+15%",
      icon: Activity,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      description: "Total records",
    },
    {
      title: "Active Regions",
      value: "156",
      change: "+8%",
      icon: MapPin,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      description: "Districts covered",
    },
    {
      title: "Report Downloads",
      value: "8,924",
      change: "+31%",
      icon: Download,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      description: "All time",
    },
  ];

  const recentReports = [
    {
      title: "Monthly FRA Claims Report - September 2025",
      type: "Claims Analysis",
      generatedBy: "Admin User",
      date: "2 hours ago",
      size: "2.4 MB",
      downloads: 23,
      status: "completed",
      priority: "High",
    },
    {
      title: "Quarterly Performance Review Q3 2025",
      type: "System Overview",
      generatedBy: "System Auto",
      date: "1 day ago",
      size: "5.7 MB",
      downloads: 156,
      status: "completed",
      priority: "High",
    },
    {
      title: "Geographic Distribution Analysis - Jharkhand",
      type: "Geographic Report",
      generatedBy: "Field Officer",
      date: "2 days ago",
      size: "3.2 MB",
      downloads: 45,
      status: "completed",
      priority: "Medium",
    },
    {
      title: "Scheme Recommendation Effectiveness Report",
      type: "Schemes Performance",
      generatedBy: "DSS System",
      date: "3 days ago",
      size: "1.8 MB",
      downloads: 78,
      status: "completed",
      priority: "Medium",
    },
    {
      title: "Weekly Processing Report - Week 36",
      type: "Claims Analysis",
      generatedBy: "OCR System",
      date: "1 week ago",
      size: "976 KB",
      downloads: 12,
      status: "processing",
      priority: "Low",
    },
  ];

  const keyMetrics = {
    overview: [
      {
        label: "Total Claims Processed",
        value: "1,247",
        trend: "+12%",
        positive: true,
      },
      {
        label: "Average Processing Time",
        value: "3.2 days",
        trend: "-8%",
        positive: true,
      },
      { label: "Success Rate", value: "94.2%", trend: "+2.1%", positive: true },
      {
        label: "User Satisfaction",
        value: "4.7/5",
        trend: "+0.3",
        positive: true,
      },
    ],
    claims: [
      {
        label: "New Claims Submitted",
        value: "234",
        trend: "+18%",
        positive: true,
      },
      { label: "Claims Approved", value: "892", trend: "+15%", positive: true },
      {
        label: "Pending Verification",
        value: "121",
        trend: "-5%",
        positive: true,
      },
      { label: "Rejected Claims", value: "34", trend: "-12%", positive: true },
    ],
    geographic: [
      {
        label: "Covered Districts",
        value: "156",
        trend: "+8%",
        positive: true,
      },
      {
        label: "Active Villages",
        value: "2,340",
        trend: "+23%",
        positive: true,
      },
      {
        label: "Mapped Area (sq km)",
        value: "15,423",
        trend: "+12%",
        positive: true,
      },
      {
        label: "GPS Coordinates",
        value: "45,670",
        trend: "+31%",
        positive: true,
      },
    ],
    schemes: [
      {
        label: "Schemes Recommended",
        value: "156",
        trend: "+25%",
        positive: true,
      },
      {
        label: "Successful Matches",
        value: "134",
        trend: "+19%",
        positive: true,
      },
      {
        label: "Implementation Rate",
        value: "86%",
        trend: "+4%",
        positive: true,
      },
      {
        label: "Beneficiaries Reached",
        value: "2,340",
        trend: "+28%",
        positive: true,
      },
    ],
  };

  const handleGenerateReport = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  const handleDownloadReport = (reportTitle) => {
    console.log(`Downloading: ${reportTitle}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "text-emerald-700 bg-emerald-100 border-emerald-200";
      case "processing":
        return "text-amber-700 bg-amber-100 border-amber-200";
      case "failed":
        return "text-red-700 bg-red-100 border-red-200";
      default:
        return "text-slate-700 bg-slate-100 border-slate-200";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "text-red-700 bg-red-100 border-red-200";
      case "Medium":
        return "text-amber-700 bg-amber-100 border-amber-200";
      case "Low":
        return "text-emerald-700 bg-emerald-100 border-emerald-200";
      default:
        return "text-slate-700 bg-slate-100 border-slate-200";
    }
  };

  const selectedReportData = reportTypes.find((r) => r.id === selectedReport);

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

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-4 lg:mb-0">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <FileBarChart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                    Reports & Analytics
                  </h1>
                  <p className="text-slate-600 text-lg">
                    Generate comprehensive reports and insights
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 hover:border-emerald-300 transition-all duration-300 shadow-sm">
                <Settings className="w-4 h-4" />
                <span className="hidden sm:inline">Settings</span>
              </button>
              <button
                onClick={handleGenerateReport}
                disabled={isGenerating}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg ${
                  isGenerating
                    ? "bg-slate-400 text-slate-200 cursor-not-allowed"
                    : "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white transform hover:scale-105"
                }`}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    <span>Generate Report</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {summaryStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6 group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <span className="text-sm text-emerald-600 font-semibold bg-emerald-50 px-2 py-1 rounded-full">
                    {stat.change}
                  </span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm font-semibold text-slate-700 mb-1">
                    {stat.title}
                  </p>
                  <p className="text-xs text-slate-500">{stat.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Report Configuration */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mr-3">
                  <Filter className="w-4 h-4 text-white" />
                </div>
                Report Configuration
              </h2>

              <div className="space-y-6">
                {/* Report Type */}
                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-3 block">
                    Report Type
                  </label>
                  <div className="space-y-3">
                    {reportTypes.map((type) => {
                      const Icon = type.icon;
                      return (
                        <motion.button
                          key={type.id}
                          onClick={() => setSelectedReport(type.id)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left group ${
                            selectedReport === type.id
                              ? "border-emerald-400 bg-gradient-to-r from-emerald-50 to-teal-50 shadow-lg"
                              : "border-slate-200 hover:border-emerald-300 hover:shadow-md"
                          }`}
                        >
                          <div className="flex items-start space-x-4">
                            <div
                              className={`w-12 h-12 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                            >
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-slate-800 mb-1">
                                {type.name}
                              </h4>
                              <p className="text-sm text-slate-600 mb-2 leading-relaxed">
                                {type.description}
                              </p>
                              <p className="text-xs text-slate-500">
                                Updated {type.lastUpdated}
                              </p>
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Period */}
                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-3 block">
                    Time Period
                  </label>
                  <div className="relative">
                    <select
                      value={selectedPeriod}
                      onChange={(e) => setSelectedPeriod(e.target.value)}
                      className="w-full p-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 bg-white text-slate-800 font-medium appearance-none"
                    >
                      {timePeriods.map((period) => (
                        <option key={period.value} value={period.value}>
                          {period.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Geographic Filter */}
                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-3 block">
                    Geographic Scope
                  </label>
                  <div className="relative">
                    <select
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      className="w-full p-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 bg-white text-slate-800 font-medium appearance-none"
                    >
                      {states.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Export Options */}
                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-3 block">
                    Export Options
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      {
                        icon: Download,
                        label: "PDF",
                        color: "text-red-600 bg-red-50",
                      },
                      {
                        icon: FileSpreadsheet,
                        label: "Excel",
                        color: "text-green-600 bg-green-50",
                      },
                      {
                        icon: Printer,
                        label: "Print",
                        color: "text-blue-600 bg-blue-50",
                      },
                      {
                        icon: Mail,
                        label: "Email",
                        color: "text-purple-600 bg-purple-50",
                      },
                    ].map((option, index) => (
                      <button
                        key={option.label}
                        className={`flex items-center justify-center space-x-2 p-3 border border-slate-200 rounded-xl hover:border-emerald-300 hover:shadow-md transition-all duration-300 group ${option.color}`}
                      >
                        <option.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm font-medium">
                          {option.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                {selectedReportData && (
                  <div
                    className={`w-8 h-8 bg-gradient-to-br ${selectedReportData.color} rounded-lg flex items-center justify-center mr-3`}
                  >
                    <BarChart3 className="w-4 h-4 text-white" />
                  </div>
                )}
                Key Metrics - {selectedReportData?.name}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {keyMetrics[selectedReport]?.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-4 rounded-xl border-2 border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-slate-700">
                        {metric.label}
                      </h4>
                      <span
                        className={`text-sm font-semibold flex items-center px-2 py-1 rounded-full ${
                          metric.positive
                            ? "text-emerald-700 bg-emerald-100"
                            : "text-red-700 bg-red-100"
                        }`}
                      >
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {metric.trend}
                      </span>
                    </div>
                    <p className="text-3xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">
                      {metric.value}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Chart Placeholder */}
              <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 rounded-2xl text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Interactive Chart View
                </h3>
                <p className="text-slate-600 max-w-md mx-auto">
                  This area displays interactive charts and visualizations based
                  on your selected report type and filters.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recent Reports */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4 md:mb-0 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                Recent Reports
              </h2>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search reports..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 bg-white text-slate-800 w-64"
                  />
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-4 px-4 font-bold text-slate-700">
                      Report Title
                    </th>
                    <th className="text-left py-4 px-4 font-bold text-slate-700">
                      Type
                    </th>
                    <th className="text-left py-4 px-4 font-bold text-slate-700">
                      Generated By
                    </th>
                    <th className="text-left py-4 px-4 font-bold text-slate-700">
                      Date
                    </th>
                    <th className="text-left py-4 px-4 font-bold text-slate-700">
                      Size
                    </th>
                    <th className="text-left py-4 px-4 font-bold text-slate-700">
                      Downloads
                    </th>
                    <th className="text-left py-4 px-4 font-bold text-slate-700">
                      Status
                    </th>
                    <th className="text-left py-4 px-4 font-bold text-slate-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentReports.map((report, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="border-b border-slate-100 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-300 group"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                            <FileText className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <span className="font-semibold text-slate-800 block">
                              {report.title}
                            </span>
                            <span
                              className={`text-xs px-2 py-1 rounded-full font-medium border ${getPriorityColor(
                                report.priority
                              )}`}
                            >
                              {report.priority} Priority
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-slate-600 font-medium">
                        {report.type}
                      </td>
                      <td className="py-4 px-4 text-slate-600">
                        {report.generatedBy}
                      </td>
                      <td className="py-4 px-4 text-slate-600">
                        {report.date}
                      </td>
                      <td className="py-4 px-4 text-slate-600 font-mono">
                        {report.size}
                      </td>
                      <td className="py-4 px-4 text-slate-600">
                        <span className="bg-slate-100 px-2 py-1 rounded-full text-sm font-medium">
                          {report.downloads}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 text-sm font-semibold rounded-full border ${getStatusColor(
                            report.status
                          )}`}
                        >
                          {report.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleDownloadReport(report.title)}
                            className="p-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300"
                            title="Download"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                          <button
                            className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                            title="Preview"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            className="p-2 text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-300"
                            title="Share"
                          >
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
