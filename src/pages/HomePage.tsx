import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  MapPin,
  Users,
  Briefcase,
  GraduationCap,
  HeartPulse,
  Sprout,
  Smartphone,
  CheckCircle2,
  TrendingUp,
  ShieldAlert,
  Activity,
  Cpu,
  Wrench,
  Award,
  Layers,
  Handshake,
  Sparkles,
  Calendar,
  Compass,
  Phone,
  Mail,
  MessageSquare
} from 'lucide-react';
import { ORG_DETAILS, CORE_PROGRAMS, CHALLENGES_LIST, APPROACH_PRINCIPLES } from '../data/content';
import SEOHead from '../components/SEOHead';
import ProgramIllustration from '../components/ProgramIllustration';

export default function HomePage() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Users': return <Users className="w-6 h-6 text-forest" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-forest" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-forest" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-forest" />;
      case 'Sprout': return <Sprout className="w-6 h-6 text-forest" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-forest" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-gold-dark" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-gold-dark" />;
      case 'Activity': return <Activity className="w-6 h-6 text-gold-dark" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-gold-dark" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-forest" />;
      case 'Award': return <Award className="w-6 h-6 text-forest" />;
      case 'Layers': return <Layers className="w-6 h-6 text-forest" />;
      case 'Handshake': return <Handshake className="w-6 h-6 text-forest" />;
      default: return <Sparkles className="w-6 h-6 text-forest" />;
    }
  };

  return (
    <>
      <SEOHead
        title="Empowering Women, Transforming Rural Lives"
        description="Unnayan Jan Vikas Samiti is a grassroots NGO in Mahasamund, Chhattisgarh, working for 20 years in women's empowerment, sustainable livelihoods, education, and rural development."
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-forest-dark text-white">
        {/* Authentic Background Photograph with Dark Green Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_community.jpg"
            alt="Rural community empowerment in Chhattisgarh - Unnayan Jan Vikas Samiti"
            className="w-full h-full object-cover object-center filter brightness-90 transform scale-105 transition-transform duration-1000"
          />
          {/* Subtle dark green gradient overlay for typography readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/95 via-forest-deep/85 to-forest-dark/75"></div>
          {/* Subtle noise/pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FAF8F1_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl space-y-6">
            
            {/* Trust Indicator & Eyebrow */}
            <div className="inline-flex items-center gap-2.5 bg-forest-deep/80 border border-gold/40 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-gold-light uppercase font-heading">
                {ORG_DETAILS.eyebrow}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-white text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15]">
              Empowering Women. Strengthening Communities.{' '}
              <span className="text-gold-light block mt-1">Transforming Rural Lives.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-ivory/85 leading-relaxed max-w-2xl font-normal">
              {ORG_DETAILS.subheadline}
            </p>

            {/* Trust Indicator Claim from Presentation */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-ivory/90 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl w-fit border border-white/15">
              <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
              <span className="font-medium">{ORG_DETAILS.trustIndicator}</span>
              <span className="text-ivory/50">•</span>
              <span className="text-ivory/80 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-gold/80" /> Ward No. 23 Panjabi Para, Mahasamund (C.G.)
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/programs"
                className="inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-hover text-forest-deep font-heading font-bold text-base px-6 py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Our Programs</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/partnerships"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-heading font-semibold text-base px-6 py-3.5 rounded-xl border border-white/30 backdrop-blur-md transition-all"
              >
                <span>Partner With Us</span>
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* 2. INTRODUCTION SECTION */}
      <section className="py-20 lg:py-28 bg-ivory relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Descriptive Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-forest uppercase tracking-widest bg-sage/60 px-3 py-1 rounded-full">
                <Compass className="w-3.5 h-3.5 text-forest" />
                <span>Grassroots NGO • Chhattisgarh, India</span>
              </div>

              <h2 className="font-heading font-extrabold text-forest-deep text-2xl sm:text-4xl tracking-tight leading-snug">
                Creating Opportunities for Stronger, Self-Reliant Communities
              </h2>

              <p className="text-charcoal-light text-base sm:text-lg leading-relaxed">
                <strong className="text-forest-deep font-semibold">Unnayan Jan Vikas Samiti</strong> is a grassroots non-governmental organization based in <strong className="text-forest-deep">Mahasamund, Chhattisgarh, India</strong>. For 20 years, we have worked alongside rural women, children, smallholder farmers, Dalit and tribal communities, and economically disadvantaged households to dismantle barriers to dignity and opportunity.
              </p>

              {/* 6 Key Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  "Women's empowerment and grassroots leadership",
                  "Skill development & home-based income generation",
                  "Inclusive education and child welfare initiatives",
                  "Preventive healthcare & clean village sanitation",
                  "Sustainable agriculture & women farmer recognition",
                  "Digital literacy & bank account digitization"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-ivory-border shadow-subtle">
                    <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-charcoal">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 font-heading font-bold text-forest hover:text-forest-light text-base group"
                >
                  <span>Discover Our Mission & Values</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Split Screen Authentic Photography (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-card border-4 border-white">
                <img
                  src="/images/skill_development_class.png"
                  alt="Rural women participating in vocational training class - Unnayan Jan Vikas Samiti"
                  className="w-full h-72 sm:h-80 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-light bg-forest/60 px-2 py-0.5 rounded">
                    Field Activity
                  </span>
                  <p className="text-sm font-medium mt-1">
                    Hands-on vocational & community empowerment training in Mahasamund
                  </p>
                </div>
              </div>

              {/* Secondary Supporting Photo Banner */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-subtle border-2 border-white">
                  <img
                    src="/images/candle_making_training.png"
                    alt="Candle making livelihood training by Unnayan Samiti"
                    className="w-full h-32 sm:h-36 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-subtle border-2 border-white">
                  <img
                    src="/images/clean_village_oath.jpg"
                    alt="Clean village community oath in Chhattisgarh"
                    className="w-full h-32 sm:h-36 object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 3. OUR CORE PROGRAMS (6 CARDS GRID) */}
      <section className="py-20 lg:py-28 bg-sage/40 border-y border-ivory-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-forest uppercase tracking-widest bg-sage px-3 py-1 rounded-full border border-forest/15">
              <span>Thematic Pillars</span>
            </div>
            <h2 className="font-heading font-extrabold text-forest-deep text-3xl sm:text-4xl tracking-tight">
              Our Core Development Programs
            </h2>
            <p className="text-charcoal-light text-base sm:text-lg">
              Designed around the felt needs of rural communities, integrating economic empowerment, social welfare, and environmental resilience.
            </p>
          </div>

          {/* Responsive 6-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_PROGRAMS.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-2xl border border-ivory-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* Program Card Thematic SVG Illustration */}
                <ProgramIllustration
                  programId={program.id}
                  category={program.category}
                  number={program.number}
                  title={program.title}
                />

                {/* Program Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-sage/60 flex items-center justify-center text-forest mb-2">
                      {getIcon(program.iconName)}
                    </div>
                    <h3 className="font-heading font-bold text-forest-deep text-lg sm:text-xl group-hover:text-forest transition-colors leading-snug">
                      {program.title}
                    </h3>
                    <p className="text-charcoal-light text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {program.shortDesc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-ivory-border">
                    <Link
                      to={`/programs#${program.id}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold font-heading text-forest hover:text-gold-dark transition-colors group-hover:gap-2"
                    >
                      <span>Explore Program Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom View All Link */}
          <div className="mt-12 text-center">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 bg-forest hover:bg-forest-hover text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-sm transition-all"
            >
              <span>View All 6 In-Depth Program Frameworks</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>


      {/* 4. CHALLENGES WE ADDRESS */}
      <section className="py-20 lg:py-28 bg-ivory relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-xs font-bold text-gold-dark uppercase tracking-widest bg-gold/15 px-3 py-1 rounded-full">
              Problem & Solution Landscape
            </span>
            <h2 className="font-heading font-extrabold text-forest-deep text-3xl sm:text-4xl tracking-tight">
              Understanding the Challenges. Building Lasting Solutions.
            </h2>
            <p className="text-charcoal-light text-base sm:text-lg">
              Drawing from 20 years of lived grassroots experience in Chhattisgarh, Unnayan Jan Vikas Samiti confronts deep structural barriers with community-led intervention.
            </p>
          </div>

          {/* 4 Challenges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CHALLENGES_LIST.map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-2xl border border-ivory-border p-6 sm:p-8 shadow-card flex flex-col justify-between hover:border-gold/50 transition-all space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center shrink-0">
                      {getIcon(c.iconName)}
                    </div>
                    <h3 className="font-heading font-bold text-forest-deep text-lg sm:text-xl">
                      {c.title}
                    </h3>
                  </div>

                  <div className="p-4 rounded-xl bg-ivory-surface border border-ivory-border text-xs sm:text-sm text-charcoal">
                    <span className="font-semibold text-charcoal block mb-1 text-xs uppercase tracking-wider text-charcoal-muted">
                      The Grassroots Reality:
                    </span>
                    {c.problem}
                  </div>
                </div>

                <div className="pt-2 border-t border-ivory-border">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-forest-deep">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-forest">Unnayan Response: </span>
                      {c.solution}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 5. OUR APPROACH */}
      <section className="py-20 lg:py-28 bg-forest-deep text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-forest/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold text-gold uppercase tracking-widest bg-forest px-3 py-1 rounded-full border border-gold/30">
              Guiding Philosophy
            </span>
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl tracking-tight">
              Development That Starts With the Community
            </h2>
            <p className="text-ivory/80 text-base sm:text-lg">
              Locally relevant solutions, community ownership, and sustainable long-term outcomes govern our four core development principles.
            </p>
          </div>

          {/* 4 Approach Principles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {APPROACH_PRINCIPLES.map((principle) => (
              <div
                key={principle.number}
                className="bg-forest/70 border border-forest-light/40 rounded-2xl p-6 backdrop-blur-sm hover:border-gold/60 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-gold-light bg-forest-deep px-2.5 py-1 rounded-md border border-forest-light">
                      {principle.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-forest-deep flex items-center justify-center text-gold">
                      {getIcon(principle.iconName)}
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-white text-lg group-hover:text-gold-light transition-colors">
                    {principle.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-ivory/75 leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 6. LEADERSHIP PREVIEW */}
      <section className="py-20 lg:py-28 bg-ivory relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-ivory-border shadow-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              
              {/* Portrait Area (5 cols) */}
              <div className="lg:col-span-5 relative bg-forest-deep h-80 sm:h-96 lg:h-full flex items-center justify-center overflow-hidden">
                <img
                  src="/images/premsheela_baghel.png"
                  alt="Mrs. Premsheela Baghel, Secretary of Unnayan Jan Vikas Samiti"
                  className="w-full h-full object-cover object-top filter brightness-95"
                  onError={(e) => {
                    // Fallback to stylized leader layout if image fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-transparent to-transparent lg:hidden"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
                  <span className="text-xs font-bold text-gold-light uppercase tracking-wider">
                    Secretary & Founder
                  </span>
                  <h4 className="text-xl font-bold font-heading">{ORG_DETAILS.secretary}</h4>
                </div>
              </div>

              {/* Biography Area (7 cols) */}
              <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-forest uppercase tracking-widest bg-sage/60 px-3 py-1 rounded-full">
                  <span>Organizational Leadership</span>
                </div>

                <div className="hidden lg:block">
                  <h3 className="font-heading font-extrabold text-forest-deep text-2xl sm:text-3xl">
                    {ORG_DETAILS.secretary}
                  </h3>
                  <p className="text-sm font-semibold text-gold-dark mt-1 font-heading">
                    {ORG_DETAILS.secretaryTitle}
                  </p>
                </div>

                {/* Verified Credentials */}
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-ivory-surface text-forest-deep font-medium px-3 py-1 rounded-lg border border-ivory-border">
                    🎓 M.A. in Sociology
                  </span>
                  <span className="bg-ivory-surface text-forest-deep font-medium px-3 py-1 rounded-lg border border-ivory-border">
                    🎓 Master of Social Work (MSW)
                  </span>
                  <span className="bg-gold/15 text-gold-dark font-semibold px-3 py-1 rounded-lg border border-gold/30">
                    ⭐ 30 Years of Social Development Experience
                  </span>
                </div>

                <p className="text-charcoal-light text-sm sm:text-base leading-relaxed">
                  Mrs. Premsheela Baghel brings three decades of dedicated grassroots experience in social welfare, women’s empowerment, rural livelihoods, education, social justice, and community welfare in Chhattisgarh. With postgraduate credentials in Sociology and Social Work, she anchors the organization’s commitment to inclusive, participatory transformation.
                </p>

                <div className="pt-2 flex items-center gap-4">
                  <Link
                    to="/leadership"
                    className="inline-flex items-center gap-2 bg-forest hover:bg-forest-hover text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm transition-all"
                  >
                    <span>Meet Our Leadership</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* 7. PARTNERSHIPS PREVIEW */}
      <section className="py-20 lg:py-24 bg-sage/30 border-t border-ivory-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-6">
          <span className="text-xs font-bold text-forest uppercase tracking-widest bg-sage px-3 py-1 rounded-full border border-forest/15">
            CSR & Institutional Donors
          </span>
          <h2 className="font-heading font-extrabold text-forest-deep text-3xl sm:text-4xl tracking-tight">
            Let's Work Together to Create Meaningful Social Impact
          </h2>
          <p className="text-charcoal-light text-base sm:text-lg leading-relaxed">
            Unnayan Jan Vikas Samiti actively seeks collaborative partnerships with CSR departments, institutional donors, government development agencies, and philanthropic organizations committed to sustainable community transformation.
          </p>

          <div className="pt-2">
            <Link
              to="/partnerships"
              className="inline-flex items-center gap-2 bg-forest hover:bg-forest-hover text-white font-heading font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <span>Discuss a Partnership</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* OFFICIAL WORKING OFFICE & CONTACT BANNER */}
      <section className="py-12 bg-ivory border-t border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-forest-deep via-forest to-forest-dark rounded-3xl p-6 sm:p-10 text-white shadow-card relative overflow-hidden border border-forest-light/30">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left: Office Identity */}
              <div className="flex items-start gap-4 text-left w-full lg:w-auto">
                <div className="w-14 h-14 rounded-2xl bg-white p-1.5 shadow-md shrink-0 flex items-center justify-center border border-forest-light">
                  <img
                    src="/images/unnayan_emblem_with_reg.png"
                    alt="UNNAYAN Official Emblem"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-gold-light uppercase tracking-wider bg-forest-dark/80 px-2.5 py-0.5 rounded-full border border-gold/30">
                      {ORG_DETAILS.regNumber}
                    </span>
                    <span className="text-xs text-ivory/80">
                      {ORG_DETAILS.motto}
                    </span>
                  </div>
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                    {ORG_DETAILS.name}
                  </h3>
                  <div className="flex items-center gap-2 text-ivory/90 text-sm pt-1">
                    <MapPin className="w-4 h-4 text-gold shrink-0" />
                    <span>
                      <strong className="text-white">Working Office:</strong> {ORG_DETAILS.workingOffice}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Contact Numbers & Quick Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
                <div className="bg-forest-dark/80 border border-forest-light/40 px-5 py-3 rounded-2xl flex flex-col justify-center">
                  <span className="text-[11px] font-semibold text-gold-light uppercase tracking-wider flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-gold" />
                    Contact No.
                  </span>
                  <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-white mt-0.5">
                    <a href="tel:+919826306475" className="hover:text-gold-light transition-colors">
                      9826306475
                    </a>
                    <span className="text-ivory/40">,</span>
                    <a href="tel:+918349921973" className="hover:text-gold-light transition-colors">
                      8349921973
                    </a>
                  </div>
                </div>

                <a
                  href="https://wa.me/919826306475?text=Hello%20Unnayan%20Jan%20Vikas%20Samiti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-heading font-semibold text-sm px-5 py-3.5 rounded-2xl shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover text-forest-deep font-heading font-bold text-sm px-5 py-3.5 rounded-2xl shadow-md transition-all"
                >
                  <span>Contact Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL HIGH-IMPACT CTA */}
      <section className="py-20 lg:py-24 bg-forest relative overflow-hidden text-white">
        {/* Subtle decorative SVG elements */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FAF8F1_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-forest-light/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 bg-forest-deep/80 border border-gold/40 px-3.5 py-1.5 rounded-full text-xs font-semibold text-gold-light uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span>Join Our Mission in Mahasamund</span>
          </div>

          <h2 className="font-heading font-extrabold text-white text-3xl sm:text-5xl tracking-tight max-w-3xl mx-auto leading-tight">
            Together, We Can Build a More Empowered and Sustainable Future.
          </h2>

          <p className="text-ivory/85 text-base sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
            “Join Unnayan Jan Vikas Samiti in advancing women's empowerment, education, sustainable livelihoods and inclusive rural development.”
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/partnerships"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover text-forest-deep font-heading font-bold text-base px-7 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-heading font-semibold text-base px-7 py-3.5 rounded-xl border border-white/25 backdrop-blur-sm transition-all"
            >
              <span>Contact Our Team</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
