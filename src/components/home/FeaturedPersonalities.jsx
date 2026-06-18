import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const personalities = [
{
name: "Imam Hussain (AS)",
role: "Leader of Karbala",
description:
"The grandson of Prophet Muhammad ﷺ and the central figure of Karbala.",
},
{
name: "Hazrat Abbas (AS)",
role: "Standard Bearer",
description:
"Known for his loyalty, bravery and unwavering support during Karbala.",
},
{
name: "Bibi Zainab (AS)",
role: "Voice of Karbala",
description:
"Preserved and conveyed the message of Karbala after the tragedy.",
},
{
name: "Imam Zain-ul-Abideen (AS)",
role: "Preserver of the Message",
description:
"Ensured that the legacy and lessons of Karbala reached future generations.",
},
];

const FeaturedPersonalities = () => {
return ( <section className="relative py-32 px-6">


  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <span className="uppercase tracking-[0.3em] text-yellow-500 text-sm">
        Inspiring Figures
      </span>

      <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
        Key
        <span className="text-yellow-500"> Personalities</span>
      </h2>

      <p className="text-center text-gray-300 max-w-3xl mx-auto mt-8 text-lg leading-relaxed">
        Learn about the remarkable individuals whose courage,
        sacrifice and resilience shaped the enduring legacy of Karbala.
      </p>
    </motion.div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

      {personalities.map((person, index) => (
        <motion.div
          key={person.name}
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
            scale: 1.03,
          }}
          className="bg-black/30 backdrop-blur-md border border-yellow-500/20 rounded-3xl p-8 text-center hover:border-yellow-500/50 transition-all duration-300"
        >
          <div className="w-24 h-24 mx-auto rounded-full bg-yellow-500/10 border border-yellow-500/40 flex items-center justify-center text-yellow-500 text-3xl font-bold">
            {person.name.charAt(0)}
          </div>

          <h3 className="text-white text-xl font-bold mt-6">
            {person.name}
          </h3>

          <p className="text-yellow-500 mt-2">
            {person.role}
          </p>

          <p className="text-gray-300 mt-4 text-sm leading-6">
            {person.description}
          </p>
        </motion.div>
      ))}

    </div>

    {/* CTA */}
    <div className="text-center mt-16">
      <Link to="/personalities">
        <button className="px-8 py-4 border border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300">
          Explore All Personalities
        </button>
      </Link>
    </div>

  </div>
</section>

);
};

export default FeaturedPersonalities;
