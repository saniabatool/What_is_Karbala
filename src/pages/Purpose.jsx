import { motion } from "framer-motion";
import PageTransition from "../components/shared/PageTransition";

const sections = [
{
title: "Protecting Islam",
text: "Imam Husayn (AS) sacrificed everything to protect the true spirit and principles of Islam.",
},
{
title: "Refusal of Allegiance",

text: "Imam Hussain (AS) refused to legitimize a system he believed was unjust and harmful to the principles of Islam",
},

{
title: "Protecting Human Dignity",
text: "Karbala affirmed the value of honor, dignity, and moral integrity in all circumstances.",
},
{
title: "Standing Against Oppression",
text: "Karbala symbolizes the courage to stand for truth even when the odds appear impossible.",
},
{
title: "A Universal Message",
text: "The lessons of Karbala continue to inspire people of all backgrounds through its emphasis on justice, dignity and sacrifice.",
},
];

const Purpose = () => {
return ( <PageTransition> <div className="min-h-screen text-white relative">


    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative z-10">

      {/* Hero */}
      <section className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center max-w-5xl">

          <span className="uppercase tracking-[0.3em] text-yellow-500 text-sm">
            Understanding Karbala
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mt-4"
          >
            The Purpose of
            <span className="text-yellow-500"> Karbala</span>
          </motion.h1>

          <p className="text-gray-300 mt-8 text-lg max-w-3xl mx-auto leading-relaxed">
            Understanding why Karbala happened and why its message
            continues to inspire humanity more than fourteen centuries later.
          </p>

        </div>
      </section>

      {/* Story Sections */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className={`grid md:grid-cols-2 gap-12 items-center mb-24 ${
              index % 2 !== 0
                ? "md:[&>*:first-child]:order-2"
                : ""
            }`}
          >

            {/* Visual Card */}
            <div className="h-80 rounded-3xl bg-black/30 backdrop-blur-md border border-yellow-500/20 flex items-center justify-center hover:border-yellow-500/50 transition-all duration-300">

              <div className="text-center px-6">
                <div className="text-6xl font-bold text-yellow-500/20">
                  0{index + 1}
                </div>

                <span className="text-yellow-500 text-xl font-semibold">
                  {section.title}
                </span>
              </div>

            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-yellow-500">
                {section.title}
              </h2>

              <p className="text-gray-300 mt-6 leading-8 text-lg">
                {section.text}
              </p>
            </div>

          </motion.div>
        ))}

      </section>

      {/* Reflection */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center bg-black/30 backdrop-blur-md border border-yellow-500/20 rounded-3xl p-12">

          <h2 className="text-4xl md:text-5xl font-bold">
            Why Does
            <span className="text-yellow-500"> Karbala </span>
            Still Matter?
          </h2>

          <p className="text-gray-300 mt-8 text-lg leading-8">
            More than fourteen centuries later, Karbala continues to
            remind humanity that principles, justice and truth are
            worth standing for, even in the most difficult circumstances.
          </p>

        </div>
      </section>

    </div>
  </div>
</PageTransition>

);
};

export default Purpose;
