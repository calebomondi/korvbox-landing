// import { useState, useEffect } from "react";
// import { getPlatformStats } from "../../backend/apis";
// import type { Stats } from "../../types/index.types";

export default function Hero() {
  // const [stats, setStats] = useState<Stats | null>(null);

  // useEffect(() => {
  //   const fetchStats = async () => {
  //     try {
  //       const data = await getPlatformStats();
  //       if(data)
  //         setStats(data);
  //     } catch (error) {
  //       console.error("Error fetching platform stats:", error);
  //     }
  //   };

  //   fetchStats();
  // }, []);

  // Helper function to format numbers with commas
  // function addCommas(num: number): string {
  //   return num.toLocaleString("en-US");
  // }

  // // USD price (estimate)
  // const usdPrice = 0.9995;

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center md:-top-18 -top-16 md:-mb-18 -mb-16">
      {/* Container with reduced top padding */}
      <div className="max-w-8xl mx-auto lg:px-36 px-10 lg:py-5 py-20 flex flex-col lg:flex-row lg:items-center w-full">
        {/* Left Content */}
        <div className="flex-3">
          <h1 className="font-manrope text-3xl md:text-5xl leading-tight text-[#15181A] dark:text-white text-center lg:text-left">
            Earn stable returns <br /> on your digital assets
          </h1>
          <p className="font-inter dark:text-gray-400 text-gray-700 mt-4 text-xl text-center lg:text-left">
            Put your USDC to work and earn competitive yields and rewards
          </p>

          {/* Buttons */}
          <div className="flex gap-3 my-6 justify-center lg:justify-start">
            <button 
              className="font-opensans dark:bg-[#383B3E] bg-[#2973FF] text-white hover:scale-90 hover:cursor-pointer transition-all duration-300 px-5 py-2 rounded-full"
              onClick={
                () => window.open('https://app.korvbox.xyz/', '_blank')
              }
            >
              Start Earning
            </button>
          </div>

          {/* Stats */}
          {/* <div className="mt-10 flex flex-col sm:flex-row sm:gap-20 gap-6">
            <div className="flex flex-col">
              <p className="font-inter dark:text-gray-400 text-[#6F7174] text-sm text-center md:text-left">Total Deposits</p>
              <p className="font-opensans text-2xl md:text-3xl font-semibold text-[#15181A] dark:text-white text-center md:text-left">
                ${stats ? addCommas(Math.ceil((stats.total_amount_deposited * usdPrice) / 1e6)) : addCommas(0)}
              </p>
            </div>
          </div> */}
        </div>
        
        {/* Right Content */}
        <div className="flex-3 flex justify-center md:mt-0 mt-10 lg:justify-end items-center -z-10">
            <img 
              src="interest-rate.png" 
              alt="Blue Orb" 
              className="w-80 h-80 md:w-100 md:h-100 object-contain"
            />
        </div>

        <div className="absolute inset-x-0 -z-10 bottom-0 h-18 bg-gradient-to-t from-[#C4DAFF]/30 via-[#C4DAFF]/50 dark:from-[#9C9D9F]/5 dark:via-[#9C9D9F]/5 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}