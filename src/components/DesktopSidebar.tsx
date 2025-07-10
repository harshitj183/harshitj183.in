'use client'

import Navigation from "./Navigation";
import Image from "next/image";

export default function DesktopSidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-50 hidden lg:block">
      <div className="p-6">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden ring-2 ring-blue-500/20">
            <Image
              src="/profile.jpg"
              alt="Harshit Jaiswal"
              width={64}
              height={64}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white">Harshit Jaiswal</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Web Developer | Student</p>
        </div>

        <Navigation />

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">Apps</p>
            <div className="mt-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg mx-auto flex items-center justify-center">
                <span className="text-white text-xs font-bold">JS</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">JS Playground</p>
            </div>
            <div className="mt-4">
              <p className="text-xs text-gray-500 dark:text-gray-400">Theme</p>
              <button className="mt-1 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                🌙 Dark Mode
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
