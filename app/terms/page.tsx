"use client";

import Navbar from "@/components/ui/navbar";
import FooterSection from "@/components/footer";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <div className="max-w-[900px] mx-auto px-[24px] md:pt-[120px] pt-[80px] pb-[40px]">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-sg font-medium text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <h1 className="md:text-[56px] text-[36px] font-gb font-bold leading-[1.1] mb-4 text-white">
          Terms & Conditions
        </h1>
        <p className="text-gray-400 font-sg mb-8">
          Last Updated: February 6, 2026
        </p>
        <p className="text-gray-300 font-sg text-lg leading-relaxed mb-10 pb-10 border-b border-gray-800">
          Welcome to Stellix ("Company", "we", "our", or "us"). By accessing or using our website, you agree to comply with and be bound by the following Terms & Conditions. If you do not agree, please do not use this website.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-[900px] mx-auto px-[24px] pb-[80px]">
        <article className="space-y-12 font-sg">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-3xl font-gb font-bold mb-6 text-white">
              1. Website Use
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This website is intended for informational purposes regarding Stellix and the services we provide. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of the website or related systems</li>
              <li>Reproduce, duplicate, copy, sell, or exploit any portion of the website without written permission</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              We reserve the right to modify, suspend, or discontinue any part of the website at any time without notice.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-3xl font-gb font-bold mb-6 text-white">
              2. Services
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Stellix provides digital marketing and growth-related services. All services are subject to separate written agreements, proposals, or contracts between Stellix and its clients. Nothing on this website constitutes a binding offer or guarantee of service.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-3xl font-gb font-bold mb-6 text-white">
              3. Intellectual Property
            </h2>
            <p className="text-gray-300 leading-relaxed">
              All website content, including text, graphics, branding elements, logos, and design, is the property of Stellix unless otherwise stated. Unauthorized use, reproduction, or distribution of any materials is prohibited.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-3xl font-gb font-bold mb-6 text-white">
              4. No Guarantees
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Stellix provides professional marketing services based on experience and data-driven strategies. However, we do not guarantee specific financial, advertising, or business outcomes, as results depend on multiple external factors beyond our control.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-3xl font-gb font-bold mb-6 text-white">
              5. Third-Party Platforms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our services may involve the use of third-party platforms, including social media and advertising networks. Stellix is not responsible for changes, outages, policy updates, or restrictions imposed by such platforms.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-3xl font-gb font-bold mb-6 text-white">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-300 leading-relaxed">
              To the fullest extent permitted by law, Stellix shall not be liable for any indirect, incidental, consequential, or special damages arising from the use of this website or our services.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-3xl font-gb font-bold mb-6 text-white">
              7. Changes to Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may update these Terms & Conditions at any time. Continued use of the website following updates constitutes acceptance of the revised terms.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-3xl font-gb font-bold mb-6 text-white">
              8. Governing Law
            </h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed by and interpreted in accordance with the laws of [Insert Country/State].
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-3xl font-gb font-bold mb-6 text-white">
              9. Contact Information
            </h2>
            <p className="text-gray-300 leading-relaxed">
              For questions regarding these Terms & Conditions, please contact:
            </p>
            <p className="text-[#1e96fc] font-semibold mt-2">
              Email: <a href="mailto:info@stellix.io" className="hover:underline">info@stellix.io</a>
            </p>
          </section>

        </article>

        {/* Back Button */}
        <div className="mt-16 pt-10 border-t border-gray-800 text-center">
          <Link href="/">
            <button className="bg-white text-black px-8 py-3 font-sg font-semibold hover:bg-gray-200 transition-colors">
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}