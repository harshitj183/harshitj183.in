'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Use dynamic import with SSR disabled in a client component
const UnifiedDashboard = dynamic(() => import('@/components/UnifiedDashboard'), { 
  ssr: false,
  loading: () => <div className="min-h-[600px] flex items-center justify-center">Loading dashboard data...</div>
});

export default function ClientDashboardWrapper() {
  return (
    <Suspense fallback={<div className="min-h-[600px] flex items-center justify-center">Loading dashboard data...</div>}>
      <UnifiedDashboard />
    </Suspense>
  );
}
