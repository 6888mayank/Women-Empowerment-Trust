import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, Mail } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { ORG_DETAILS } from '../data/content';

export default function PrivacyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy | UNNAYAN JAN VIKAS SAMITI"
        description="Privacy policy and data protection principles of Unnayan Jan Vikas Samiti, Mahasamund, Chhattisgarh."
      />

      <section className="py-16 sm:py-20 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest hover:underline mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>

          <div className="bg-white rounded-3xl border border-ivory-border p-8 sm:p-12 shadow-card space-y-8">
            <div className="space-y-3 pb-6 border-b border-ivory-border">
              <span className="text-xs font-bold text-forest uppercase tracking-widest bg-sage/60 px-3 py-1 rounded-full">
                Institutional Policy
              </span>
              <h1 className="font-heading font-extrabold text-forest-deep text-2xl sm:text-4xl tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-xs sm:text-sm text-charcoal-muted">
                Effective Date: October 2026 | UNNAYAN JAN VIKAS SAMITI, Mahasamund, Chhattisgarh
              </p>
            </div>

            <div className="space-y-6 text-charcoal-light text-sm sm:text-base leading-relaxed">
              <div className="space-y-2">
                <h2 className="font-heading font-bold text-lg text-forest-deep">
                  1. Our Commitment to Privacy
                </h2>
                <p>
                  UNNAYAN JAN VIKAS SAMITI is committed to upholding the confidentiality, dignity, and privacy of our website visitors, CSR partners, donors, and community members. This Privacy Policy details how we handle information submitted to us through our digital touchpoints.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="font-heading font-bold text-lg text-forest-deep">
                  2. Information We Collect
                </h2>
                <p>
                  We only collect personal information that you voluntarily provide when submitting an inquiry or communication through our website. This includes:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Full Name and Contact Phone Number</li>
                  <li>Email Address</li>
                  <li>Organization or Institutional Affiliation</li>
                  <li>Thematic Area of Interest and Proposed Collaboration Details</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="font-heading font-bold text-lg text-forest-deep">
                  3. Use of Information
                </h2>
                <p>
                  Any information gathered through this portal is utilized strictly for:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Directly responding to your inquiry or partnership proposal</li>
                  <li>Facilitating CSR dialogue and institutional due diligence</li>
                  <li>Providing updates on community programs you have expressed interest in</li>
                </ul>
                <p className="pt-1">
                  We do not sell, rent, monetize, or trade any personal or organizational data to third parties under any circumstances.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="font-heading font-bold text-lg text-forest-deep">
                  4. Beneficiary Protection
                </h2>
                <p>
                  Photographs and narratives of community members, women trainees, and children displayed on this platform are used with community consent and respect for individual dignity. We strictly follow child protection and safeguarding standards.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="font-heading font-bold text-lg text-forest-deep">
                  5. Contact for Privacy Matters
                </h2>
                <p>
                  If you have any questions or wish to update or delete your contact records, please email us directly at:
                </p>
                <div className="p-4 rounded-xl bg-ivory-surface border border-ivory-border flex items-center gap-3">
                  <Mail className="w-5 h-5 text-forest" />
                  <a href={`mailto:${ORG_DETAILS.email}`} className="text-forest font-semibold text-sm hover:underline">
                    {ORG_DETAILS.email}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
