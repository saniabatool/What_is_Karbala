import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqData from "../data/faq";

const FAQ = () => {
const [search, setSearch] = useState("");
const [openIndex, setOpenIndex] = useState(null);

const filteredFaqs = faqData.filter(
(faq) =>
faq.question.toLowerCase().includes(search.toLowerCase()) ||
faq.answer.toLowerCase().includes(search.toLowerCase())
);

return ( <div className="min-h-screen text-white pt-32 px-6 pb-20 relative">


  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10 max-w-5xl mx-auto">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <span className="uppercase tracking-[0.3em] text-yellow-500 text-sm">
        Knowledge Base
      </span>

      <h1 className="text-5xl md:text-6xl font-bold mt-4">
        Frequently Asked
        <span className="text-yellow-500"> Questions</span>
      </h1>

      <p className="text-center text-gray-300 mt-6 max-w-2xl mx-auto">
        Explore common questions about Karbala, its history,
        significance and enduring message.
      </p>
    </motion.div>

    {/* Search */}
    <div className="mt-12">
      <input
        type="text"
        placeholder="Search questions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-5 rounded-2xl bg-black/30 backdrop-blur-md border border-yellow-500/20 focus:border-yellow-500 outline-none text-white"
      />
    </div>

    {/* FAQ List */}
    <div className="mt-10 space-y-5">

      {filteredFaqs.map((faq, index) => (
        <motion.div
          key={index}
          layout
          className="bg-black/30 backdrop-blur-md border border-yellow-500/20 rounded-2xl overflow-hidden"
        >
          <button
            className="w-full flex justify-between items-center text-left p-6"
            onClick={() =>
              setOpenIndex(
                openIndex === index ? null : index
              )
            }
          >
            <span className="font-semibold text-lg">
              {faq.question}
            </span>

            <span className="text-yellow-500 text-2xl">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="px-6 pb-6 text-gray-300 leading-7"
              >
                {faq.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}

    </div>

  </div>
</div>


);
};

export default FAQ;
