import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import timelineData from "../../data/timeline";

const TimelinePreview = () => {
const previewEvents = timelineData.slice(0, 4);

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
        Historical Journey
      </span>

      <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
        Journey to
        <span className="text-yellow-500"> Karbala</span>
      </h2>

      <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
        Explore the key moments that led to one of the most influential
        events in human history.
      </p>
    </motion.div>

    {/* Timeline */}
    <div className="relative mt-24">

      {/* Center Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-yellow-500/40 hidden md:block"></div>

      {previewEvents.map((item, index) => (
        <motion.div
          key={item.id}
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
          className={`relative flex mb-16 ${
            index % 2 === 0
              ? "justify-start"
              : "justify-end"
          }`}
        >

          {/* Timeline Dot */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 w-5 h-5 rounded-full bg-yellow-500 border-4 border-black"></div>

          <Link
            to={`/timeline/${item.slug}`}
            className="w-full md:w-[45%]"
          >
            <div className="bg-black/30 backdrop-blur-md border border-yellow-500/20 rounded-3xl p-8 hover:border-yellow-500/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer">

              <span className="text-yellow-500 font-semibold">
                {item.year}
              </span>

              <h3 className="text-white text-2xl font-bold mt-3">
                {item.title}
              </h3>

              <p className="text-gray-300 mt-4 leading-7">
                {item.description}
              </p>

              <div className="mt-6 text-yellow-500">
                Explore Event →
              </div>

            </div>
          </Link>

        </motion.div>
      ))}

    </div>

    {/* CTA */}
    <div className="text-center mt-16">
      <Link to="/timeline">
        <button className="px-8 py-4 border border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300">
          View Complete Timeline
        </button>
      </Link>
    </div>

  </div>
</section>


);
};

export default TimelinePreview;
