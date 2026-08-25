import { Suspense, lazy } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { Analytics } from '@vercel/analytics/react';

// Lazy load components
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-emerald-500"></div>
  </div>
);

const App = () => {
  const isHome = window.location.pathname === "/";

  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <Analytics />
        {isHome ? <Index /> : <NotFound />}
      </Suspense>
      <Toaster />
    </>
  );
};

export default App;
