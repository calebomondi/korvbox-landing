//

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">PRIVACY POLICY</h1>
        <p className="text-gray-600 font-semibold">Last updated October 15, 2025</p>
      </div>

      {/* Introduction */}
      <div className="mb-8">
        <p className="mb-4 text-gray-700 leading-relaxed">
          This Privacy Notice for <strong>KorvLabs</strong> ('<strong>we</strong>', '<strong>us</strong>', or '<strong>our</strong>'), 
          describes how and why we might access, collect, store, use, and/or share ('<strong>process</strong>') your personal 
          information when you use our services ('<strong>Services</strong>'), including when you:
        </p>
        <ul className="list-disc list-inside mb-4 ml-4 text-gray-700 space-y-2">
          <li>
            Visit our website at{' '}
            <a href="http://www.korvbox.xyz" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              http://www.korvbox.xyz
            </a>{' '}
            or any website of ours that links to this Privacy Notice
          </li>
          <li>Engage with us in other related ways, including any sales, marketing, or events</li>
        </ul>
        <p className="mb-4 text-gray-700 leading-relaxed">
          <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights 
          and choices. We are responsible for making decisions about how your personal information is processed. If you do 
          not agree with our policies and practices, please do not use our Services. If you still have any questions or 
          concerns, please contact us at{' '}
          <a href="mailto:privacy@korvlabs.io" className="text-blue-600 hover:underline">
            privacy@korvlabs.io
          </a>.
        </p>
      </div>

      {/* Summary of Key Points */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">SUMMARY OF KEY POINTS</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          <strong><em>This summary provides key points from our Privacy Notice, but you can find out more details about any 
          of these topics by clicking the link following each key point or by using our </em></strong>
          <a href="#toc" className="text-blue-600 hover:underline">
            <strong><em>table of contents</em></strong>
          </a>
          <strong><em> below to find the section you are looking for.</em></strong>
        </p>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may 
            process personal information depending on how you interact with us and the Services, the choices you make, and 
            the products and features you use. Learn more about{' '}
            <a href="#personalinfo" className="text-blue-600 hover:underline">
              personal information you disclose to us
            </a>.
          </p>

          <p>
            <strong>Do we process any sensitive personal information?</strong> Some of the information may be considered 
            'special' or 'sensitive' in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, 
            and religious beliefs. We do not process sensitive personal information.
          </p>

          <p>
            <strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.
          </p>

          <p>
            <strong>How do we process your information?</strong> We process your information to provide, improve, and administer 
            our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process 
            your information for other purposes with your consent. We process your information only when we have a valid legal 
            reason to do so. Learn more about{' '}
            <a href="#infouse" className="text-blue-600 hover:underline">
              how we process your information
            </a>.
          </p>

          <p>
            <strong>In what situations and with which parties do we share personal information?</strong> We may share information 
            in specific situations and with specific third parties. Learn more about{' '}
            <a href="#whoshare" className="text-blue-600 hover:underline">
              when and with whom we share your personal information
            </a>.
          </p>

          <p>
            <strong>How do we keep your information safe?</strong> We have adequate organisational and technical processes and 
            procedures in place to protect your personal information. However, no electronic transmission over the internet or 
            information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, 
            cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, 
            access, steal, or modify your information. Learn more about{' '}
            <a href="#infosafe" className="text-blue-600 hover:underline">
              how we keep your information safe
            </a>.
          </p>

          <p>
            <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law 
            may mean you have certain rights regarding your personal information. Learn more about{' '}
            <a href="#privacyrights" className="text-blue-600 hover:underline">
              your privacy rights
            </a>.
          </p>

          <p>
            <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a{' '}
            <a 
              href="https://app.termly.io/dsar/e811a54a-a6ce-4e1d-8e76-cd3ad1e4d0e6" 
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              data subject access request
            </a>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
          </p>

          <p>
            Want to learn more about what we do with any information we collect?{' '}
            <a href="#toc" className="text-blue-600 hover:underline">
              Review the Privacy Notice in full
            </a>.
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div id="toc" className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">TABLE OF CONTENTS</h2>
        <ol className="list-decimal list-inside space-y-2 text-blue-600">
          <li><a href="#infocollect" className="hover:underline">WHAT INFORMATION DO WE COLLECT?</a></li>
          <li><a href="#infouse" className="hover:underline">HOW DO WE PROCESS YOUR INFORMATION?</a></li>
          <li><a href="#whoshare" className="hover:underline">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></li>
          <li><a href="#inforetain" className="hover:underline">HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
          <li><a href="#infosafe" className="hover:underline">HOW DO WE KEEP YOUR INFORMATION SAFE?</a></li>
          <li><a href="#infominors" className="hover:underline">DO WE COLLECT INFORMATION FROM MINORS?</a></li>
          <li><a href="#privacyrights" className="hover:underline">WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
          <li><a href="#DNT" className="hover:underline">CONTROLS FOR DO-NOT-TRACK FEATURES</a></li>
          <li><a href="#policyupdates" className="hover:underline">DO WE MAKE UPDATES TO THIS NOTICE?</a></li>
          <li><a href="#contact" className="hover:underline">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></li>
          <li><a href="#request" className="hover:underline">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></li>
        </ol>
      </div>

      {/* Section 1: What Information Do We Collect */}
      <section id="infocollect" className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">1. WHAT INFORMATION DO WE COLLECT?</h2>
        
        <h3 id="personalinfo" className="text-xl font-bold mb-3 text-gray-700">Personal information you disclose to us</h3>
        <p className="mb-4 text-gray-700 leading-relaxed">
          <strong><em>In Short:</em></strong> <em>We collect personal information that you provide to us.</em>
        </p>

        <p className="mb-4 text-gray-700 leading-relaxed">
          We collect personal information that you voluntarily provide to us when you express an interest in obtaining 
          information about us or our products and Services, when you participate in activities on the Services, or 
          otherwise when you contact us.
        </p>

        <p className="mb-4 text-gray-700 leading-relaxed">
          <strong>Sensitive Information.</strong> We do not process sensitive information.
        </p>

        <p className="mb-4 text-gray-700 leading-relaxed">
          All personal information that you provide to us must be true, complete, and accurate, and you must notify us of 
          any changes to such personal information.
        </p>
      </section>

      {/* Section 2: How Do We Process Your Information */}
      <section id="infouse" className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          <strong><em>In Short:</em></strong> <em>We process your information to provide, improve, and administer our Services, 
          communicate with you, for security and fraud prevention, and to comply with law. We may also process your information 
          for other purposes with your consent.</em>
        </p>

        <p className="mb-4 text-gray-700 leading-relaxed">
          <strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, 
          including:</strong>
        </p>

        <ul className="list-disc list-inside mb-4 ml-4 text-gray-700 space-y-2">
          <li>
            <strong>To identify usage trends.</strong> We may process information about how you use our Services to better 
            understand how they are being used so we can improve them.
          </li>
        </ul>
      </section>

      {/* Section 3: When and With Whom Do We Share */}
      <section id="whoshare" className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          <strong><em>In Short:</em></strong> <em>We may share information in specific situations described in this section 
          and/or with the following third parties.</em>
        </p>

        <p className="mb-4 text-gray-700 leading-relaxed">
          We may need to share your personal information in the following situations:
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
      <section id="inforetain" className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">4. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          <strong><em>In Short:</em></strong> <em>We keep your information for as long as necessary to fulfil the purposes 
          outlined in this Privacy Notice unless otherwise required by law.</em>
        </p>

        <p className="mb-4 text-gray-700 leading-relaxed">
          We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy 
          Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal 
          requirements). No purpose in this notice will require us keeping your personal information for longer than until 
          assets are fully withdrawn from a vault.
        </p>

        <p className="mb-4 text-gray-700 leading-relaxed">
          When we have no ongoing legitimate business need to process your personal information, we will either delete or 
          anonymise such information, or, if this is not possible (for example, because your personal information has been 
          stored in backup archives), then we will securely store your personal information and isolate it from any further 
          processing until deletion is possible.
        </p>
      </section>

      {/* Section 5: How Do We Keep Your Information Safe */}
      <section id="infosafe" className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">5. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          <strong><em>In Short:</em></strong> <em>We aim to protect your personal information through a system of organisational 
          and technical security measures.</em>
        </p>

        <p className="mb-4 text-gray-700 leading-relaxed">
          We have implemented appropriate and reasonable technical and organisational security measures designed to protect the 
          security of any personal information we process. However, despite our safeguards and efforts to secure your information, 
          no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so 
          we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to 
          defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to 
          protect your personal information, transmission of personal information to and from our Services is at your own risk. 
          You should only access the Services within a secure environment.
        </p>
      </section>

      {/* Section 6: Do We Collect Information From Minors */}
      <section id="infominors" className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">6. DO WE COLLECT INFORMATION FROM MINORS?</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          <strong><em>In Short:</em></strong> <em>We do not knowingly collect data from or market to children under 18 years 
          of age.</em>
        </p>

        <p className="mb-4 text-gray-700 leading-relaxed">
          We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell 
          such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or 
          guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information 
          from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to 
          promptly delete such data from our records. If you become aware of any data we may have collected from children under 
          age 18, please contact us at{' '}
          <a href="mailto:contact@korvlabs.io" className="text-blue-600 hover:underline">
            contact@korvlabs.io
          </a>.
        </p>
      </section>

      {/* Section 7: What Are Your Privacy Rights */}
      <section id="privacyrights" className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">7. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          <strong><em>In Short:</em></strong> <em>You may review, change, or terminate your account at any time, depending on 
          your country, province, or state of residence.</em>
        </p>

        <h3 id="withdrawconsent" className="text-lg font-bold mb-3 text-gray-700">Withdrawing your consent:</h3>
        <p className="mb-4 text-gray-700 leading-relaxed">
          If we are relying on your consent to process your personal information, which may be express and/or implied consent 
          depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent 
          at any time by contacting us by using the contact details provided in the section{' '}
          <a href="#contact" className="text-blue-600 hover:underline">
            'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?'
          </a>{' '}
          below.
        </p>

        <p className="mb-4 text-gray-700 leading-relaxed">
          However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when 
          applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful 
          processing grounds other than consent.
        </p>

        <p className="mb-4 text-gray-700 leading-relaxed">
          If you have questions or comments about your privacy rights, you may email us at{' '}
          <a href="mailto:privacy@korvlabs.io" className="text-blue-600 hover:underline">
            privacy@korvlabs.io
          </a>.
        </p>
      </section>

      {/* Section 8: Controls for Do-Not-Track Features */}
      <section id="DNT" className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">8. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or 
          setting you can activate to signal your privacy preference not to have data about your online browsing activities 
          monitored and collected. At this stage, no uniform technology standard for recognising and implementing DNT signals has 
          been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically 
          communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in 
          the future, we will inform you about that practice in a revised version of this Privacy Notice.
        </p>
      </section>

      {/* Section 9: Do We Make Updates to This Notice */}
      <section id="policyupdates" className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">9. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          <strong><em>In Short:</em></strong> <em>Yes, we will update this notice as necessary to stay compliant with relevant laws.</em>
        </p>

        <p className="mb-4 text-gray-700 leading-relaxed">
          We may update this Privacy Notice from time to time. The updated version will be indicated by an updated 'Revised' date 
          at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by 
          prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this 
          Privacy Notice frequently to be informed of how we are protecting your information.
        </p>
      </section>

      {/* Section 10: How Can You Contact Us */}
      <section id="contact" className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          If you have questions or comments about this notice, you may email us at{' '}
          <a href="mailto:contact@korvlabs.io" className="text-blue-600 hover:underline">
            contact@korvlabs.io
          </a>{' '}
          or contact us by post at:
        </p>
        <div className="mb-4 text-gray-700 leading-relaxed">
          <p className="font-bold">KorvLabs</p>
          <p>Kilimani Rd</p>
          <p>Nairobi City, Nairobi County 20100</p>
          <p>Kenya</p>
        </div>
      </section>

      {/* Section 11: How Can You Review, Update, or Delete Data */}
      <section id="request" className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Based on the applicable laws of your country, you may have the right to request access to the personal information we 
          collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You 
          may also have the right to withdraw your consent to our processing of your personal information. These rights may be 
          limited in some circumstances by applicable law. To request to review, update, or delete your personal information, 
          please fill out and submit a{' '}
          <a 
            href="https://app.termly.io/dsar/e811a54a-a6ce-4e1d-8e76-cd3ad1e4d0e6" 
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            data subject access request
          </a>.
        </p>
      </section>
    </div>
  );
};
