const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-6 text-gray-400">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeading;