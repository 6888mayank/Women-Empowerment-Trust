import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import confetti from 'canvas-confetti';
import {
  Handshake,
  Building2,
  FileCheck2,
  Sprout,
  Users,
  GraduationCap,
  HeartPulse,
  Smartphone,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Send,
  Loader2,
  Info
} from 'lucide-react';
import FundChart from '../components/FundChart';
import SEOHead from '../components/SEOHead';
import { ORG_DETAILS } from '../data/content';

interface FormState {
  fullName: string;
  organization: string;
  workEmail: string;
  phone: string;
  areaOfInterest: string;
  proposedCollaboration: string;
  message: string;
}

export default function PartnershipsPage() {
  const [searchParams] = useSearchParams();
  const initialProgram = searchParams.get('program') || '';

  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    organization: '',
    workEmail: '',
    phone: '',
    areaOfInterest: initialProgram || 'Women Empowerment & Livelihoods',
    proposedCollaboration: 'CSR Project Partnership',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Partial<Record<keyof FormState, string>> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.organization.trim()) errs.organization = 'Organization name is required';
    if (!formData.workEmail.trim()) {
      errs.workEmail = 'Work Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errs.workEmail = 'Please enter a valid work email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone Number is required';
    } else if (!/^[0-9+\-\s()]{7,18}$/.test(formData.phone)) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide details about your proposed collaboration';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters describing your intent';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1200);
  };

  const PARTNERSHIP_OPPORTUNITIES = [
    {
      title: "CSR-Supported Women's Empowerment",
      desc: "Co-finance grassroots self-help group mobilization, leadership camps, and financial literacy workshops across Mahasamund villages.",
      icon: <Users className="w-5 h-5 text-forest" />
    },
    {
      title: "Vocational Training & Micro-Livelihoods",
      desc: "Sponsor candle making machinery, raw material kits, and artisan marketing linkages to create recurring home-based women incomes.",
      icon: <Building2 className="w-5 h-5 text-forest" />
    },
    {
      title: "Education & Girl-Child Welfare",
      desc: "Support remedial learning, adolescent counseling, school enrollment drives, and child protection campaigns in rural schools.",
      icon: <GraduationCap className="w-5 h-5 text-forest" />
    },
    {
      title: "Sustainable Agriculture & Farmer Support",
      desc: "Promote organic farming demonstrations, recognition of women farmers, rainwater harvesting, and eco-friendly soil practices.",
      icon: <Sprout className="w-5 h-5 text-forest" />
    },
    {
      title: "Digital & Financial Inclusion Camps",
      desc: "Facilitate village-level bank digitization, mobile literacy training, cyber fraud awareness, and direct benefit transfer access.",
      icon: <Smartphone className="w-5 h-5 text-forest" />
    },
    {
      title: "Institutional Grants & District Scale",
      desc: "Partner with philanthropic foundations to replicate proven participatory development models in adjacent districts of Chhattisgarh.",
      icon: <Handshake className="w-5 h-5 text-forest" />
    }
  ];

  return (
    <>
      <SEOHead
        title="Partnerships & Funding | CSR Collaboration with Unnayan Samiti"
        description="Partner with Unnayan Jan Vikas Samiti for high-impact CSR initiatives, institutional grants, and sustainable rural development programs in Chhattisgarh."
      />

      {/* Hero Banner */}
      <section className="bg-forest-deep text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/hero_community.jpg"
            alt="Community collaboration in Chhattisgarh"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/95 to-forest-dark/90"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-gold uppercase tracking-widest bg-forest px-3 py-1 rounded-full border border-gold/30">
            <span>CSR & Institutional Collaboration</span>
          </div>
          <h1 className="font-heading font-extrabold text-white text-3xl sm:text-5xl tracking-tight">
            Partnerships & Sustainable Funding
          </h1>
          <p className="text-ivory/85 text-base sm:text-lg max-w-2xl leading-relaxed">
            Collaborating with forward-looking corporate CSR departments, development agencies, and philanthropic institutions to co-create transparent, measurable rural impact.
          </p>
        </div>
      </section>

      {/* 1. FUNDING & SUSTAINABILITY MODEL */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-4 mb-14">
            <span className="text-xs font-bold text-forest uppercase tracking-widest bg-sage/60 px-3 py-1 rounded-full">
              Sustainability Architecture
            </span>
            <h2 className="font-heading font-extrabold text-forest-deep text-3xl sm:text-4xl tracking-tight">
              Our Funding & Sustainability Model
            </h2>
            <p className="text-charcoal-light text-base sm:text-lg">
              As articulated in our presentation, Unnayan Jan Vikas Samiti aims to build a resilient, multifaceted funding model combining corporate CSR, institutional grants, and livelihood microenterprises.
            </p>
          </div>

          {/* 4 Pillars of Funding Model */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "CSR Grants & Partnerships",
                desc: "Mobilizing financial resources from corporate social responsibility programs to implement women's empowerment, vocational skills, education, and welfare."
              },
              {
                title: "Government & Development Grants",
                desc: "Seeking project-based institutional funding from rural development departments, government bodies, and eligible development agencies."
              },
              {
                title: "Livelihood Microenterprises",
                desc: "Supporting women-led production of candles and indigenous craft products to foster self-sustaining income streams and economic independence."
              },
              {
                title: "Community & Institutional Ties",
                desc: "Cultivating grassroots relationships with local institutions, philanthropic donors, and village bodies for sustained community support."
              }
            ].map((pillar, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-ivory-border shadow-card flex flex-col justify-between space-y-3"
              >
                <span className="font-mono text-xs font-bold text-gold-dark bg-gold/15 px-2.5 py-1 rounded-md w-fit">
                  0{i + 1}
                </span>
                <h3 className="font-heading font-bold text-forest-deep text-base sm:text-lg">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 2. INTERACTIVE FUND UTILIZATION CHART */}
          <div className="mb-20">
            <FundChart />
          </div>

          {/* 3. PARTNERSHIP OPPORTUNITIES */}
          <div className="space-y-10">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold text-gold-dark uppercase tracking-widest bg-gold/15 px-3 py-1 rounded-full">
                Collaboration Avenues
              </span>
              <h2 className="font-heading font-extrabold text-forest-deep text-2xl sm:text-3xl tracking-tight">
                CSR Partnership Opportunities
              </h2>
              <p className="text-charcoal-light text-sm sm:text-base">
                Tailored intervention areas for institutional donors looking for high governance, deep community immersion, and tangible social return.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PARTNERSHIP_OPPORTUNITIES.map((opp, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-ivory-border shadow-subtle hover:shadow-card transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-sage/60 flex items-center justify-center">
                      {opp.icon}
                    </div>
                    <h3 className="font-heading font-bold text-forest-deep text-base sm:text-lg">
                      {opp.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
                      {opp.desc}
                    </p>
                  </div>
                  <a
                    href="#partner-form"
                    onClick={() => {
                      setFormData(prev => ({ ...prev, areaOfInterest: opp.title }));
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold font-heading text-forest hover:text-gold-dark transition-colors pt-2 border-t border-ivory-border"
                  >
                    <span>Inquire About This Track</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. CSR & INSTITUTIONAL PARTNERSHIP INQUIRY FORM */}
      <section id="partner-form" className="py-20 bg-sage/30 border-t border-ivory-border scroll-mt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl border border-ivory-border shadow-card p-8 sm:p-12 space-y-8">
            <div className="space-y-3 text-center sm:text-left">
              <span className="text-xs font-bold text-forest uppercase tracking-widest bg-sage px-3 py-1 rounded-full border border-forest/15">
                Institutional Dialog
              </span>
              <h2 className="font-heading font-extrabold text-forest-deep text-2xl sm:text-3xl tracking-tight">
                Submit a Partnership Inquiry
              </h2>
              <p className="text-charcoal-light text-xs sm:text-sm max-w-2xl">
                Please provide details regarding your CSR mandate, thematic focus, or grant proposal. Mrs. Premsheela Baghel and our team will respond within 48 hours.
              </p>
            </div>

            {isSuccess ? (
              <div className="p-8 rounded-2xl bg-sage/40 border border-forest/20 text-center space-y-4 animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-forest text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-xl text-forest-deep">
                  Thank You for Your Partnership Inquiry
                </h3>
                <p className="text-charcoal-light text-sm max-w-md mx-auto leading-relaxed">
                  Your inquiry on behalf of <strong className="text-forest-deep">{formData.organization}</strong> has been logged. Our leadership team has received your communication and will contact you at <strong className="text-forest-deep">{formData.workEmail}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        fullName: '',
                        organization: '',
                        workEmail: '',
                        phone: '',
                        areaOfInterest: 'Women Empowerment & Livelihoods',
                        proposedCollaboration: 'CSR Project Partnership',
                        message: ''
                      });
                    }}
                    className="inline-flex items-center gap-2 text-xs font-bold text-forest hover:underline"
                  >
                    <span>Submit another inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="block text-xs font-semibold text-charcoal uppercase tracking-wider">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder="e.g. Ananya Sharma"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-charcoal bg-ivory-surface focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.fullName
                          ? 'border-red-400 focus:ring-red-300'
                          : 'border-ivory-border focus:ring-forest focus:border-forest'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Organization */}
                  <div className="space-y-1.5">
                    <label htmlFor="organization" className="block text-xs font-semibold text-charcoal uppercase tracking-wider">
                      Organization / Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => {
                        setFormData({ ...formData, organization: e.target.value });
                        if (errors.organization) setErrors({ ...errors, organization: undefined });
                      }}
                      placeholder="e.g. Tata Trusts / CSR Foundation"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-charcoal bg-ivory-surface focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.organization
                          ? 'border-red-400 focus:ring-red-300'
                          : 'border-ivory-border focus:ring-forest focus:border-forest'
                      }`}
                    />
                    {errors.organization && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.organization}
                      </p>
                    )}
                  </div>

                  {/* Work Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="workEmail" className="block text-xs font-semibold text-charcoal uppercase tracking-wider">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="workEmail"
                      value={formData.workEmail}
                      onChange={(e) => {
                        setFormData({ ...formData, workEmail: e.target.value });
                        if (errors.workEmail) setErrors({ ...errors, workEmail: undefined });
                      }}
                      placeholder="corporate.email@company.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-charcoal bg-ivory-surface focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.workEmail
                          ? 'border-red-400 focus:ring-red-300'
                          : 'border-ivory-border focus:ring-forest focus:border-forest'
                      }`}
                    />
                    {errors.workEmail && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.workEmail}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs font-semibold text-charcoal uppercase tracking-wider">
                      Contact Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-charcoal bg-ivory-surface focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.phone
                          ? 'border-red-400 focus:ring-red-300'
                          : 'border-ivory-border focus:ring-forest focus:border-forest'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Area of Interest */}
                  <div className="space-y-1.5">
                    <label htmlFor="areaOfInterest" className="block text-xs font-semibold text-charcoal uppercase tracking-wider">
                      Thematic Area of Interest
                    </label>
                    <select
                      id="areaOfInterest"
                      value={formData.areaOfInterest}
                      onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-ivory-border text-sm text-charcoal bg-ivory-surface focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest"
                    >
                      <option value="Women Empowerment & Leadership">01 — Women Empowerment & Leadership</option>
                      <option value="Skill Development & Sustainable Livelihoods">02 — Skill Development (Candle Making & Crafts)</option>
                      <option value="Education & Child Welfare">03 — Education & Child Welfare</option>
                      <option value="Community Health & Sanitation">04 — Community Health & Sanitation</option>
                      <option value="Agriculture & Rural Sustainability">05 — Agriculture & Women Farmers</option>
                      <option value="Digital & Financial Inclusion">06 — Digital & Financial Inclusion</option>
                      <option value="Multi-Sector Integrated CSR Program">Multi-Sector Integrated CSR Program</option>
                      <option value="Other Institutional Grant">Other Institutional Grant</option>
                    </select>
                  </div>

                  {/* Proposed Collaboration Type */}
                  <div className="space-y-1.5">
                    <label htmlFor="proposedCollaboration" className="block text-xs font-semibold text-charcoal uppercase tracking-wider">
                      Proposed Collaboration Mode
                    </label>
                    <select
                      id="proposedCollaboration"
                      value={formData.proposedCollaboration}
                      onChange={(e) => setFormData({ ...formData, proposedCollaboration: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-ivory-border text-sm text-charcoal bg-ivory-surface focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest"
                    >
                      <option value="CSR Project Partnership">Corporate Social Responsibility (CSR) Grant</option>
                      <option value="Institutional Philanthropic Grant">Institutional Philanthropic Grant</option>
                      <option value="Government / Development Agency Program">Government / Development Agency Project</option>
                      <option value="Livelihood Enterprise & Market Linkage">Livelihood & Market Linkage Collaboration</option>
                      <option value="Direct Grant Support">General Institutional Funding</option>
                    </select>
                  </div>

                </div>

                {/* Message / Scope */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-semibold text-charcoal uppercase tracking-wider">
                    Collaboration Scope / Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Briefly describe your proposed collaboration, target geography, expected timelines or CSR mandate..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-charcoal bg-ivory-surface focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.message
                        ? 'border-red-400 focus:ring-red-300'
                        : 'border-ivory-border focus:ring-forest focus:border-forest'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Privacy and Integration Notice */}
                <div className="p-4 rounded-xl bg-ivory-surface border border-ivory-border text-xs text-charcoal-muted space-y-1">
                  <div className="flex items-center gap-1.5 text-forest font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Confidentiality & Privacy Assurance</span>
                  </div>
                  <p>
                    All partnership inquiries are shared exclusively with the executive leadership of Unnayan Jan Vikas Samiti for official discussion and due diligence. We respect organizational confidentiality.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-forest hover:bg-forest-hover text-white font-heading font-bold text-base px-8 py-3.5 rounded-xl shadow-md transition-all disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Partnership Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>
      </section>
    </>
  );
}
