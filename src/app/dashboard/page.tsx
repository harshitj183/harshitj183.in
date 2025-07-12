'use client';

import { Suspense } from 'react';
import UnifiedDashboard from '../../components/UnifiedDashboard';

export default function DashboardPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Suspense fallback={<div className="min-h-[600px] flex items-center justify-center">Loading dashboard...</div>}>
        <UnifiedDashboard />
      </Suspense>
    </main>
  );
}
