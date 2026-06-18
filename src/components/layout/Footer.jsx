import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-white text-2xl font-bold">
              What Is <span className="text-yellow-500">Karbala?</span>
            </h3>

            <p className="text-gray-400 mt-4">
              An educational platform dedicated to helping people understand
              the history, significance and lessons of Karbala.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Quick Links
            </h4>

            <div className="flex flex-col gap-2">
              <Link to="/" className="text-gray-400 hover:text-yellow-500">
                Home
              </Link>

              <Link to="/timeline" className="text-gray-400 hover:text-yellow-500">
                Timeline
              </Link>

              <Link to="/purpose" className="text-gray-400 hover:text-yellow-500">
                Purpose
              </Link>

              <Link to="/faq" className="text-gray-400 hover:text-yellow-500">
                FAQ
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Mission
            </h4>

            <p className="text-gray-400">
              Present the story of Karbala in a respectful,
              educational and accessible way for everyone.
            </p>
          </div>

        </div>
      

        <div className="border-t border-zinc-800 mt-10 pt-6 text-center">
  <p className="text-gray-500">
    © {new Date().getFullYear()} What Is Karbala? All rights reserved.
  </p>

  <p className="mt-3 text-sm tracking-widest uppercase text-yellow-500">
    Servant of Karbala
  </p>

  <p className="text-white font-semibold mt-1">
    Sania Batool
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;