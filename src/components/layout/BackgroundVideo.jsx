const BackgroundVideo = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/vid/roza.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>
    </div>
  );
};

export default BackgroundVideo;