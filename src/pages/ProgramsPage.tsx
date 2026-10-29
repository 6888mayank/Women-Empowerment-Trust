import React, { useEffect, useState } from 'react';
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
  HeartHandshake,
  Camera,
  Maximize2,
  X
} from 'lucide-react';
import { CORE_PROGRAMS, ORG_DETAILS, Program } from '../data/content';
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
            src="/images/awards/award_17_haribhoomi_women_canteen_1.jpg"
            alt="Unnayan Jan Vikas Samiti - Women Leadership and Self Help Groups"
            className="w-full h-full object-cover object-center"
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

                  {/* Interactive PDF Photo Showcase (5 cols) */}
                  <ProgramPhotoGallery program={program} isEven={isEven} />

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

/**
 * Interactive Photo Gallery Component for Each Core Program
 * Displays authentic field photos & honors extracted directly from the 17-page presentation PDF
 */
function ProgramPhotoGallery({ program, isEven }: { program: Program; isEven: boolean }) {
  const galleryItems = program.gallery && program.gallery.length > 0
    ? program.gallery
    : [{ url: program.image, caption: program.awardCaption || program.title }];
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeItem = galleryItems[selectedIdx] || galleryItems[0];
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div className={`lg:col-span-5 space-y-3 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
      {/* Main Photo Card */}
      <div className="relative rounded-2xl overflow-hidden shadow-card border-4 border-white group bg-forest-deep">
        <div className="aspect-[4/3] w-full overflow-hidden relative">
          <img
            src={activeItem.url}
            alt={activeItem.caption || program.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 cursor-pointer"
            onClick={() => setLightboxOpen(true)}
            onError={(e) => {
              (e.target as HTMLImageElement).src = program.image;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/95 via-forest-deep/25 to-transparent pointer-events-none" />

          {/* Badges on Top */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
            <span className="text-[11px] font-bold text-gold-light bg-forest-deep/95 border border-gold/40 px-2.5 py-1 rounded-md shadow-sm backdrop-blur-sm">
              PDF अभिलेख #{selectedIdx + 1}/{galleryItems.length}
            </span>
            {program.badge && (
              <span className="text-[10px] sm:text-[11px] font-bold text-white bg-forest/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20 shadow-sm truncate max-w-[210px]">
                {program.badge}
              </span>
            )}
          </div>

          {/* Zoom Button in Corner */}
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="absolute top-3 right-3 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 hover:bg-white text-forest text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 z-10 cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>बड़ा देखें (Zoom Proof)</span>
          </button>

          {/* Bottom Caption Overlay */}
          <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
            <span className="text-[10px] font-semibold text-gold-light tracking-wide uppercase block">
              धरातल सत्यापन • {program.category}
            </span>
            <p className="text-xs sm:text-sm font-semibold line-clamp-2 drop-shadow-md mt-0.5">
              🏆 {activeItem.caption}
            </p>
          </div>
        </div>
      </div>

      {/* Thumbnail Strip with PDF Photos */}
      {galleryItems.length > 1 && (
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs text-charcoal-muted px-1">
            <span className="font-semibold text-forest flex items-center gap-1.5 text-xs">
              <Camera className="w-3.5 h-3.5" />
              <span>PDF संलग्न फोटो व सम्मान पत्र ({galleryItems.length})</span>
            </span>
            <span className="text-[11px] text-charcoal-light">क्लिक करके बदलें</span>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {galleryItems.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                className={`relative rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all group/thumb cursor-pointer ${
                  selectedIdx === idx
                    ? 'border-gold ring-2 ring-gold/40 scale-[1.02] shadow-sm'
                    : 'border-white/90 opacity-70 hover:opacity-100 hover:border-forest/50'
                }`}
                title={item.caption}
              >
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-forest-deep/20 group-hover/thumb:bg-transparent transition-colors" />
                <span className="absolute bottom-1 right-1 text-[9px] font-mono font-bold bg-black/75 text-white px-1 rounded">
                  #{idx + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Verified Program Context Banner */}
      <div className="p-3 rounded-xl bg-white border border-ivory-border shadow-subtle text-xs text-charcoal-muted flex items-center justify-between">
        <span className="font-medium">महासमुंद जिला धरातल संपुष्टि</span>
        <span className="font-semibold text-forest flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-forest" />
          <span>PDF प्रमाणित अभिलेख</span>
        </span>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-3xl w-full bg-forest-deep rounded-2xl overflow-hidden border border-gold/40 shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div>
                <span className="text-xs font-mono font-bold text-gold-light uppercase tracking-wider">
                  {program.title} • PDF अभिलेख #{selectedIdx + 1}/{galleryItems.length}
                </span>
                <h4 className="text-white text-base sm:text-lg font-heading font-bold mt-0.5">
                  {activeItem.caption}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-xl transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[65vh] flex items-center justify-center overflow-hidden rounded-xl bg-black/40">
              <img
                src={activeItem.url}
                alt={activeItem.caption}
                className="max-h-[60vh] w-auto object-contain rounded-lg"
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-white/80">
              <p className="italic">स्रोत: उन्नयन जन विकास समिति - 17 पृष्ठीय आधिकारिक संस्था प्रस्तुति (PDF Archive)</p>
              <div className="flex gap-2">
                {galleryItems.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedIdx(i)}
                    className={`px-3 py-1 rounded text-xs font-semibold cursor-pointer transition-colors ${
                      selectedIdx === i ? 'bg-gold text-forest-deep font-bold' : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    फोटो #{i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
