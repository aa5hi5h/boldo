"use client";

import Navbar from "@/components/ui/navbar";
import FooterSection from "@/components/footer";
import Link from "next/link";

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-gray-400 font-sg mb-8">
          Last Updated: February 6, 2026
        </p>
        <p className="text-gray-300 font-sg text-lg leading-relaxed mb-10 pb-10 border-b border-gray-800">
          Stellix ("Company", "we", "our", or "us") is committed to protecting your privacy and handling your personal information in a transparent and secure manner. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website. By using this website, you agree to the practices described in this policy.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-[900px] mx-auto px-[24px] pb-[80px]">
        <article className="space-y-12 font-sg">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-3xl font-gb font-bold mb-6 text-white">
              1. Information We Collect
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              We may collect the following types of information:
            </p>
            
            <h3 className="text-2xl font-gb font-semibold mb-4 text-white">
              Personal Information
            </h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              Information you voluntarily provide to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
              <li>Name</li>
              <li>Email address</li>
              <li>Company name</li>
              <li>Any details submitted through contact forms, emails, or inquiries</li>
            </ul>

            <h3 className="text-2xl font-gb font-semibold mb-4 text-white">
              Technical Information
            </h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              Information collected automatically when you use our website, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages visited and time spent on the website</li>
              <li>Referring URLs</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-3xl font-gb font-bold mb-6 text-white">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              We use collected information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
              <li>Respond to inquiries and communication requests</li>
              <li>Provide information about our services</li>
              <li>Improve website performance and user experience</li>
              <li>Monitor usage trends and analytics</li>
              <li>Maintain security and prevent unauthorized access or misuse</li>
            </ul>
            <p className="text-gray-300 leading-relaxed font-semibold">
              We do not sell, rent, or trade your personal information to third parties.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-3xl font-gb font-bold mb-6 text-white">
              3. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our website may use cookies or similar technologies to enhance functionality and analyze website traffic. Cookies help us understand how visitors interact with the site and improve performance.
            </p>
            <p className="text-gray-300 leading-relaxed">
              You can choose to disable cookies through your browser settings; however, some features of the website may not function properly as a result.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-3xl font-gb font-bold mb-6 text-white">
              4. Sharing of Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              We may share information with trusted third-party service providers that help us operate our website or business, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
              <li>Website hosting providers</li>
              <li>Analytics services</li>
              <li>IT and security providers</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mb-4">
              These parties are contractually obligated to keep your information confidential and use it only for the purposes specified by us.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We may also disclose information if required by law or to protect our legal rights.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-3xl font-gb font-bold mb-6 text-white">
              5. Data Security
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We implement reasonable technical and organizational measures to protect personal information against unauthorized access, loss, misuse, or alteration. While we strive to safeguard your data, no method of online transmission or storage is completely secure.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-3xl font-gb font-bold mb-6 text-white">
              6. Data Retention
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We retain personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by applicable laws and regulations.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-3xl font-gb font-bold mb-6 text-white">
              7. Your Rights
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Depending on your jurisdiction, you may have rights regarding your personal data, including the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
              <li>Request access to the data we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict certain processing activities</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              To exercise any of these rights, please contact us using the email below.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-3xl font-gb font-bold mb-6 text-white">
              8. Third-Party Links
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our website may contain links to external websites. We are not responsible for the privacy practices, policies, or content of third-party websites.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-3xl font-gb font-bold mb-6 text-white">
              9. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. Any updates will be posted on this page with a revised "Last Updated" date. Continued use of the website after changes are posted constitutes acceptance of those changes.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-3xl font-gb font-bold mb-6 text-white">
              10. Contact Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-2">
              If you have any questions about this Privacy Policy or how your information is handled, please contact:
            </p>
            <p className="text-[#1e96fc] font-semibold">
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