import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Compass,
  FileCheck,
  MapPin,
  Calendar,
  Sparkles,
  Info
} from 'lucide-react';
import { STRATEGIC_PHASES, ORG_DETAILS } from '../data/content';
import SEOHead from '../components/SEOHead';

export default function ImpactPage() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  // Future-ready impact dashboard metric definitions
  const DASHBOARD_METRICS = [
    {
      label: "Years of Community Service",
      verifiedValue: "20 Years",
      status: "Verified in Presentation",
      isLive: true,
      desc: "Continuous grassroots social development presence in Mahasamund, Chhattisgarh."
    },
    {
      label: "Thematic Program Pillars",
      verifiedValue: "6 Pillars",
      status: "Active Portfolio",
      isLive: true,
      desc: "Women Empowerment, Skills, Education, Health, Agriculture & Digital Inclusion."
    },
    {
      label: "Grassroots Field Base",
      verifiedValue: "Mahasamund",
      status: "Headquarters & Hub",
      isLive: true,
      desc: "Jhalkhamariya cluster with expansion potential across Chhattisgarh."
    },
    {
      label: "Women Reached (Cumulative)",
      verifiedValue: "Data in Verification",
      status: "Annual Audit in Progress",
      isLive: false,
      desc: "Formal beneficiary census to be published upon completion of current monitoring cycle."
    },
    {
      label: "Livelihood Training Participants",
      verifiedValue: "Data in Verification",
      status: "Annual Audit in Progress",
      isLive: false,
      desc: "Candle making and indigenous handicraft participant records being consolidated."
    },
    {
      label: "Communities & SHG Clusters",
      verifiedValue: "Data in Verification",
      status: "Annual Audit in Progress",
      isLive: false,
      desc: "Village clusters mapped across Mahasamund rural administrative blocks."
    }
  ];

  return (
    <>
      <SEOHead
        title="Our Impact & Strategic Roadmap | Unnayan Jan Vikas Samiti"
        description="Explore the strategic growth roadmap and community impact framework of Unnayan Jan Vikas Samiti across Mahasamund, Chhattisgarh."
      />

      {/* Hero Banner */}
      <section className="bg-forest-deep text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/impact_sdg.png"
            alt="Social impact and SDG framework in Chhattisgarh"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/95 to-forest-dark/90"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-gold uppercase tracking-widest bg-forest px-3 py-1 rounded-full border border-gold/30">
            <span>Progress & Theory of Change</span>
          </div>
          <h1 className="font-heading font-extrabold text-white text-3xl sm:text-5xl tracking-tight">
            Building Sustainable Change, One Community at a Time
          </h1>
          <p className="text-ivory/85 text-base sm:text-lg max-w-2xl leading-relaxed">
            Our multi-dimensional development framework links women’s economic dignity, community health, child education, and ecological agriculture to build lasting rural resilience.
          </p>
        </div>
      </section>

      {/* 1. STRATEGIC GROWTH ROADMAP (4-STAGE TIMELINE) */}
      <section className="py-20 bg-ivory relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-forest uppercase tracking-widest bg-sage/60 px-3 py-1 rounded-full">
              <span>Phased Expansion Strategy</span>
            </div>
            <h2 className="font-heading font-extrabold text-forest-deep text-3xl sm:text-4xl tracking-tight">
              Strategic Growth Roadmap
            </h2>
            <p className="text-charcoal-light text-base sm:text-lg">
              Outlining the four strategic phases through which Unnayan Jan Vikas Samiti systematically mobilizes, deepens, collaborates, and scales rural community transformation.
            </p>
          </div>

          {/* Interactive Modern Timeline Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {STRATEGIC_PHASES.map((p, idx) => {
              const isSelected = activePhaseIndex === idx;
              return (
                <button
                  key={p.phase}
                  type="button"
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`p-4 sm:p-5 rounded-2xl text-left border transition-all ${
                    isSelected
                      ? 'bg-forest text-white border-forest shadow-md -translate-y-1'
                      : 'bg-white text-charcoal border-ivory-border hover:bg-sage/20'
                  }`}
                >
                  <span className={`font-mono text-xs font-bold uppercase tracking-wider block ${
                    isSelected ? 'text-gold-light' : 'text-forest'
                  }`}>
                    {p.phase}
                  </span>
                  <span className="font-heading font-bold text-sm sm:text-base mt-1 block line-clamp-2">
                    {p.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Phase Card */}
          <div className="bg-white rounded-3xl border border-ivory-border p-6 sm:p-10 shadow-card animate-fade-in space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-ivory-border gap-4">
              <div>
                <span className="text-xs font-bold text-gold-dark uppercase tracking-widest bg-gold/15 px-3 py-1 rounded-full">
                  {STRATEGIC_PHASES[activePhaseIndex].badge}
                </span>
                <h3 className="font-heading font-extrabold text-forest-deep text-2xl sm:text-3xl mt-2">
                  {STRATEGIC_PHASES[activePhaseIndex].phase}: {STRATEGIC_PHASES[activePhaseIndex].title}
                </h3>
              </div>
              <span className="text-xs text-charcoal-muted bg-ivory-surface px-3 py-1.5 rounded-lg border border-ivory-border self-start sm:self-auto">
                Strategic Phasing Plan
              </span>
            </div>

            <p className="text-charcoal-light text-base sm:text-lg leading-relaxed">
              {STRATEGIC_PHASES[activePhaseIndex].desc}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="font-heading font-bold text-sm text-forest-deep uppercase tracking-wider">
                Key Strategic Milestones:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {STRATEGIC_PHASES[activePhaseIndex].highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-ivory-surface border border-ivory-border text-xs sm:text-sm text-charcoal">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance Label: Strategic Plan, Not Completed Claim */}
            <div className="p-3.5 rounded-xl bg-sage/30 border border-forest/15 text-xs text-charcoal-muted flex items-center gap-2">
              <Info className="w-4 h-4 text-forest shrink-0" />
              <span>
                <strong className="text-forest-deep">Roadmap Note: </strong>
                These phases constitute the organization’s forward-looking strategic growth plan presented to institutional partners, not completed historical milestones.
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. IMPACT DASHBOARD (TRANSPARENT & FUTURE-READY) */}
      <section className="py-20 bg-sage/30 border-y border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-xs font-bold text-forest uppercase tracking-widest bg-sage px-3 py-1 rounded-full border border-forest/15">
              Impact Transparency & Monitoring
            </span>
            <h2 className="font-heading font-extrabold text-forest-deep text-3xl sm:text-4xl tracking-tight">
              Field Impact Dashboard
            </h2>
            <p className="text-charcoal-light text-base sm:text-lg">
              Designed to uphold the highest standard of donor trust and data integrity. We report only verified milestones while auditing empirical metrics.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DASHBOARD_METRICS.map((metric, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-ivory-border p-6 shadow-card flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-semibold text-charcoal-muted uppercase tracking-wider">
                      {metric.label}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      metric.isLive
                        ? 'bg-sage text-forest border border-forest/20'
                        : 'bg-gold/15 text-gold-dark border border-gold/30'
                    }`}>
                      {metric.status}
                    </span>
                  </div>

                  <div className="font-heading font-extrabold text-2xl sm:text-3xl text-forest-deep">
                    {metric.verifiedValue}
                  </div>
                </div>

                <p className="text-xs text-charcoal-light border-t border-ivory-border pt-3 leading-relaxed">
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Transparency Commitment Notice */}
          <div className="mt-10 p-6 rounded-2xl bg-white border border-ivory-border shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-forest shrink-0 mt-0.5" />
              <div>
                <h4 className="font-heading font-bold text-sm text-forest-deep">
                  Our Data Accuracy Commitment
                </h4>
                <p className="text-xs text-charcoal-light mt-0.5">
                  Unnayan Jan Vikas Samiti never inflates numerical achievements. As official audited reports and third-party monitoring evaluations are consolidated, live verified metrics will be updated on this portal.
                </p>
              </div>
            </div>

            <Link
              to="/partnerships"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest hover:text-gold-dark transition-colors whitespace-nowrap shrink-0"
            >
              <span>CSR Monitoring Framework</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 3. UNITED NATIONS SDG ALIGNMENT */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold text-gold-dark uppercase tracking-widest bg-gold/15 px-3 py-1 rounded-full">
              Global Alignment
            </span>
            <h2 className="font-heading font-extrabold text-forest-deep text-3xl sm:text-4xl tracking-tight">
              Aligned with the UN Sustainable Development Goals
            </h2>
            <p className="text-charcoal-light text-base sm:text-lg">
              As emphasized in our organization presentation, grassroots action in Chhattisgarh directly advances national and global development priorities.
            </p>
          </div>

          {/* SDG Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { num: "01", name: "No Poverty", desc: "Sustainable livelihood generation for rural households", color: "#E5243B" },
              { num: "04", name: "Quality Education", desc: "Promoting girl-child education & adolescent awareness", color: "#C5192D" },
              { num: "05", name: "Gender Equality", desc: "Grassroots women leadership & financial independence", color: "#FF3A21" },
              { num: "08", name: "Decent Work", desc: "Microenterprises, candle making & vocational skills", color: "#A21942" },
              { num: "10", name: "Reduced Inequalities", desc: "Social inclusion for Dalit and tribal communities", color: "#DD1367" },
              { num: "15", name: "Life on Land", desc: "Organic farming, water conservation & clean villages", color: "#56C02B" },
            ].map((sdg) => (
              <div
                key={sdg.num}
                className="bg-white rounded-2xl border border-ivory-border p-4 shadow-subtle flex flex-col justify-between space-y-3"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-heading font-extrabold text-white text-sm"
                  style={{ backgroundColor: sdg.color }}
                >
                  {sdg.num}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-forest-deep">
                    {sdg.name}
                  </h4>
                  <p className="text-[11px] text-charcoal-muted mt-1 leading-snug">
                    {sdg.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-forest text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
            Support Our Strategic Phasing Plan
          </h2>
          <p className="text-ivory/85 text-sm sm:text-base max-w-xl mx-auto">
            Collaborate with Unnayan Jan Vikas Samiti to bring structured, verified interventions to rural communities across Chhattisgarh.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/partnerships"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-forest-deep font-semibold text-sm px-6 py-3 rounded-xl shadow transition-all"
            >
              <span>Explore Partnership Opportunities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-sm px-6 py-3 rounded-xl border border-white/20 transition-all"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
