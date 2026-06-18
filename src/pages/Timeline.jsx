import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import timelineData from "../data/timeline";
import PageTransition from "../components/shared/PageTransition";

const Timeline = () => {
return ( <PageTransition> <div className="min-h-screen text-white pt-32 pb-20 px-6 relative">


    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative z-10 max-w-7xl mx-auto">

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <span className="uppercase tracking-[0.3em] text-yellow-500 text-sm">
          Historical Journey
        </span>

        <h1 className="text-5xl md:text-7xl font-bold mt-4">
          Journey to
          <span className="text-yellow-500"> Karbala</span>
        </h1>

        <p className="text-gray-300 max-w-3xl mx-auto mt-8 text-lg leading-relaxed">
          Follow the events that led to one of the most influential
          moments in human history.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">

        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-yellow-500/40 hidden md:block"></div>

        {timelineData.map((event, index) => (
          <motion.div
            key={event.id}
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
              duration: 0.7,
            }}
            className={`relative flex mb-20 ${
              index % 2 === 0
                ? "justify-start"
                : "justify-end"
            }`}
          >

            {/* Timeline Dot */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-10 w-6 h-6 bg-yellow-500 rounded-full border-4 border-black shadow-[0_0_20px_rgba(234,179,8,0.6)]"></div>

            <Link
              to={`/timeline/${event.slug}`}
              className="w-full md:w-[45%]"
            >
              <div className="bg-black/30 backdrop-blur-md border border-yellow-500/20 rounded-3xl p-8 hover:border-yellow-500/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer">

                <span className="text-yellow-500 font-semibold">
                  {event.year}
                </span>

                <h2 className="text-3xl font-bold mt-3">
                  {event.title}
                </h2>

                <p className="text-gray-300 mt-4 leading-7">
                  {event.description}
                </p>

                <div className="mt-6 text-yellow-500 font-medium">
                  Read More →
                </div>

              </div>
            </Link>

          </motion.div>
        ))}

      </div>

    </div>

  </div>
</PageTransition>

);
};

export default Timeline;
