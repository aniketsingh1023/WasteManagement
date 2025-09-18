"use client"

import { useState, useEffect, useRef } from "react"
import {
  Leaf,
  X,
  Bell,
  Search,
  User,
  Settings,
  LogOut,
  Home,
  Truck,
  MapPin,
  Users,
  Award,
  BarChart3,
  Calendar,
  FileText,
  Shield,
  TrendingUp,
  TrendingDown,
  Eye,
  ChevronRight,
  ChevronLeft,
  Plus,
  Filter,
  Download,
  Upload,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Clock,
  Star,
  Target,
  Recycle,
  Gift,
  Navigation,
  Fuel,
  Battery,
  AlertCircle,
  Info,
  TreePine,
  Sun,
  Moon,
  Gauge,
  Maximize,
  Share2,
  BookOpen,
  GraduationCap,
  Trophy,
  Medal,
  Lightbulb,
  Crown as Crow,
} from "lucide-react"

// Static Data for the Dashboard
const STATIC_DATA = {
  // Dashboard Statistics
  dashboardStats: [
    {
      title: "Total Waste Collected",
      value: "2,847",
      unit: "tons",
      change: "+12.5%",
      trend: "up",
      icon: Recycle,
      color: "emerald",
      bgGradient: "from-emerald-500 to-emerald-600",
    },
    {
      title: "Active Vehicles",
      value: "156",
      unit: "vehicles",
      change: "+3.2%",
      trend: "up",
      icon: Truck,
      color: "blue",
      bgGradient: "from-blue-500 to-blue-600",
    },
    {
      title: "Green Champions",
      value: "8,924",
      unit: "users",
      change: "+18.7%",
      trend: "up",
      icon: Award,
      color: "amber",
      bgGradient: "from-amber-500 to-amber-600",
    },
    {
      title: "Credits Distributed",
      value: "₹1.2M",
      unit: "rewards",
      change: "+25.3%",
      trend: "up",
      icon: Gift,
      color: "purple",
      bgGradient: "from-purple-500 to-purple-600",
    },
    {
      title: "Dumping Sites",
      value: "342",
      unit: "locations",
      change: "-2.1%",
      trend: "down",
      icon: MapPin,
      color: "red",
      bgGradient: "from-red-500 to-red-600",
    },
    {
      title: "Reports Resolved",
      value: "15,678",
      unit: "issues",
      change: "+8.9%",
      trend: "up",
      icon: CheckCircle,
      color: "green",
      bgGradient: "from-green-500 to-green-600",
    },
    {
      title: "Training Programs",
      value: "47",
      unit: "active",
      change: "+15.2%",
      trend: "up",
      icon: GraduationCap,
      color: "indigo",
      bgGradient: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Environmental Impact",
      value: "89.2%",
      unit: "efficiency",
      change: "+4.7%",
      trend: "up",
      icon: TreePine,
      color: "teal",
      bgGradient: "from-teal-500 to-teal-600",
    },
  ],

  // Vehicle Fleet Data
  vehicles: [
    {
      id: "VH001",
      name: "Green Collector 1",
      type: "Garbage Truck",
      status: "active",
      location: { lat: 28.6139, lng: 77.209, address: "Connaught Place, Delhi" },
      driver: "Rajesh Kumar",
      capacity: "85%",
      fuel: "72%",
      battery: "89%",
      route: "Route A - Central Delhi",
      lastUpdate: "2 mins ago",
      speed: "25 km/h",
      nextStop: "India Gate",
      estimatedArrival: "15 mins",
      dailyCollection: "2.3 tons",
      efficiency: "94%",
    },
    {
      id: "VH002",
      name: "Eco Transporter 2",
      type: "Recycling Van",
      status: "maintenance",
      location: { lat: 28.5355, lng: 77.391, address: "Noida Sector 18" },
      driver: "Priya Sharma",
      capacity: "0%",
      fuel: "45%",
      battery: "12%",
      route: "Route B - Noida",
      lastUpdate: "1 hour ago",
      speed: "0 km/h",
      nextStop: "Service Center",
      estimatedArrival: "N/A",
      dailyCollection: "0 tons",
      efficiency: "0%",
    },
    {
      id: "VH003",
      name: "Smart Cleaner 3",
      type: "Street Sweeper",
      status: "active",
      location: { lat: 28.4595, lng: 77.0266, address: "Gurgaon Cyber City" },
      driver: "Amit Singh",
      capacity: "67%",
      fuel: "88%",
      battery: "95%",
      route: "Route C - Gurgaon",
      lastUpdate: "5 mins ago",
      speed: "18 km/h",
      nextStop: "DLF Phase 1",
      estimatedArrival: "8 mins",
      dailyCollection: "1.8 tons",
      efficiency: "91%",
    },
    {
      id: "VH004",
      name: "Waste Warrior 4",
      type: "Compactor Truck",
      status: "active",
      location: { lat: 28.7041, lng: 77.1025, address: "Rohini Sector 7" },
      driver: "Sunita Devi",
      capacity: "92%",
      fuel: "34%",
      battery: "78%",
      route: "Route D - North Delhi",
      lastUpdate: "1 min ago",
      speed: "22 km/h",
      nextStop: "Rohini Market",
      estimatedArrival: "12 mins",
      dailyCollection: "3.1 tons",
      efficiency: "96%",
    },
    {
      id: "VH005",
      name: "Green Guardian 5",
      type: "Bio-waste Collector",
      status: "idle",
      location: { lat: 28.5244, lng: 77.1855, address: "Lajpat Nagar" },
      driver: "Mohammad Ali",
      capacity: "23%",
      fuel: "91%",
      battery: "87%",
      route: "Route E - South Delhi",
      lastUpdate: "30 mins ago",
      speed: "0 km/h",
      nextStop: "Depot",
      estimatedArrival: "N/A",
      dailyCollection: "1.2 tons",
      efficiency: "88%",
    },
    {
      id: "VH006",
      name: "Eco Express 6",
      type: "Electric Van",
      status: "active",
      location: { lat: 28.6692, lng: 77.4538, address: "Ghaziabad" },
      driver: "Kavita Yadav",
      capacity: "78%",
      fuel: "N/A",
      battery: "65%",
      route: "Route F - Ghaziabad",
      lastUpdate: "3 mins ago",
      speed: "28 km/h",
      nextStop: "Vaishali Metro",
      estimatedArrival: "10 mins",
      dailyCollection: "2.0 tons",
      efficiency: "93%",
    },
    {
      id: "VH007",
      name: "Clean Machine 7",
      type: "Vacuum Truck",
      status: "active",
      location: { lat: 28.4089, lng: 77.3178, address: "Faridabad" },
      driver: "Deepak Verma",
      capacity: "56%",
      fuel: "67%",
      battery: "82%",
      route: "Route G - Faridabad",
      lastUpdate: "7 mins ago",
      speed: "20 km/h",
      nextStop: "NIT Faridabad",
      estimatedArrival: "18 mins",
      dailyCollection: "1.7 tons",
      efficiency: "89%",
    },
    {
      id: "VH008",
      name: "Waste Wizard 8",
      type: "Multi-bin Truck",
      status: "returning",
      location: { lat: 28.6304, lng: 77.2177, address: "Karol Bagh" },
      driver: "Ravi Gupta",
      capacity: "95%",
      fuel: "28%",
      battery: "71%",
      route: "Route H - Central Delhi",
      lastUpdate: "4 mins ago",
      speed: "15 km/h",
      nextStop: "Main Depot",
      estimatedArrival: "25 mins",
      dailyCollection: "2.8 tons",
      efficiency: "97%",
    },
  ],

  // Dumping Sites Data
  dumpingSites: [
    {
      id: "DS001",
      name: "Okhla Landfill",
      type: "Landfill",
      status: "operational",
      location: { lat: 28.5355, lng: 77.291, address: "Okhla, New Delhi" },
      capacity: "78%",
      dailyIntake: "450 tons",
      lastInspection: "2024-01-15",
      inspectionStatus: "passed",
      environmentalRating: "B+",
      wasteTypes: ["organic", "plastic", "paper", "metal"],
      operatingHours: "24/7",
      contactPerson: "Dr. Rajesh Khanna",
      phone: "+91-9876543210",
      email: "rajesh@okhlalandfill.gov.in",
      facilities: ["Weighbridge", "Leachate Treatment", "Gas Collection"],
      issues: ["Odor complaints", "Traffic congestion"],
      improvements: ["Installing air purifiers", "Expanding access roads"],
    },
    {
      id: "DS002",
      name: "Ghazipur Waste-to-Energy",
      type: "Processing Plant",
      status: "operational",
      location: { lat: 28.6692, lng: 77.4538, address: "Ghazipur, Delhi" },
      capacity: "92%",
      dailyIntake: "800 tons",
      lastInspection: "2024-01-20",
      inspectionStatus: "passed",
      environmentalRating: "A-",
      wasteTypes: ["organic", "combustible"],
      operatingHours: "6:00 AM - 10:00 PM",
      contactPerson: "Eng. Priya Sharma",
      phone: "+91-9876543211",
      email: "priya@ghazipurwte.gov.in",
      facilities: ["Power Generation", "Ash Processing", "Emission Control"],
      issues: ["High maintenance costs"],
      improvements: ["Upgrading turbines", "Installing new filters"],
    },
    {
      id: "DS003",
      name: "Narela Composting Facility",
      type: "Composting Plant",
      status: "operational",
      location: { lat: 28.8386, lng: 77.1025, address: "Narela, Delhi" },
      capacity: "65%",
      dailyIntake: "300 tons",
      lastInspection: "2024-01-18",
      inspectionStatus: "passed",
      environmentalRating: "A",
      wasteTypes: ["organic", "garden"],
      operatingHours: "5:00 AM - 8:00 PM",
      contactPerson: "Dr. Sunita Verma",
      phone: "+91-9876543212",
      email: "sunita@narelacompost.gov.in",
      facilities: ["Windrow Composting", "Quality Testing", "Packaging"],
      issues: ["Seasonal demand fluctuation"],
      improvements: ["Expanding storage capacity", "Adding new composting bays"],
    },
    {
      id: "DS004",
      name: "Bawana Recycling Center",
      type: "Recycling Facility",
      status: "operational",
      location: { lat: 28.7955, lng: 77.0424, address: "Bawana, Delhi" },
      capacity: "71%",
      dailyIntake: "200 tons",
      lastInspection: "2024-01-22",
      inspectionStatus: "passed",
      environmentalRating: "A-",
      wasteTypes: ["plastic", "paper", "metal", "glass"],
      operatingHours: "8:00 AM - 6:00 PM",
      contactPerson: "Mr. Amit Kumar",
      phone: "+91-9876543213",
      email: "amit@bawanarecycling.gov.in",
      facilities: ["Sorting Lines", "Shredding", "Baling", "Quality Control"],
      issues: ["Equipment aging"],
      improvements: ["Replacing old machinery", "Installing AI sorting"],
    },
    {
      id: "DS005",
      name: "Bhalswa Transfer Station",
      type: "Transfer Station",
      status: "maintenance",
      location: { lat: 28.7041, lng: 77.1625, address: "Bhalswa, Delhi" },
      capacity: "45%",
      dailyIntake: "150 tons",
      lastInspection: "2024-01-10",
      inspectionStatus: "needs attention",
      environmentalRating: "C+",
      wasteTypes: ["mixed", "construction"],
      operatingHours: "6:00 AM - 8:00 PM",
      contactPerson: "Mrs. Kavita Singh",
      phone: "+91-9876543214",
      email: "kavita@bhalswastation.gov.in",
      facilities: ["Compaction", "Temporary Storage", "Vehicle Washing"],
      issues: ["Structural repairs needed", "Drainage problems"],
      improvements: ["Roof repairs", "Installing new drainage system"],
    },
    {
      id: "DS006",
      name: "Mundka Bio-Gas Plant",
      type: "Bio-Gas Facility",
      status: "operational",
      location: { lat: 28.6833, lng: 77.0333, address: "Mundka, Delhi" },
      capacity: "83%",
      dailyIntake: "250 tons",
      lastInspection: "2024-01-25",
      inspectionStatus: "excellent",
      environmentalRating: "A+",
      wasteTypes: ["organic", "food"],
      operatingHours: "24/7",
      contactPerson: "Dr. Mohammad Hassan",
      phone: "+91-9876543215",
      email: "hassan@mundkabiogas.gov.in",
      facilities: ["Anaerobic Digesters", "Gas Purification", "Power Generation"],
      issues: ["None"],
      improvements: ["Expanding capacity", "Adding new digesters"],
    },
  ],

  // Green Champions Data
  greenChampions: [
    {
      id: "GC001",
      name: "Arjun Patel",
      avatar: "AP",
      level: "Eco Warrior",
      points: 15420,
      rank: 1,
      location: "Mumbai, Maharashtra",
      joinDate: "2023-03-15",
      reportsSubmitted: 342,
      wasteCollected: "2.8 tons",
      creditsEarned: "₹8,450",
      achievements: ["Top Reporter", "Waste Warrior", "Green Guardian", "Eco Champion", "Sustainability Star"],
      badges: ["🏆", "🌟", "♻️", "🌱", "🎯"],
      streak: 89,
      impact: {
        co2Saved: "1,240 kg",
        treesEquivalent: 56,
        waterSaved: "3,200 L",
        energySaved: "890 kWh",
      },
      recentActivity: [
        "Reported illegal dumping at Bandra West",
        "Organized community cleanup drive",
        "Completed waste segregation training",
        "Referred 5 new users to the platform",
      ],
      socialImpact: {
        communitiesHelped: 12,
        volunteersRecruited: 28,
        eventsOrganized: 15,
        schoolsVisited: 8,
      },
    },
    {
      id: "GC002",
      name: "Priya Sharma",
      avatar: "PS",
      level: "Green Guardian",
      points: 12890,
      rank: 2,
      location: "Delhi, NCR",
      joinDate: "2023-01-22",
      reportsSubmitted: 298,
      wasteCollected: "2.3 tons",
      creditsEarned: "₹7,120",
      achievements: ["Consistent Reporter", "Community Leader", "Recycling Pro", "Green Mentor"],
      badges: ["🥈", "🌿", "📱", "👥", "🔄"],
      streak: 67,
      impact: {
        co2Saved: "980 kg",
        treesEquivalent: 44,
        waterSaved: "2,650 L",
        energySaved: "720 kWh",
      },
      recentActivity: [
        "Led neighborhood recycling workshop",
        "Reported 15 waste collection issues",
        "Mentored 3 new green champions",
        "Achieved 60-day reporting streak",
      ],
      socialImpact: {
        communitiesHelped: 8,
        volunteersRecruited: 19,
        eventsOrganized: 11,
        schoolsVisited: 5,
      },
    },
    {
      id: "GC003",
      name: "Rajesh Kumar",
      avatar: "RK",
      level: "Sustainability Star",
      points: 11250,
      rank: 3,
      location: "Bangalore, Karnataka",
      joinDate: "2023-05-10",
      reportsSubmitted: 267,
      wasteCollected: "2.1 tons",
      creditsEarned: "₹6,890",
      achievements: ["Tech Innovator", "Data Champion", "Smart Reporter", "Eco Educator"],
      badges: ["🥉", "💡", "📊", "🤖", "📚"],
      streak: 45,
      impact: {
        co2Saved: "850 kg",
        treesEquivalent: 38,
        waterSaved: "2,200 L",
        energySaved: "620 kWh",
      },
      recentActivity: [
        "Developed waste tracking app integration",
        "Conducted AI waste detection demo",
        "Trained 20 users on smart reporting",
        "Published sustainability blog post",
      ],
      socialImpact: {
        communitiesHelped: 6,
        volunteersRecruited: 15,
        eventsOrganized: 9,
        schoolsVisited: 12,
      },
    },
    {
      id: "GC004",
      name: "Meera Patel",
      avatar: "MP",
      level: "Eco Champion",
      points: 9870,
      rank: 4,
      location: "Pune, Maharashtra",
      joinDate: "2023-04-18",
      reportsSubmitted: 234,
      wasteCollected: "1.9 tons",
      creditsEarned: "₹5,940",
      achievements: ["Community Builder", "Green Educator", "Waste Reducer"],
      badges: ["🌟", "🏫", "📢", "🌍", "💚"],
      streak: 38,
      impact: {
        co2Saved: "720 kg",
        treesEquivalent: 32,
        waterSaved: "1,890 L",
        energySaved: "540 kWh",
      },
      recentActivity: [
        "Organized college sustainability fair",
        "Reduced household waste by 40%",
        "Created waste reduction video series",
        "Partnered with local NGO for cleanup",
      ],
      socialImpact: {
        communitiesHelped: 5,
        volunteersRecruited: 22,
        eventsOrganized: 7,
        schoolsVisited: 9,
      },
    },
    {
      id: "GC005",
      name: "Amit Singh",
      avatar: "AS",
      level: "Green Advocate",
      points: 8650,
      rank: 5,
      location: "Chennai, Tamil Nadu",
      joinDate: "2023-06-25",
      reportsSubmitted: 201,
      wasteCollected: "1.7 tons",
      creditsEarned: "₹5,210",
      achievements: ["Consistent Contributor", "Local Hero", "Waste Warrior"],
      badges: ["⭐", "🏆", "🌊", "🔥", "🎖️"],
      streak: 29,
      impact: {
        co2Saved: "640 kg",
        treesEquivalent: 29,
        waterSaved: "1,650 L",
        energySaved: "470 kWh",
      },
      recentActivity: [
        "Cleaned up Marina Beach with volunteers",
        "Reported plastic pollution in waterways",
        "Educated 50+ residents on composting",
        "Installed community recycling bins",
      ],
      socialImpact: {
        communitiesHelped: 4,
        volunteersRecruited: 18,
        eventsOrganized: 6,
        schoolsVisited: 7,
      },
    },
  ],

  // Training Programs Data
  trainingPrograms: [
    {
      id: "TP001",
      title: "Waste Segregation Mastery",
      description: "Learn the fundamentals of proper waste segregation and sorting techniques",
      category: "Basic Training",
      duration: "2 hours",
      level: "Beginner",
      participants: 1247,
      completionRate: "94%",
      rating: 4.8,
      instructor: "Dr. Sunita Verma",
      modules: [
        "Introduction to Waste Types",
        "Color-coded Segregation System",
        "Hazardous Waste Identification",
        "Best Practices and Common Mistakes",
      ],
      certificate: true,
      credits: 50,
      status: "active",
      nextSession: "2024-02-15 10:00 AM",
      language: ["Hindi", "English"],
      format: "Online + Practical",
    },
    {
      id: "TP002",
      title: "Smart Reporting with AI",
      description: "Master the use of AI-powered waste detection and reporting tools",
      category: "Technology",
      duration: "3 hours",
      level: "Intermediate",
      participants: 892,
      completionRate: "87%",
      rating: 4.7,
      instructor: "Eng. Rajesh Kumar",
      modules: [
        "AI Waste Detection Basics",
        "Mobile App Navigation",
        "GPS and Location Services",
        "Photo Quality and Reporting Tips",
        "Data Analytics Dashboard",
      ],
      certificate: true,
      credits: 75,
      status: "active",
      nextSession: "2024-02-18 2:00 PM",
      language: ["English", "Tamil"],
      format: "Online",
    },
    {
      id: "TP003",
      title: "Community Leadership in Waste Management",
      description: "Develop skills to lead community waste management initiatives",
      category: "Leadership",
      duration: "4 hours",
      level: "Advanced",
      participants: 456,
      completionRate: "91%",
      rating: 4.9,
      instructor: "Mrs. Priya Sharma",
      modules: [
        "Community Engagement Strategies",
        "Organizing Cleanup Drives",
        "Stakeholder Management",
        "Measuring Impact and Success",
        "Scaling Initiatives",
      ],
      certificate: true,
      credits: 100,
      status: "active",
      nextSession: "2024-02-20 9:00 AM",
      language: ["Hindi", "English", "Marathi"],
      format: "Hybrid",
    },
    {
      id: "TP004",
      title: "Composting and Organic Waste Processing",
      description: "Learn to convert organic waste into valuable compost",
      category: "Practical Skills",
      duration: "3.5 hours",
      level: "Intermediate",
      participants: 723,
      completionRate: "89%",
      rating: 4.6,
      instructor: "Dr. Mohammad Hassan",
      modules: [
        "Organic Waste Identification",
        "Composting Methods and Techniques",
        "Maintaining Compost Quality",
        "Troubleshooting Common Issues",
        "Using Finished Compost",
      ],
      certificate: true,
      credits: 80,
      status: "active",
      nextSession: "2024-02-22 11:00 AM",
      language: ["Hindi", "English", "Urdu"],
      format: "Practical Workshop",
    },
    {
      id: "TP005",
      title: "Recycling Business Opportunities",
      description: "Explore entrepreneurial opportunities in the recycling sector",
      category: "Business",
      duration: "5 hours",
      level: "Advanced",
      participants: 334,
      completionRate: "85%",
      rating: 4.5,
      instructor: "Mr. Amit Kumar",
      modules: [
        "Market Analysis and Opportunities",
        "Setting Up Recycling Business",
        "Supply Chain Management",
        "Financial Planning and Investment",
        "Scaling and Growth Strategies",
      ],
      certificate: true,
      credits: 120,
      status: "active",
      nextSession: "2024-02-25 1:00 PM",
      language: ["English", "Hindi"],
      format: "Online + Case Studies",
    },
  ],

  // Recent Activities Data
  recentActivities: [
    {
      id: "RA001",
      type: "report",
      title: "Illegal dumping reported",
      description: "Large pile of construction waste dumped near Yamuna River",
      user: "Arjun Patel",
      location: "Mayur Vihar, Delhi",
      timestamp: "2 minutes ago",
      status: "investigating",
      priority: "high",
      icon: AlertTriangle,
      color: "red",
    },
    {
      id: "RA002",
      type: "collection",
      title: "Waste collection completed",
      description: "Route A completed successfully - 2.3 tons collected",
      user: "Rajesh Kumar (Driver)",
      location: "Connaught Place area",
      timestamp: "15 minutes ago",
      status: "completed",
      priority: "normal",
      icon: CheckCircle,
      color: "green",
    },
    {
      id: "RA003",
      type: "maintenance",
      title: "Vehicle maintenance scheduled",
      description: "Eco Transporter 2 scheduled for routine maintenance",
      user: "System",
      location: "Main Depot",
      timestamp: "1 hour ago",
      status: "scheduled",
      priority: "medium",
      icon: Settings,
      color: "yellow",
    },
    {
      id: "RA004",
      type: "achievement",
      title: "New Green Champion milestone",
      description: "Priya Sharma reached 10,000 points milestone",
      user: "Priya Sharma",
      location: "Delhi NCR",
      timestamp: "2 hours ago",
      status: "celebrated",
      priority: "low",
      icon: Trophy,
      color: "gold",
    },
    {
      id: "RA005",
      type: "training",
      title: "Training session completed",
      description: "25 participants completed Waste Segregation Mastery course",
      user: "Dr. Sunita Verma",
      location: "Online Platform",
      timestamp: "3 hours ago",
      status: "completed",
      priority: "normal",
      icon: GraduationCap,
      color: "blue",
    },
  ],

  // Chart Data
  chartData: {
    wasteCollection: {
      daily: [
        { date: "Jan 1", collected: 420, target: 450 },
        { date: "Jan 2", collected: 445, target: 450 },
        { date: "Jan 3", collected: 380, target: 450 },
        { date: "Jan 4", collected: 467, target: 450 },
        { date: "Jan 5", collected: 423, target: 450 },
        { date: "Jan 6", collected: 489, target: 450 },
        { date: "Jan 7", collected: 456, target: 450 },
      ],
      monthly: [
        { month: "Aug", collected: 12450, target: 13000 },
        { month: "Sep", collected: 13200, target: 13000 },
        { month: "Oct", collected: 12890, target: 13000 },
        { month: "Nov", collected: 13450, target: 13000 },
        { month: "Dec", collected: 13120, target: 13000 },
        { month: "Jan", collected: 13890, target: 14000 },
      ],
    },
    wasteSegregation: [
      { type: "Organic", value: 45, color: "#10b981" },
      { type: "Plastic", value: 25, color: "#3b82f6" },
      { type: "Paper", value: 15, color: "#f59e0b" },
      { type: "Metal", value: 8, color: "#8b5cf6" },
      { type: "Glass", value: 4, color: "#ef4444" },
      { type: "Others", value: 3, color: "#6b7280" },
    ],
    vehicleEfficiency: [
      { vehicle: "VH001", efficiency: 94, fuel: 72 },
      { vehicle: "VH002", efficiency: 0, fuel: 45 },
      { vehicle: "VH003", efficiency: 91, fuel: 88 },
      { vehicle: "VH004", efficiency: 96, fuel: 34 },
      { vehicle: "VH005", efficiency: 88, fuel: 91 },
      { vehicle: "VH006", efficiency: 93, fuel: 0 },
      { vehicle: "VH007", efficiency: 89, fuel: 67 },
      { vehicle: "VH008", efficiency: 97, fuel: 28 },
    ],
    greenChampionsGrowth: [
      { month: "Aug", champions: 6200 },
      { month: "Sep", champions: 6800 },
      { month: "Oct", champions: 7300 },
      { month: "Nov", champions: 7900 },
      { month: "Dec", champions: 8400 },
      { month: "Jan", champions: 8924 },
    ],
    environmentalImpact: [
      { metric: "CO2 Reduced", value: 2340, unit: "tons", target: 2500 },
      { metric: "Trees Planted", value: 1250, unit: "trees", target: 1500 },
      { metric: "Water Saved", value: 45000, unit: "liters", target: 50000 },
      { metric: "Energy Saved", value: 12500, unit: "kWh", target: 15000 },
    ],
  },

  // Notifications Data
  notifications: [
    {
      id: "N001",
      type: "alert",
      title: "High Priority Report",
      message: "Illegal dumping reported near sensitive area",
      timestamp: "5 minutes ago",
      read: false,
      priority: "high",
      icon: AlertTriangle,
      color: "red",
    },
    {
      id: "N002",
      type: "success",
      title: "Collection Route Completed",
      message: "Route A completed ahead of schedule",
      timestamp: "20 minutes ago",
      read: false,
      priority: "normal",
      icon: CheckCircle,
      color: "green",
    },
    {
      id: "N003",
      type: "info",
      title: "New Training Available",
      message: "Advanced Recycling Techniques course now available",
      timestamp: "1 hour ago",
      read: true,
      priority: "low",
      icon: Info,
      color: "blue",
    },
    {
      id: "N004",
      type: "warning",
      title: "Vehicle Maintenance Due",
      message: "Eco Transporter 2 requires immediate attention",
      timestamp: "2 hours ago",
      read: true,
      priority: "medium",
      icon: AlertCircle,
      color: "yellow",
    },
  ],
}

