const Particles = () => {
  return (
    <>
      {[...Array(30)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-yellow-500 opacity-30 animate-pulse"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </>
  );
};

export default Particles;