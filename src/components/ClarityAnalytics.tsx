// Component for Microsoft Clarity Analytics
'use client';

import { useEffect } from 'react';

// Define types for Microsoft Clarity
declare global {
  interface Window {
    clarity: any;
  }
}

export default function ClarityAnalytics() {
  useEffect(() => {
    // Only add Clarity in production or when the ID is available
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_CLARITY_ID) {
      // Microsoft Clarity initialization
      const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
      
      // Using a safer approach with type annotations to avoid TypeScript errors
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.clarity.ms/tag/${clarityId}`;
      
      // Set up the clarity function before the script loads
      window.clarity = window.clarity || function(...args: any[]) {
        (window.clarity.q = window.clarity.q || []).push(args);
      };
      
      document.head.appendChild(script);
      
      console.log('Microsoft Clarity initialized with ID:', clarityId);
    } else {
      console.log('Microsoft Clarity not initialized (development mode or missing ID)');
    }
  }, []);

  // This component doesn't render anything visible
  return null;
}
