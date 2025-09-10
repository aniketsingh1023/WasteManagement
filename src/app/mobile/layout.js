"use client";

import { useState, useEffect } from "react";
import Head from "next/head";

export default function SimpleLayout({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Auto fullscreen and hide address bar
  useEffect(() => {
    const enterFullscreen = async () => {
      try {
        // For mobile browsers - hide address bar
        if (window.navigator.standalone !== true) {
          // Scroll to hide address bar on mobile
          window.scrollTo(0, 1);

          // Request fullscreen for desktop
          if (document.documentElement.requestFullscreen) {
            await document.documentElement.requestFullscreen();
          } else if (document.documentElement.webkitRequestFullscreen) {
            await document.documentElement.webkitRequestFullscreen();
          } else if (document.documentElement.msRequestFullscreen) {
            await document.documentElement.msRequestFullscreen();
          }

          setIsFullscreen(true);
        }
      } catch (error) {
        console.log("Fullscreen not supported or blocked by user");
      }
    };

    // Auto-trigger fullscreen after a small delay
    const timer = setTimeout(() => {
      enterFullscreen();
    }, 1000);

    // Listen for fullscreen changes
    const handleFullscreenChange = () => {
      setIsFullscreen(
        !!(
          document.fullscreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement
        )
      );
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);

    // Hide address bar on mobile when page loads
    window.addEventListener("load", () => {
      setTimeout(() => {
        window.scrollTo(0, 1);
      }, 100);
    });

    // Hide address bar on orientation change
    window.addEventListener("orientationchange", () => {
      setTimeout(() => {
        window.scrollTo(0, 1);
      }, 500);
    });

    return () => {
      clearTimeout(timer);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  return (
    <>
      {/* Meta tags for fullscreen behavior */}
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#16a34a" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />

        {/* PWA manifest for fullscreen */}
        <link rel="manifest" href="/manifest.json" />

        {/* Prevent user selection and context menu for app-like feel */}
        <style jsx global>{`
          body {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-touch-callout: none;
            -webkit-tap-highlight-color: transparent;
            overscroll-behavior: none;
          }
        `}</style>
      </Head>

      <div className="min-h-screen bg-gray-50 relative">
        

        {/* Optional: Global Loading Overlay */}
        {isLoading && (
          <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-4"></div>
              <div className="text-gray-600 text-center">Loading...</div>
            </div>
          </div>
        )}

        {/* Main Content Area - Full Screen */}
        <main
          className={`w-full min-h-screen ${!isFullscreen ? "pt-10" : ""}`}
          onClick={async () => {
            // Allow clicking anywhere to trigger fullscreen
            if (!isFullscreen) {
              try {
                if (document.documentElement.requestFullscreen) {
                  await document.documentElement.requestFullscreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                  await document.documentElement.webkitRequestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) {
                  await document.documentElement.msRequestFullscreen();
                }
              } catch (error) {
                console.log("Fullscreen request failed");
              }
            }
          }}
        >
          {children}
        </main>

        {/* Global Styles */}
        <style jsx global>{`
          /* Remove default margins and ensure full viewport */
          * {
            box-sizing: border-box;
          }

          html,
          body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow-x: hidden;
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

          /* Prevent zoom on input focus */
          input,
          select,
          textarea {
            font-size: 16px;
          }

          @media (max-width: 380px) {
            input,
            select,
            textarea {
              font-size: 14px;
            }
          }

          /* Hide scrollbars but keep functionality */
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }

          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 4px;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #16a34a;
            border-radius: 4px;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #15803d;
          }

          /* Safe area for phones with notches */
          @supports (padding: max(0px)) {
            .safe-area-top {
              padding-top: max(1rem, env(safe-area-inset-top));
            }

            .safe-area-bottom {
              padding-bottom: max(1rem, env(safe-area-inset-bottom));
            }

            .safe-area-left {
              padding-left: max(1rem, env(safe-area-inset-left));
            }

            .safe-area-right {
              padding-right: max(1rem, env(safe-area-inset-right));
            }
          }

          /* Fullscreen specific styles */
          .fullscreen-content {
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 9999;
          }

          /* Hide address bar on mobile */
          @media screen and (max-width: 768px) {
            body {
              height: 100vh;
              height: -webkit-fill-available;
            }

            .min-h-screen {
              min-height: 100vh;
              min-height: -webkit-fill-available;
            }
          }

          /* Custom animations */
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .fade-in {
            animation: fadeIn 0.5s ease-out;
          }

          /* Mobile-first responsive text */
          .text-responsive {
            font-size: clamp(0.875rem, 2.5vw, 1rem);
          }

          .text-responsive-lg {
            font-size: clamp(1.125rem, 3vw, 1.25rem);
          }

          .text-responsive-xl {
            font-size: clamp(1.5rem, 4vw, 2rem);
          }

          /* Utility classes for common patterns */
          .container-mobile {
            max-width: 428px;
            margin: 0 auto;
            padding: 0 1rem;
          }

          .glass-effect {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          /* Focus styles for accessibility */
          .focus-ring:focus {
            outline: 2px solid #16a34a;
            outline-offset: 2px;
          }

          /* Prevent context menu and selection for app-like feel */
          .app-mode {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-touch-callout: none;
            -webkit-tap-highlight-color: transparent;
          }

          /* PWA fullscreen styles */
          @media all and (display-mode: fullscreen) {
            body {
              background: #16a34a;
            }
          }

          @media all and (display-mode: standalone) {
            body {
              background: #16a34a;
            }
          }
        `}</style>
      </div>
    </>
  );
}
