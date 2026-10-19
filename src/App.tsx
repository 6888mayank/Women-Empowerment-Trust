import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import ImpactPage from './pages/ImpactPage';
import LeadershipPage from './pages/LeadershipPage';
import PartnershipsPage from './pages/PartnershipsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-ivory px-4 py-20 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <span className="text-4xl font-extrabold font-heading text-forest">404</span>
        <h1 className="text-2xl sm:text-3xl font-heading font-bold text-forest-deep">
          Page Not Found
        </h1>
        <p className="text-charcoal-light text-sm">
          The page you are looking for might have been moved or does not exist. Please return to the homepage to explore our programs.
        </p>
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-forest hover:bg-forest-hover text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-sm transition-all"
          >
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-ivory text-charcoal">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/partnerships" element={<PartnershipsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
