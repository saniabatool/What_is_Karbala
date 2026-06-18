import { useParams, Link } from "react-router-dom";
import timelineData from "../data/timeline";

const TimelineDetails = () => {
const { slug } = useParams();

const event = timelineData.find(
(item) => item.slug === slug
);

if (!event) {
return ( <div className="min-h-screen flex items-center justify-center text-white relative">

    {/* Video Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative z-10 text-center">
      <h1 className="text-5xl font-bold text-yellow-500">
        404
      </h1>

      <h2 className="text-3xl font-bold mt-4">
        Event Not Found
      </h2>

      <Link
        to="/timeline"
        className="inline-block mt-8 px-6 py-3 bg-yellow-500 text-black rounded-full font-semibold"
      >
        Back to Timeline
      </Link>
    </div>

  </div>
);


}

return ( <div className="min-h-screen text-white pt-32 px-6 pb-20 relative">

  {/* Video Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10 max-w-5xl mx-auto">

    <Link
      to="/timeline"
      className="text-yellow-500 hover:text-yellow-400 transition"
    >
      ← Back to Timeline
    </Link>

    <div className="mt-10 bg-black/40 backdrop-blur-md border border-yellow-500/20 rounded-3xl p-10">

      <span className="text-yellow-500 text-lg font-semibold">
        {event.year}
      </span>

      <h1 className="text-5xl md:text-6xl font-bold mt-4">
        {event.title}
      </h1>

      <div className="w-24 h-1 bg-yellow-500 mt-6 rounded-full"></div>

      <p className="text-gray-300 mt-8 text-lg leading-8">
        {event.details}
      </p>

    </div>

  </div>

</div>


);
};

export default TimelineDetails;
