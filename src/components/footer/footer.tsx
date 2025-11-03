import { FaXTwitter } from "react-icons/fa6";
import { LiaTelegram } from "react-icons/lia";

export default function Footer() {

  return (
    <footer className="">
      <div className="container mx-auto">
        {/* <div className="flex flex-col md:flex-row  flex-center md:items-start justify-between py-10 px-2">
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
                <a href="/terms-of-use">Terms of Service</a>
              </li>
              <li className="text-[#383B3E] dark:text-[#6F7174] hover:scale-105 cursor-pointer hover:text-[#2973FF] dark:hover:text-white">
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 h-full mb-6 md:mb-0 text-center">
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="flex items-center justify-center space-x-3">
              <li className="text-[#383B3E] dark:text-[#6F7174] hover:scale-105 cursor-pointer hover:text-[#2973FF] dark:hover:text-white">
                <a href="https://x.com/KorvLabs?t=1w2vxKHEzkGFaGrWx2M-KQ&s=09" 
                  target="_blank"
                  rel="noopener noreferrer">
                  X
                </a>
              </li>
              <li className="text-[#383B3E] dark:text-[#6F7174] hover:scale-105 cursor-pointer hover:text-[#2973FF] dark:hover:text-white">
                <a href="https://t.me/+smSwRik_O0E2MWRk"
                  target="_blank"
                  rel="noopener noreferrer">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div> */}
        <hr className="border-t lg:mx-1 mx-5 dark:border-[#383B3E]/40 border-[#383B3E]/20 my-5"/>
        <div className="pb-6 lg:px-2 px-5">
          <div className="flex flex-col md:space-y-2 space-y-5 md:flex-row justify-center md:justify-between items-center">
            {/*Legal & Audit*/}
            <div className="font-inter-semi">
              <ul className="flex items-center justify-center space-x-3">
                <li className="text-[#383B3E] dark:text-[#6F7174] hover:scale-105 cursor-pointer hover:text-[#2973FF] dark:hover:text-white">
                  <a href="/terms-of-use">Terms of Use</a>
                </li>
                <li className="text-[#383B3E] dark:text-[#6F7174] hover:scale-105 cursor-pointer hover:text-[#2973FF] dark:hover:text-white">
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li className="text-[#383B3E] dark:text-[#6F7174] hover:scale-105 cursor-pointer hover:text-[#2973FF] dark:hover:text-white">
                  <a href="/audit" className="flex items-center justify-center">
                    <span>Audit</span>
                  </a>
                </li>
              </ul>
            </div>
            {/*Accolades*/}
            {/* <div className="flex flex-col items-center font-inter">
              <span className="flex items-center text-sm text-[#383B3E] dark:text-[#6F7174]">
                Built by
              </span>
              <ThemeImage 
                lightSrc="kl_light.png" 
                darkSrc="kl_dark.png" 
                alt="Logo" 
                className="w-24"
              />
            </div> */}
            {/*Community*/}
            <div className="font-inter-semi">
              <ul className="flex items-center justify-center space-x-3">
                <li className="text-[#383B3E] dark:text-[#6F7174] hover:scale-105 cursor-pointer hover:text-[#2973FF] dark:hover:text-white">
                  <a href="https://x.com/KorvLabs/" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter size={24} />
                  </a>
                </li>
                <li className="text-[#383B3E] dark:text-[#6F7174] hover:scale-105 cursor-pointer hover:text-[#2973FF] dark:hover:text-white">
                  <a href="https://t.me/+smSwRik_O0E2MWRk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LiaTelegram size={27} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}