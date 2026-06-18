import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Particles from "./Particles";
import Stars from "./Stars";
import Desert from "./Desert";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden overflow-y-hidden">

      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black/55 z-0"></div>

      {/* Moon */}
      <div className="absolute top-20 right-4 sm:right-10 md:right-24 z-0">
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full bg-yellow-100/20 shadow-[0_0_180px_rgba(255,255,220,0.5)]"></div>
      </div>

      {/* Responsive Glow */}
      <div className="absolute w-[90vw] max-w-[700px] aspect-square rounded-full bg-yellow-500/10 blur-[180px]"></div>

      {/* Effects */}
      <Particles />
      <Stars />

      {/* Arabic Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden px-4">
  <h2 className="text-[70px] sm:text-[110px] md:text-[220px] lg:text-[280px] font-bold text-white/[0.03] select-none text-center leading-none">
    كربلاء
  </h2>
</div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-6xl">

     

        {/* Heading */}
        <motion.h1
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="hidden md:block text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white leading-tight"
>
  WHAT IS
  <span className="block text-yellow-500 drop-shadow-[0_0_25px_rgba(234,179,8,0.4)]">
    KARBALA?
  </span>
</motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto mt-6 md:mt-8 text-gray-300 text-base md:text-xl leading-relaxed"
        >
          Discover the story of sacrifice, courage, faith,
          justice and human dignity that continues to inspire
          millions around the world more than fourteen centuries later.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10 md:mt-12"
        >
          <Link to="/timeline">
            <button className="w-full sm:w-auto px-8 py-4 bg-yellow-500 text-black font-semibold rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(234,179,8,0.6)] transition-all duration-300">
              Explore the Story
            </button>
          </Link>

          <Link to="/purpose">
            <button className="w-full sm:w-auto px-8 py-4 border border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] transition-all duration-300">
              Why Karbala Matters
            </button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-14 md:mt-16 flex justify-center gap-8 md:gap-16 flex-wrap"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
              680 CE
            </h3>
            <p className="text-gray-400 text-sm">
              Battle of Karbala
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
              72
            </h3>
            <p className="text-gray-400 text-sm">
              Loyal Companions
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
              1400+
            </h3>
            <p className="text-gray-400 text-sm">
              Years of Inspiration
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="mt-16 md:mt-20 flex justify-center"
        >
          <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-500 rounded-full mt-2"></div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>

      {/* Desert */}
      <Desert />
    </section>
  );
};

export default Hero;