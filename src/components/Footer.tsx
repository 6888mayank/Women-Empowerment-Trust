import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUp, Heart, ShieldCheck, ExternalLink } from 'lucide-react';
import { ORG_DETAILS, CORE_PROGRAMS } from '../data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-deep text-ivory/80 pt-16 pb-12 border-t border-forest/40 relative overflow-hidden">
      {/* Subtle decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-ivory/10">
          
          {/* Column 1: Organization Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-1 border border-forest-light shadow-sm shrink-0 overflow-hidden">
                <img
                  src="/images/unnayan_emblem_with_reg.png"
                  alt="Unnayan Jan Vikas Samiti Official Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-lg tracking-tight">
                  {ORG_DETAILS.name}
                </h3>
                <span className="text-xs text-gold-light font-medium tracking-wide block">
                  {ORG_DETAILS.regNumber} • Ward No. 23 Panjabi Para, Mahasamund (C.G.) 493445
                </span>
                <span className="text-[11px] text-ivory/60 block mt-0.5">
                  {ORG_DETAILS.motto}
                </span>
              </div>
            </div>

            <p className="text-sm text-ivory/70 leading-relaxed">
              A grassroots non-governmental organization with 20 years of dedicated service in Mahasamund, Chhattisgarh, working towards women's empowerment, sustainable livelihoods, education, and participatory rural development.
            </p>

            <div className="inline-flex items-center gap-2 bg-forest/60 px-3 py-1.5 rounded-lg border border-forest-light/40 text-xs text-gold-light">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>{ORG_DETAILS.trustIndicator}</span>
            </div>

            <div className="pt-2 text-xs text-ivory/60">
              <p className="font-medium text-ivory/90 mb-1">Tagline:</p>
              <p className="italic text-gold-light font-heading tracking-wide">
                “{ORG_DETAILS.tagline}”
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider text-gold-light">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-white transition-colors">Our Programs</Link>
              </li>
              <li>
                <Link to="/impact" className="hover:text-white transition-colors">Our Impact</Link>
              </li>
              <li>
                <Link to="/leadership" className="hover:text-white transition-colors">Leadership</Link>
              </li>
              <li>
                <Link to="/partnerships" className="hover:text-white transition-colors">Partnerships</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Thematic Programs (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider text-gold-light">
              Core Focus Areas
            </h4>
            <ul className="space-y-2 text-sm">
              {CORE_PROGRAMS.map((program) => (
                <li key={program.id}>
                  <Link
                    to={`/programs#${program.id}`}
                    className="hover:text-white transition-colors flex items-center justify-between text-xs sm:text-sm group"
                  >
                    <span className="line-clamp-1">{program.title}</span>
                    <span className="text-[10px] text-ivory/40 group-hover:text-gold transition-colors ml-1 font-mono">
                      {program.number}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Leadership (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider text-gold-light">
              Official Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <span className="text-gold-light text-xs font-semibold block">Working Office:</span>
                  <span className="text-white font-medium block">Ward No. 23 Panjabi Para</span>
                  <span className="text-ivory/80 block">Mahasamund (C.G.) 493445</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div className="flex flex-col text-xs sm:text-sm">
                  <span className="text-gold-light text-xs font-semibold block">Contact No.:</span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <a href="tel:+919826306475" className="hover:text-gold-light font-semibold text-white transition-colors">
                      9826306475
                    </a>
                    <span className="text-ivory/40">,</span>
                    <a href="tel:+918349921973" className="hover:text-gold-light font-semibold text-white transition-colors">
                      8349921973
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <a href={`mailto:${ORG_DETAILS.email}`} className="text-xs sm:text-sm hover:text-white transition-colors break-all">
                  {ORG_DETAILS.email}
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-ivory/10">
              <div className="text-xs text-ivory/60">Secretary & Lead Representative:</div>
              <div className="text-sm font-medium text-white">{ORG_DETAILS.secretary}</div>
              <div className="text-[11px] text-gold-light">{ORG_DETAILS.secretaryQualifications}</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-ivory/60 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {ORG_DETAILS.name}. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="hover:text-white transition-colors underline underline-offset-2">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors underline underline-offset-2">
                Terms of Use
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-ivory/40">
              Dedicated to Grassroots Rural Transformation in Chhattisgarh
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-forest hover:bg-forest-light text-white transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
