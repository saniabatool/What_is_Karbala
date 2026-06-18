import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import personalities from "../data/personalities";

const Personalities = () => {
  const filteredData = personalities
  // Replace with your actual data source
  

  return (
  <div className="relative min-h-screen overflow-hidden">
    
    {/* Background Video */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/vid/roza.mp4" type="video/mp4" />
    </video>

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/80"></div>

    {/* Content */}
    <div className="relative z-10 min-h-screen text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">
          Personalities
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredData.map((person, index) => (
            <Link
              key={person.id}
              to={`/personalities/${person.slug}`}
              className="h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="h-full bg-zinc-900/70 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 cursor-pointer hover:border-yellow-500/50 hover:shadow-[0_0_25px_rgba(234,179,8,0.15)] transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center text-yellow-500 text-2xl font-bold">
                  {person.name.charAt(0)}
                </div>

                <h2 className="text-xl font-bold mt-6">
                  {person.name}
                </h2>

                <p className="text-yellow-500 mt-2">
                  {person.role}
                </p>

                <p className="text-gray-400 mt-4 text-sm leading-6">
                  {person.description}
                </p>

                <div className="mt-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500">
                    {person.category}
                  </span>
                </div>

                <div className="mt-6 text-yellow-500 font-medium">
                  Learn More →
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
);
};

export default Personalities;