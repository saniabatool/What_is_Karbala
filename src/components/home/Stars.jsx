const Stars = () => {
  return (
    <>
      {[...Array(60)].map((_, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-yellow-500 animate-pulse"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.8,
          }}
        />
      ))}
    </>
  );
};

export default Stars;