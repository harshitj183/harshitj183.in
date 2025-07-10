'use client'

import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Image from "next/image";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.mobile-nav-container')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Navigation Header */}
      <div className="lg:hidden fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-blue-500/20">
                <Image
                  src="/profile.jpg"
                  alt="Harshit Jaiswal"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">Harshit Jaiswal</span>
            </div>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 mobile-nav-container"
              aria-label="Toggle menu"
            >
              <svg 
                className={`w-6 h-6 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
          <div className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 shadow-xl mobile-nav-container">
            <div className="pt-20">
              <div className="px-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden ring-2 ring-blue-500/20">
                    <Image
                      src="/profile.jpg"
                      alt="Harshit Jaiswal"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Harshit Jaiswal</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Web Developer | Published Researcher | @harshitj183</p>
                </div>
              </div>
              
              <Navigation isMobile={true} onClose={() => setIsOpen(false)} />

              <div className="px-6 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Theme</p>
                  <button className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    🌙 Dark Mode
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
