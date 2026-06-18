import { motion } from "framer-motion";
import PageTransition from "../components/shared/PageTransition";

const locations = [
  {
    city: "Madinah",
    desc: "Departure from Madinah",
  },
  {
    city: "Mecca",
    desc: "Stay in Mecca",
  },
  {
    city: "Karbala",
    desc: "Arrival at Karbala",
  },
];

const JourneyMap = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white pt-32 px-6 pb-20">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold">
              Journey to
              <span className="text-yellow-500"> Karbala</span>
            </h1>

            <p className="text-gray-400 mt-6">
              Follow the route taken during the historic journey.
            </p>
          </div>

          <div className="relative">

            <div className="absolute left-0 right-0 top-1/2 h-1 bg-yellow-500"></div>

            <div className="grid md:grid-cols-3 gap-10 relative">

              {locations.map((location, index) => (
                <motion.div
                  key={location.city}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.2,
                  }}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center"
                >
                  <div className="w-8 h-8 rounded-full bg-yellow-500 mx-auto mb-6"></div>

                  <h2 className="text-3xl font-bold">
                    {location.city}
                  </h2>

                  <p className="text-gray-400 mt-4">
                    {location.desc}
                  </p>
                </motion.div>
              ))}

            </div>
          </div>

        </div>

      </div>
    </PageTransition>
  );
};

export default JourneyMap;