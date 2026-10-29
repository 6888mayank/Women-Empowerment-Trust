import React, { useState } from 'react';
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
  Info,
  ExternalLink,
  X,
  ZoomIn,
  Building2,
  Medal
} from 'lucide-react';
import { ORG_DETAILS, AWARDS_LIST, AwardItem } from '../data/content';
import SEOHead from '../components/SEOHead';

export default function LeadershipPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalAward, setActiveModalAward] = useState<AwardItem | null>(null);

  const categories = [
    { label: 'All Honors (सभी 18 सम्मान)', value: 'All' },
    { label: 'State & Ministry (राज्य व केन्द्रीय सम्मान)', value: 'State & Ministry' },
    { label: 'NABARD & Banking (नाबार्ड एवं बैंकिंग)', value: 'NABARD & Banking' },
    { label: 'Media & Civic (मीडिया व नागरिक सम्मान)', value: 'Media & Civic' },
    { label: 'Institutional (संस्थागत प्रमाणन)', value: 'Institutional' }
  ];

  const filteredAwards = AWARDS_LIST.filter((award) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'State & Ministry') {
      return award.category === 'State Award' || award.category === 'Union Minister';
    }
    if (selectedCategory === 'NABARD & Banking') {
      return award.category === 'NABARD & Banking';
    }
    if (selectedCategory === 'Media & Civic') {
      return award.category === 'Media & Civic';
    }
    if (selectedCategory === 'Institutional') {
      return award.category === 'Institutional';
    }
    return true;
  });

  return (
    <>
      <SEOHead
        title="Leadership | Dr. Premsheela Baghel, Secretary"
        description="Meet Dr. Premsheela Baghel, Secretary of Unnayan Jan Vikas Samiti. Honored with Chhattisgarh State Decoration (Veerangana Rani Avanti Bai Lodhi Smriti Puraskar) with 30 years of social development leadership."
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
            <span>Grassroots Stewardship & State Recognition</span>
          </div>
          <h1 className="font-heading font-extrabold text-white text-3xl sm:text-5xl tracking-tight">
            Meet Our Leadership
          </h1>
          <p className="text-ivory/85 text-base sm:text-lg max-w-2xl leading-relaxed">
            Led by <strong>Dr. Premsheela Baghel</strong>, recipient of the prestigious Chhattisgarh State Decoration Award, with three decades of grassroots community service, academic rigor in Social Work, and deep rural integration.
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
                  <div className="relative mx-auto max-w-[320px] rounded-2xl overflow-hidden shadow-2xl border-4 border-forest-light bg-forest group">
                    <img
                      src="/images/premsheela_baghel.png"
                      alt="Dr. Premsheela Baghel, Secretary of Unnayan Jan Vikas Samiti"
                      className="w-full h-auto object-cover object-top"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-forest-dark/95 via-forest-dark/60 to-transparent p-4 text-center">
                      <span className="text-xs font-bold tracking-wider uppercase text-gold-light block">
                        Secretary & Founder Representative
                      </span>
                      <span className="text-[11px] text-ivory/80 block mt-0.5">
                        Unnayan Jan Vikas Samiti
                      </span>
                    </div>
                  </div>

                  {/* Leader Header */}
                  <div className="text-center space-y-1">
                    <div className="inline-flex items-center gap-1.5 bg-gold/20 text-gold-light border border-gold/40 text-xs px-3 py-1 rounded-full mb-1">
                      <Medal className="w-3.5 h-3.5 text-gold" />
                      <span>राज्य अलंकरण से विभूषित</span>
                    </div>
                    <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                      {ORG_DETAILS.secretary}
                    </h2>
                    <p className="text-sm font-semibold text-gold-light">
                      {ORG_DETAILS.secretaryTitle}
                    </p>
                  </div>

                  {/* Highest State Honor Banner */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-gold/25 via-gold/15 to-transparent border border-gold/40 text-xs space-y-1.5">
                    <div className="flex items-center gap-2 text-gold-light font-bold">
                      <Award className="w-4 h-4 text-gold shrink-0" />
                      <span>सर्वोच्च राज्य अलंकरण (State Award)</span>
                    </div>
                    <p className="text-white font-medium text-xs leading-relaxed">
                      वीरांगना रानी अवंती बाई लोधी स्मृति पुरस्कार — माननीय उपराष्ट्रपति / राज्यपाल द्वारा प्रदत्त
                    </p>
                  </div>

                  {/* Verified Credentials Pills */}
                  <div className="space-y-2.5 pt-1">
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
                        <span className="font-semibold block text-white">Working Office:</span>
                        <span className="text-ivory/80">{ORG_DETAILS.workingOffice}</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Direct Connect Link */}
                <div className="pt-6 border-t border-forest-light/60">
                  <div className="text-xs text-ivory/60 mb-2">Institutional Correspondence:</div>
                  <div className="flex flex-col gap-1.5">
                    <a
                      href={`mailto:${ORG_DETAILS.email}`}
                      className="text-xs sm:text-sm font-medium text-gold-light hover:text-white transition-colors flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4 text-gold shrink-0" />
                      <span>{ORG_DETAILS.email}</span>
                    </a>
                    <a
                      href="tel:+919826306475"
                      className="text-xs sm:text-sm font-medium text-ivory hover:text-white transition-colors flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-gold shrink-0" />
                      <span>+91 9826306475, 8349921973</span>
                    </a>
                  </div>
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

                  {/* Primary Narrative Text */}
                  <div className="space-y-4 text-charcoal-light text-sm sm:text-base leading-relaxed">
                    <p>
                      <strong className="text-forest-deep">Dr. Premsheela Baghel</strong> is an experienced social development professional and the <strong className="text-forest-deep">Secretary of Unnayan Jan Vikas Samiti</strong>, based in Mahasamund, Chhattisgarh. With <strong className="text-forest-deep">30 years of extensive experience</strong> in social welfare and community development, she has been actively associated with grassroots initiatives focused on women’s empowerment, rural livelihoods, education, social justice, and community welfare.
                    </p>

                    <p>
                      Holding dual postgraduate qualifications in <strong className="text-forest-deep">Sociology (M.A.)</strong> and <strong className="text-forest-deep">Social Work (Master of Social Work - MSW)</strong>, she brings deep theoretical understanding fused with authentic field engagement, strong community rapport, and an unwavering commitment to inclusive social progress.
                    </p>

                    <p>
                      Her exemplary work has been recognized at the highest levels of governance, culminating in the prestigious <strong className="text-forest-deep">Chhattisgarh State Decoration Award (वीरांगना रानी अवंती बाई लोधी स्मृति पुरस्कार)</strong> presented by the Hon. Vice President / Governor, alongside honors from Union Ministers, State Cabinet Ministers, and NABARD.
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
                        "Sustainable home-based livelihoods (candle making, crafts, canteen)",
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
                  <a
                    href="#awards"
                    className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-forest-deep text-sm font-bold px-6 py-3 rounded-xl shadow-sm transition-all"
                  >
                    <Award className="w-4 h-4" />
                    <span>View All 18 State Honors & Awards</span>
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-forest hover:bg-forest-hover text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-sm transition-all"
                  >
                    <span>Connect with Leadership</span>
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
              <strong className="text-forest-deep">Institutional Stewardship: </strong>
              The credentials, qualifications, and awards presented here are documented through official government certificates, citations, and public records from the Government of Chhattisgarh, Government of India, NABARD, and civic bodies.
            </div>
          </div>

        </div>
      </section>

      {/* 2. STATE HONORS, AWARDS & RECOGNITIONS GALLERY */}
      <section id="awards" className="py-20 lg:py-24 bg-sage/20 border-t border-ivory-border scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-forest uppercase tracking-widest bg-sage px-3 py-1 rounded-full border border-forest/20">
              <Medal className="w-4 h-4 text-forest" />
              <span>State & National Honors Gallery</span>
            </div>
            <h2 className="font-heading font-extrabold text-forest-deep text-3xl sm:text-4xl tracking-tight">
              राज्य अलंकरण, शासकीय सम्मान एवं सम्मान पत्र
            </h2>
            <p className="text-charcoal-light text-sm sm:text-base leading-relaxed">
              Dr. Premsheela Baghel and Unnayan Jan Vikas Samiti’s three decades of transformative grassroots dedication have been honored by Union Ministers, State Ministers, NABARD, District Administrations, and National Institutes.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition-all ${
                  selectedCategory === cat.value
                    ? 'bg-forest text-white shadow-md'
                    : 'bg-white text-charcoal hover:bg-sage/40 border border-ivory-border'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Awards Photo Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
            {filteredAwards.map((award) => (
              <div
                key={award.id}
                onClick={() => setActiveModalAward(award)}
                className="bg-white rounded-2xl border border-ivory-border shadow-card hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer"
              >
                {/* Photo Container */}
                <div className="relative aspect-[4/3] bg-forest-deep overflow-hidden">
                  <img
                    src={award.image}
                    alt={award.titleHi}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-forest-deep/90 text-gold-light border border-gold/40 shadow-sm backdrop-blur-sm">
                      {award.badge}
                    </span>
                    <span className="p-1.5 rounded-lg bg-black/40 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" />
                    </span>
                  </div>

                  {award.year && (
                    <div className="absolute bottom-3 right-3 text-[11px] font-bold px-2 py-0.5 rounded bg-black/60 text-white backdrop-blur-sm">
                      {award.year}
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-forest-deep text-base leading-snug group-hover:text-forest transition-colors">
                      {award.titleHi}
                    </h3>
                    <p className="text-xs text-charcoal-light leading-relaxed line-clamp-2">
                      {award.titleEn}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-ivory-border flex items-center justify-between text-xs">
                    <span className="text-[11px] text-charcoal-muted line-clamp-1">
                      {award.presentedBy}
                    </span>
                    <span className="text-forest font-semibold text-xs flex items-center gap-1 shrink-0 ml-2">
                      <span>View Photo</span>
                      <ZoomIn className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Footer Link to Partnerships / CSR */}
          <div className="p-6 rounded-3xl bg-forest text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-heading font-bold text-lg text-white">
                Partner with an Award-Winning Grassroots NGO
              </h4>
              <p className="text-ivory/80 text-xs sm:text-sm">
                Certified by decades of community recognition and government validation in Chhattisgarh.
              </p>
            </div>
            <Link
              to="/partnerships"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-forest-deep font-bold text-sm px-6 py-3 rounded-xl shadow transition-all shrink-0"
            >
              <span>Explore CSR Collaboration</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Lightbox Modal for Full View */}
      {activeModalAward && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setActiveModalAward(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl border border-ivory-border flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-ivory-border flex items-center justify-between bg-forest-deep text-white">
              <div className="flex items-center gap-2">
                <Medal className="w-5 h-5 text-gold shrink-0" />
                <span className="text-xs font-bold text-gold-light tracking-wide uppercase">
                  {activeModalAward.badge}
                </span>
              </div>
              <button
                onClick={() => setActiveModalAward(null)}
                className="p-1.5 rounded-lg text-ivory/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close photo view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="bg-charcoal/5 flex items-center justify-center overflow-auto max-h-[55vh] p-3">
              <img
                src={activeModalAward.image}
                alt={activeModalAward.titleHi}
                className="max-h-[50vh] w-auto object-contain rounded-xl shadow-md"
              />
            </div>

            {/* Modal Details Area */}
            <div className="p-5 sm:p-6 space-y-3 bg-ivory">
              <h3 className="font-heading font-extrabold text-forest-deep text-lg sm:text-xl leading-snug">
                {activeModalAward.titleHi}
              </h3>
              <p className="text-sm text-charcoal-light">
                {activeModalAward.titleEn}
              </p>
              <div className="pt-2 border-t border-ivory-border flex flex-wrap items-center justify-between gap-3 text-xs text-charcoal-muted">
                <div>
                  <strong>प्रदानकर्ता / Authority: </strong>
                  <span>{activeModalAward.presentedBy}</span>
                </div>
                {activeModalAward.year && (
                  <span className="px-2.5 py-1 rounded bg-forest/10 text-forest font-semibold">
                    दिनांक / वर्ष: {activeModalAward.year}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

