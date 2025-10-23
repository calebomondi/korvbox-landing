import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import ThemeImage from "../themeImage";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [isVisible, setIsVisible] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);

    // Handle scroll visibility and active section
    useEffect(() => {
        let lastScrollY = window.scrollY;
    
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
          setIsVisible(lastScrollY > currentScrollY || currentScrollY < 50);
          lastScrollY = currentScrollY;
    
          // Update active section
          const sections = ['hero', 'stats', 'features', 'tokens', 'faq', 'cta'];
          const currentSection = sections.find(section => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              return rect.top <= 100 && rect.bottom >= 100;
            }
            return false;
          });
          if (currentSection) setActiveSection(currentSection);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Check if the user is at the top of the page
    useEffect(() => {
      const handleScroll = () => {
        setIsAtTop(window.scrollY === 0);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <nav className={`sticky z-10 w-full transition-all duration-300 ease-in-out ${isVisible ? 'top-0' : '-top-20'} bg-white dark:bg-[#15181A]
        ${isAtTop ? 'border-b border-transparent' : 'border-b border-[#9C9D9F] dark:border-[#383B3E]'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between md:h-18 h-16">
            {/* Logo */}
            <div className="flex items-center justify-center space-x-1">
              <a href="/">
              {
                <ThemeImage 
                  lightSrc="logo-light.png" 
                  darkSrc="logo-dark.png" 
                  alt="Logo" 
                  className='md:w-40 w-32'
                />
              }
              </a>
              <div className="text-white dark:text-[#15181A] dark:bg-white bg-[#2973FF] text-xs font-manrope-semi py-1 px-2 rounded-md">
                <span>Beta</span>
              </div>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['How It Works', 'Morpho', 'FAQ'].map((item) => (
                <a
                  key={item}
                  href={`/#${item.toLowerCase().replace(/ /g, '-')}`}
                  className={`font-opensans transition-all duration-300  relative after:content-[''] after:absolute after:w-0 after:h-0.5
                    hover:scale-105 hover:text-[#2973FF] dark:hover:text-[#FFFFFF] dark:text-gray-400
                    ${activeSection === item.toLowerCase().replace(/ /g, '-') ? 'after:w-full' : ''}`}
                >
                  {item}
                </a>
              ))}
              <button
                className="font-opensans bg-[#2973FF] text-white py-2 px-4 rounded-full btn-sm hover:scale-90 hover:cursor-pointer transition-all duration-300"
                onClick={
                  () => window.open('https://app.korvbox.xyz/', '_blank')
                }
              >
                Launch App
              </button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div 
            className={`md:hidden flex justify-center absolute w-full  bg-[#C4DAFF] dark:bg-[#222529] rounded-b-[15px]`}
          >
            <div className="px-2 py-3 flex flex-col items-center space-y-3">
              {['How It Works', 'Morpho', 'FAQ'].map((item) => (
                <a
                  key={item}
                  href={`/#${item.toLowerCase().replace(/ /g, '-')}`}
                  className={`font-opensans transition-all duration-300  relative after:content-[''] after:absolute after:w-0 after:h-0.5
                    hover:scale-105 hover:text-[#2973FF] dark:hover:text-[#FFFFFF] dark:text-gray-400
                    ${activeSection === item.toLowerCase().replace(/ /g, '-') ? 'after:w-full' : ''}`}
                >
                  {item}
                </a>
              ))}
              <button
                className="font-opensans bg-[#2973FF] text-white py-2 px-4 rounded-full btn-sm hover:scale-90 hover:cursor-pointer transition-all duration-300"
                onClick={
                  () => window.open('https://app.korvbox.xyz/', '_blank')
                }
              >
                Launch App
              </button>
            </div>
          </div>
        )}
    </nav>
  )
}