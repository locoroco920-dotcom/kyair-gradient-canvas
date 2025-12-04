const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Large gradient orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[hsl(var(--gradient-red)/0.15)] to-[hsl(var(--gradient-pink)/0.1)] rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-gradient-to-tr from-[hsl(var(--gradient-purple)/0.12)] to-[hsl(var(--gradient-blue)/0.08)] rounded-full blur-3xl animate-float-slower" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-gradient-to-bl from-[hsl(var(--gradient-pink)/0.1)] to-[hsl(var(--gradient-purple)/0.15)] rounded-full blur-3xl animate-float-medium" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 right-1/3 w-4 h-4 border-2 border-[hsl(var(--gradient-red)/0.3)] rotate-45 animate-spin-slow" />
      <div className="absolute top-2/3 left-1/4 w-6 h-6 border-2 border-[hsl(var(--gradient-purple)/0.25)] rounded-full animate-pulse-slow" />
      <div className="absolute top-1/2 right-1/5 w-3 h-3 bg-[hsl(var(--gradient-pink)/0.4)] rotate-45 animate-float-fast" />
      <div className="absolute bottom-1/3 left-1/3 w-5 h-5 border-2 border-[hsl(var(--gradient-blue)/0.3)] animate-spin-slower" />
      <div className="absolute top-20 left-1/2 w-2 h-2 bg-[hsl(var(--gradient-red)/0.5)] rounded-full animate-ping-slow" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Gradient mesh lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--gradient-red))" />
            <stop offset="50%" stopColor="hsl(var(--gradient-purple))" />
            <stop offset="100%" stopColor="hsl(var(--gradient-blue))" />
          </linearGradient>
        </defs>
        <path 
          d="M0,100 Q400,50 800,150 T1600,100" 
          stroke="url(#line-gradient)" 
          strokeWidth="2" 
          fill="none"
          className="animate-wave"
        />
        <path 
          d="M0,300 Q500,250 1000,350 T2000,300" 
          stroke="url(#line-gradient)" 
          strokeWidth="1.5" 
          fill="none"
          className="animate-wave-slow"
        />
      </svg>
      
      {/* Particle dots */}
      <div className="absolute top-[15%] left-[10%] w-1.5 h-1.5 bg-[hsl(var(--gradient-red)/0.6)] rounded-full animate-twinkle" />
      <div className="absolute top-[45%] left-[85%] w-1 h-1 bg-[hsl(var(--gradient-pink)/0.5)] rounded-full animate-twinkle-delayed" />
      <div className="absolute top-[70%] left-[20%] w-1.5 h-1.5 bg-[hsl(var(--gradient-purple)/0.5)] rounded-full animate-twinkle-slow" />
      <div className="absolute top-[25%] left-[75%] w-1 h-1 bg-[hsl(var(--gradient-blue)/0.6)] rounded-full animate-twinkle" />
      <div className="absolute top-[85%] left-[60%] w-1.5 h-1.5 bg-[hsl(var(--gradient-red)/0.4)] rounded-full animate-twinkle-delayed" />
      <div className="absolute top-[55%] left-[45%] w-1 h-1 bg-[hsl(var(--gradient-pink)/0.5)] rounded-full animate-twinkle-slow" />
    </div>
  );
};

export default AnimatedBackground;
