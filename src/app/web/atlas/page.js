"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Search,
  Filter,
  Layers,
  MapPin,
  Info,
  Download,
  Share2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Eye,
  EyeOff,
  Globe,
  Satellite,
  Navigation,
  Maximize,
  Settings,
  BarChart3,
  TreePine,
  Droplets,
  Building,
  Users,
  Target,
  Calendar,
  FileText,
  CheckCircle,
  Clock,
  AlertTriangle,
  Bookmark,
  RefreshCw,
  ChevronDown,
  ChevronRight,
  Compass,
  Map as MapIcon,
  Layers3,
  MapPinned,
} from "lucide-react";
import Navbar from "@/components/web/core/Navbar";

export default function AtlasPage() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");
  const [mapView, setMapView] = useState("satellite");
  const [isLayerPanelExpanded, setIsLayerPanelExpanded] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLayers, setActiveLayers] = useState({
    fraLands: true,
    assets: false,
    waterBodies: true,
    forestCover: true,
    schemes: false,
    villages: true,
    boundaries: false,
  });

  const states = [
    { name: "Jharkhand", districts: 24, villages: 1245 },
    { name: "Odisha", districts: 30, villages: 2134 },
    { name: "Chhattisgarh", districts: 28, villages: 987 },
    { name: "Madhya Pradesh", districts: 55, villages: 3456 },
    { name: "West Bengal", districts: 23, villages: 876 },
  ];

  const districts = [
    { name: "Ranchi", villages: 156, area: "5,097 km²" },
    { name: "East Singhbhum", villages: 234, area: "3,533 km²" },
    { name: "West Singhbhum", villages: 189, area: "7,224 km²" },
    { name: "Hazaribagh", villages: 267, area: "4,302 km²" },
  ];

  const villages = [
    { name: "Jhilimili", population: 2340, claims: 23 },
    { name: "Sareikela", population: 1890, claims: 17 },
    { name: "Chaibasa", population: 3240, claims: 45 },
    { name: "Jamshedpur", population: 12890, claims: 89 },
  ];

  const layers = [
    {
      key: "fraLands",
      label: "FRA Lands",
      icon: TreePine,
      color: "from-emerald-500 to-green-600",
      bgColor: "from-emerald-50 to-green-100",
      count: "1,247 polygons",
      description: "Forest Rights Act claimed areas",
      status: "active",
    },
    {
      key: "assets",
      label: "Community Assets",
      icon: Building,
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-100",
      count: "356 points",
      description: "Schools, health centers, wells",
      status: "inactive",
    },
    {
      key: "waterBodies",
      label: "Water Bodies",
      icon: Droplets,
      color: "from-cyan-500 to-blue-600",
      bgColor: "from-cyan-50 to-blue-100",
      count: "89 features",
      description: "Rivers, lakes, ponds",
      status: "active",
    },
    {
      key: "forestCover",
      label: "Forest Cover",
      icon: TreePine,
      color: "from-green-600 to-emerald-700",
      bgColor: "from-green-50 to-emerald-100",
      count: "2,134 areas",
      description: "Dense and open forest areas",
      status: "active",
    },
    {
      key: "schemes",
      label: "Government Schemes",
      icon: Target,
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-100",
      count: "567 locations",
      description: "NREGA, housing, development",
      status: "inactive",
    },
    {
      key: "villages",
      label: "Villages",
      icon: Users,
      color: "from-amber-500 to-orange-600",
      bgColor: "from-amber-50 to-orange-100",
      count: "234 settlements",
      description: "Inhabited villages and hamlets",
      status: "active",
    },
    {
      key: "boundaries",
      label: "Administrative Boundaries",
      icon: MapPinned,
      color: "from-slate-500 to-gray-600",
      bgColor: "from-slate-50 to-gray-100",
      count: "Multiple levels",
      description: "State, district, block boundaries",
      status: "inactive",
    },
  ];

  const mapStats = [
    {
      label: "Total Area Mapped",
      value: "15,423 km²",
      icon: Globe,
      trend: "+2.3%",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      label: "FRA Claims",
      value: "1,247",
      icon: FileText,
      trend: "+156",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      label: "Villages Covered",
      value: "234",
      icon: Users,
      trend: "+12",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      label: "Active Schemes",
      value: "67",
      icon: Target,
      trend: "+8",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
  ];

  const recentActivity = [
    {
      action: "New FRA claim mapped",
      location: "Jhilimili Village, Ranchi",
      time: "2 hours ago",
      type: "claim",
      status: "pending",
    },
    {
      action: "Water body verified",
      location: "Sareikela District",
      time: "4 hours ago",
      type: "verification",
      status: "completed",
    },
    {
      action: "Forest boundary updated",
      location: "Chaibasa Block",
      time: "6 hours ago",
      type: "update",
      status: "completed",
    },
  ];

  const toggleLayer = (layerKey) => {
    setActiveLayers((prev) => ({
      ...prev,
      [layerKey]: !prev[layerKey],
    }));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-emerald-500";
      case "pending":
        return "bg-amber-500";
      case "error":
        return "bg-red-500";
      default:
        return "bg-slate-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <Navbar />

      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div
          className="mb-6 transform transition-all duration-700 ease-out"
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

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div className="mb-4 lg:mb-0">
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
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <MapIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                    FRA Atlas
                  </h1>
                  <p className="text-slate-600 text-lg">
                    Interactive mapping and geospatial analysis platform
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 hover:border-emerald-300 transition-all duration-300 shadow-sm">
                <RefreshCw className="w-4 h-4" />
                <span className="hidden sm:inline">Refresh Data</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg transform hover:scale-105">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Export Map</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 h-[75vh]">
          {/* Sidebar */}
          <div
            className="xl:col-span-1 space-y-4 overflow-y-auto custom-scrollbar"
            style={{
              animation: `slideUp 0.8s ease-out 0.6s forwards`,
              opacity: 0,
            }}
          >
            {/* Location Filters */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-4">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <Filter className="w-4 h-4 text-white" />
                </div>
                Location Filters
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-2 block">
                    State
                  </label>
                  <div className="relative">
                    <select
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      className="w-full p-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 bg-white backdrop-blur-sm appearance-none text-slate-800"
                    >
                      <option value="">Select State</option>
                      {states.map((state) => (
                        <option key={state.name} value={state.name}>
                          {state.name} ({state.districts} districts)
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-2 block">
                    District
                  </label>
                  <div className="relative">
                    <select
                      value={selectedDistrict}
                      onChange={(e) => setSelectedDistrict(e.target.value)}
                      className="w-full p-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 bg-white backdrop-blur-sm appearance-none disabled:opacity-50 text-slate-800"
                      disabled={!selectedState}
                    >
                      <option value="">Select District</option>
                      {districts.map((district) => (
                        <option key={district.name} value={district.name}>
                          {district.name} ({district.villages} villages)
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-2 block">
                    Village
                  </label>
                  <div className="relative">
                    <select
                      value={selectedVillage}
                      onChange={(e) => setSelectedVillage(e.target.value)}
                      className="w-full p-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 bg-white backdrop-blur-sm appearance-none disabled:opacity-50 text-slate-800"
                      disabled={!selectedDistrict}
                    >
                      <option value="">Select Village</option>
                      {villages.map((village) => (
                        <option key={village.name} value={village.name}>
                          {village.name} (Pop: {village.population})
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-4">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mr-3">
                  <Search className="w-4 h-4 text-white" />
                </div>
                Search
              </h3>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search villages, plots, coordinates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 bg-white backdrop-blur-sm text-slate-800 placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Layer Controls */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-800 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                    <Layers3 className="w-4 h-4 text-white" />
                  </div>
                  Map Layers
                </h3>
                <button
                  onClick={() => setIsLayerPanelExpanded(!isLayerPanelExpanded)}
                  className="p-1 rounded-lg hover:bg-slate-100 transition-colors duration-300"
                >
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                      isLayerPanelExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {isLayerPanelExpanded && (
                <div className="space-y-3">
                  {layers.map((layer, index) => {
                    const Icon = layer.icon;
                    return (
                      <div
                        key={layer.key}
                        className="group p-3 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-300 cursor-pointer"
                        style={{
                          animation: `slideUp 0.6s ease-out ${
                            0.7 + index * 0.1
                          }s forwards`,
                          opacity: 0,
                          transform: "translateY(10px)",
                        }}
                        onClick={() => toggleLayer(layer.key)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-10 h-10 bg-gradient-to-br ${
                                layer.color
                              } rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 ${
                                activeLayers[layer.key]
                                  ? "scale-100"
                                  : "scale-90 opacity-50"
                              }`}
                            >
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <p className="text-sm font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors duration-300">
                                  {layer.label}
                                </p>
                                <div
                                  className={`w-2 h-2 rounded-full ${
                                    activeLayers[layer.key]
                                      ? "bg-emerald-500"
                                      : "bg-slate-300"
                                  } transition-colors duration-300`}
                                ></div>
                              </div>
                              <p className="text-xs text-slate-500">
                                {layer.count}
                              </p>
                              <p className="text-xs text-slate-400 mt-1">
                                {layer.description}
                              </p>
                            </div>
                          </div>
                          <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {activeLayers[layer.key] ? (
                              <Eye className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <EyeOff className="w-4 h-4 text-slate-400" />
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Recent Activity */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-4">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                Recent Activity
              </h3>

              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-300"
                    style={{
                      animation: `slideUp 0.6s ease-out ${
                        1.0 + index * 0.1
                      }s forwards`,
                      opacity: 0,
                      transform: "translateY(10px)",
                    }}
                  >
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${getStatusColor(
                        activity.status
                      )}`}
                    ></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-800">
                        {activity.action}
                      </p>
                      <p className="text-xs text-slate-600 flex items-center mt-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        {activity.location}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Area */}
          <div
            className="xl:col-span-4"
            style={{
              animation: `slideUp 0.8s ease-out 0.8s forwards`,
              opacity: 0,
            }}
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 h-full relative overflow-hidden">
              {/* Map Controls */}
              <div className="absolute top-4 right-4 z-20 flex flex-col space-y-2">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg p-2">
                  <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-300 block w-full">
                    <ZoomIn className="w-4 h-4 text-slate-600 mx-auto" />
                  </button>
                  <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-300 block w-full">
                    <ZoomOut className="w-4 h-4 text-slate-600 mx-auto" />
                  </button>
                  <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-300 block w-full">
                    <RotateCcw className="w-4 h-4 text-slate-600 mx-auto" />
                  </button>
                  <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-300 block w-full">
                    <Maximize className="w-4 h-4 text-slate-600 mx-auto" />
                  </button>
                  <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-300 block w-full">
                    <Compass className="w-4 h-4 text-slate-600 mx-auto" />
                  </button>
                </div>
              </div>

              {/* Map Toolbar */}
              <div className="absolute top-4 left-4 z-20 flex space-x-2">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg p-2 flex space-x-2">
                  <button
                    onClick={() => setMapView("satellite")}
                    className={`px-3 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                      mapView === "satellite"
                        ? "bg-emerald-500 text-white"
                        : "hover:bg-slate-100 text-slate-700"
                    }`}
                  >
                    <Satellite className="w-4 h-4" />
                    <span className="text-sm font-medium">Satellite</span>
                  </button>
                  <button
                    onClick={() => setMapView("terrain")}
                    className={`px-3 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                      mapView === "terrain"
                        ? "bg-emerald-500 text-white"
                        : "hover:bg-slate-100 text-slate-700"
                    }`}
                  >
                    <Globe className="w-4 h-4" />
                    <span className="text-sm font-medium">Terrain</span>
                  </button>
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg p-2 flex space-x-2">
                  <button className="px-3 py-2 rounded-lg hover:bg-slate-100 transition-all duration-300 flex items-center space-x-2 text-slate-700">
                    <Download className="w-4 h-4" />
                    <span className="text-sm font-medium">Export</span>
                  </button>
                  <button className="px-3 py-2 rounded-lg hover:bg-slate-100 transition-all duration-300 flex items-center space-x-2 text-slate-700">
                    <Share2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Share</span>
                  </button>
                  <button className="px-3 py-2 rounded-lg hover:bg-slate-100 transition-all duration-300 flex items-center space-x-2 text-slate-700">
                    <Settings className="w-4 h-4" />
                    <span className="text-sm font-medium">Settings</span>
                  </button>
                </div>
              </div>

              {/* Mock Map Content */}
              <div className="w-full h-full bg-gradient-to-br from-emerald-100 via-teal-50 to-blue-100 flex items-center justify-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-300 rounded-full blur-xl"></div>
                  <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-300 rounded-full blur-xl"></div>
                  <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-300 rounded-full blur-xl"></div>
                </div>

                <div className="text-center relative z-10">
                  <div className="mb-6">
                 
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      Interactive FRA Atlas
                    </h3>
                    <p className="text-slate-600 max-w-md mx-auto leading-relaxed">
                      This interactive map will display real-time Forest Rights
                      Act data, satellite imagery, and geospatial analysis
                      layers.
                    </p>
                  </div>

                  {/* Mock Map Features */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-lg">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <TreePine className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-slate-800 mb-2">
                        FRA Claims
                      </h4>
                      <p className="text-sm text-slate-600 mb-2">
                        Interactive claim boundaries
                      </p>
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                        <span className="text-xs text-slate-700">
                          2.45 acres mapped
                        </span>
                      </div>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-lg">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Droplets className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-slate-800 mb-2">
                        Water Bodies
                      </h4>
                      <p className="text-sm text-slate-600 mb-2">
                        Rivers, lakes, and ponds
                      </p>
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                        <span className="text-xs text-slate-700">
                          89 water sources
                        </span>
                      </div>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-lg">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <TreePine className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-slate-800 mb-2">
                        Forest Cover
                      </h4>
                      <p className="text-sm text-slate-600 mb-2">
                        Dense and open forests
                      </p>
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                        <span className="text-xs text-slate-700">
                          15,423 km² covered
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Elements */}
                  <div className="mt-8 flex items-center justify-center space-x-4">
                    <button className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl hover:bg-white transition-all duration-300 flex items-center space-x-2 shadow-lg">
                      <Eye className="w-4 h-4 text-slate-600" />
                      <span className="text-sm text-slate-700">
                        View Sample Data
                      </span>
                    </button>
                    <button className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center space-x-2 shadow-lg">
                      <MapPinned className="w-4 h-4" />
                      <span className="text-sm">Add Location</span>
                    </button>
                  </div>
                </div>

            
              </div>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 z-20">
                <div className="bg-white/90 backdrop-blur-sm border border-white/50 rounded-xl shadow-lg p-4 max-w-xs">
                  <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Active Layers
                  </h4>
                  <div className="space-y-2">
                    {layers
                      .filter((layer) => activeLayers[layer.key])
                      .slice(0, 4)
                      .map((layer) => {
                        const Icon = layer.icon;
                        return (
                          <div
                            key={layer.key}
                            className="flex items-center space-x-3"
                          >
                            <div
                              className={`w-6 h-6 bg-gradient-to-br ${layer.color} rounded-lg flex items-center justify-center`}
                            >
                              <Icon className="w-3 h-3 text-white" />
                            </div>
                            <div className="flex-1">
                              <span className="text-xs font-medium text-slate-800">
                                {layer.label}
                              </span>
                              <p className="text-xs text-slate-500">
                                {layer.count}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    {layers.filter((layer) => activeLayers[layer.key]).length >
                      4 && (
                      <div className="text-xs text-slate-500 mt-2">
                        +
                        {layers.filter((layer) => activeLayers[layer.key])
                          .length - 4}{" "}
                        more layers
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Coordinates Display */}
              <div className="absolute bottom-4 right-24 z-20">
                <div className="bg-white/90 backdrop-blur-sm border border-white/50 rounded-xl shadow-lg px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <Navigation className="w-3 h-3 text-slate-600" />
                    <span className="text-xs text-slate-700 font-mono">
                      23.3441°N, 85.3096°E
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Zoom: 12 | Scale: 1:50,000
                  </div>
                </div>
              </div>

              {/* Loading Overlay */}
              <div
                className="absolute inset-0 bg-white/20 backdrop-blur-sm z-10 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300"
                id="map-loading"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-3">
                  <div className="w-5 h-5 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-sm text-slate-700">
                    Loading map data...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Panel */}
        <div
          className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6"
          style={{
            animation: `slideUp 0.8s ease-out 1.2s forwards`,
            opacity: 0,
          }}
        >
          {/* Map Statistics */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <BarChart3 className="w-4 h-4 text-white" />
              </div>
              Detailed Statistics
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                <span className="text-sm text-slate-600">Claims Processed</span>
                <span className="text-sm font-bold text-slate-800">
                  892 / 1,247
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                <span className="text-sm text-slate-600">
                  Verification Rate
                </span>
                <span className="text-sm font-bold text-emerald-600">
                  71.5%
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                <span className="text-sm text-slate-600">Average Area</span>
                <span className="text-sm font-bold text-slate-800">
                  2.8 acres
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                <span className="text-sm text-slate-600">Data Accuracy</span>
                <span className="text-sm font-bold text-blue-600">94.2%</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                <Target className="w-4 h-4 text-white" />
              </div>
              Quick Actions
            </h3>

            <div className="space-y-3">
              <button className="w-full p-3 text-left rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300 group">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <Download className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800">
                      Export Map Data
                    </p>
                    <p className="text-xs text-slate-500">
                      Download as KML/GeoJSON
                    </p>
                  </div>
                </div>
              </button>

              <button className="w-full p-3 text-left rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300 group">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 group-hover:bg-purple-200 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <MapPinned className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800">
                      Add New Claim
                    </p>
                    <p className="text-xs text-slate-500">
                      Mark boundary on map
                    </p>
                  </div>
                </div>
              </button>

              <button className="w-full p-3 text-left rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300 group">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 group-hover:bg-green-200 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800">
                      Verify Boundaries
                    </p>
                    <p className="text-xs text-slate-500">
                      Review pending claims
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Help & Support */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                <Info className="w-4 h-4 text-white" />
              </div>
              Help & Support
            </h3>

            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
                <div className="flex items-center space-x-2 mb-2">
                  <Bookmark className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-800">
                    Map Tutorial
                  </span>
                </div>
                <p className="text-xs text-blue-700 mb-3">
                  Learn how to use interactive features, layer controls, and
                  data export options.
                </p>
                <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                  Start Tutorial →
                </button>
              </div>

              <div className="space-y-2">
                <button className="w-full text-left p-2 rounded-lg hover:bg-slate-50 transition-colors duration-300">
                  <span className="text-sm text-slate-700">
                    📖 User Documentation
                  </span>
                </button>
                <button className="w-full text-left p-2 rounded-lg hover:bg-slate-50 transition-colors duration-300">
                  <span className="text-sm text-slate-700">
                    🎥 Video Guides
                  </span>
                </button>
                <button className="w-full text-left p-2 rounded-lg hover:bg-slate-50 transition-colors duration-300">
                  <span className="text-sm text-slate-700">
                    💬 Contact Support
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
