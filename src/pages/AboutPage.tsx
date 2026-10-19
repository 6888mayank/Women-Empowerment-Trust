import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Users,
  Leaf,
  BookOpen,
  Scale,
  Sun,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Info
} from 'lucide-react';
import { ORG_DETAILS, CORE_VALUES, COMMUNITIES_SERVED } from '../data/content';
import SEOHead from '../components/SEOHead';
import CommunityIllustration from '../components/CommunityIllustration';

export default function AboutPage() {
  const getValueIcon = (name: string) => {
    switch (name) {
      case 'Heart': return <Heart className="w-5 h-5 text-forest" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-forest" />;
      case 'Users': return <Users className="w-5 h-5 text-forest" />;
      case 'Leaf': return <Leaf className="w-5 h-5 text-forest" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-forest" />;
      case 'Scale': return <Scale className="w-5 h-5 text-forest" />;
      case 'Sun': return <Sun className="w-5 h-5 text-forest" />;
      default: return <Heart className="w-5 h-5 text-forest" />;
    }
  };

  return (
    <>
      <SEOHead
        title="About Us | 20 Years of Grassroots Community Service"
        description="Learn about Unnayan Jan Vikas Samiti, our mission, vision, core values, and community development work with rural women and families in Mahasamund, Chhattisgarh."
      />

      {/* Page Header Banner */}
      <section className="bg-forest-deep text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/hero_community.jpg"
            alt="Community gathering in Chhattisgarh"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/95 to-forest-dark/90"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-gold uppercase tracking-widest bg-forest px-3 py-1 rounded-full border border-gold/30">
            <span>Organizational Background</span>
          </div>
          <h1 className="font-heading font-extrabold text-white text-3xl sm:text-5xl tracking-tight">
            About Unnayan Jan Vikas Samiti
          </h1>
          <p className="text-ivory/85 text-base sm:text-lg max-w-2xl leading-relaxed">
            A grassroots commitment rooted in Mahasamund, Chhattisgarh—advancing community dignity, women’s empowerment, and sustainable rural self-reliance.
          </p>
        </div>
      </section>

      {/* 1. WHO WE ARE */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-forest uppercase tracking-widest bg-sage/60 px-3 py-1 rounded-full">
                <span>Who We Are</span>
              </div>
              <h2 className="font-heading font-extrabold text-forest-deep text-2xl sm:text-4xl tracking-tight">
                Two Decades of Grassroots Dedication in Mahasamund
              </h2>

              <p className="text-charcoal-light text-base sm:text-lg leading-relaxed">
                <strong className="text-forest-deep">UNNAYAN JAN VIKAS SAMITI</strong> is a grassroots non-governmental organization based in <strong className="text-forest-deep">Mahasamund, Chhattisgarh, India</strong>, with <strong className="text-forest-deep">20 years of community development and social service experience</strong> as documented in its institutional presentation.
              </p>

              <p className="text-charcoal-light text-sm sm:text-base leading-relaxed">
                The organization focuses on improving life chances and livelihood options for rural women, children, smallholder farmers, Dalit and tribal communities, and economically disadvantaged rural households. Through self-help groups, vocational training, healthcare awareness, agricultural training, and digital literacy, the Samiti helps connect underserved populations with essential resources, skills, and participatory opportunities.
              </p>

              {/* Verified Key Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-ivory-border shadow-subtle flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                  <div>
                    <span className="font-heading font-bold text-sm text-forest-deep block">Grassroots Base</span>
                    <span className="text-xs text-charcoal-light">Ward No. 23 Panjabi Para, Mahasamund (C.G.) 493445</span>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-ivory-border shadow-subtle flex items-start gap-2.5">
                  <Calendar className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
                  <div>
                    <span className="font-heading font-bold text-sm text-forest-deep block">Track Record</span>
                    <span className="text-xs text-charcoal-light">20 Years of Service</span>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-ivory-border shadow-subtle flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                  <div>
                    <span className="font-heading font-bold text-sm text-forest-deep block">Official Reg.</span>
                    <span className="text-xs font-semibold text-gold-dark">{ORG_DETAILS.regNumber}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-card border-4 border-white">
                <img
                  src="/images/participatory_meeting.jpg"
                  alt="Participatory community appraisal in Chhattisgarh"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="p-4 rounded-xl bg-sage/50 border border-forest/15 text-xs text-forest-deep">
                <span className="font-bold">Grassroots Principle: </span>
                “A committee for People Participatory & Development action, ensuring that local families lead their own social progress.”
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MISSION & VISION */}
      <section className="py-20 bg-sage/30 border-y border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <div className="bg-white rounded-2xl border border-ivory-border p-8 shadow-card flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center text-forest">
                  <Target className="w-6 h-6 text-forest" />
                </div>
                <div className="inline-block text-xs font-bold text-forest uppercase tracking-widest bg-sage px-3 py-1 rounded-full">
                  Our Mission
                </div>
                <blockquote className="text-lg sm:text-xl font-heading font-semibold text-forest-deep leading-relaxed">
                  “{ORG_DETAILS.mission}”
                </blockquote>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed border-t border-ivory-border pt-4">
                Structured to build enduring grassroots capacities through practical skill training, community education, social awareness, and participatory village welfare.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-2xl border border-ivory-border p-8 shadow-card flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center text-gold-dark">
                  <Eye className="w-6 h-6 text-gold-dark" />
                </div>
                <div className="inline-block text-xs font-bold text-gold-dark uppercase tracking-widest bg-gold/15 px-3 py-1 rounded-full">
                  Our Vision
                </div>
                <blockquote className="text-lg sm:text-xl font-heading font-semibold text-forest-deep leading-relaxed">
                  “{ORG_DETAILS.vision}”
                </blockquote>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed border-t border-ivory-border pt-4">
                “{ORG_DETAILS.visionSlogan}”
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE VALUES (WEBSITE EDITORIAL THEMES) */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-xs font-bold text-forest uppercase tracking-widest bg-sage/60 px-3 py-1 rounded-full">
              Editorial Values & Principles
            </span>
            <h2 className="font-heading font-extrabold text-forest-deep text-3xl sm:text-4xl tracking-tight">
              Values That Anchor Our Fieldwork
            </h2>
            <p className="text-charcoal-light text-base sm:text-lg">
              The following values represent core editorial themes aligned with the organization's stated grassroots programs and community ethos.
            </p>
          </div>

          {/* 7 Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val) => (
              <div
                key={val.title}
                className="bg-white rounded-2xl border border-ivory-border p-6 shadow-subtle hover:shadow-card transition-all flex flex-col space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-sage/60 flex items-center justify-center">
                  {getValueIcon(val.iconName)}
                </div>
                <h3 className="font-heading font-bold text-forest-deep text-lg">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Mandatory Editorial Differentiation Note */}
          <div className="mt-8 p-4 rounded-xl bg-white border border-ivory-border flex items-start gap-3">
            <Info className="w-4 h-4 text-forest shrink-0 mt-0.5" />
            <p className="text-xs text-charcoal-muted leading-relaxed">
              <strong className="text-forest-deep">Editorial Clarification: </strong>
              The values listed above represent synthesized website editorial themes derived directly from the organization’s stated programs and presentation documents, clearly differentiated from any formal statutory constitutional bylaws.
            </p>
          </div>

        </div>
      </section>

      {/* 4. COMMUNITIES WE SERVE */}
      <section className="py-20 bg-sage/40 border-t border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-xs font-bold text-forest uppercase tracking-widest bg-sage px-3 py-1 rounded-full border border-forest/15">
              Intended Beneficiary Groups
            </span>
            <h2 className="font-heading font-extrabold text-forest-deep text-3xl sm:text-4xl tracking-tight">
              Communities We Serve
            </h2>
            <p className="text-charcoal-light text-base sm:text-lg">
              Every initiative is tailored to the lived realities of underserved populations in Mahasamund and rural Chhattisgarh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMUNITIES_SERVED.map((comm) => (
              <div
                key={comm.title}
                className="bg-white rounded-2xl border border-ivory-border overflow-hidden shadow-card flex flex-col"
              >
                {/* Thematic SVG Illustration */}
                <CommunityIllustration title={comm.title} />
                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-forest-deep text-base sm:text-lg">
                      {comm.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-light mt-1.5 leading-relaxed">
                      {comm.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-forest-deep text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
            Partner With Us to Create Sustainable Change
          </h2>
          <p className="text-ivory/80 text-sm sm:text-base max-w-xl mx-auto">
            Discover how corporate CSR programs and philanthropic partners can collaborate with Unnayan Jan Vikas Samiti.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-forest-deep font-semibold text-sm px-6 py-3 rounded-xl shadow transition-all"
            >
              <span>Explore All Programs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-sm px-6 py-3 rounded-xl border border-white/20 transition-all"
            >
              <span>Contact Our Leadership</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
