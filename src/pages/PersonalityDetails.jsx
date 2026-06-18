import { useParams, Link } from "react-router-dom";
import personalitiesData from "../data/personalities";

const PersonalityDetails = () => {
const { slug } = useParams();

const personality = personalitiesData.find(
(person) => person.slug === slug
);

if (!personality) {
return ( <div className="min-h-screen flex items-center justify-center text-white relative">


    {/* Video Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative z-10 text-center">
      <h1 className="text-5xl font-bold text-yellow-500">
        404
      </h1>

      <h2 className="text-3xl font-bold mt-4">
        Personality Not Found
      </h2>

      <Link
        to="/personalities"
        className="inline-block mt-8 px-6 py-3 bg-yellow-500 text-black rounded-full font-semibold"
      >
        Back to Personalities
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
      to="/personalities"
      className="text-yellow-500 hover:text-yellow-400 transition"
    >
      ← Back to Personalities
    </Link>

    {/* Header */}
    <div className="mt-8">

      <div className="w-24 h-24 rounded-full bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center text-yellow-500 text-4xl font-bold">
        {personality.name.charAt(0)}
      </div>

      <h1 className="text-5xl md:text-6xl font-bold mt-6">
        {personality.name}
      </h1>

      <p className="text-yellow-500 text-xl mt-3">
        {personality.role}
      </p>

    </div>

    {/* Biography */}
    <div className="mt-10 bg-black/40 backdrop-blur-md border border-yellow-500/20 rounded-3xl p-8">

      <h2 className="text-2xl font-bold mb-4">
        Biography
      </h2>

      <p className="text-gray-300 leading-8">
        {personality.biography}
      </p>

    </div>

    {/* Legacy */}
    <div className="mt-8 bg-black/40 backdrop-blur-md border border-yellow-500/20 rounded-3xl p-8">

      <h2 className="text-2xl font-bold mb-4">
        Legacy
      </h2>

      <p className="text-gray-300 leading-8">
        {personality.legacy}
      </p>

    </div>

  </div>

</div>

);
};

export default PersonalityDetails;
