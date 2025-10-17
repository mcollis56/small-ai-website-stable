
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="small-ai-section">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-none">
            Privacy <span className="small-ai-highlight">Policy</span>
          </h1>
          <p className="text-xl text-gray-700">
            We keep things simple here too. This policy explains what we collect, why we collect it, and what we do with it.
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
                This is how Small-AI handles your information. We try to collect as little as possible and never sell your data to anyone.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-6">
              We collect information you provide directly to us, such as when you:
            </p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>Fill out our contact form</li>
              <li>Book a consultation through our website</li>
              <li>Subscribe to our newsletter</li>
              <li>Communicate with us via email or phone</li>
              <li>Use our AI services and solutions</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Types of Information</h3>
            <p className="text-gray-700 mb-6">
              The information we collect may include:
            </p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, company name</li>
              <li><strong>Business Information:</strong> Industry, company size, current challenges</li>
              <li><strong>Communication Records:</strong> Messages, consultation notes, support requests</li>
              <li><strong>Usage Data:</strong> How you interact with our website and services</li>
              <li><strong>Technical Information:</strong> IP address, browser type, device information</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-6">
              We use the information we collect to:
            </p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>Provide and improve our AI consulting services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Schedule and conduct consultations</li>
              <li>Send you relevant information about our services</li>
              <li>Analyze usage patterns to improve our website</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
            <p className="text-gray-700 mb-6">
              We do not sell, trade, or rent your personal information to third parties. 
              We may share your information only in the following circumstances:
            </p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li><strong>Service Providers:</strong> With trusted partners who assist in providing our services</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Consent:</strong> With your explicit consent for any other purpose</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate technical and organizational security measures to protect 
              your personal information against unauthorized access, alteration, disclosure, or destruction. 
              These measures include:
            </p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication requirements</li>
              <li>Employee training on data protection practices</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-6">
              You have the following rights regarding your personal information:
            </p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
              <li><strong>Objection:</strong> Object to certain types of processing</li>
              <li><strong>Withdrawal:</strong> Withdraw consent for processing based on consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-700 mb-6">
              Our website uses cookies and similar tracking technologies to enhance your experience. 
              We use both session cookies (which expire when you close your browser) and persistent 
              cookies (which remain on your device for a specified period).
            </p>
            <p className="text-gray-700 mb-6">
              You can control cookies through your browser settings, but please note that disabling 
              cookies may affect the functionality of our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-700 mb-6">
              We retain your personal information only for as long as necessary to fulfill the purposes 
              for which it was collected, comply with legal obligations, resolve disputes, and enforce 
              our agreements. Specific retention periods depend on the type of information and the 
              purpose for which it was collected.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our services are not directed to children under the age of 13, and we do not knowingly 
              collect personal information from children under 13. If we learn that we have collected 
              personal information from a child under 13, we will delete that information promptly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">International Transfers</h2>
            <p className="text-gray-700 mb-6">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure that such transfers are made in accordance with applicable data protection laws 
              and that appropriate safeguards are in place.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any material 
              changes by posting the new Privacy Policy on our website and updating the "Last updated" 
              date at the top of this policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@smallai.com</p>
              <p className="text-gray-700 mb-2"><strong>Phone:</strong> (555) 123-4567</p>
              <p className="text-gray-700"><strong>Address:</strong> Small AI Privacy Officer, [Business Address]</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
