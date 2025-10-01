import { useState, useEffect } from 'react';

export default function HowItWorks() {
  // Component to handle light/dark theme image changes
  function ThemeImage({ lightSrc, darkSrc, alt, ...props }: {
      lightSrc: string;
      darkSrc: string;
      alt: string;
  } & React.ImgHTMLAttributes<HTMLImageElement>) {
      const [isDark, setIsDark] = useState(false);

      useEffect(() => {
          // Check initial preference
          const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
          setIsDark(mediaQuery.matches);

          // Listen for changes
          const handleChange = (e: MediaQueryListEvent) => {
          setIsDark(e.matches);
          };

          mediaQuery.addEventListener('change', handleChange);
          return () => mediaQuery.removeEventListener('change', handleChange);
      }, []);

      return (
          <img 
          src={isDark ? darkSrc : lightSrc} 
          alt={alt} 
          {...props}
          />
      );
  }

  return (
    <section id='how-it-works' className="">
      <div className="max-w-8xl mx-auto md:px-36 px-10 md:py-10 py-20 text-left">
        {/* Heading */}
        <h2 className="font-manrope text-3xl md:text-4xl text-[#15181A] dark:text-white">
          How It Works
        </h2>

        {/* Features */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="border border-gray-300 dark:border-gray-700 p-8 rounded-sm text-left">
            <div className="mb-0">
              <div className="w-20 h-20 flex items-center justify-start">
                <ThemeImage 
                    lightSrc="1.png" 
                    darkSrc="1d.png" 
                    alt="1" 
                    className="md:w-8 w-8"
                />
              </div>
            </div>
            <h3 className="font-dmsans text-2xl text-[#15181A] dark:text-white">
              Deposit & Supply
            </h3>
            <p className="font-inter mt-2 dark:text-gray-400 text-[#6F7174]">
              Start with as little as 5 USDC. Browse available Morpho vaults and choose 
              the one that fits your goals. Select your deposit amount and supply to your 
              chosen vault for maximum yields, or keep funds in your platform balance for flexibility.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="border border-gray-300 dark:border-gray-700 p-8 rounded-sm text-left">
            <div className="mb-0">
              <div className="w-20 h-20 flex items-center justify-start">
                <ThemeImage 
                    lightSrc="2.png" 
                    darkSrc="2d.png" 
                    alt="2" 
                    className="md:w-8 w-8"
                />
              </div>
            </div>
            <h3 className="font-dmsans text-2xl text-[#15181A] dark:text-white">
              Earn
            </h3>
            <p className="font-inter mt-2 dark:text-gray-400 text-[#6F7174]">
              Your supplied assets automatically earn yield based on the vault's APY plus protocol rewards, 
              proportional to your deposit amount. Even unsupplied funds earn native Korvbox rewards based 
              on your platform activity and deposit frequency.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="border border-gray-300 dark:border-gray-700 p-8 rounded-sm text-left">
            <div className="mb-0">
              <div className="w-20 h-20 flex items-center justify-start">
                <ThemeImage 
                    lightSrc="3.png" 
                    darkSrc="3d.png" 
                    alt="3" 
                    className="md:w-8 w-8"
                />
              </div>
            </div>
            <h3 className="font-dmsans text-2xl text-[#15181A] dark:text-white">
              Withdraw
            </h3>
            <p className="font-inter mt-2 dark:text-gray-400 text-[#6F7174]">
              Access your funds anytime. Vault withdrawals may have slight delays based on available liquidity, 
              with funds first returning to your platform balance. Direct platform withdrawals go straight to 
              your wallet instantly.
            </p>
          </div>
        </div>

        <p className="mt-8 mb-3 text-center font-opensans dark:text-gray-400 text-[#6F7174]">
            <span 
                className='hover:underline cursor-pointer'
                onClick={
                    () => window.open('https://morpho.org/', '_blank')
                }
            >
                Watch Video Tutorial
            </span>
        </p>
      </div>
    </section>
  );
}