import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { ORG_DETAILS } from '../data/content';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Programs', path: '/programs' },
  { name: 'Our Impact', path: '/impact' },
  { name: 'Leadership', path: '/leadership' },
  { name: 'Partnerships', path: '/partnerships' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Bar for institutional legitimacy */}
      <div className="bg-forest-deep text-ivory/80 text-xs py-2 px-4 border-b border-forest/30 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 font-medium text-gold-light">
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block animate-pulse"></span>
              {ORG_DETAILS.trustIndicator}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              <span className="text-ivory/60">Working Office:</span>
              <span className="text-white font-medium">{ORG_DETAILS.location}</span>
            </span>
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-gold" />
              <span className="text-gold-light font-medium">Contact No.:</span>
              <a href="tel:+919826306475" className="hover:text-white transition-colors font-medium">
                9826306475
              </a>
              <span className="text-ivory/40">,</span>
              <a href="tel:+918349921973" className="hover:text-white transition-colors font-medium">
                8349921973
              </a>
            </div>
            <span className="text-ivory/40">|</span>
            <a href={`mailto:${ORG_DETAILS.email}`} className="flex items-center gap-1 hover:text-white transition-colors">
              <Mail className="w-3 h-3 text-gold/80" />
              {ORG_DETAILS.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-md py-3 border-b border-ivory-border'
            : 'bg-ivory py-4 border-b border-ivory-border/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Official Logo Treatment */}
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="w-12 h-12 rounded-xl bg-white border border-ivory-border flex items-center justify-center p-1 shadow-sm group-hover:scale-105 transition-transform overflow-hidden shrink-0">
                <img
                  src="/images/unnayan_crest.png"
                  alt="UNNAYAN Official Logo Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-heading font-extrabold text-forest-deep text-lg sm:text-xl tracking-tight leading-tight group-hover:text-forest transition-colors">
                    UNNAYAN JAN VIKAS SAMITI
                  </span>
                  <span className="hidden sm:inline-block text-[10px] font-bold text-gold-dark bg-gold/15 px-2 py-0.5 rounded border border-gold/30">
                    {ORG_DETAILS.regNumber}
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-semibold text-charcoal-muted tracking-wider uppercase line-clamp-1">
                  {ORG_DETAILS.motto}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'text-forest font-semibold bg-sage/60'
                        : 'text-charcoal hover:text-forest hover:bg-sage/30'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Header CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/partnerships"
                className="inline-flex items-center gap-2 bg-forest hover:bg-forest-hover text-white text-sm font-medium px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all group"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-forest hover:bg-sage/40 transition-colors focus:outline-none focus:ring-2 focus:ring-forest"
                aria-label="Toggle Navigation Menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-ivory-border bg-ivory px-4 pt-3 pb-6 space-y-2 animate-fade-in shadow-xl">
            <div className="py-2 border-b border-ivory-border/60 mb-2">
              <div className="text-xs font-semibold text-gold-dark tracking-wide uppercase">
                {ORG_DETAILS.trustIndicator}
              </div>
            </div>
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-forest text-white'
                      : 'text-charcoal hover:bg-sage/40 hover:text-forest'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-ivory-border/60">
              <Link
                to="/partnerships"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-forest hover:bg-forest-hover text-white text-base font-medium px-4 py-3 rounded-lg shadow transition-colors"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="pt-3 text-xs text-charcoal-muted flex flex-col gap-2 p-3 bg-sage/20 rounded-xl border border-ivory-border">
              <span className="flex items-start gap-1.5 font-medium text-forest-deep">
                <MapPin className="w-3.5 h-3.5 text-gold-dark shrink-0 mt-0.5" />
                <span><strong>Working Office:</strong> {ORG_DETAILS.workingOffice}</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium text-forest-deep">
                <Phone className="w-3.5 h-3.5 text-gold-dark shrink-0" />
                <span><strong>Contact No.:</strong> {ORG_DETAILS.contactNumbersText}</span>
              </span>
              <span className="flex items-center gap-1.5 text-charcoal">
                <Mail className="w-3.5 h-3.5 text-forest shrink-0" />
                <span>{ORG_DETAILS.email}</span>
              </span>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
