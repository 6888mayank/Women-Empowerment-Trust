import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scale, Mail } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { ORG_DETAILS } from '../data/content';

export default function TermsPage() {
  return (
    <>
      <SEOHead
        title="Terms of Use | UNNAYAN JAN VIKAS SAMITI"
        description="Terms of use governing the digital platform of Unnayan Jan Vikas Samiti, Mahasamund, Chhattisgarh."
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
                Legal Notice
              </span>
              <h1 className="font-heading font-extrabold text-forest-deep text-2xl sm:text-4xl tracking-tight">
                Terms of Use
              </h1>
              <p className="text-xs sm:text-sm text-charcoal-muted">
                Effective Date: October 2026 | UNNAYAN JAN VIKAS SAMITI
              </p>
            </div>

            <div className="space-y-6 text-charcoal-light text-sm sm:text-base leading-relaxed">
              <div className="space-y-2">
                <h2 className="font-heading font-bold text-lg text-forest-deep">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing and using this website, you acknowledge and agree to comply with these Terms of Use. The website is established to inform the public, institutional partners, donors, and supporters regarding the social development mission of UNNAYAN JAN VIKAS SAMITI.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="font-heading font-bold text-lg text-forest-deep">
                  2. Intellectual Property & Digital Assets
                </h2>
                <p>
                  All content, text, photographic documentation, and digital assets published on this site belong to UNNAYAN JAN VIKAS SAMITI or are used with proper grassroots authorization. Reproduction or publication of field photographs or programmatic text without prior written consent is strictly prohibited.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="font-heading font-bold text-lg text-forest-deep">
                  3. Content Authenticity Standard
                </h2>
                <p>
                  The organization strives to ensure the highest degree of informational authenticity. All programmatic descriptions are based upon official presentation materials. Budgetary allocations and phase roadmaps represent strategic plans and proposals intended for institutional partnerships.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="font-heading font-bold text-lg text-forest-deep">
                  4. Governing Law & Jurisdiction
                </h2>
                <p>
                  Any disputes or inquiries arising from the use of this website shall be governed by and construed in accordance with the laws of India, subject to the jurisdiction of the competent courts in Mahasamund / Chhattisgarh.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="font-heading font-bold text-lg text-forest-deep">
                  5. Contact Information
                </h2>
                <p>
                  For any legal or institutional queries regarding these terms, please contact:
                </p>
                <div className="p-4 rounded-xl bg-ivory-surface border border-ivory-border text-sm">
                  <p className="font-bold text-forest-deep">{ORG_DETAILS.name}</p>
                  <p className="text-xs text-charcoal-muted">Secretary: {ORG_DETAILS.secretary}</p>
                  <p className="text-xs text-charcoal-muted">Location: {ORG_DETAILS.location}</p>
                  <p className="text-xs text-forest font-semibold mt-1">Email: {ORG_DETAILS.email}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