// Main Dashboard Component
export default function AdminDashboard() {
  // State Management
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [activeSection, setActiveSection] = useState("dashboard")
  const [notifications, setNotifications] = useState(STATIC_DATA.notifications)
  const [showNotifications, setShowNotifications] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [currentTime, setCurrentTime] = useState(new Date())
  const [selectedVehicle, setSelectedVehicle] = useState(null)
  const [selectedDumpingSite, setSelectedDumpingSite] = useState(null)
  const [mapView, setMapView] = useState("vehicles")
  const [filterStatus, setFilterStatus] = useState("all")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedChampion, setSelectedChampion] = useState(null)
  const [selectedTraining, setSelectedTraining] = useState(null)
  const [darkMode, setDarkMode] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  // Refs
  const mapRef = useRef(null)
  const notificationRef = useRef(null)

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  // Handle click outside notifications
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Sidebar Navigation Items
  const sidebarItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: Home,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: "vehicles",
      label: "Vehicle Tracking",
      icon: Truck,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: "locations",
      label: "Waste Locations",
      icon: MapPin,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      id: "champions",
      label: "Green Champions",
      icon: Award,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: BarChart3,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      id: "training",
      label: "Training Programs",
      icon: GraduationCap,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      id: "reports",
      label: "Reports",
      icon: FileText,
      color: "text-gray-600",
      bgColor: "bg-gray-50",
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      color: "text-slate-600",
      bgColor: "bg-slate-50",
    },
  ]

  // Utility Functions
  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  }

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getStatusColor = (status) => {
    const colors = {
      active: "text-green-600 bg-green-50 border-green-200",
      idle: "text-yellow-600 bg-yellow-50 border-yellow-200",
      maintenance: "text-red-600 bg-red-50 border-red-200",
      returning: "text-blue-600 bg-blue-50 border-blue-200",
      operational: "text-green-600 bg-green-50 border-green-200",
      "needs attention": "text-red-600 bg-red-50 border-red-200",
      passed: "text-green-600 bg-green-50 border-green-200",
      excellent: "text-emerald-600 bg-emerald-50 border-emerald-200",
    }
    return colors[status] || "text-gray-600 bg-gray-50 border-gray-200"
  }

  const getPriorityColor = (priority) => {
    const colors = {
      high: "text-red-600 bg-red-50 border-red-200",
      medium: "text-yellow-600 bg-yellow-50 border-yellow-200",
      normal: "text-blue-600 bg-blue-50 border-blue-200",
      low: "text-gray-600 bg-gray-50 border-gray-200",
    }
    return colors[priority] || "text-gray-600 bg-gray-50 border-gray-200"
  }

  const handleRefresh = async () => {
    setRefreshing(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setRefreshing(false)
  }

  const markNotificationAsRead = (id) => {
    setNotifications((prev) => prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  const unreadNotifications = notifications.filter((n) => !n.read).length

  // Component Renderers
  const renderSidebar = () => (
    <div
      className={`fixed left-0 top-0 h-full bg-white shadow-xl border-r border-gray-200 transition-all duration-300 z-40 ${
        sidebarCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!sidebarCollapsed && (
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-2 rounded-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-900">Smart Waste</h1>
              <p className="text-xs text-gray-500">Admin Dashboard</p>
            </div>
          </div>
        )}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {sidebarCollapsed ? (
            <ChevronRight className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="p-4 space-y-2">
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 group ${
              activeSection === item.id ? `${item.bgColor} ${item.color} shadow-sm` : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <item.icon className={`w-5 h-5 ${activeSection === item.id ? item.color : "text-gray-500"}`} />
            {!sidebarCollapsed && <span className="font-medium">{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* Sidebar Footer */}
      {!sidebarCollapsed && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 p-4 rounded-xl border border-emerald-200">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Admin User</p>
                <p className="text-xs text-gray-500">System Administrator</p>
              </div>
            </div>
            <button className="w-full flex items-center justify-center space-x-2 p-2 bg-white rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm">
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )

  const renderNavbar = () => (
    <div
      className={`fixed top-0 right-0 h-16 bg-white shadow-sm border-b border-gray-200 z-30 transition-all duration-300 ${
        sidebarCollapsed ? "left-16" : "left-64"
      }`}
    >
      <div className="flex items-center justify-between h-full px-6">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <div>
            <h2 className="font-bold text-xl text-gray-900 capitalize">{activeSection.replace("-", " ")}</h2>
            <p className="text-sm text-gray-500">{formatDate(currentTime)}</p>
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search vehicles, locations, users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <RefreshCw className={`w-5 h-5 text-gray-600 ${refreshing ? "animate-spin" : ""}`} />
          </button>

          {/* Dark Mode Toggle */}
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            {darkMode ? <Sun className="w-5 h-5 text-gray-600" /> : <Moon className="w-5 h-5 text-gray-600" />}
          </button>

          {/* Notifications */}
          <div className="relative" ref={notificationRef}>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Bell className="w-5 h-5 text-gray-600" />
              {unreadNotifications > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {unreadNotifications}
                </span>
              )}
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 top-12 w-80 bg-white rounded-xl shadow-xl border border-gray-200 py-2 max-h-96 overflow-y-auto">
                <div className="px-4 py-2 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">Notifications</h3>
                  <p className="text-sm text-gray-500">{unreadNotifications} unread</p>
                </div>
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    onClick={() => markNotificationAsRead(notification.id)}
                    className={`px-4 py-3 hover:bg-gray-50 cursor-pointer border-l-4 ${
                      notification.read ? "border-transparent" : "border-emerald-500 bg-emerald-50/30"
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div
                        className={`p-2 rounded-lg ${
                          notification.color === "red"
                            ? "bg-red-100 text-red-600"
                            : notification.color === "green"
                              ? "bg-green-100 text-green-600"
                              : notification.color === "blue"
                                ? "bg-blue-100 text-blue-600"
                                : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        <notification.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm">{notification.title}</h4>
                        <p className="text-sm text-gray-600">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.timestamp}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Current Time */}
          <div className="text-right">
            <p className="font-semibold text-gray-900">{formatTime(currentTime)}</p>
            <p className="text-xs text-gray-500">Live</p>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-medium text-gray-900 text-sm">Admin</p>
              <p className="text-xs text-gray-500">Online</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderDashboardStats = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {STATIC_DATA.dashboardStats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.bgGradient}`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <div
              className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                stat.trend === "up" ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"
              }`}
            >
              {stat.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              <span>{stat.change}</span>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
            <p className="text-xs text-gray-500">{stat.unit}</p>
          </div>
        </div>
      ))}
    </div>
  )

  const renderRecentActivities = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
        <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">View All</button>
      </div>
      <div className="space-y-4">
        {STATIC_DATA.recentActivities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4">
            <div
              className={`p-2 rounded-lg ${
                activity.color === "red"
                  ? "bg-red-100 text-red-600"
                  : activity.color === "green"
                    ? "bg-green-100 text-green-600"
                    : activity.color === "yellow"
                      ? "bg-yellow-100 text-yellow-600"
                      : activity.color === "gold"
                        ? "bg-amber-100 text-amber-600"
                        : "bg-blue-100 text-blue-600"
              }`}
            >
              <activity.icon className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 text-sm">{activity.title}</h4>
              <p className="text-sm text-gray-600">{activity.description}</p>
              <div className="flex items-center space-x-4 mt-2">
                <span className="text-xs text-gray-500">{activity.user}</span>
                <span className="text-xs text-gray-500">{activity.location}</span>
                <span className="text-xs text-gray-500">{activity.timestamp}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(activity.priority)}`}>
                  {activity.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderVehicleTracking = () => (
    <div className="space-y-6">
      {/* Vehicle Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <span className="text-green-600 bg-green-50 px-2 py-1 rounded-full text-xs font-medium">Active</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">6</h3>
          <p className="text-sm text-gray-600">Active Vehicles</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <span className="text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full text-xs font-medium">Idle</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">1</h3>
          <p className="text-sm text-gray-600">Idle Vehicles</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-red-500 to-red-600">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <span className="text-red-600 bg-red-50 px-2 py-1 rounded-full text-xs font-medium">Maintenance</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">1</h3>
          <p className="text-sm text-gray-600">In Maintenance</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-blue-600 bg-blue-50 px-2 py-1 rounded-full text-xs font-medium">Efficiency</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">91%</h3>
          <p className="text-sm text-gray-600">Avg Efficiency</p>
        </div>
      </div>

      {/* Vehicle List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Vehicle Fleet</h3>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
              <button className="flex items-center space-x-2 px-3 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                <Plus className="w-4 h-4" />
                <span>Add Vehicle</span>
              </button>
            </div>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="idle">Idle</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="returning">Returning</option>
                </select>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vehicle
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Capacity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fuel/Battery
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Efficiency
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {STATIC_DATA.vehicles
                .filter((vehicle) => filterStatus === "all" || vehicle.status === filterStatus)
                .map((vehicle) => (
                  <tr
                    key={vehicle.id}
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => setSelectedVehicle(vehicle)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="p-2 rounded-lg bg-gray-100 mr-3">
                          <Truck className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{vehicle.name}</div>
                          <div className="text-sm text-gray-500">
                            {vehicle.id} • {vehicle.type}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getStatusColor(
                          vehicle.status,
                        )}`}
                      >
                        {vehicle.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{vehicle.location.address}</div>
                      <div className="text-sm text-gray-500">{vehicle.lastUpdate}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: vehicle.capacity }}></div>
                        </div>
                        <span className="text-sm text-gray-900">{vehicle.capacity}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="space-y-1">
                        {vehicle.fuel !== "N/A" && (
                          <div className="flex items-center">
                            <Fuel className="w-3 h-3 text-gray-400 mr-1" />
                            <span className="text-xs text-gray-600">{vehicle.fuel}</span>
                          </div>
                        )}
                        <div className="flex items-center">
                          <Battery className="w-3 h-3 text-gray-400 mr-1" />
                          <span className="text-xs text-gray-600">{vehicle.battery}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-12 bg-gray-200 rounded-full h-2 mr-2">
                          <div
                            className={`h-2 rounded-full ${
                              Number.parseInt(vehicle.efficiency) > 90
                                ? "bg-green-600"
                                : Number.parseInt(vehicle.efficiency) > 70
                                  ? "bg-yellow-600"
                                  : "bg-red-600"
                            }`}
                            style={{ width: vehicle.efficiency }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-900">{vehicle.efficiency}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-emerald-600 hover:text-emerald-900 mr-3">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        <Navigation className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <Settings className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Vehicle Detail Modal */}
      {selectedVehicle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{selectedVehicle.name}</h3>
                <button onClick={() => setSelectedVehicle(null)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
            <div className="p-6 space-y-6">
              {/* Vehicle Status */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Status</label>
                  <p
                    className={`mt-1 px-3 py-1 rounded-full text-sm font-medium inline-block ${getStatusColor(
                      selectedVehicle.status,
                    )}`}
                  >
                    {selectedVehicle.status}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Driver</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedVehicle.driver}</p>
                </div>
              </div>

              {/* Location & Route */}
              <div>
                <label className="text-sm font-medium text-gray-500">Current Location</label>
                <p className="mt-1 text-sm text-gray-900">{selectedVehicle.location.address}</p>
                <p className="text-xs text-gray-500">
                  {selectedVehicle.location.lat}, {selectedVehicle.location.lng}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Route</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedVehicle.route}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Next Stop</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedVehicle.nextStop}</p>
                  <p className="text-xs text-gray-500">ETA: {selectedVehicle.estimatedArrival}</p>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Capacity</label>
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: selectedVehicle.capacity }}></div>
                    </div>
                    <p className="text-sm text-gray-900 mt-1">{selectedVehicle.capacity}</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Fuel Level</label>
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          Number.parseInt(selectedVehicle.fuel) > 50
                            ? "bg-green-600"
                            : Number.parseInt(selectedVehicle.fuel) > 25
                              ? "bg-yellow-600"
                              : "bg-red-600"
                        }`}
                        style={{ width: selectedVehicle.fuel }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-900 mt-1">{selectedVehicle.fuel}</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Battery</label>
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          Number.parseInt(selectedVehicle.battery) > 50
                            ? "bg-green-600"
                            : Number.parseInt(selectedVehicle.battery) > 25
                              ? "bg-yellow-600"
                              : "bg-red-600"
                        }`}
                        style={{ width: selectedVehicle.battery }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-900 mt-1">{selectedVehicle.battery}</p>
                  </div>
                </div>
              </div>

              {/* Daily Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Daily Collection</label>
                  <p className="mt-1 text-lg font-semibold text-gray-900">{selectedVehicle.dailyCollection}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Current Speed</label>
                  <p className="mt-1 text-lg font-semibold text-gray-900">{selectedVehicle.speed}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Efficiency</label>
                  <p className="mt-1 text-lg font-semibold text-gray-900">{selectedVehicle.efficiency}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4 border-t border-gray-200">
                <button className="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors">
                  Track Live
                </button>
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Contact Driver
                </button>
                <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors">
                  View History
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  const renderWasteLocations = () => (
    <div className="space-y-6">
      {/* Location Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <span className="text-green-600 bg-green-50 px-2 py-1 rounded-full text-xs font-medium">Operational</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">5</h3>
          <p className="text-sm text-gray-600">Active Sites</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <span className="text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full text-xs font-medium">Attention</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">1</h3>
          <p className="text-sm text-gray-600">Needs Attention</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600">
              <Gauge className="w-6 h-6 text-white" />
            </div>
            <span className="text-blue-600 bg-blue-50 px-2 py-1 rounded-full text-xs font-medium">Capacity</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">74%</h3>
          <p className="text-sm text-gray-600">Avg Capacity</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-blue-600 bg-blue-50 px-2 py-1 rounded-full text-xs font-medium">Daily</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">2,150</h3>
          <p className="text-sm text-gray-600">Tons/Day</p>
        </div>
      </div>

      {/* Interactive Map */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Location Mapping</h3>
          <div className="flex items-center space-x-3">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setMapView("vehicles")}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  mapView === "vehicles" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Vehicles
              </button>
              <button
                onClick={() => setMapView("sites")}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  mapView === "sites" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Dumping Sites
              </button>
              <button
                onClick={() => setMapView("both")}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  mapView === "both" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Both
              </button>
            </div>
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Simulated Map */}
        <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-lg h-96 overflow-hidden">
          {/* Map Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-blue-200 via-green-200 to-yellow-200"></div>
          </div>

          {/* Vehicle Markers */}
          {(mapView === "vehicles" || mapView === "both") &&
            STATIC_DATA.vehicles.map((vehicle, index) => (
              <div
                key={vehicle.id}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${20 + ((index * 15) % 60)}%`,
                  top: `${20 + ((index * 12) % 60)}%`,
                }}
                onClick={() => setSelectedVehicle(vehicle)}
              >
                <div
                  className={`p-2 rounded-full shadow-lg ${
                    vehicle.status === "active"
                      ? "bg-green-500"
                      : vehicle.status === "idle"
                        ? "bg-yellow-500"
                        : vehicle.status === "maintenance"
                          ? "bg-red-500"
                          : "bg-blue-500"
                  } animate-pulse`}
                >
                  <Truck className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-sm text-xs font-medium whitespace-nowrap">
                  {vehicle.name}
                </div>
              </div>
            ))}

          {/* Dumping Site Markers */}
          {(mapView === "sites" || mapView === "both") &&
            STATIC_DATA.dumpingSites.map((site, index) => (
              <div
                key={site.id}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${25 + ((index * 18) % 50)}%`,
                  top: `${30 + ((index * 15) % 40)}%`,
                }}
                onClick={() => setSelectedDumpingSite(site)}
              >
                <div
                  className={`p-2 rounded-full shadow-lg ${
                    site.status === "operational" ? "bg-emerald-500" : "bg-orange-500"
                  }`}
                >
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-sm text-xs font-medium whitespace-nowrap">
                  {site.name}
                </div>
              </div>
            ))}

          {/* Map Legend */}
          <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-sm p-3">
            <h4 className="font-medium text-gray-900 text-sm mb-2">Legend</h4>
            <div className="space-y-1">
              {(mapView === "vehicles" || mapView === "both") && (
                <>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Active Vehicle</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Idle Vehicle</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Maintenance Vehicle</span>
                  </div>
                </>
              )}
              {(mapView === "sites" || mapView === "both") && (
                <>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Operational Site</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Maintenance Site</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Dumping Sites List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Dumping Sites</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Site</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Capacity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Daily Intake
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {STATIC_DATA.dumpingSites.map((site) => (
                <tr
                  key={site.id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedDumpingSite(site)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="p-2 rounded-lg bg-gray-100 mr-3">
                        <MapPin className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{site.name}</div>
                        <div className="text-sm text-gray-500">{site.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{site.type}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getStatusColor(
                        site.status,
                      )}`}
                    >
                      {site.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div
                          className={`h-2 rounded-full ${
                            Number.parseInt(site.capacity) > 80
                              ? "bg-red-600"
                              : Number.parseInt(site.capacity) > 60
                                ? "bg-yellow-600"
                                : "bg-green-600"
                          }`}
                          style={{ width: site.capacity }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-900">{site.capacity}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{site.dailyIntake}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        site.environmentalRating.startsWith("A")
                          ? "text-green-600 bg-green-50"
                          : site.environmentalRating.startsWith("B")
                            ? "text-yellow-600 bg-yellow-50"
                            : "text-red-600 bg-red-50"
                      }`}
                    >
                      {site.environmentalRating}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-emerald-600 hover:text-emerald-900 mr-3">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      <MapPin className="w-4 h-4" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <Settings className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Dumping Site Detail Modal */}
      {selectedDumpingSite && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{selectedDumpingSite.name}</h3>
                <button onClick={() => setSelectedDumpingSite(null)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
            <div className="p-6 space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Basic Information</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Type</label>
                      <p className="mt-1 text-sm text-gray-900">{selectedDumpingSite.type}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Status</label>
                      <p
                        className={`mt-1 px-3 py-1 rounded-full text-sm font-medium inline-block ${getStatusColor(
                          selectedDumpingSite.status,
                        )}`}
                      >
                        {selectedDumpingSite.status}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Operating Hours</label>
                      <p className="mt-1 text-sm text-gray-900">{selectedDumpingSite.operatingHours}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Performance Metrics</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Current Capacity</label>
                      <div className="mt-2">
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className={`h-3 rounded-full ${
                              Number.parseInt(selectedDumpingSite.capacity) > 80
                                ? "bg-red-600"
                                : Number.parseInt(selectedDumpingSite.capacity) > 60
                                  ? "bg-yellow-600"
                                  : "bg-green-600"
                            }`}
                            style={{ width: selectedDumpingSite.capacity }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-900 mt-1">{selectedDumpingSite.capacity}</p>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Daily Intake</label>
                      <p className="mt-1 text-lg font-semibold text-gray-900">{selectedDumpingSite.dailyIntake}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Environmental Rating</label>
                      <p
                        className={`mt-1 px-3 py-1 rounded-full text-sm font-medium inline-block ${
                          selectedDumpingSite.environmentalRating.startsWith("A")
                            ? "text-green-600 bg-green-50"
                            : selectedDumpingSite.environmentalRating.startsWith("B")
                              ? "text-yellow-600 bg-yellow-50"
                              : "text-red-600 bg-red-50"
                        }`}
                      >
                        {selectedDumpingSite.environmentalRating}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Contact Information</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Contact Person</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedDumpingSite.contactPerson}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Phone</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedDumpingSite.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Email</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedDumpingSite.email}</p>
                  </div>
                </div>
              </div>

              {/* Waste Types */}
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Accepted Waste Types</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDumpingSite.wasteTypes.map((type, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Facilities */}
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Facilities</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedDumpingSite.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-700">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Issues & Improvements */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Current Issues</h4>
                  <div className="space-y-2">
                    {selectedDumpingSite.issues.map((issue, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        <span className="text-sm text-gray-700">{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Planned Improvements</h4>
                  <div className="space-y-2">
                    {selectedDumpingSite.improvements.map((improvement, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Lightbulb className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-gray-700">{improvement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4 border-t border-gray-200">
                <button className="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors">
                  View on Map
                </button>
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Contact Site
                </button>
                <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors">
                  Schedule Inspection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  const renderGreenChampions = () => (
    <div className="space-y-6">
      {/* Champions Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600">
              <Award className="w-6 h-6 text-white" />
            </div>
            <span className="text-amber-600 bg-amber-50 px-2 py-1 rounded-full text-xs font-medium">Total</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">8,924</h3>
          <p className="text-sm text-gray-600">Green Champions</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-green-600 bg-green-50 px-2 py-1 rounded-full text-xs font-medium">Active</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">6,847</h3>
          <p className="text-sm text-gray-600">Active This Month</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600">
              <Star className="w-6 h-6 text-white" />
            </div>
            <span className="text-purple-600 bg-purple-50 px-2 py-1 rounded-full text-xs font-medium">Points</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">2.4M</h3>
          <p className="text-sm text-gray-600">Total Points Earned</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <span className="text-blue-600 bg-blue-50 px-2 py-1 rounded-full text-xs font-medium">Rewards</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">₹1.2M</h3>
          <p className="text-sm text-gray-600">Credits Distributed</p>
        </div>
      </div>

      {/* Top Champions Leaderboard */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Top Green Champions</h3>
            <div className="flex items-center space-x-3">
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>This Month</option>
                <option>This Week</option>
                <option>All Time</option>
              </select>
              <button className="flex items-center space-x-2 px-3 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {STATIC_DATA.greenChampions.map((champion, index) => (
              <div
                key={champion.id}
                className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => setSelectedChampion(champion)}
              >
                {/* Rank */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                      champion.rank === 1
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-600"
                        : champion.rank === 2
                          ? "bg-gradient-to-r from-gray-400 to-gray-600"
                          : champion.rank === 3
                            ? "bg-gradient-to-r from-amber-600 to-amber-800"
                            : "bg-gradient-to-r from-blue-500 to-blue-600"
                    }`}
                  >
                    {champion.rank === 1 ? (
                      <Crown className="w-6 h-6" />
                    ) : champion.rank === 2 ? (
                      <Medal className="w-6 h-6" />
                    ) : champion.rank === 3 ? (
                      <Trophy className="w-6 h-6" />
                    ) : (
                      champion.rank
                    )}
                  </div>
                </div>

                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                    {champion.avatar}
                  </div>
                </div>

                {/* Champion Info */}
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <h4 className="font-semibold text-gray-900">{champion.name}</h4>
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                      {champion.level}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{champion.location}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>{champion.reportsSubmitted} reports</span>
                    <span>{champion.wasteCollected} collected</span>
                    <span>{champion.streak} day streak</span>
                  </div>
                </div>

                {/* Points & Badges */}
                <div className="text-right">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">{champion.points.toLocaleString()}</div>
                  <div className="text-sm text-gray-600 mb-2">{champion.creditsEarned} earned</div>
                  <div className="flex space-x-1">
                    {champion.badges.slice(0, 3).map((badge, badgeIndex) => (
                      <span key={badgeIndex} className="text-lg">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Champion Detail Modal */}
      {selectedChampion && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {selectedChampion.avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{selectedChampion.name}</h3>
                    <p className="text-gray-600">{selectedChampion.location}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                        {selectedChampion.level}
                      </span>
                      <span className="text-sm text-gray-500">Rank #{selectedChampion.rank}</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => setSelectedChampion(null)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Stats Overview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600">{selectedChampion.points.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Total Points</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{selectedChampion.reportsSubmitted}</div>
                  <div className="text-sm text-gray-600">Reports</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{selectedChampion.wasteCollected}</div>
                  <div className="text-sm text-gray-600">Waste Collected</div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600">{selectedChampion.creditsEarned}</div>
                  <div className="text-sm text-gray-600">Credits Earned</div>
                </div>
              </div>

              {/* Achievements & Badges */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Achievements</h4>
                  <div className="space-y-2">
                    {selectedChampion.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <Trophy className="w-5 h-5 text-amber-600" />
                        <span className="text-sm font-medium text-gray-900">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Badges Earned</h4>
                  <div className="grid grid-cols-5 gap-3">
                    {selectedChampion.badges.map((badge, index) => (
                      <div
                        key={index}
                        className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center text-2xl"
                      >
                        {badge}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Environmental Impact */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Environmental Impact</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="text-lg font-bold text-green-600">{selectedChampion.impact.co2Saved}</div>
                    <div className="text-sm text-gray-600">CO₂ Saved</div>
                  </div>
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="text-lg font-bold text-green-600">{selectedChampion.impact.treesEquivalent}</div>
                    <div className="text-sm text-gray-600">Trees Equivalent</div>
                  </div>
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">{selectedChampion.impact.waterSaved}</div>
                    <div className="text-sm text-gray-600">Water Saved</div>
                  </div>
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="text-lg font-bold text-yellow-600">{selectedChampion.impact.energySaved}</div>
                    <div className="text-sm text-gray-600">Energy Saved</div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Recent Activity</h4>
                <div className="space-y-3">
                  {selectedChampion.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Impact */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Social Impact</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">
                      {selectedChampion.socialImpact.communitiesHelped}
                    </div>
                    <div className="text-sm text-gray-600">Communities Helped</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">
                      {selectedChampion.socialImpact.volunteersRecruited}
                    </div>
                    <div className="text-sm text-gray-600">Volunteers Recruited</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-lg font-bold text-purple-600">
                      {selectedChampion.socialImpact.eventsOrganized}
                    </div>
                    <div className="text-sm text-gray-600">Events Organized</div>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <div className="text-lg font-bold text-amber-600">
                      {selectedChampion.socialImpact.schoolsVisited}
                    </div>
                    <div className="text-sm text-gray-600">Schools Visited</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4 border-t border-gray-200">
                <button className="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors">
                  Send Message
                </button>
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  View Profile
                </button>
                <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                  Award Badge
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  const renderTrainingPrograms = () => (
    <div className="space-y-6">
      {/* Training Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full text-xs font-medium">Active</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">47</h3>
          <p className="text-sm text-gray-600">Active Programs</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600">
              <Users className="w-6 h-6 text-white" />
            </div>
            <span className="text-green-600 bg-green-50 px-2 py-1 rounded-full text-xs font-medium">Enrolled</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">3,652</h3>
          <p className="text-sm text-gray-600">Total Participants</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <span className="text-amber-600 bg-amber-50 px-2 py-1 rounded-full text-xs font-medium">Completed</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">2,847</h3>
          <p className="text-sm text-gray-600">Certificates Issued</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600">
              <Star className="w-6 h-6 text-white" />
            </div>
            <span className="text-purple-600 bg-purple-50 px-2 py-1 rounded-full text-xs font-medium">Rating</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">4.7</h3>
          <p className="text-sm text-gray-600">Average Rating</p>
        </div>
      </div>

      {/* Training Programs List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Training Programs</h3>
            <div className="flex items-center space-x-3">
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>All Categories</option>
                <option>Basic Training</option>
                <option>Technology</option>
                <option>Leadership</option>
                <option>Practical Skills</option>
                <option>Business</option>
              </select>
              <button className="flex items-center space-x-2 px-3 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                <Plus className="w-4 h-4" />
                <span>Add Program</span>
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid gap-6">
            {STATIC_DATA.trainingPrograms.map((program) => (
              <div
                key={program.id}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedTraining(program)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{program.title}</h4>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        {program.category}
                      </span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        {program.level}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{program.description}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{program.participants} participants</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>{program.rating}/5</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{program.completionRate} completion</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-600 mb-1">{program.credits}</div>
                    <div className="text-sm text-gray-600">credits</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{program.instructor}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{program.nextSession}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {program.certificate && (
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                        Certificate
                      </span>
                    )}
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        program.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {program.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Training Detail Modal */}
      {selectedTraining && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{selectedTraining.title}</h3>
                  <p className="text-gray-600 mt-1">{selectedTraining.description}</p>
                </div>
                <button onClick={() => setSelectedTraining(null)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Program Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-lg font-bold text-blue-600">{selectedTraining.duration}</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-lg font-bold text-green-600">{selectedTraining.participants}</div>
                  <div className="text-sm text-gray-600">Participants</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-lg font-bold text-purple-600">{selectedTraining.completionRate}</div>
                  <div className="text-sm text-gray-600">Completion Rate</div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-lg font-bold text-amber-600">{selectedTraining.rating}/5</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>

              {/* Course Modules */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Course Modules</h4>
                <div className="space-y-3">
                  {selectedTraining.modules.map((module, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <span className="text-gray-900">{module}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Program Info */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Program Information</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-500">Instructor</label>
                      <p className="mt-1 text-sm text-gray-900">{selectedTraining.instructor}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Level</label>
                      <p className="mt-1 text-sm text-gray-900">{selectedTraining.level}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Format</label>
                      <p className="mt-1 text-sm text-gray-900">{selectedTraining.format}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-500">Languages</label>
                      <div className="mt-1 flex space-x-2">
                        {selectedTraining.language.map((lang, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Rewards & Benefits</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg">
                      <Gift className="w-5 h-5 text-emerald-600" />
                      <div>
                        <div className="font-medium text-gray-900">{selectedTraining.credits} Credits</div>
                        <div className="text-sm text-gray-600">Earn upon completion</div>
                      </div>
                    </div>
                    {selectedTraining.certificate && (
                      <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                        <Award className="w-5 h-5 text-purple-600" />
                        <div>
                          <div className="font-medium text-gray-900">Certificate</div>
                          <div className="text-sm text-gray-600">Digital certificate included</div>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="font-medium text-gray-900">Learning Materials</div>
                        <div className="text-sm text-gray-600">Comprehensive resources</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Session */}
              <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">Next Session</h4>
                    <p className="text-gray-600">{selectedTraining.nextSession}</p>
                  </div>
                  <Calendar className="w-8 h-8 text-emerald-600" />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4 border-t border-gray-200">
                <button className="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors">
                  Enroll Participants
                </button>
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  View Materials
                </button>
                <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors">
                  Edit Program
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  const renderAnalytics = () => (
    <div className="space-y-6">
      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <span className="text-blue-600 bg-blue-50 px-2 py-1 rounded-full text-xs font-medium">Monthly</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">13,890</h3>
          <p className="text-sm text-gray-600">Tons Collected</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-green-600 bg-green-50 px-2 py-1 rounded-full text-xs font-medium">Efficiency</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">94.2%</h3>
          <p className="text-sm text-gray-600">Collection Rate</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600">
              <Users className="w-6 h-6 text-white" />
            </div>
            <span className="text-purple-600 bg-purple-50 px-2 py-1 rounded-full text-xs font-medium">Growth</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">+18.7%</h3>
          <p className="text-sm text-gray-600">User Growth</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600">
              <Target className="w-6 h-6 text-white" />
            </div>
            <span className="text-amber-600 bg-amber-50 px-2 py-1 rounded-full text-xs font-medium">Target</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">89.2%</h3>
          <p className="text-sm text-gray-600">Goal Achievement</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Waste Collection Trend */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Daily Waste Collection</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">7D</button>
              <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-full text-sm font-medium">
                30D
              </button>
            </div>
          </div>
          <div className="h-64 flex items-end space-x-2">
            {STATIC_DATA.chartData.wasteCollection.daily.map((day, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full bg-gray-200 rounded-t relative">
                  <div
                    className="bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t transition-all duration-500"
                    style={{
                      height: `${(day.collected / day.target) * 200}px`,
                    }}
                  ></div>
                  <div
                    className="absolute top-0 w-full border-t-2 border-dashed border-red-400"
                    style={{
                      top: `${200 - (day.target / day.target) * 200}px`,
                    }}
                  ></div>
                </div>
                <div className="text-xs text-gray-600 mt-2 text-center">{day.date}</div>
                <div className="text-xs font-medium text-gray-900">{day.collected}t</div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center space-x-4 mt-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-emerald-500 rounded"></div>
              <span className="text-gray-600">Collected</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 border-t-2 border-dashed border-red-400"></div>
              <span className="text-gray-600">Target</span>
            </div>
          </div>
        </div>

        {/* Waste Segregation */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Waste Segregation</h3>
            <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">View Details</button>
          </div>
          <div className="relative h-64 flex items-center justify-center">
            <div className="relative w-48 h-48">
              {/* Simulated Pie Chart */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-500"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500"></div>
              <div className="absolute inset-6 rounded-full bg-gradient-to-r from-purple-400 to-purple-500"></div>
              <div className="absolute inset-8 rounded-full bg-gradient-to-r from-red-400 to-red-500"></div>
              <div className="absolute inset-10 rounded-full bg-white flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Segregated</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {STATIC_DATA.chartData.wasteSegregation.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-gray-600">{item.type}</span>
                <span className="text-sm font-medium text-gray-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vehicle Efficiency */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Vehicle Efficiency</h3>
            <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">Optimize Routes</button>
          </div>
          <div className="space-y-4">
            {STATIC_DATA.chartData.vehicleEfficiency.map((vehicle, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-16 text-sm font-medium text-gray-900">{vehicle.vehicle}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Efficiency</span>
                    <span className="text-sm font-medium text-gray-900">{vehicle.efficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        vehicle.efficiency > 90
                          ? "bg-green-500"
                          : vehicle.efficiency > 70
                            ? "bg-yellow-500"
                            : "bg-red-500"
                      }`}
                      style={{ width: `${vehicle.efficiency}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-16 text-right">
                  <div className="text-xs text-gray-500">Fuel</div>
                  <div className="text-sm font-medium text-gray-900">{vehicle.fuel}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Green Champions Growth */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Champions Growth</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">6M</button>
              <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-full text-sm font-medium">1Y</button>
            </div>
          </div>
          <div className="h-64 flex items-end space-x-3">
            {STATIC_DATA.chartData.greenChampionsGrowth.map((month, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-gradient-to-t from-amber-500 to-amber-400 rounded-t transition-all duration-500"
                  style={{
                    height: `${(month.champions / 9000) * 200}px`,
                  }}
                ></div>
                <div className="text-xs text-gray-600 mt-2">{month.month}</div>
                <div className="text-xs font-medium text-gray-900">{(month.champions / 1000).toFixed(1)}K</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Environmental Impact */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Environmental Impact Metrics</h3>
          <button className="flex items-center space-x-2 px-3 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATIC_DATA.chartData.environmentalImpact.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-gray-200"></div>
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500"
                  style={{
                    background: `conic-gradient(from 0deg, #10b981 0deg, #10b981 ${
                      (metric.value / metric.target) * 360
                    }deg, #e5e7eb ${(metric.value / metric.target) * 360}deg)`,
                  }}
                ></div>
                <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">
                      {Math.round((metric.value / metric.target) * 100)}%
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">{metric.metric}</h4>
              <p className="text-2xl font-bold text-emerald-600 mb-1">{metric.value.toLocaleString()}</p>
              <p className="text-sm text-gray-600">
                {metric.unit} / {metric.target.toLocaleString()} target
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderSettings = () => (
    <div className="space-y-6">
      {/* Settings Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">System Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <h4 className="font-medium text-gray-900">User Management</h4>
            </div>
            <p className="text-sm text-gray-600">Manage user accounts, roles, and permissions</p>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Truck className="w-5 h-5 text-green-600" />
              </div>
              <h4 className="font-medium text-gray-900">Vehicle Settings</h4>
            </div>
            <p className="text-sm text-gray-600">Configure vehicle tracking and route optimization</p>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Bell className="w-5 h-5 text-purple-600" />
              </div>
              <h4 className="font-medium text-gray-900">Notifications</h4>
            </div>
            <p className="text-sm text-gray-600">Configure alert settings and notification preferences</p>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-amber-100 rounded-lg">
                <Shield className="w-5 h-5 text-amber-600" />
              </div>
              <h4 className="font-medium text-gray-900">Security</h4>
            </div>
            <p className="text-sm text-gray-600">Security settings, API keys, and access controls</p>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <Settings className="w-5 h-5 text-red-600" />
              </div>
              <h4 className="font-medium text-gray-900">System Config</h4>
            </div>
            <p className="text-sm text-gray-600">General system configuration and preferences</p>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <FileText className="w-5 h-5 text-indigo-600" />
              </div>
              <h4 className="font-medium text-gray-900">Reports</h4>
            </div>
            <p className="text-sm text-gray-600">Configure automated reports and data exports</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <RefreshCw className="w-5 h-5 text-blue-600" />
            <span className="font-medium text-gray-900">Sync Data</span>
          </button>
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-5 h-5 text-green-600" />
            <span className="font-medium text-gray-900">Backup System</span>
          </button>
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Upload className="w-5 h-5 text-purple-600" />
            <span className="font-medium text-gray-900">Import Data</span>
          </button>
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span className="font-medium text-gray-900">System Check</span>
          </button>
        </div>
      </div>
    </div>
  )

  const renderReports = () => (
    <div className="space-y-6">
      {/* Reports Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">System Reports</h3>
          <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
            <Plus className="w-4 h-4" />
            <span>Generate Report</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Collection Analytics</h4>
                <p className="text-sm text-gray-600">Daily/Weekly/Monthly</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">Comprehensive waste collection statistics and trends</p>
            <button className="w-full py-2 px-4 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
              Generate Report
            </button>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Truck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Vehicle Reports</h4>
                <p className="text-sm text-gray-600">Performance & Efficiency</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">Vehicle performance, fuel consumption, and maintenance records</p>
            <button className="w-full py-2 px-4 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors">
              Generate Report
            </button>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-amber-100 rounded-lg">
                <Award className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Champions Report</h4>
                <p className="text-sm text-gray-600">User Engagement</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">Green champions activity, points, and community impact</p>
            <button className="w-full py-2 px-4 bg-amber-50 text-amber-600 rounded-lg hover:bg-amber-100 transition-colors">
              Generate Report
            </button>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <TreePine className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Environmental Impact</h4>
                <p className="text-sm text-gray-600">Sustainability Metrics</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">CO₂ reduction, recycling rates, and environmental benefits</p>
            <button className="w-full py-2 px-4 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors">
              Generate Report
            </button>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Incident Reports</h4>
                <p className="text-sm text-gray-600">Issues & Resolutions</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">System incidents, user reports, and resolution tracking</p>
            <button className="w-full py-2 px-4 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
              Generate Report
            </button>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <GraduationCap className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Training Reports</h4>
                <p className="text-sm text-gray-600">Program Effectiveness</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">Training completion rates, feedback, and program success</p>
            <button className="w-full py-2 px-4 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors">
              Generate Report
            </button>
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Reports</h3>
        <div className="space-y-4">
          {[
            {
              name: "Monthly Collection Summary - January 2024",
              type: "Collection Analytics",
              date: "2024-02-01",
              size: "2.4 MB",
              status: "completed",
            },
            {
              name: "Vehicle Performance Report - Q4 2023",
              type: "Vehicle Reports",
              date: "2024-01-15",
              size: "1.8 MB",
              status: "completed",
            },
            {
              name: "Green Champions Leaderboard - December",
              type: "Champions Report",
              date: "2024-01-01",
              size: "956 KB",
              status: "completed",
            },
            {
              name: "Environmental Impact Assessment - 2023",
              type: "Environmental Impact",
              date: "2023-12-31",
              size: "3.2 MB",
              status: "completed",
            },
          ].map((report, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <FileText className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{report.name}</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>{report.type}</span>
                    <span>{report.date}</span>
                    <span>{report.size}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                  {report.status}
                </span>
                <button className="p-2 text-gray-600 hover:text-gray-900">
                  <Download className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  // Main render function
  const renderMainContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div className="space-y-6">
            {renderDashboardStats()}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {renderRecentActivities()}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Active Vehicles</span>
                    <span className="font-semibold text-gray-900">6/8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Collection Efficiency</span>
                    <span className="font-semibold text-green-600">94.2%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Pending Reports</span>
                    <span className="font-semibold text-red-600">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">System Health</span>
                    <span className="font-semibold text-green-600">Excellent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case "vehicles":
        return renderVehicleTracking()
      case "locations":
        return renderWasteLocations()
      case "champions":
        return renderGreenChampions()
      case "analytics":
        return renderAnalytics()
      case "training":
        return renderTrainingPrograms()
      case "reports":
        return renderReports()
      case "settings":
        return renderSettings()
      default:
        return renderDashboardStats()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      {renderSidebar()}

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarCollapsed ? "ml-16" : "ml-64"}`}>
        {/* Navbar */}
        {renderNavbar()}

        {/* Page Content */}
        <div className="pt-16 p-6">
          <div className="max-w-7xl mx-auto">{renderMainContent()}</div>
        </div>
      </div>
    </div>
  )
}
