import ThemeImage from "../themeImage";

export default function HowItWorks() {
  // Component to handle light/dark theme image changes
  // function ThemeImage({ lightSrc, darkSrc, alt, ...props }: {
  //     lightSrc: string;
  //     darkSrc: string;
  //     alt: string;
  // } & React.ImgHTMLAttributes<HTMLImageElement>) {
  //     const [isDark, setIsDark] = useState(false);

  //     useEffect(() => {
  //         // Check initial preference
  //         const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  //         setIsDark(mediaQuery.matches);

  //         // Listen for changes
  //         const handleChange = (e: MediaQueryListEvent) => {
  //         setIsDark(e.matches);
  //         };

  //         mediaQuery.addEventListener('change', handleChange);
  //         return () => mediaQuery.removeEventListener('change', handleChange);
  //     }, []);

  //     return (
  //         <img 
  //         src={isDark ? darkSrc : lightSrc} 
  //         alt={alt} 
  //         {...props}
  //         />
  //     );
  // }

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
              Explore & Deposit
            </h3>
            <p className="font-inter mt-2 dark:text-gray-400 text-gray-700">
              Start by exploring available Morpho vaults and choose 
              the one that fits your goals. Input the amount you want to supply, as low as 5 USDC, and deposit.
              You will recieve share tokens from the Vault as proof of supply.
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
              Earn Yields & Rewards
            </h3>
            <p className="font-inter mt-2 dark:text-gray-400 text-gray-700">
              Your supplied assets will earn yield over time as people borrow from the vault. When interests are paid on the 
              borrowed assets, the value of the shares that you received increase in value. You also recieve reward tokens as incentives for supplying.
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
              Withdraw & Claim
            </h3>
            <p className="font-inter mt-2 dark:text-gray-400 text-gray-700">
              Access your funds anytime by trading in the shares that you recieved. You will recieve USDC equivalent
              to the value of the shares being traded in. Rewards token include MORPHO and other ERC20 tokens that can 
              are claimed on a weekly basis.
            </p>
          </div>
        </div>

        <p className="mt-8 mb-3 text-center font-opensans dark:text-gray-400 text-gray-700">
            <span 
                className='hover:underline cursor-pointer'
                onClick={
                    () => window.open('https://www.loom.com/share/6dedffdad7e647c789bd07a3f54cb6c9', '_blank')
                }
            >
                Watch Video Tutorial
            </span>
        </p>
      </div>
    </section>
  );
}