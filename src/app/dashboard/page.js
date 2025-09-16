"use client";

import { useState, useEffect } from "react";
import {
  Camera,
  Truck,
  Gift,
  Star,
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  TrendingUp,
  Users,
  Calendar,
  Bell,
  Plus,
  ArrowRight,
  Award,
  Coins,
  Target,
  Zap,
  Route,
  Package,
  RefreshCw,
  Navigation,
  Battery,
  Wifi,
  Signal,
  Trophy
} from "lucide-react";
import Link from "next/link";

export default function UserDashboard() {
  const [userType, setUserType] = useState("citizen"); // citizen or worker
  const [currentTime, setCurrentTime] = useState(new Date());
  const [stats, setStats] = useState({
    reports: 0,
    credits: 0,
    collections: 0,
    rating: 0,
  });
  const [isOnline, setIsOnline] = useState(true);
  const [batteryLevel, setBatteryLevel] = useState(85);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Simulate user type detection (in real app, get from auth)
  useEffect(() => {
    // Mock user type - in real app get from authentication
    const mockUserType = localStorage.getItem("userType") || "citizen";
    setUserType(mockUserType);

    // Animate stats
    const targetStats =
      userType === "citizen"
        ? { reports: 23, credits: 1250, collections: 45, rating: 4.8 }
        : { reports: 156, credits: 3400, collections: 89, rating: 4.9 };

    let currentStats = { reports: 0, credits: 0, collections: 0, rating: 0 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;

      setStats({
        reports: Math.floor(targetStats.reports * progress),
        credits: Math.floor(targetStats.credits * progress),
        collections: Math.floor(targetStats.collections * progress),
        rating: parseFloat((targetStats.rating * progress).toFixed(1)),
      });

      if (step >= steps) {
        clearInterval(interval);
        setStats(targetStats);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [userType]);

  const recentActivities =
    userType === "citizen"
      ? [
          {
            id: 1,
            type: "report",
            title: "Waste Report Submitted",
            description: "Illegal dumping at Sector 7, Ring Road",
            time: "2 hours ago",
            status: "pending",
            icon: Camera,
            color: "bg-blue-100 text-blue-600",
          },
          {
            id: 2,
            type: "credit",
            title: "Green Credits Earned",
            description: "+50 points for proper waste segregation",
            time: "1 day ago",
            status: "completed",
            icon: Star,
            color: "bg-yellow-100 text-yellow-600",
          },
          {
            id: 3,
            type: "collection",
            title: "Pickup Completed",
            description: "Waste collected from your location",
            time: "2 days ago",
            status: "completed",
            icon: CheckCircle,
            color: "bg-green-100 text-green-600",
          },
          {
            id: 4,
            type: "reward",
            title: "Monthly Reward",
            description: "Cashback ₹200 for eco-friendly actions",
            time: "3 days ago",
            status: "completed",
            icon: Gift,
            color: "bg-purple-100 text-purple-600",
          },
        ]
      : [
          {
            id: 1,
            type: "route",
            title: "Route Optimized",
            description: "15% efficiency increase in Sector 12",
            time: "1 hour ago",
            status: "completed",
            icon: Route,
            color: "bg-green-100 text-green-600",
          },
          {
            id: 2,
            type: "collection",
            title: "Collection Completed",
            description: "24 bins collected in morning shift",
            time: "3 hours ago",
            status: "completed",
            icon: Package,
            color: "bg-blue-100 text-blue-600",
          },
          {
            id: 3,
            type: "maintenance",
            title: "Vehicle Service Due",
            description: "Truck #245 needs maintenance check",
            time: "5 hours ago",
            status: "pending",
            icon: AlertTriangle,
            color: "bg-orange-100 text-orange-600",
          },
          {
            id: 4,
            type: "bonus",
            title: "Performance Bonus",
            description: "₹500 bonus for exceeding targets",
            time: "1 day ago",
            status: "completed",
            icon: Award,
            color: "bg-purple-100 text-purple-600",
          },
        ];

  const quickActions =
    userType === "citizen"
      ? [
          {
            title: "Report Waste",
            description: "Snap & report illegal dumping",
            icon: Camera,
            color: "from-red-500 to-pink-600",
            bgColor: "bg-red-50",
            href: "/report",
            count: "23 this month",
          },
          {
            title: "Track Collection",
            description: "Check pickup schedules",
            icon: Truck,
            color: "from-blue-500 to-cyan-600",
            bgColor: "bg-blue-50",
            href: "/track",
            count: "Next: Tomorrow 8AM",
          },
          {
            title: "Green Credits",
            description: "View rewards & redeem",
            icon: Gift,
            color: "from-yellow-500 to-orange-600",
            bgColor: "bg-yellow-50",
            href: "/rewards",
            count: `₹${stats.credits} earned`,
          },
          {
            title: "Leaderboard",
            description: "See top eco-warriors",
            icon: Trophy,
            color: "from-green-500 to-teal-600",
            bgColor: "bg-green-50",
            href: "/leaderboard",
            count: "#12 this week",
          },
        ]
      : [
          {
            title: "Start Route",
            description: "Begin today's collection",
            icon: Navigation,
            color: "from-green-500 to-emerald-600",
            bgColor: "bg-green-50",
            href: "/route",
            count: "8 stops remaining",
          },
          {
            title: "Update Status",
            description: "Mark collections complete",
            icon: CheckCircle,
            color: "from-blue-500 to-cyan-600",
            bgColor: "bg-blue-50",
            href: "/update",
            count: "12/20 completed",
          },
          {
            title: "View Reports",
            description: "Check citizen reports",
            icon: AlertTriangle,
            color: "from-orange-500 to-red-600",
            bgColor: "bg-orange-50",
            href: "/reports",
            count: "5 new reports",
          },
          {
            title: "Performance",
            description: "Track your metrics",
            icon: TrendingUp,
            color: "from-purple-500 to-pink-600",
            bgColor: "bg-purple-50",
            href: "/performance",
            count: "94% efficiency",
          },
        ];

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Status Bar */}
      <div className="bg-green-600 text-white px-4 py-2 flex items-center justify-between text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Signal className="w-4 h-4" />
            <Wifi className="w-4 h-4" />
          </div>
          <span className="font-medium">{formatTime(currentTime)}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Battery
            className={`w-4 h-4 ${batteryLevel > 20 ? "" : "text-red-300"}`}
          />
          <span className="text-xs">{batteryLevel}%</span>
          <div
            className={`w-2 h-2 rounded-full ${
              isOnline ? "bg-green-300" : "bg-red-300"
            }`}
          />
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Good{" "}
                {currentTime.getHours() < 12
                  ? "Morning"
                  : currentTime.getHours() < 17
                  ? "Afternoon"
                  : "Evening"}
                !
              </h1>
              <p className="text-gray-600 text-sm mt-1">
                {formatDate(currentTime)} •{" "}
                {userType === "citizen" ? "Eco Warrior" : "Collection Agent"}
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <button className="relative p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  3
                </span>
              </button>

              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {userType === "citizen" ? "C" : "W"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-6 pb-24">
        {/* Stats Cards */}
        <section className="mb-8">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Camera className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  {stats.reports}
                </span>
              </div>
              <p className="text-sm text-gray-600 font-medium">
                {userType === "citizen" ? "Reports Made" : "Issues Resolved"}
              </p>
              <p className="text-xs text-green-600 font-medium mt-1">
                +12% this week
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Coins className="w-5 h-5 text-yellow-600" />
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  ₹{stats.credits}
                </span>
              </div>
              <p className="text-sm text-gray-600 font-medium">
                {userType === "citizen" ? "Credits Earned" : "Bonus Earned"}
              </p>
              <p className="text-xs text-green-600 font-medium mt-1">
                +₹250 this week
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <div className="bg-green-100 p-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  {stats.collections}
                </span>
              </div>
              <p className="text-sm text-gray-600 font-medium">
                {userType === "citizen" ? "Pickups Done" : "Collections Made"}
              </p>
              <p className="text-xs text-green-600 font-medium mt-1">
                98% success rate
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Star className="w-5 h-5 text-purple-600" />
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-gray-900">
                    {stats.rating}
                  </span>
                  <Star className="w-4 h-4 text-yellow-400 fill-current inline-block ml-1" />
                </div>
              </div>
              <p className="text-sm text-gray-600 font-medium">Your Rating</p>
              <p className="text-xs text-green-600 font-medium mt-1">
                Top 10% user
              </p>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Quick Actions</h2>
            <button className="text-green-600 text-sm font-medium">
              View All
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                href={action.href}
                className={`${action.bgColor} rounded-2xl p-4 border border-gray-100 hover:shadow-lg transition-all duration-200 transform hover:scale-105`}
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${action.color} mb-3 shadow-lg`}
                >
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{action.title}</h3>
                <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                  {action.description}
                </p>
                <p className="text-xs font-medium text-gray-500">
                  {action.count}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Today's Goals/Tasks */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">
                {userType === "citizen" ? "Today's Challenge" : "Today's Route"}
              </h2>
              <Target className="w-6 h-6" />
            </div>

            {userType === "citizen" ? (
              <div>
                <p className="text-green-100 mb-4">
                  Make 2 more waste reports to earn bonus credits!
                </p>
                <div className="bg-white/20 rounded-full h-2 mb-4">
                  <div className="bg-white rounded-full h-2 w-3/5"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-100">3 of 5 reports</span>
                  <span className="text-sm font-bold">+100 bonus credits</span>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-green-100 mb-4">
                  Complete Sector 12 route (8 stops remaining)
                </p>
                <div className="bg-white/20 rounded-full h-2 mb-4">
                  <div className="bg-white rounded-full h-2 w-3/5"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-100">12 of 20 stops</span>
                  <span className="text-sm font-bold">60% complete</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Weather/Location Info */}
        <section className="mb-8">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-900">Current Location</h3>
              <button className="text-green-600">
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-red-500" />
              <div>
                <p className="font-medium text-gray-900">
                  Indore, Madhya Pradesh
                </p>
                <p className="text-sm text-gray-600">
                  Sector 7, Ring Road • Clear Sky, 28°C
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Activities */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              Recent Activities
            </h2>
            <button className="text-green-600 text-sm font-medium">
              View All
            </button>
          </div>

          <div className="space-y-3">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`p-2 rounded-lg ${activity.color} flex-shrink-0`}
                  >
                    <activity.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-900 truncate">
                        {activity.title}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          activity.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : activity.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {activity.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                      {activity.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {activity.time}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips/Recommendations */}
        <section className="mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <Zap className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900">
                {userType === "citizen"
                  ? "Eco Tip of the Day"
                  : "Efficiency Tip"}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              {userType === "citizen"
                ? "Segregate wet and dry waste at source to earn 2x credits on your next report!"
                : "Use the route optimization feature to reduce fuel consumption by up to 20% daily."}
            </p>
            <button className="text-blue-600 text-sm font-medium flex items-center">
              Learn More <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </section>
      </main>

      {/* Bottom Navigation - Same as layout but repeated here for demo */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="px-2 py-2">
          <div className="flex justify-around">
            <Link
              href="/dashboard"
              className="flex flex-col items-center py-2 px-4 rounded-lg text-green-600 bg-green-50"
            >
              <CheckCircle className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Home</span>
              <div className="absolute -top-0.5 w-6 h-0.5 bg-green-600 rounded-full" />
            </Link>

            <Link
              href="/report"
              className="flex flex-col items-center py-2 px-4 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            >
              <Camera className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Report</span>
            </Link>

            <Link
              href="/rewards"
              className="flex flex-col items-center py-2 px-4 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            >
              <Award className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Rewards</span>
            </Link>

            <Link
              href="/profile"
              className="flex flex-col items-center py-2 px-4 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            >
              <Users className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Profile</span>
            </Link>
          </div>
        </div>

        {/* Bottom Safe Area for iPhone */}
        <div className="h-safe-area-inset-bottom bg-white" />
      </nav>

      {/* Custom Styles */}
      <style jsx global>{`
        /* Safe area support */
        @supports (padding: max(0px)) {
          .h-safe-area-inset-bottom {
            height: max(0.5rem, env(safe-area-inset-bottom));
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Touch optimization */
        button,
        a {
          -webkit-tap-highlight-color: rgba(22, 163, 74, 0.1);
          touch-action: manipulation;
        }

        /* Hide scrollbars on mobile */
        .overflow-auto::-webkit-scrollbar {
          display: none;
        }

        .overflow-auto {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Custom animations */
        @keyframes slideInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-in-up {
          animation: slideInUp 0.3s ease-out;
        }

        /* Focus styles */
        button:focus,
        a:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1);
        }
      `}</style>
    </div>
  );
}
