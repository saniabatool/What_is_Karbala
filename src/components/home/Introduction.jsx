import { motion } from "framer-motion";

const cards = [
{
title: "Historical Event",
description:
"Karbala was a defining moment in history that shaped generations and continues to be remembered across the world.",
},
{
title: "Spiritual Significance",
description:
"For millions, Karbala represents faith, devotion, patience and unwavering commitment to principles.",
},
{
title: "Universal Message",
description:
"Its lessons transcend cultures and religions, inspiring people to stand for truth and justice.",
},
];

const Introduction = () => {
return ( <section className="relative py-32 px-6">


  {/* Background Overlay */}
  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <span className="uppercase tracking-[0.3em] text-yellow-500 text-sm">
        Discover the Meaning
      </span>

      <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
        Understanding
        <span className="text-yellow-500"> Karbala</span>
      </h2>

      <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
        Karbala is far more than a historical event. It is a timeless
        story of courage, sacrifice, justice and human dignity that
        continues to inspire people around the world.
      </p>
    </motion.div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-8 mt-20">

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
          viewport={{ once: true }}
          transition={{
            delay: index * 0.2,
          }}
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
          className="bg-black/30 backdrop-blur-md border border-yellow-500/20 rounded-3xl p-8 hover:border-yellow-500/50 transition-all duration-300"
        >
          <div className="w-14 h-14 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 text-xl font-bold">
            {index + 1}
          </div>

          <h3 className="text-2xl font-bold text-white mt-6">
            {card.title}
          </h3>

          <p className="text-gray-300 mt-4 leading-7">
            {card.description}
          </p>
        </motion.div>
      ))}

    </div>

    {/* Quote */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-24 text-center max-w-4xl mx-auto"
    >
      <p className="text-2xl md:text-3xl text-white italic leading-relaxed">
        "Karbala is not merely a chapter of history; it is a living lesson
        in standing for truth, even when the cost is great."
      </p>
    </motion.div>

  </div>
</section>

);
};

export default Introduction;
