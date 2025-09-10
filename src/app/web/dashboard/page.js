"use client";

import React, { useState } from "react";
import {
  FileText,
  CheckCircle,
  Clock,
  Target,
  Upload,
  Map,
  Brain,
  TrendingUp,
  TrendingDown,
  Users,
  MapPin,
  Activity,
  ArrowRight,
  Plus,
  Eye,
  Bell,
  Calendar,
  BarChart3,
  Settings,
  Search,
  Filter,
  MoreVertical,
  Sparkles,
  Zap,
  Globe,
  Database,
  Monitor,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  RefreshCw,
  ChevronRight,
  Star,
  Award,
  Bookmark,
} from "lucide-react";
import Navbar from "@/components/web/core/Navbar";

export default function DashboardPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("7d");
  const [activeTab, setActiveTab] = useState("overview");

  const statsCards = [
    {
      title: "Total Claims",
      value: "1,247",
      icon: FileText,
      trend: "+12%",
      isPositive: true,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      description: "FRA claims submitted",
      change: "+156 this week",
    },
    {
      title: "Verified Titles",
      value: "892",
      icon: CheckCircle,
      trend: "+8%",
      isPositive: true,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "from-emerald-50 to-emerald-100",
      description: "Successfully verified",
      change: "+67 this week",
    },
    {
      title: "Pending Approvals",
      value: "234",
      icon: Clock,
      trend: "-5%",
      isPositive: false,
      color: "from-amber-500 to-amber-600",
      bgColor: "from-amber-50 to-amber-100",
      description: "Awaiting verification",
      change: "-12 this week",
    },
    {
      title: "AI Recommendations",
      value: "156",
      icon: Target,
      trend: "+15%",
      isPositive: true,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      description: "Schemes recommended",
      change: "+23 this week",
    },
  ];

  const quickActions = [
    {
      title: "Upload Document",
      description:
        "Scan and process FRA documents using AI-powered OCR technology",
      icon: Upload,
      href: "/web/ocr",
      color: "from-emerald-500 to-teal-600",
      badge: "AI Powered",
      badgeColor: "bg-emerald-100 text-emerald-700",
      stats: "94% accuracy",
    },
    {
      title: "View FRA Atlas",
      description:
        "Explore interactive geographical data and comprehensive mapping",
      icon: Map,
      href: "/web/atlas",
      color: "from-blue-500 to-indigo-600",
      badge: "Interactive",
      badgeColor: "bg-blue-100 text-blue-700",
      stats: "156 districts",
    },
    {
      title: "Run DSS Analysis",
      description:
        "Get intelligent scheme recommendations and detailed insights",
      icon: Brain,
      href: "/web/dss",
      color: "from-purple-500 to-violet-600",
      badge: "Smart Analysis",
      badgeColor: "bg-purple-100 text-purple-700",
      stats: "89% confidence",
    },
  ];

  const recentActivities = [
    {
      action: "Document processed",
      details: "FRA Title Deed - OCR analysis completed successfully",
      location: "Jharkhand - Ranchi District",
      time: "2 hours ago",
      status: "success",
      user: "Admin User",
      avatar: "A",
      priority: "high",
    },
    {
      action: "Title verification",
      details: "Community forest rights verification in progress",
      location: "Odisha - Mayurbhanj District",
      time: "4 hours ago",
      status: "pending",
      user: "Field Officer",
      avatar: "F",
      priority: "medium",
    },
    {
      action: "Scheme recommended",
      details: "NREGA scheme match found with 89% confidence",
      location: "Chhattisgarh - Bastar District",
      time: "6 hours ago",
      status: "success",
      user: "DSS System",
      avatar: "D",
      priority: "low",
    },
    {
      action: "New claim submitted",
      details: "Individual forest rights claim requires review",
      location: "Madhya Pradesh - Indore District",
      time: "8 hours ago",
      status: "new",
      user: "Community Member",
      avatar: "C",
      priority: "high",
    },
    {
      action: "Atlas data updated",
      details: "New village boundaries mapped and verified",
      location: "West Bengal - Purulia District",
      time: "1 day ago",
      status: "success",
      user: "GIS Team",
      avatar: "G",
      priority: "low",
    },
  ];

  const upcomingTasks = [
    {
      task: "Field verification visit",
      location: "Ranchi District",
      date: "Tomorrow, 10:00 AM",
      priority: "high",
      assignee: "Field Team Alpha",
      type: "verification",
    },
    {
      task: "Community meeting",
      location: "Jhilimili Village",
      date: "Sep 12, 2:00 PM",
      priority: "medium",
      assignee: "Community Coordinator",
      type: "meeting",
    },
    {
      task: "Document review",
      location: "Regional Office",
      date: "Sep 15, 11:00 AM",
      priority: "low",
      assignee: "Legal Team",
      type: "review",
    },
    {
      task: "System maintenance",
      location: "Data Center",
      date: "Sep 16, 12:00 AM",
      priority: "medium",
      assignee: "IT Operations",
      type: "maintenance",
    },
  ];

  const performanceMetrics = [
    { label: "OCR Accuracy", value: 94, color: "emerald", target: 95 },
    { label: "DSS Confidence", value: 89, color: "blue", target: 90 },
    { label: "System Uptime", value: 99.9, color: "green", target: 99.5 },
    { label: "User Satisfaction", value: 92, color: "purple", target: 90 },
  ];

  const handleQuickAction = (href) => {
    window.location.href = href;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "success":
        return "bg-emerald-500";
      case "pending":
        return "bg-amber-500";
      case "new":
        return "bg-blue-500";
      default:
        return "bg-slate-500";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "text-red-700 bg-red-100 border-red-200";
      case "medium":
        return "text-amber-700 bg-amber-100 border-amber-200";
      case "low":
        return "text-emerald-700 bg-emerald-100 border-emerald-200";
      default:
        return "text-slate-700 bg-slate-100 border-slate-200";
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "verification":
        return CheckCircle2;
      case "meeting":
        return Users;
      case "review":
        return Eye;
      case "maintenance":
        return Settings;
      default:
        return Calendar;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div
          className="mb-8 transform transition-all duration-700 ease-out"
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
          `}</style>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                    Dashboard
                  </h1>
                  <p className="text-slate-600 text-lg">
                    Welcome to FRA Atlas & Decision Support System
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <select
                  value={selectedTimeframe}
                  onChange={(e) => setSelectedTimeframe(e.target.value)}
                  className="px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white text-slate-700"
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                </select>
                <div className="text-sm text-slate-500">
                  Last updated: {new Date().toLocaleString()}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 hover:border-emerald-300 transition-all duration-300 shadow-sm">
                <RefreshCw className="w-4 h-4" />
                <span className="hidden sm:inline">Refresh</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg transform hover:scale-105">
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">New Claim</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          style={{
            animation: `slideUp 0.8s ease-out 0.2s forwards`,
            opacity: 0,
          }}
        >
          <style jsx>{`
            @keyframes slideUp {
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>

          {statsCards.map((stat, index) => {
            const Icon = stat.icon;
            const TrendIcon = stat.isPositive ? TrendingUp : TrendingDown;

            return (
              <div
                key={stat.title}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                style={{
                  animation: `slideUp 0.6s ease-out ${
                    0.3 + index * 0.1
                  }s forwards`,
                  opacity: 0,
                  transform: "translateY(20px)",
                }}
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6 h-full relative overflow-hidden group-hover:shadow-xl transition-all duration-300">
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div
                        className={`flex items-center text-sm font-semibold ${
                          stat.isPositive ? "text-emerald-600" : "text-red-600"
                        }`}
                      >
                        <TrendIcon className="w-4 h-4 mr-1" />
                        {stat.trend}
                      </div>
                    </div>

                    <div>
                      <p className="text-2xl font-bold text-slate-900 mb-1">
                        {stat.value}
                      </p>
                      <p className="text-sm text-slate-600 font-medium mb-2">
                        {stat.title}
                      </p>
                      <p className="text-xs text-slate-500">
                        {stat.description}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        {stat.change}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div
          className="mb-8"
          style={{
            animation: `slideUp 0.8s ease-out 0.8s forwards`,
            opacity: 0,
          }}
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-6">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <div
                  key={action.title}
                  onClick={() => handleQuickAction(action.href)}
                  className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                  style={{
                    animation: `slideUp 0.6s ease-out ${
                      1.0 + index * 0.1
                    }s forwards`,
                    opacity: 0,
                    transform: "translateY(20px)",
                  }}
                >
                  <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6 h-full relative overflow-hidden group-hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${action.badgeColor} font-medium`}
                      >
                        {action.badge}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-800 mb-2">
                      {action.title}
                    </h4>
                    <p className="text-sm text-slate-600 mb-4">
                      {action.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">
                        {action.stats}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Stats Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          style={{
            animation: `slideUp 0.8s ease-out 1.4s forwards`,
            opacity: 0,
          }}
        >
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-blue-900 mb-1">1,234</p>
            <p className="text-xs text-blue-700 font-medium">Active Users</p>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200">
            <MapPin className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-emerald-900 mb-1">156</p>
            <p className="text-xs text-emerald-700 font-medium">
              Districts Covered
            </p>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
            <Database className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-purple-900 mb-1">45.2K</p>
            <p className="text-xs text-purple-700 font-medium">
              Documents Processed
            </p>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200">
            <Award className="w-8 h-8 text-amber-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-amber-900 mb-1">98.5%</p>
            <p className="text-xs text-amber-700 font-medium">Success Rate</p>
          </div>
        </div>

        {/* Recent Activities & Tasks */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
          style={{
            animation: `slideUp 0.8s ease-out 1.6s forwards`,
            opacity: 0,
          }}
        >
          {/* Recent Activities */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6">
            <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
              <Activity className="w-5 h-5 mr-2" />
              Recent Activities
            </h4>
            <div className="space-y-4 max-h-80 overflow-y-auto custom-scrollbar">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gradient-to-br from-slate-400 to-slate-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {activity.avatar}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-semibold text-slate-800">
                        {activity.action}
                      </p>
                      <div
                        className={`w-2 h-2 rounded-full ${getStatusColor(
                          activity.status
                        )}`}
                      ></div>
                    </div>
                    <p className="text-xs text-slate-600 mb-1">
                      {activity.details}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-slate-500">
                        {activity.location}
                      </p>
                      <p className="text-xs text-slate-500">{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Tasks */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6">
            <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Upcoming Tasks
            </h4>
            <div className="space-y-4 max-h-80 overflow-y-auto custom-scrollbar">
              {upcomingTasks.map((task, index) => {
                const TypeIcon = getTypeIcon(task.type);
                return (
                  <div
                    key={index}
                    className="p-4 border border-slate-200 rounded-lg hover:border-emerald-300 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <TypeIcon className="w-4 h-4 text-slate-600" />
                        <h5 className="text-sm font-semibold text-slate-800">
                          {task.task}
                        </h5>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full border font-medium ${getPriorityColor(
                          task.priority
                        )}`}
                      >
                        {task.priority}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mb-2">
                      {task.location}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-slate-500">{task.assignee}</p>
                      <p className="text-xs font-medium text-slate-700">
                        {task.date}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* System Status */}
        <div
          className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6 mb-8"
          style={{
            animation: `slideUp 0.6s ease-out 1.8s forwards`,
            opacity: 0,
            transform: "translateY(10px)",
          }}
        >
          <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
            <Sparkles className="w-5 h-5 mr-2" />
            System Status
          </h4>

          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <div className="flex-1">
                  <span className="text-sm font-semibold text-emerald-800">
                    All Systems Operational
                  </span>
                  <p className="text-xs text-emerald-700 mt-1">
                    Last updated: 2 minutes ago | Next maintenance: Sep 16,
                    12:00 AM
                  </p>
                </div>
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-white border border-slate-200 rounded-lg">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mx-auto mb-1"></div>
                <p className="text-xs font-medium text-slate-700">API</p>
                <p className="text-xs text-emerald-600">Healthy</p>
              </div>
              <div className="text-center p-3 bg-white border border-slate-200 rounded-lg">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mx-auto mb-1"></div>
                <p className="text-xs font-medium text-slate-700">Database</p>
                <p className="text-xs text-emerald-600">Online</p>
              </div>
              <div className="text-center p-3 bg-white border border-slate-200 rounded-lg">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mx-auto mb-1"></div>
                <p className="text-xs font-medium text-slate-700">Storage</p>
                <p className="text-xs text-emerald-600">Active</p>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div
          className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6 mb-8"
          style={{
            animation: `slideUp 0.6s ease-out 1.9s forwards`,
            opacity: 0,
            transform: "translateY(10px)",
          }}
        >
          <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2" />
            Performance Metrics
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {performanceMetrics.map((metric, index) => (
              <div key={metric.label} className="p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">
                    {metric.label}
                  </span>
                  <span className="text-lg font-bold text-slate-900">
                    {metric.value}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className={`bg-gradient-to-r from-${metric.color}-400 to-${metric.color}-600 h-2 rounded-full transition-all duration-700`}
                    style={{
                      width: `${metric.value}%`,
                      animation: `expandWidth 1s ease-out ${
                        2.0 + index * 0.1
                      }s forwards`,
                      transform: "scaleX(0)",
                      transformOrigin: "left",
                    }}
                  ></div>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Target: {metric.target}%
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div
          className="flex flex-col md:flex-row items-center justify-between p-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50"
          style={{
            animation: `slideUp 0.8s ease-out 2.0s forwards`,
            opacity: 0,
          }}
        >
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="w-10 h-10 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center">
              <ExternalLink className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">Need Help?</h3>
              <p className="text-sm text-slate-600">
                Access documentation, tutorials, and support
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-all duration-300">
              Documentation
            </button>
            <button className="px-4 py-2 border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-all duration-300">
              Tutorials
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
