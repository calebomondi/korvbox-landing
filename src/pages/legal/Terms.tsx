import Footer from "../../components/footer/footer";

export default function Terms () {
  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">TERMS OF USE</h1>
          <p className="text-gray-600 font-semibold">Last updated October 15, 2025</p>
        </div>

        {/* Table of Contents */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">TABLE OF CONTENTS</h2>
          <ol className="list-decimal list-inside space-y-2 text-blue-600">
            <li><a href="#1" className="hover:underline">Acceptance of Terms</a></li>
            <li><a href="#2" className="hover:underline">User Representations</a></li>
            <li><a href="#3" className="hover:underline">User Data</a></li>
            <li><a href="#4" className="hover:underline">Prohibited Activities</a></li>
            <li><a href="#5" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#6" className="hover:underline">Interruptions</a></li>
            <li><a href="#7" className="hover:underline">Dispute Resolution</a></li>
            <li><a href="#8" className="hover:underline">Corrections</a></li>
            <li><a href="#9" className="hover:underline">Contact Us</a></li>
          </ol>
        </div>

        {/* Section 1: Our Services */}
        <section id="1" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">1. Acceptance of Terms</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Welcome to Korvbox. By accessing or using our platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site. These Terms of Service apply to all users of the platform.
          </p>
        </section>

        {/* Section 2: User Representations */}
        <section id="2" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">2. User Representations</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            By using the Services, you represent and warrant that: (1) you have the legal capacity and you agree to 
            comply with these Legal Terms; (2) you are not under the age of 18; (3) you are not a minor in the 
            jurisdiction in which you reside, or if a minor, you have received parental permission to use the Services; 
            (4) you will not access the Services through automated or non-human means, whether through a bot, script or 
            otherwise; (5) you will not use the Services for any illegal or unauthorised purpose; and (6) your use of 
            the Services will not violate any applicable law or regulation.
          </p>
        </section>

        {/* Section 3: User Data */}
        <section id="3" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">3. User Data</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            We will maintain all transactions data for deposits and withdrawals made to each Morpho vault for the purpose of measuring platform metrics. 
          </p>
        </section>

        {/* Section 4: Prohibited Activities */}
        <section id="4" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">4. Prohibited Activities</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            You may not access or use the Services for any purpose other than that for which we make the Services available. 
            The Services may not be used in connection with any commercial endeavours except those that are specifically 
            endorsed or approved by us.
          </p>
        </section>

        {/* Section 5: Privacy Policy */}
        <section id="5" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">5. Privacy Policy</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            We care about data privacy and security. Please review our Privacy Policy:{' '}
            <strong>
              <a href="http://www.korvbox.xyz/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                http://www.korvbox.xyz/privacy
              </a>
            </strong>
            . By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. 
            Please be advised the Services are hosted in Kenya. If you access the Services from any other region of the world 
            with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable 
            laws in Kenya, then through your continued use of the Services, you are transferring your data to Kenya, and you 
            expressly consent to have your data transferred to and processed in Kenya.
          </p>
        </section>

        {/* Section 11: Modifications and Interruptions */}
        <section id="6" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">11. Interruptions</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other 
            problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. 
            We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any 
            time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, 
            or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of 
            the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services 
            or to supply any corrections, updates, or releases in connection therewith.
          </p>
        </section>

        {/* Section 7: Dispute Resolution */}
        <section id="7" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">7. Dispute Resolution</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            You agree to irrevocably submit all disputes related to these Legal Terms or the legal relationship established 
            by these Legal Terms to the jurisdiction of the Kenya courts. KorvLabs shall also maintain the right to bring 
            proceedings as to the substance of the matter in the courts of the country where you reside or, if these Legal 
            Terms are entered into in the course of your trade or profession, the state of your principal place of business.
          </p>
        </section>

        {/* Section 8: Corrections */}
        <section id="8" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">8. Corrections</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including 
            descriptions, availability, and various other information. We reserve the right to correct any errors, 
            inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
          </p>
        </section>

        {/* Section 9: Contact Us */}
        <section id="9" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">9. Contact Us</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            In order to resolve a complaint regarding the Services or to receive further information regarding use of the 
            Services, please contact us at:
          </p>
          <div className="mb-4 text-gray-700 leading-relaxed">
            <p>
              <a href="mailto:contact@korvlabs.io" className="text-blue-600 hover:underline">
                contact@korvlabs.io
              </a>
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
 