import Footer from "../../components/footer/footer";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">PRIVACY POLICY</h1>
          <p className="text-gray-600 font-semibold">Last updated October 15, 2025</p>
        </div>

        {/* Table of Contents */}
        <div id="toc" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">TABLE OF CONTENTS</h2>
          <ol className="list-decimal list-inside space-y-2 text-blue-600">
            <li><a href="#1" className="hover:underline">Introduction</a></li>
            <li><a href="#2" className="hover:underline">What Information Do We Collect?</a></li>
            <li><a href="#3" className="hover:underline">When And With Whom Do We Share Your Personal Information?</a></li>
            <li><a href="#4" className="hover:underline">How Long Do We Keep Your Information?</a></li>
            <li><a href="#5" className="hover:underline">How Do We Keep Your Information Safe?</a></li>
            <li><a href="#6" className="hover:underline">Do We Make Updates To This Notice?</a></li>
            <li><a href="#7" className="hover:underline">How Can You Contact Us About This Notice?</a></li>
          </ol>
        </div>

        {/* Section 1: What Information Do We Collect */}
        <section id="1" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">1. Introduction</h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Korvbox ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not proceed.
          </p>
        </section>

        {/* Section 2: What Information Do We Collect */}
        <section id="2" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">2. What Information Do We Collect?</h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            We only collect transactions data for deposits and withdrawals made to each vault by a user. This includes information about the transaction amount, vault supplied to, user's wallet address , the date, and associated user ID. This information is collected to measure platform metrics and improve our services. We do not collect personal information such as names, email addresses, or payment details.
          </p>
        </section>

        {/* Section 3: When and With Whom Do We Share */}
        <section id="3" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">3. When And With Whom Do We Share Your Transactional Information?</h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            We may need to share your transactions information in the following situations:
          </p>

          <ul className="list-disc list-inside mb-4 ml-4 text-gray-700 space-y-2">
            <li>
              <strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during 
              negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business 
              to another company.
            </li>
          </ul>
        </section>

        {/* Section 4: How Long Do We Keep Your Information */}
        <section id="4" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">4. How Long Do We Keep Your Information?</h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            We will only keep your transactions information for as long as you keep your supplied assets inside a vault, once a vault is fully withdrawn, we delete all associated transactions data instantly.
          </p>
        </section>

        {/* Section 5: How Do We Keep Your Information Safe */}
        <section id="5" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">5. How Do We Keep Your Information Safe?</h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            We have implemented appropriate and reasonable technical and organisational security measures designed to protect the 
            security of any transactional information we process. However, despite our safeguards and efforts to secure your information, 
            no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so 
            we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to 
            defeat our security and improperly collect, access, steal, or modify your information.
          </p>
        </section>

        {/* Section 6: Do We Make Updates to This Notice */}
        <section id="6" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">6. Do We Make Updates to This Notice?</h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            We may update this Privacy Notice from time to time. The updated version will be indicated by an updated 'Revised' date 
            at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by 
            prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this 
            Privacy Notice frequently to be informed of how we are protecting your information.
          </p>
        </section>

        {/* Section 7: How Can You Contact Us */}
        <section id="7" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">7. How Can You Contact Us About This Notice?</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            If you have questions or comments about this notice, you may email us at{' '}
            <a href="mailto:contact@korvlabs.io" className="text-blue-600 hover:underline">
              contact@korvlabs.io
            </a>{' '}
          </p>
        </section>
      </div>
      <Footer />  
    </>
  );
};
