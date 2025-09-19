
export default function FinalCall() {
  return (
    <section className="dark:bg-[#222529]/30 bg-[#C4DAFF]/20">
        <div className="ax-w-8xl mx-auto md:px-36 px-10 md:py-10 py-20">
          <h1 className="font-manrope text-3xl md:text-4xl text-[#15181A] dark:text-white text-center">
            Zero Trading
          </h1>
          <p className="font-opensans mt-4 dark:text-gray-400 text-[#6F7174] text-center">
            We don't 'trade' for you, we amplify your reserves through yield earning from lending.
          </p>

          {/* Buttons */}
          <div className="flex gap-3 mt-6 justify-center">
            <button className="font-opensans dark:bg-[#383B3E] bg-[#2973FF] text-white hover:scale-90 hover:cursor-pointer transition-all duration-300 px-5 py-2 rounded-full">
              Start Earning
            </button>
          </div>
        </div>
    </section>
  )
}
