import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import confetti from 'canvas-confetti';
import {
  MapPin,
  Phone,
  Mail,
  User,
  Clock,
  Send,
  AlertCircle,
  CheckCircle2,
  ShieldCheck,
  Building,
  Loader2,
  ExternalLink,
  Info
} from 'lucide-react';
import { ORG_DETAILS } from '../data/content';
import SEOHead from '../components/SEOHead';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  inquiryType: string;
  message: string;
  honeypot: string; // Anti-spam field
}

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const prefilledInquiry = searchParams.get('inquiry') || 'General Information';
  const prefilledSubject = searchParams.get('subject') || '';

  const [form, setForm] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: prefilledInquiry,
    message: prefilledSubject ? `Regarding ${prefilledSubject}: ` : '',
    honeypot: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};
    if (!form.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!form.email.trim()) {
      errs.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!form.phone.trim()) {
      errs.phone = 'Phone Number is required';
    } else if (!/^[0-9+\-\s()]{7,18}$/.test(form.phone)) {
      errs.phone = 'Please provide a valid phone number';
    }
    if (!form.message.trim()) {
      errs.message = 'Please type your message';
    } else if (form.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return; // Silent discard for spam bots
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 90,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 1000);
  };

  return (
    <>
      <SEOHead
        title="Contact Us | UNNAYAN JAN VIKAS SAMITI"
        description="Get in touch with Unnayan Jan Vikas Samiti in Mahasamund, Chhattisgarh. Phone: +91 9826306475, Email: unnyan2017@gmail.com."
      />

      {/* Hero Banner */}
      <section className="bg-forest-deep text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/hero_community.jpg"
            alt="Mahasamund community outreach"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/95 to-forest-dark/90"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-gold uppercase tracking-widest bg-forest px-3 py-1 rounded-full border border-gold/30">
            <span>Direct Outreach</span>
          </div>
          <h1 className="font-heading font-extrabold text-white text-3xl sm:text-5xl tracking-tight">
            Connect With Our Team
          </h1>
          <p className="text-ivory/85 text-base sm:text-lg max-w-2xl leading-relaxed">
            We welcome inquiries from community members, CSR partners, donors, volunteers, and development institutions.
          </p>
        </div>
      </section>

      {/* Main 2-Column Section */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Official Contact Details (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="space-y-3">
                <span className="text-xs font-bold text-forest uppercase tracking-widest bg-sage/60 px-3 py-1 rounded-full">
                  Official Details
                </span>
                <h2 className="font-heading font-extrabold text-forest-deep text-2xl sm:text-3xl tracking-tight">
                  UNNAYAN JAN VIKAS SAMITI
                </h2>
                <p className="text-charcoal-light text-sm sm:text-base leading-relaxed">
                  Headquartered in Mahasamund district, Chhattisgarh, serving rural habitations through integrated social and economic initiatives.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                
                {/* Location */}
                <div className="p-5 rounded-2xl bg-white border border-ivory-border shadow-subtle flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sage/60 flex items-center justify-center text-forest shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-forest-deep">Working Office</h3>
                    <p className="text-sm font-bold text-forest-deep mt-1">
                      Ward No. 23 Panjabi Para
                    </p>
                    <p className="text-sm font-semibold text-charcoal">
                      Mahasamund (C.G.) 493445
                    </p>
                    <span className="text-[11px] text-gold-dark font-medium block mt-1">
                      Official Registered Organization Office • District Mahasamund
                    </span>
                  </div>
                </div>

                {/* Contact Person */}
                <div className="p-5 rounded-2xl bg-white border border-ivory-border shadow-subtle flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sage/60 flex items-center justify-center text-forest shrink-0 mt-0.5">
                    <User className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-forest-deep">Contact Person</h3>
                    <p className="text-xs sm:text-sm text-charcoal font-semibold mt-1">
                      {ORG_DETAILS.secretary}
                    </p>
                    <span className="text-[11px] text-gold-dark font-medium block">
                      {ORG_DETAILS.secretaryQualifications}
                    </span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="p-5 rounded-2xl bg-white border border-ivory-border shadow-subtle flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sage/60 flex items-center justify-center text-forest shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-forest-deep">Contact No.</h3>
                    <div className="flex flex-col gap-1.5 mt-1 text-sm">
                      <a
                        href="tel:+919826306475"
                        className="text-forest hover:text-gold-dark font-bold transition-colors flex items-center gap-1.5"
                      >
                        <span>9826306475</span>
                        <ExternalLink className="w-3 h-3 text-charcoal-muted" />
                      </a>
                      <a
                        href="tel:+918349921973"
                        className="text-forest hover:text-gold-dark font-bold transition-colors flex items-center gap-1.5"
                      >
                        <span>8349921973</span>
                        <ExternalLink className="w-3 h-3 text-charcoal-muted" />
                      </a>
                    </div>
                    <span className="text-[11px] text-charcoal-muted block mt-1">
                      Call directly or connect via WhatsApp for organizational queries
                    </span>
                  </div>
                </div>

                {/* WhatsApp Quick Connect */}
                <div className="p-4 rounded-2xl bg-green-50/80 border border-green-200 shadow-subtle flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-green-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                      WA
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-green-950 font-heading">WhatsApp Direct Connect</h4>
                      <p className="text-[11px] text-green-800">+91 9826306475</p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/919826306475?text=Hello%20Unnayan%20Jan%20Vikas%20Samiti%2C%20I%20would%20like%20to%20connect%20regarding%20community%20programs."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg shadow-sm transition-all"
                  >
                    <span>Chat on WhatsApp</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Email */}
                <div className="p-5 rounded-2xl bg-white border border-ivory-border shadow-subtle flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sage/60 flex items-center justify-center text-forest shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-forest-deep">Official Email</h3>
                    <a
                      href={`mailto:${ORG_DETAILS.email}`}
                      className="text-xs sm:text-sm text-forest hover:text-gold-dark font-semibold transition-colors block mt-1 break-all"
                    >
                      {ORG_DETAILS.email}
                    </a>
                    <span className="text-[11px] text-charcoal-muted block mt-0.5">
                      Monitored daily for institutional and general correspondence
                    </span>
                  </div>
                </div>

              </div>

              {/* Verified Location & Map Embed */}
              <div className="p-4 rounded-2xl bg-white border border-ivory-border shadow-subtle space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-forest-deep font-semibold text-xs">
                    <MapPin className="w-4 h-4 text-forest" />
                    <span>Office Location Map (Ward No. 23 Panjabi Para)</span>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Panjabi+Para+Mahasamund+Chhattisgarh+493445"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-forest hover:text-gold-dark flex items-center gap-1 underline"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Interactive Google Maps Embed */}
                <div className="rounded-xl overflow-hidden border border-ivory-border h-48 w-full bg-ivory-surface">
                  <iframe
                    title="UNNAYAN JAN VIKAS SAMITI Office Location"
                    src="https://maps.google.com/maps?q=Panjabi+Para,+Mahasamund,+Chhattisgarh+493445&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="text-[11px] text-charcoal-muted">
                  📍 <strong>Ward No. 23 Panjabi Para, Mahasamund (C.G.) 493445</strong>. Direct field visits can be scheduled via telephone or email in advance.
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-ivory-border shadow-card p-8 sm:p-10 space-y-6">
                
                <div className="space-y-2">
                  <span className="text-xs font-bold text-gold-dark uppercase tracking-widest bg-gold/15 px-3 py-1 rounded-full">
                    Send a Direct Message
                  </span>
                  <h3 className="font-heading font-extrabold text-forest-deep text-2xl sm:text-3xl">
                    How Can We Assist You?
                  </h3>
                  <p className="text-charcoal-light text-xs sm:text-sm">
                    Fill out the form below. All inquiries receive direct attention from our leadership team.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-8 rounded-2xl bg-sage/40 border border-forest/20 text-center space-y-4 animate-fade-in">
                    <div className="w-14 h-14 rounded-full bg-forest text-white flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-heading font-bold text-xl text-forest-deep">
                      Message Successfully Prepared
                    </h4>
                    <p className="text-charcoal-light text-sm max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-forest-deep">{form.fullName}</strong>. Your message regarding <strong className="text-forest-deep">{form.inquiryType}</strong> has been logged. You may also directly reach out at <a href={`mailto:${ORG_DETAILS.email}`} className="text-forest font-semibold underline">{ORG_DETAILS.email}</a> for immediate priority handling.
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setForm({
                            fullName: '',
                            email: '',
                            phone: '',
                            organization: '',
                            inquiryType: 'General Information',
                            message: '',
                            honeypot: ''
                          });
                        }}
                        className="inline-flex items-center gap-2 text-xs font-bold text-forest hover:underline"
                      >
                        <span>Send another message</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {/* Honeypot field for spam prevention */}
                    <input
                      type="text"
                      name="hp_website"
                      value={form.honeypot}
                      onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      
                      {/* Full Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="c_fullName" className="block text-xs font-semibold text-charcoal uppercase tracking-wider">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="c_fullName"
                          value={form.fullName}
                          onChange={(e) => {
                            setForm({ ...form, fullName: e.target.value });
                            if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                          }}
                          placeholder="Your Name"
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

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="c_email" className="block text-xs font-semibold text-charcoal uppercase tracking-wider">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="c_email"
                          value={form.email}
                          onChange={(e) => {
                            setForm({ ...form, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          placeholder="name@example.com"
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-charcoal bg-ivory-surface focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                            errors.email
                              ? 'border-red-400 focus:ring-red-300'
                              : 'border-ivory-border focus:ring-forest focus:border-forest'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label htmlFor="c_phone" className="block text-xs font-semibold text-charcoal uppercase tracking-wider">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="c_phone"
                          value={form.phone}
                          onChange={(e) => {
                            setForm({ ...form, phone: e.target.value });
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

                      {/* Organization (optional) */}
                      <div className="space-y-1.5">
                        <label htmlFor="c_org" className="block text-xs font-semibold text-charcoal uppercase tracking-wider">
                          Organization / Affiliation <span className="text-charcoal-muted text-[10px]">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          id="c_org"
                          value={form.organization}
                          onChange={(e) => setForm({ ...form, organization: e.target.value })}
                          placeholder="Institution or Village / Block"
                          className="w-full px-4 py-3 rounded-xl border border-ivory-border text-sm text-charcoal bg-ivory-surface focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest"
                        />
                      </div>

                    </div>

                    {/* Inquiry Type */}
                    <div className="space-y-1.5">
                      <label htmlFor="c_inquiry" className="block text-xs font-semibold text-charcoal uppercase tracking-wider">
                        Inquiry Type
                      </label>
                      <select
                        id="c_inquiry"
                        value={form.inquiryType}
                        onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-ivory-border text-sm text-charcoal bg-ivory-surface focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest"
                      >
                        <option value="General Information">General Information</option>
                        <option value="CSR Partnership">CSR Partnership</option>
                        <option value="Funding & Grants">Funding & Grants</option>
                        <option value="Volunteering">Volunteering & Community Engagement</option>
                        <option value="Program Information">Program Information</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="c_message" className="block text-xs font-semibold text-charcoal uppercase tracking-wider">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="c_message"
                        rows={4}
                        value={form.message}
                        onChange={(e) => {
                          setForm({ ...form, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        placeholder="Write your message, question, or how you would like to collaborate..."
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

                    {/* Privacy & Pending Backend Integration Disclosure */}
                    <div className="p-3.5 rounded-xl bg-ivory-surface border border-ivory-border text-xs text-charcoal-muted space-y-1">
                      <div className="flex items-center gap-1 text-forest font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Privacy & Transmission Notice:</span>
                      </div>
                      <p>
                        Your contact details will only be used to respond to your inquiry. Form submissions are logged client-side pending custom SMTP configuration on your production domain. You can always email us directly at <a href={`mailto:${ORG_DETAILS.email}`} className="text-forest font-semibold underline">{ORG_DETAILS.email}</a>.
                      </p>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-forest hover:bg-forest-hover text-white font-heading font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-md transition-all disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
