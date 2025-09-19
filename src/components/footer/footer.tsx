import ThemeImage from "../themeImage"

export default function Footer() {

  return (
    <footer className="">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row md:items-stretch flex-center md:items-start justify-between py-10 px-2">
          <div className="flex-1 h-full mb-6 md:mb-0 md:block hidden">
            <ThemeImage 
              lightSrc="logo-light.png" 
              darkSrc="logo-dark.png" 
              alt="Logo" 
              className="md:w-36 w-30"
            />
          </div>

          <div className="flex-1 h-full mb-6 md:mb-0 text-center">
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="flex items-center justify-center space-x-3">
              <li className="text-[#383B3E] dark:text-[#6F7174] hover:scale-105 cursor-pointer hover:text-[#2973FF] dark:hover:text-white">
                <a href="#">Terms of Service</a>
              </li>
              <li className="text-[#383B3E] dark:text-[#6F7174] hover:scale-105 cursor-pointer hover:text-[#2973FF] dark:hover:text-white">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 h-full mb-6 md:mb-0 text-center">
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="flex items-center justify-center space-x-3">
              <li className="text-[#383B3E] dark:text-[#6F7174] hover:scale-105 cursor-pointer hover:text-[#2973FF] dark:hover:text-white">
                <a href="#">
                  X
                </a>
              </li>
              <li className="text-[#383B3E] dark:text-[#6F7174] hover:scale-105 cursor-pointer hover:text-[#2973FF] dark:hover:text-white">
                <a href="#">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#9C9D9F]/30 dark:border-[#383B3E]/30 mt-3 py-4 px-2">
          <div className="flex flex-col md:flex-row justify-center items-center">
            {/*Accolades*/}
            <div className="flex items-center font-inter mt-1">
              <span className="flex items-center text-sm text-[#383B3E] dark:text-[#6F7174]">
                Built by
                <a href="#" className="font-inter-semi hover:scale-105 underline ml-1">
                  KorvLabs
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}