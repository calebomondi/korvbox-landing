import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { faqs } from "./data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="">
      <div className="mx-auto max-w-8xl md:px-36 px-10 md:py-10 py-20">
        <h2 className="font-manrope text-3xl md:text-4xl text-[#15181A] dark:text-white">
          FAQs
        </h2>

        <motion.div
          className="mt-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`mb-6`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`
                  w-full bg-[#FFFFFF] dark:bg-[#15181A] flex items-center justify-between cursor-pointer
                  ${openIndex === index ? '' : 'pb-5 border-b border-gray-300 dark:border-gray-700'}
                `}
              >
                <h3 className="font-dmsans text-2xl text-[#15181A] dark:text-white text-left">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-6 h-6 dark:text-gray-400 text-[#6F7174]" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="py-4 border-b border-gray-300 dark:border-gray-700">
                      <p className="font-inter dark:text-gray-400 text-gray-700">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}