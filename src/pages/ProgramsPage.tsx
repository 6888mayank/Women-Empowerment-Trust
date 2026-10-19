import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Users,
  Briefcase,
  GraduationCap,
  HeartPulse,
  Sprout,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Target,
  Sparkles,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { CORE_PROGRAMS, ORG_DETAILS } from '../data/content';
import SEOHead from '../components/SEOHead';

export default function ProgramsPage() {
  const location = useLocation();

  // Handle hash scrolling (e.g. /programs#skill-development)
  useEffect(() => {
    if (location.hash) {
      const elem = document.querySelector(location.hash);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Users': return <Users className="w-5 h-5 text-forest" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-forest" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-forest" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-forest" />;
      case 'Sprout': return <Sprout className="w-5 h-5 text-forest" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-forest" />;
      default: return <Sparkles className="w-5 h-5 text-forest" />;
    }
  };

  return (
    <>
      <SEOHead
        title="Our Programs | Women Empowerment, Livelihoods & Rural Development"
        description="Explore the six core development programs of Unnayan Jan Vikas Samiti in Mahasamund, Chhattisgarh: Women Leadership, Skill Development, Education, Health, Sustainable Agriculture, and Digital Literacy."
      />

      {/* Hero Banner */}
      <section className="bg-forest-deep text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/skill_development_class.png"
            alt="Skill development in Chhattisgarh"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/95 to-forest-dark/90"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-gold uppercase tracking-widest bg-forest px-3 py-1 rounded-full border border-gold/30">
            <span>Thematic Program Portfolio</span>
          </div>
          <h1 className="font-heading font-extrabold text-white text-3xl sm:text-5xl tracking-tight">
            Our Core Development Programs
          </h1>
          <p className="text-ivory/85 text-base sm:text-lg max-w-2xl leading-relaxed">
            Six interconnected programmatic pillars addressing grassroots community development, women’s economic independence, education, health, agriculture, and digital inclusion.
          </p>
        </div>
      </section>

      {/* Quick Jump Navigation Pill Bar */}
      <div className="sticky top-[73px] z-30 bg-ivory/95 backdrop-blur-md border-b border-ivory-border py-3 shadow-subtle overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 min-w-max">
          <span className="text-xs font-bold text-charcoal-muted uppercase mr-2 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-forest" /> Quick Jump:
          </span>
          {CORE_PROGRAMS.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white hover:bg-forest hover:text-white border border-ivory-border text-charcoal transition-all whitespace-nowrap"
            >
              <span className="font-mono text-gold-dark font-bold mr-1">{p.number}</span>
              {p.title}
            </a>
          ))}
        </div>
      </div>

      {/* Main Program Sections */}
      <div className="divide-y divide-ivory-border bg-ivory">
        {CORE_PROGRAMS.map((program, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={program.id}
              id={program.id}
              className="py-20 lg:py-24 scroll-mt-28 relative"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Text Content Area (7 cols) */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-extrabold text-gold-dark bg-gold/15 px-2.5 py-1 rounded-md border border-gold/30">
                        PROGRAM {program.number}
                      </span>
                      <span className="text-xs font-semibold text-charcoal-muted uppercase tracking-wider">
                        {program.category}
                      </span>
                    </div>

                    <h2 className="font-heading font-extrabold text-forest-deep text-2xl sm:text-4xl tracking-tight leading-tight">
                      {program.title}
                    </h2>

                    <p className="text-charcoal-light text-base sm:text-lg leading-relaxed">
                      {program.fullDesc}
                    </p>

                    {/* Key Objectives */}
                    <div className="space-y-3 pt-2">
                      <h3 className="font-heading font-bold text-sm text-forest-deep uppercase tracking-wider flex items-center gap-2">
                        <Target className="w-4 h-4 text-forest" /> Key Objectives
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {program.objectives.map((obj, i) => (
                          <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-white border border-ivory-border shadow-subtle text-xs sm:text-sm text-charcoal">
                            <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                            <span>{obj}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Intended Beneficiaries & Activities Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {/* Beneficiaries */}
                      <div className="p-4 rounded-xl bg-sage/30 border border-forest/15 space-y-2">
                        <span className="text-xs font-bold font-heading text-forest-deep uppercase tracking-wider block">
                          Intended Beneficiaries
                        </span>
                        <ul className="space-y-1.5 text-xs text-charcoal-light">
                          {program.beneficiaries.map((b, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-forest font-bold">•</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Activities & Approach */}
                      <div className="p-4 rounded-xl bg-ivory-surface border border-ivory-border space-y-2">
                        <span className="text-xs font-bold font-heading text-forest-deep uppercase tracking-wider block">
                          Activities & Approach
                        </span>
                        <ul className="space-y-1.5 text-xs text-charcoal-light">
                          {program.approach.map((a, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-gold-dark font-bold">•</span>
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Program Actions */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Link
                        to={`/partnerships?program=${encodeURIComponent(program.title)}`}
                        className="inline-flex items-center gap-2 bg-forest hover:bg-forest-hover text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm transition-all"
                      >
                        <span>Support This Program via CSR</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        to={`/contact?inquiry=Program+Information&subject=${encodeURIComponent(program.title)}`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-charcoal hover:text-forest transition-colors"
                      >
                        <span>Inquire About Field Activities</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                  </div>

                  {/* Photography Area (5 cols) */}
                  <div className={`lg:col-span-5 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-card border-4 border-white group">
                      <img
                        src={program.image}
                        alt={`${program.title} activity - Unnayan Jan Vikas Samiti`}
                        className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/images/hero_community.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[11px] font-semibold text-gold-light bg-forest/80 backdrop-blur-sm px-2 py-0.5 rounded">
                          Grassroots Focus
                        </span>
                        <p className="text-sm font-bold font-heading mt-1">
                          {program.title}
                        </p>
                      </div>
                    </div>

                    {/* Verified Program Context Banner */}
                    <div className="p-3.5 rounded-xl bg-white border border-ivory-border shadow-subtle text-xs text-charcoal-muted flex items-center justify-between">
                      <span>Mahasamund District Outreach</span>
                      <span className="font-semibold text-forest">Grassroots Implemented</span>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Ready for Case Studies Banner (Adhering to Content Accuracy Rules) */}
      <section className="py-16 bg-sage/30 border-t border-ivory-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-forest uppercase tracking-widest bg-sage px-3 py-1 rounded-full border border-forest/15">
            Documentation Standard
          </span>
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-forest-deep">
            Verified Program Information Architecture
          </h3>
          <p className="text-charcoal-light text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            In compliance with our editorial integrity standard, all programmatic descriptions are sourced directly from the official presentation of Unnayan Jan Vikas Samiti. Individual field case studies, verified outcome audits, and detailed beneficiary counts will be integrated as official annual reports are validated.
          </p>
          <div className="pt-2">
            <Link
              to="/partnerships"
              className="inline-flex items-center gap-2 bg-forest hover:bg-forest-hover text-white text-sm font-semibold px-6 py-2.5 rounded-xl shadow-sm transition-all"
            >
              <span>Explore Partnership & Funding Opportunities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
