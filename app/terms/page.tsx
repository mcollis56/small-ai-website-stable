
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="small-ai-section bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Terms of <span className="small-ai-highlight">Service</span>
          </h1>
          <p className="text-xl text-gray-700">
            The legal bits. We promise not to use any more jargon than necessary.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="small-ai-section border-t-2 border-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            <div className="bg-small-ai-yellow p-6 mb-8 border-2 border-black">
              <p className="text-sm text-gray-700 mb-2 font-bold">Last updated: October 1, 2025</p>
              <p className="text-gray-700">
                These Terms of Service govern your use of Small AI&apos;s website and services. 
                By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing our website, booking consultations, or using our AI consulting services, 
              you acknowledge that you have read, understood, and agree to be bound by these Terms 
              and our Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
            <p className="text-gray-700 mb-6">
              Small AI provides artificial intelligence consulting services for small and medium-sized businesses, including:
            </p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>AI chatbot integration and setup</li>
              <li>Workflow automation consulting</li>
              <li>Data analytics and insights services</li>
              <li>AI strategy development and implementation</li>
              <li>Training and ongoing support</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 mb-6">
              When using our services, you agree to:
            </p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Use our services only for lawful business purposes</li>
              <li>Maintain the confidentiality of any login credentials</li>
              <li>Not attempt to interfere with or disrupt our services</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Respect intellectual property rights</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Consultation and Service Terms</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Free Consultations</h3>
            <p className="text-gray-700 mb-6">
              Our initial consultations are provided free of charge for up to 30 minutes. 
              These sessions are for assessment and strategy discussion only and do not 
              include implementation or detailed technical guidance.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Paid Services</h3>
            <p className="text-gray-700 mb-6">
              Paid consulting services are provided under separate service agreements that 
              outline specific deliverables, timelines, and payment terms. All paid services 
              require a signed service agreement before work begins.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment Terms</h2>
            <p className="text-gray-700 mb-6">
              For paid services:
            </p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>Payment terms are specified in individual service agreements</li>
              <li>Invoices are typically due within 30 days of issue</li>
              <li>Late payments may incur additional fees</li>
              <li>We reserve the right to suspend services for overdue accounts</li>
              <li>Refund policies are outlined in service-specific agreements</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Content</h3>
            <p className="text-gray-700 mb-6">
              All content on our website, including text, graphics, logos, software, and 
              methodology, is owned by Small AI and protected by intellectual property laws. 
              You may not reproduce, distribute, or create derivative works without our written permission.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Client Data and Materials</h3>
            <p className="text-gray-700 mb-6">
              You retain ownership of your business data and materials. We may use your data 
              only as necessary to provide our services and in accordance with our Privacy Policy. 
              Any custom solutions we develop for you will be addressed in your service agreement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Confidentiality</h2>
            <p className="text-gray-700 mb-6">
              We understand that you may share confidential business information during our 
              consultations and service delivery. We commit to maintaining the confidentiality 
              of your information and will not disclose it to third parties except as required 
              by law or with your explicit consent.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimers and Limitations</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Results</h3>
            <p className="text-gray-700 mb-6">
              While we strive to deliver effective AI solutions, we cannot guarantee specific 
              business outcomes or results. The success of AI implementation depends on various 
              factors including your business model, market conditions, and implementation quality.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Technology Limitations</h3>
            <p className="text-gray-700 mb-6">
              AI technologies are rapidly evolving and may have limitations or unexpected behaviors. 
              We recommend thorough testing and gradual implementation of any AI solutions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Liability Limitations</h2>
            <p className="text-gray-700 mb-6">
              To the maximum extent permitted by law, Small AI's liability for any damages 
              arising from our services is limited to the amount paid for those services. 
              We are not liable for indirect, incidental, or consequential damages.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
            <p className="text-gray-700 mb-6">
              Either party may terminate ongoing services with appropriate notice as specified 
              in service agreements. We reserve the right to terminate access to our website 
              or services for violations of these Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              We may update these Terms periodically. Material changes will be communicated 
              through our website or direct notification. Continued use of our services 
              constitutes acceptance of updated Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These Terms are governed by the laws of [Jurisdiction]. Any disputes will be 
              resolved through binding arbitration or in the courts of [Jurisdiction].
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
            <p className="text-gray-700 mb-6">
              If you have questions about these Terms, please contact us:
            </p>
            <div className="small-ai-card bg-white p-6">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@smallai.com</p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> (555) 123-4567</p>
              <p className="text-gray-700"><strong>Address:</strong> Small AI Legal Department, [Business Address]</p>
            </div>

            <div className="bg-small-ai-yellow border-2 border-black p-6 mt-8">
              <p className="text-sm text-gray-800">
                <strong>Important Notice:</strong> These terms are provided as a template and 
                should be reviewed by qualified legal counsel before use. Specific terms may 
                vary based on jurisdiction and business requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
