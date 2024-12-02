import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[rgba(26,26,26,0.2)] border border-black/10 rounded-lg">
          <div className="p-8">
            <div className="space-y-8 text-white/90">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
                <div className="text-white/60 text-sm">
                  <p>Effective Date: 29/11/2024</p>
                  <p>Last Updated: 29/11/2024</p>
                </div>
              </div>

              {/* Introduction */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Introduction</h2>
                <p className="text-white/80">
                  Welcome to Serenity ("we," "us," or "our"), a mobile application developed and owned by DV Tech Ventures Co. ("Company"). We respect your privacy and are committed to protecting it through compliance with this Privacy Policy. This Policy explains:
                </p>
                <ul className="list-disc pl-6 text-white/80 mt-2">
                  <li>The types of information we collect from you.</li>
                  <li>How we use and share that information.</li>
                  <li>How we secure your information.</li>
                  <li>Your rights and choices concerning your information.</li>
                </ul>
                <p className="text-white/80 mt-2">
                  By accessing or using Serenity, you agree to this Privacy Policy. If you do not agree with the terms, you should not access or use our application. This Privacy Policy is an integral part of our Terms and Conditions.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Information We Collect</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">1. Personal Information</h3>
                    <p className="text-white/80 mb-2">When you interact with Serenity, we may collect information that directly or indirectly identifies you. This includes:</p>
                    <ul className="list-disc pl-6 text-white/80 space-y-1">
                      <li>Name: For personalization and account management</li>
                      <li>Email Address: For communication, account recovery, and support</li>
                      <li>Phone Number: For authentication, account verification, and communication</li>
                      <li>Profile Picture: If you upload one, to enhance your account experience</li>
                      <li>Payment Information: To process in-app purchases securely. Payment data is collected and processed by third-party payment providers (e.g., Stripe)</li>
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

                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">3. Sensitive Data</h3>
                    <p className="text-white/80">
                      If applicable, certain features (e.g., journaling or recovery tracking) may collect sensitive personal information. 
                      This data is encrypted and only accessible to you or authorized personnel under strict confidentiality protocols.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">4. Cookies and Similar Technologies</h3>
                    <p className="text-white/80">We use cookies, beacons, and tracking technologies to:</p>
                    <ul className="list-disc pl-6 text-white/80 space-y-1">
                      <li>Improve user experience</li>
                      <li>Monitor app performance and usage trends</li>
                      <li>Remember preferences and settings</li>
                    </ul>
                    <p className="text-white/80 mt-2">
                      You can manage cookie preferences through your device or browser settings.
                    </p>
                  </div>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">How We Use Your Information</h2>
                <p className="text-white/80">We use the information we collect to:</p>
                <div className="space-y-4 mt-2">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">1. Provide and Maintain Services</h3>
                    <ul className="list-disc pl-6 text-white/80">
                      <li>Ensure app functionality and performance</li>
                      <li>Troubleshoot issues and address support inquiries</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">2. Enhance User Experience</h3>
                    <ul className="list-disc pl-6 text-white/80">
                      <li>Customize app content and recommendations</li>
                      <li>Provide insights, reminders, and progress tracking</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">3. Process Transactions</h3>
                    <ul className="list-disc pl-6 text-white/80">
                      <li>Facilitate secure payments for in-app purchases</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">4. Communicate with You</h3>
                    <ul className="list-disc pl-6 text-white/80">
                      <li>Send updates, notifications, security alerts, and promotional content</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Sharing of Information */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Sharing of Information</h2>
                <p className="text-white/80">We may share your information in specific circumstances:</p>
                <div className="space-y-4 mt-2">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">1. With Service Providers</h3>
                    <p className="text-white/80">We work with third-party vendors to provide services such as:</p>
                    <ul className="list-disc pl-6 text-white/80">
                      <li>Cloud storage and hosting (e.g., AWS, Firebase)</li>
                      <li>Payment processing (e.g., Stripe)</li>
                      <li>Customer support and analytics tools</li>
                    </ul>
                    <p className="text-white/80 mt-2">These service providers are bound by strict confidentiality agreements.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">2. For Legal Obligations</h3>
                    <p className="text-white/80">We may disclose information:</p>
                    <ul className="list-disc pl-6 text-white/80">
                      <li>To comply with legal obligations, subpoenas, or court orders</li>
                      <li>To protect the rights, safety, or property of users, Serenity, or others</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Your Rights and Choices */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Your Rights and Choices</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">1. Access and Update</h3>
                    <p className="text-white/80">You can view and update your personal information through your account settings.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">2. Data Portability</h3>
                    <p className="text-white/80">You may request a copy of your data in a machine-readable format.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">3. Data Deletion</h3>
                    <p className="text-white/80">
                      You can request deletion of your personal information by contacting us at hello@dvtechventures.com. 
                      Note that we may retain certain information for legal or operational reasons.
                    </p>
                  </div>
                </div>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Children's Privacy</h2>
                <p className="text-white/80">
                  Serenity is not intended for children under 13. If we become aware that we have inadvertently 
                  collected information from a child under 13, we will delete it promptly.
                </p>
              </section>

              {/* Contact Us */}
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

              {/* Footer */}
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