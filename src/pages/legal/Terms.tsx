import Navbar from "../../components/navbar/navbar";

export default function Terms() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white dark:bg-[#15181A] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-[#15181A] dark:text-white mb-2">Terms of Service</h1>
        <p className="text-[#6F7174] dark:text-gray-400 mb-8">Last updated: October 1, 2025</p>

        <div className="space-y-6 text-[#15181A] dark:text-white">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-[#15181A] dark:text-white">1. Acceptance of Terms</h2>
            <p className="text-[#6F7174] dark:text-gray-400 leading-relaxed">
              By accessing and using this platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-[#15181A] dark:text-white">2. Use License</h2>
            <p className="text-[#6F7174] dark:text-gray-400 leading-relaxed mb-3">
              Permission is granted to temporarily use the services on our platform for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#6F7174] dark:text-gray-400 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the platform</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-[#15181A] dark:text-white">3. Disclaimer</h2>
            <p className="text-[#6F7174] dark:text-gray-400 leading-relaxed">
              The materials on our platform are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-[#15181A] dark:text-white">4. Limitations</h2>
            <p className="text-[#6F7174] dark:text-gray-400 leading-relaxed">
              In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our platform, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-[#15181A] dark:text-white">5. Accuracy of Materials</h2>
            <p className="text-[#6F7174] dark:text-gray-400 leading-relaxed">
              The materials appearing on our platform could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our platform are accurate, complete, or current. We may make changes to the materials contained on our platform at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-[#15181A] dark:text-white">6. Links</h2>
            <p className="text-[#6F7174] dark:text-gray-400 leading-relaxed">
              We have not reviewed all of the sites linked to our platform and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-[#15181A] dark:text-white">7. Modifications</h2>
            <p className="text-[#6F7174] dark:text-gray-400 leading-relaxed">
              We may revise these terms of service for our platform at any time without notice. By using this platform you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-[#15181A] dark:text-white">8. Governing Law</h2>
            <p className="text-[#6F7174] dark:text-gray-400 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-[#15181A] dark:text-white">9. Contact Information</h2>
            <p className="text-[#6F7174] dark:text-gray-400 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at support@korvlabs.com.
            </p>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-300 dark:border-gray-600">
          <p className="text-sm text-[#6F7174] dark:text-gray-400 text-center">
            By using our platform, you acknowledge that you have read and understood these Terms of Service.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}