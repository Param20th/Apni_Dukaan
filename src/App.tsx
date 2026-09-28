import { useState, useEffect } from 'react';
import { ContentProvider } from './context/ContentContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InstallationGuide from './components/InstallationGuide';
import ProblemSection from './components/ProblemSection';
import WhyExists from './components/WhyExists';
import HowItWorks from './components/HowItWorks';
import RecurringMilkSection from './components/RecurringMilkSection';
import PaymentModel from './components/PaymentModel';
import ProductShowcase from './components/ProductShowcase';
import CustomerExperience from './components/CustomerExperience';
import OrderTracking from './components/OrderTracking';
import PoliciesSection from './components/PoliciesSection';
import AboutBuilder from './components/AboutBuilder';
import TrustSection from './components/TrustSection';
import FaqSection from './components/FaqSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import AdminPage from './pages/AdminPage';

function AppContent() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const hash = window.location.hash;
      const search = window.location.search;
      if (path === '/admin' || path === '/admin/' || hash === '#/admin' || hash === '#admin' || search.includes('admin=true')) {
        return '/admin';
      }
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      const search = window.location.search;
      if (path === '/admin' || path === '/admin/' || hash === '#/admin' || hash === '#admin' || search.includes('admin=true')) {
        setCurrentPath('/admin');
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    setCurrentPath(path);
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // If visiting /admin, render the dedicated Admin CMS Page
  if (currentPath === '/admin') {
    return <AdminPage onNavigate={navigate} />;
  }

  // Otherwise, render the public website
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#19241d] flex flex-col selection:bg-[#1b3f2b] selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section with 3D Floating Apni Dukaan Logo */}
        <Hero />

        {/* 2. PWA Installation Guide (3 easy steps) */}
        <InstallationGuide />

        {/* 3. The Local Problem */}
        <ProblemSection />

        {/* 4. Why Apni Dukaan Exists (Philosophy & Diagram) */}
        <WhyExists />

        {/* 5. How the Business Works (Interactive 6-step model) */}
        <HowItWorks />

        {/* 6. Recurring Milk & Guest Scenario */}
        <RecurringMilkSection />

        {/* 7. Payment Options & Transparency */}
        <PaymentModel />

        {/* 8. Products Showcase */}
        <ProductShowcase />

        {/* 9. Customer Experience (Designed for everyday people) */}
        <CustomerExperience />

        {/* 10. Order Tracking (Order #1048 simulator) */}
        <OrderTracking />

        {/* 11. Business Policies (Dynamic Architecture) */}
        <PoliciesSection />

        {/* 12. About the Builder, Built to Learn Timeline & Long-term Vision */}
        <AboutBuilder />

        {/* 13. Trust Principles */}
        <TrustSection />

        {/* 14. Accordion FAQ */}
        <FaqSection />

        {/* 15. Strong Final Call to Action */}
        <FinalCTA />
      </main>

      {/* Site Footer with discrete admin portal link */}
      <Footer onNavigate={navigate} />

      {/* Floating 3D WhatsApp Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}

export default function App() {
  return (
    <ContentProvider>
      <AppContent />
    </ContentProvider>
  );
}
