import { motion } from "framer-motion";

const cards = [
{
number: "01",
title: "Truth Over Power",
desc: "Karbala teaches that principles and truth should never be sacrificed for personal gain or political power.",
},
{
number: "02",
title: "Standing Against Oppression",
desc: "The stand at Karbala reminds humanity that silence in the face of injustice can have lasting consequences.",
},
{
number: "03",
title: "Human Dignity",
desc: "The events of Karbala emphasize the importance of honor, dignity and moral courage even in difficult circumstances.",
},
{
number: "04",
title: "Faith and Patience",
desc: "The resilience displayed during Karbala continues to inspire generations through unwavering faith and perseverance.",
},
];

const WhyKarbalaMatters = () => {
return ( <section className="relative py-32 px-6">


  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <span className="uppercase tracking-[0.3em] text-yellow-500 text-sm">
        Timeless Lessons
      </span>

      <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
        Why Karbala
        <span className="text-yellow-500"> Matters Today</span>
      </h2>

      <p className="text-center text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
        More than fourteen centuries later, the message of Karbala
        continues to inspire people across cultures through its lessons
        of justice, courage, faith and integrity.
      </p>
    </motion.div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 gap-8 mt-20">

      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * 0.15,
          }}
          viewport={{ once: true }}
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
          className="group bg-black/30 backdrop-blur-md border border-yellow-500/20 rounded-3xl p-8 hover:border-yellow-500/50 transition-all duration-300"
        >
          <div className="text-5xl font-bold text-yellow-500/30 group-hover:text-yellow-500 transition">
            {card.number}
          </div>

          <h3 className="text-2xl font-bold text-white mt-4">
            {card.title}
          </h3>

          <p className="mt-5 text-gray-300 leading-7">
            {card.desc}
          </p>
        </motion.div>
      ))}

    </div>

    {/* Bottom Quote */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-24 max-w-4xl mx-auto text-center"
    >
      <p className="text-2xl md:text-3xl text-white italic leading-relaxed">
        "Every generation finds new meaning in Karbala because its
        message speaks to universal human values."
      </p>
    </motion.div>

  </div>
</section>

);
};

export default WhyKarbalaMatters;
