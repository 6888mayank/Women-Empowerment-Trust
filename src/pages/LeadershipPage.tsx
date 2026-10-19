import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Calendar,
  Award,
  ShieldCheck,
  Heart,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  Sparkles,
  CheckCircle2,
  Info
} from 'lucide-react';
import { ORG_DETAILS } from '../data/content';
import SEOHead from '../components/SEOHead';

export default function LeadershipPage() {
  return (
    <>
      <SEOHead
        title="Leadership | Mrs. Premsheela Baghel, Secretary"
        description="Meet Mrs. Premsheela Baghel, Secretary of Unnayan Jan Vikas Samiti. Bringing 30 years of social development experience with M.A. Sociology & MSW qualifications."
      />

      {/* Hero Banner */}
      <section className="bg-forest-deep text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/hero_community.jpg"
            alt="Rural community in Chhattisgarh"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/95 to-forest-dark/90"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-gold uppercase tracking-widest bg-forest px-3 py-1 rounded-full border border-gold/30">
            <span>Grassroots Stewardship</span>
          </div>
          <h1 className="font-heading font-extrabold text-white text-3xl sm:text-5xl tracking-tight">
            Meet Our Leadership
          </h1>
          <p className="text-ivory/85 text-base sm:text-lg max-w-2xl leading-relaxed">
            Guided by three decades of dedicated social development leadership, academic foundation in social work, and deep grassroots integration in Chhattisgarh.
          </p>
        </div>
      </section>

      {/* Main Leadership Profile Section */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl border border-ivory-border shadow-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Portrait & Quick Credentials (5 cols) */}
              <div className="lg:col-span-5 bg-forest-deep text-white p-8 sm:p-10 flex flex-col justify-between space-y-8 relative overflow-hidden">
                <div className="space-y-6">
                  
                  {/* Portrait Frame */}
                  <div className="relative mx-auto max-w-[320px] rounded-2xl overflow-hidden shadow-2xl border-4 border-forest-light bg-forest">
                    <img
                      src="/images/premsheela_baghel.png"
                      alt="Mrs. Premsheela Baghel, Secretary of Unnayan Jan Vikas Samiti"
                      className="w-full h-auto object-cover object-top"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/40 to-transparent p-4 text-center">
                      <span className="text-xs font-bold tracking-wider uppercase text-gold-light">
                        Secretary & Representative
                      </span>
                    </div>
                  </div>

                  {/* Leader Header */}
                  <div className="text-center space-y-1">
                    <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                      {ORG_DETAILS.secretary}
                    </h2>
                    <p className="text-sm font-semibold text-gold-light">
                      {ORG_DETAILS.secretaryTitle}
                    </p>
                  </div>

                  {/* Verified Credentials Pills */}
                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-forest/60 border border-forest-light text-xs sm:text-sm">
                      <GraduationCap className="w-5 h-5 text-gold shrink-0" />
                      <div>
                        <span className="font-semibold block text-white">Postgraduate Qualifications:</span>
                        <span className="text-ivory/80">M.A. Sociology & Master of Social Work (MSW)</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-forest/60 border border-forest-light text-xs sm:text-sm">
                      <Calendar className="w-5 h-5 text-gold shrink-0" />
                      <div>
                        <span className="font-semibold block text-white">Social Development Experience:</span>
                        <span className="text-gold-light font-bold">30 Years of Dedicated Grassroots Work</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-forest/60 border border-forest-light text-xs sm:text-sm">
                      <MapPin className="w-5 h-5 text-gold shrink-0" />
                      <div>
                        <span className="font-semibold block text-white">Primary Field Base:</span>
                        <span className="text-ivory/80">Mahasamund, Chhattisgarh, India</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Direct Connect Link */}
                <div className="pt-6 border-t border-forest-light/60">
                  <div className="text-xs text-ivory/60 mb-2">Institutional Correspondence:</div>
                  <a
                    href={`mailto:${ORG_DETAILS.email}`}
                    className="text-xs sm:text-sm font-medium text-gold-light hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-gold" />
                    <span>{ORG_DETAILS.email}</span>
                  </a>
                </div>

              </div>

              {/* Right Column: Professional Biography & Leadership Vision (7 cols) */}
              <div className="lg:col-span-7 p-8 sm:p-12 space-y-8 flex flex-col justify-between">
                <div className="space-y-6">
                  
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-forest uppercase tracking-widest bg-sage/60 px-3 py-1 rounded-full">
                      Professional Leadership Biography
                    </span>
                    <h3 className="font-heading font-extrabold text-forest-deep text-2xl sm:text-3xl leading-snug">
                      Empowering Marginalized Communities Through Participatory Transformation
                    </h3>
                  </div>

                  {/* Primary Narrative Text from Presentation */}
                  <div className="space-y-4 text-charcoal-light text-sm sm:text-base leading-relaxed">
                    <p>
                      <strong className="text-forest-deep">Mrs. Premsheela Baghel</strong> is an experienced social development professional and the <strong className="text-forest-deep">Secretary of Unnayan Jan Vikas Samiti</strong>, based in Mahasamund, Chhattisgarh. With <strong className="text-forest-deep">30 years of extensive experience</strong> in social welfare and community development, she has been actively associated with grassroots initiatives focused on women’s empowerment, rural livelihoods, education, social justice, and community welfare.
                    </p>

                    <p>
                      Holding dual postgraduate qualifications in <strong className="text-forest-deep">Sociology (M.A.)</strong> and <strong className="text-forest-deep">Social Work (Master of Social Work - MSW)</strong>, she brings deep theoretical understanding fused with authentic field engagement, strong community rapport, and an unwavering commitment to inclusive social progress.
                    </p>

                    <p>
                      Her overarching vision is to empower marginalized communities—particularly rural women, smallholder farmers, and Dalit and tribal households—through sustainable livelihoods, functional education, and community-owned social transformation.
                    </p>
                  </div>

                  {/* Leadership Pillars */}
                  <div className="space-y-3 pt-2">
                    <h4 className="font-heading font-bold text-sm text-forest-deep uppercase tracking-wider">
                      Core Leadership Domains:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Women's Self-Help Group mobilization & financial autonomy",
                        "Sustainable home-based livelihoods (candle making, crafts)",
                        "Advocacy for girls' education & adolescent child rights",
                        "Farmer training & recognition of women as equal farmers",
                        "Preventive health, menstrual hygiene & village sanitation",
                        "Social justice & inclusion for Dalit and tribal families"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-ivory-surface border border-ivory-border text-xs text-charcoal">
                          <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Leadership Quote */}
                  <div className="p-5 rounded-2xl bg-sage/30 border-l-4 border-forest text-xs sm:text-sm text-forest-deep italic leading-relaxed">
                    “Our goal is to ensure that every rural woman finds dignified work right within her village and home, free from economic vulnerability, and takes an equal seat at every community decision.”
                  </div>

                </div>

                {/* Bottom Actions */}
                <div className="pt-6 border-t border-ivory-border flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact?inquiry=General+Information"
                    className="inline-flex items-center gap-2 bg-forest hover:bg-forest-hover text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-sm transition-all"
                  >
                    <span>Connect with Leadership</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/partnerships"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-gold-dark transition-colors"
                  >
                    <span>Explore Institutional Collaboration</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>

            </div>
          </div>

          {/* Strict Governance & Authenticity Disclaimer */}
          <div className="mt-8 p-4 rounded-xl bg-white border border-ivory-border flex items-start gap-3 text-xs text-charcoal-muted leading-relaxed">
            <Info className="w-4 h-4 text-forest shrink-0 mt-0.5" />
            <div>
              <strong className="text-forest-deep">Editorial Authenticity Note: </strong>
              The credentials and biography above strictly mirror the official presentation of Unnayan Jan Vikas Samiti. In adherence to our strict transparency guidelines, no unverified board members, advisory trustees, or secondary office-bearers have been fabricated. Additional leadership disclosures will be integrated as official board resolutions and filings are supplied.
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
