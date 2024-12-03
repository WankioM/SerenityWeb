import React from 'react';

const TermsAndPolicy = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[rgba(26,26,26,0.2)] border border-black/10 rounded-lg">
          <div className="p-8">
            <div className="space-y-8 text-white/90">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">Serenity Mobile Application</h1>
                <h2 className="text-2xl font-semibold text-white mb-4">Terms of Use, User Policy, and Privacy Policy</h2>
                <div className="text-white/60 text-sm">
                  <p>Effective Date: 29/11/2024</p>
                  <p>Last Updated: 29/11/2024</p>
                </div>
              </div>

              {/* 1. Terms of Use */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">1. Terms of Use</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">1.1 Introduction</h3>
                    <p className="text-white/80">
                      Welcome to Serenity, a mobile application owned and operated by DV Tech Ventures Co. ("Company," "we," "us," or "our"). 
                      These Terms of Use ("Terms") govern your access to and use of the Serenity app, including all features, functionalities, 
                      and services provided through the application. By downloading, accessing, or using Serenity, you agree to these Terms. 
                      If you do not agree, please refrain from using the application.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">1.2 Eligibility</h3>
                    <p className="text-white/80">To use Serenity, you must meet the following conditions:</p>
                    <ul className="list-disc pl-6 text-white/80 space-y-2 mt-2">
                      <li>Be at least 13 years of age or the minimum age required by the laws of your jurisdiction.</li>
                      <li>Provide accurate, complete, and up-to-date information when registering an account.</li>
                      <li>Have the legal authority to agree to these Terms, whether as an individual or a representative of an entity.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">1.3 Changes to the Terms</h3>
                    <p className="text-white/80">
                      The Company reserves the right to modify these Terms at any time without prior notice. Any updates will be posted 
                      within the application, and continued use constitutes acceptance of the revised Terms.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">1.4 User Responsibilities</h3>
                    <p className="text-white/80">Users are expected to:</p>
                    <ul className="list-disc pl-6 text-white/80 space-y-2 mt-2">
                      <li>Use the app solely for personal and lawful purposes.</li>
                      <li>Avoid engaging in prohibited activities, including but not limited to:
                        <ul className="list-disc pl-6 space-y-1 mt-2">
                          <li>Hacking or unauthorized access.</li>
                          <li>Distribution of malicious code or software.</li>
                          <li>Uploading offensive, defamatory, or illegal content.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">1.5 Intellectual Property</h3>
                    <p className="text-white/80">
                      All content within Serenity, including text, images, logos, code, and other materials, is the intellectual property 
                      of DV Tech Ventures Co. You are prohibited from copying, distributing, or modifying any content without prior written consent.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">1.6 Termination</h3>
                    <p className="text-white/80">
                      The Company may suspend or terminate your account if you violate these Terms or engage in any activities deemed harmful 
                      to the platform or its users. Termination does not waive any rights or remedies available to the Company.
                    </p>
                  </div>
                </div>
              </section>

              {/* 2. User Policy */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">2. User Policy</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">2.1 Community Standards</h3>
                    <p className="text-white/80">Serenity aims to foster a supportive and respectful community. As a user, you agree to:</p>
                    <ul className="list-disc pl-6 text-white/80 space-y-2 mt-2">
                      <li>Respect the privacy and dignity of other users.</li>
                      <li>Avoid engaging in harassment, abuse, or any form of discrimination.</li>
                      <li>Use features like journaling and community forums in good faith.</li>
                    </ul>
                    <p className="text-white/80 mt-2">
                      Violations of these standards may result in account suspension or permanent removal from the platform.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">2.2 User-Generated Content</h3>
                    <p className="text-white/80">Users may submit or upload content (e.g., journal entries, comments, or feedback). By doing so, you:</p>
                    <ul className="list-disc pl-6 text-white/80 space-y-2 mt-2">
                      <li>Grant the Company a non-exclusive, royalty-free license to use, display, and adapt your content for platform purposes.</li>
                      <li>Agree not to upload content that is illegal, harmful, or violates third-party rights.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">2.3 Prohibited Conduct</h3>
                    <p className="text-white/80">You agree not to:</p>
                    <ul className="list-disc pl-6 text-white/80 space-y-2 mt-2">
                      <li>Impersonate others or misrepresent your identity.</li>
                      <li>Use automated tools (e.g., bots) to access or interact with the application.</li>
                      <li>Exploit the app for commercial purposes without prior approval.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">2.4 Reporting Misconduct</h3>
                    <p className="text-white/80">
                      Users can report inappropriate behavior or content by contacting hello@dvtechventures.com. 
                      The Company will investigate and take appropriate action.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">2.5 Accountability for Account Security</h3>
                    <p className="text-white/80">
                      You are responsible for safeguarding your account credentials. Notify the Company immediately if you suspect unauthorized access.
                    </p>
                  </div>
                </div>
              </section>

              {/* 3. Privacy Policy */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">3. Privacy Policy</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">3.1 Introduction</h3>
                    <p className="text-white/80">
                      This Privacy Policy explains how Serenity collects, uses, and safeguards your personal data. 
                      By using Serenity, you consent to the practices described herein. If you do not agree, discontinue use of the application.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">3.2 Data Collection</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">3.2.1 Personal Information</h4>
                        <p className="text-white/80">We collect personal data you provide directly, such as:</p>
                        <ul className="list-disc pl-6 text-white/80 space-y-2 mt-2">
                          <li>Name and Contact Information: For account registration and communication.</li>
                          <li>Payment Information: To facilitate transactions, processed securely by third-party providers like Stripe.</li>
                          <li>Profile Picture: Optional, for personalization.</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">3.2.2 Non-Personal Information</h4>
                        <p className="text-white/80">Automatically collected data includes:</p>
                        <ul className="list-disc pl-6 text-white/80 space-y-2 mt-2">
                          <li>Device Details: Model, operating system, browser type.</li>
                          <li>Usage Data: Feature interactions, session durations, crash logs.</li>
                          <li>Location Information: Only collected with explicit permission to provide location-based features.</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">3.2.3 Sensitive Data</h4>
                        <p className="text-white/80">
                          Sensitive data, such as journaling entries or recovery progress, is encrypted and only accessible to you or 
                          authorized personnel under strict confidentiality protocols.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">3.2.4 Cookies and Tracking Technologies</h4>
                        <p className="text-white/80">We use cookies and similar technologies to:</p>
                        <ul className="list-disc pl-6 text-white/80 space-y-2 mt-2">
                          <li>Enhance app performance.</li>
                          <li>Track usage patterns.</li>
                          <li>Save user preferences.</li>
                        </ul>
                        <p className="text-white/80 mt-2">You can manage cookies via your device settings.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">3.3 Data Usage</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">3.3.1 Primary Uses</h4>
                        <p className="text-white/80">The data we collect is used to:</p>
                        <ul className="list-disc pl-6 text-white/80 space-y-2 mt-2">
                          <li>Deliver app features and maintain functionality.</li>
                          <li>Provide insights, reminders, and progress tracking.</li>
                          <li>Process secure transactions.</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">3.3.2 Communication</h4>
                        <p className="text-white/80">We use your contact information to send:</p>
                        <ul className="list-disc pl-6 text-white/80 space-y-2 mt-2">
                          <li>Account updates.</li>
                          <li>Security alerts.</li>
                          <li>Marketing and promotional content (with your consent).</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">3.4 Data Sharing</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">3.4.1 With Service Providers</h4>
                        <p className="text-white/80">
                          We share data with third-party vendors (e.g., AWS, Firebase) strictly for service delivery.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">3.4.2 For Legal Compliance</h4>
                        <p className="text-white/80">Data may be disclosed:</p>
                        <ul className="list-disc pl-6 text-white/80 space-y-2 mt-2">
                          <li>To comply with legal obligations.</li>
                          <li>To protect users or the Company in cases of fraud or security threats.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">3.5 Data Security</h3>
                    <p className="text-white/80">
                      Serenity employs advanced encryption, access controls, and monitoring to protect your data. 
                      Despite these measures, no system is entirely secure, and we encourage users to practice caution.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">3.6 User Rights</h3>
                    <p className="text-white/80">You have the right to:</p>
                    <ul className="list-disc pl-6 text-white/80 space-y-2 mt-2">
                      <li>Access: Request a copy of your data.</li>
                      <li>Update: Correct inaccuracies via account settings.</li>
                      <li>Delete: Request data deletion by contacting hello@dvtechventures.com.</li>
                      <li>Portability: Obtain data in a machine-readable format.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">3.7 Children's Privacy</h3>
                    <p className="text-white/80">
                      Serenity is not intended for children under 13. If data from a minor is identified, it will be deleted promptly.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">3.8 International Data Transfers</h3>
                    <p className="text-white/80">
                      If you access Serenity outside [jurisdiction], you agree that your data may be transferred to and processed 
                      in accordance with this Policy.
                    </p>
                  </div>
                </div>
              </section>

              {/* 4. General Provisions */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">4. General Provisions</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">4.1 Governing Law</h3>
                    <p className="text-white/80">
                      These Terms, User Policy, and Privacy Policy are governed by the laws of [jurisdiction]. 
                      Any disputes will be resolved exclusively in [jurisdiction's courts].
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">4.2 Contact Information</h3>
                    <p className="text-white/80">For inquiries or concerns, please reach out:</p>
                    <p className="text-white/80 mt-2">Email: hello@dvtechventures.com</p>
                    <p className="text-white/80">Mailing Address: DV Tech Ventures Co., [Your Address].</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">4.3 Changes to This Document</h3>
                    <p className="text-white/80">
                      The Company reserves the right to update this document. Users will be notified of significant changes 
                      via in-app alerts or email. Continued use constitutes acceptance.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndPolicy;

