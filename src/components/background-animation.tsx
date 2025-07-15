'use client';

const BackgroundAnimation = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <div className="absolute bg-primary/10 rounded-full w-96 h-96 -top-20 -left-40 animate-pulse-slow"></div>
      <div className="absolute bg-accent/10 rounded-full w-80 h-80 -bottom-40 -right-20 animate-pulse-slow delay-2000"></div>
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.15;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default BackgroundAnimation;
