//dark:bg-[#222529]/30 bg-[#C4DAFF]/20

export default function Benefits() {
  return (
    <section className="dark:bg-[#222529]/30 bg-[#C4DAFF]/20">
      <div className="max-w-8xl mx-auto md:px-36 px-10 md:py-10 py-20 text-left">
        {/* Heading */}
        <h2 className="font-manrope text-3xl md:text-4xl text-[#15181A] dark:text-white">
          Asset growth on autopilot
        </h2>
        <p className="font-opensans mt-4 dark:text-gray-400 text-gray-700">
          Transform your idle stablecoins into steady returns with zero effort. 
          Perfect for crypto holders who want passive growth without the complexity of traditional DeFi.
        </p>

        {/* Features */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="bg-[#FFFFFF] dark:bg-[#15181A] p-8 rounded-sm text-left">
            <div className="mb-4">
              {/* Replace with actual icon */}
              <div className="w-16 h-16 flex items-center justify-center">
                <img src="yield.png" alt="Yield" />
              </div>
            </div>
            <h3 className="font-dmsans text-2xl text-[#15181A] dark:text-white">
              Enjoy competitive yields
            </h3>
            <p className="font-inter mt-2 dark:text-gray-400 text-gray-700">
              Earn up to 10% APY. Your funds work harder while staying stable and secure.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#FFFFFF] dark:bg-[#15181A] p-8 rounded-sm text-left">
            <div className="mb-4">
              {/* Replace with actual icon */}
              <div className="w-16 h-16 flex items-center justify-center">
                <img src="availability.png" alt="Availability" />
              </div>
            </div>
            <h3 className="font-dmsans text-2xl text-[#15181A] dark:text-white">
              Access funds anytime
            </h3>
            <p className="font-inter mt-2 dark:text-gray-400 text-gray-700">
              No lockup periods, no penalties, full access to your funds 24/7. Withdraw whenever you need it.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#FFFFFF] dark:bg-[#15181A] p-8 rounded-sm text-left">
            <div className="mb-4">
              {/* Replace with actual icon */}
              <div className="w-16 h-16 flex items-center justify-center">
                <img src="zero.png" alt="Zero experience" />
              </div>
            </div>
            <h3 className="font-dmsans text-2xl text-[#15181A] dark:text-white">
              Zero management needed
            </h3>
            <p className="font-inter mt-2 dark:text-gray-400 text-gray-700">
              No DeFi experience required. We automate the best yield strategies for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

