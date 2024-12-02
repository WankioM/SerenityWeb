import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[rgba(26,26,26,0.2)] border border-black/10 rounded-lg">
          <div className="p-8">
            <div className="space-y-8 text-white/90">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
                <div className="text-white/60 text-sm">
                  <p>Effective Date: 29/11/2024</p>
                  <p>Last Updated: 29/11/2024</p>
                </div>
              </div>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Introduction</h2>
                <p className="text-white/80">
                  Welcome to Serenity ("we," "us," or "our"), a mobile application developed and owned by DV Tech Ventures Co. ("Company"). 
                  We respect your privacy and are committed to protecting it through compliance with this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Information We Collect</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">1. Personal Information</h3>
                    <p className="text-white/80 mb-2">When you interact with Serenity, we may collect information that directly or indirectly identifies you. This includes:</p>
                    <ul className="list-disc pl-6 text-white/80 space-y-1">
                      <li>Name: For personalization and account management</li>
                      <li>Email Address: For communication, account recovery, and support</li>
                      <li>Phone Number: For authentication, account verification, and communication</li>
                      <li>Profile Picture: If you upload one, to enhance your account experience</li>
                      <li>Payment Information: To process in-app purchases securely</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">2. Non-Personal Information</h3>
                    <p className="text-white/80">We collect data that cannot identify you directly, such as:</p>
                    <ul className="list-disc pl-6 text-white/80 space-y-1">
                      <li>Device Information: Model, operating system, and unique device identifiers</li>
                      <li>Usage Data: Features accessed, session duration, error logs, and in-app activity</li>
                      <li>Location Data: To provide location-specific features if you grant permission</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
                <p className="text-white/80">
                  If you have questions, concerns, or requests regarding this Privacy Policy, you can reach us at:
                </p>
                <div className="mt-2 text-white/80">
                  <p>DV Tech Ventures Co.</p>
                  <p>Email: hello@dvtechventures.com</p>
                </div>
              </section>

              <div className="text-center text-white/60 text-sm pt-8 border-t border-white/10">
                By using Serenity, you confirm that you have read, understood, and agree to this Privacy Policy.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;