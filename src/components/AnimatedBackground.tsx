const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Large gradient orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[hsl(var(--gradient-red)/0.15)] to-[hsl(var(--gradient-pink)/0.1)] rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-gradient-to-tr from-[hsl(var(--gradient-purple)/0.12)] to-[hsl(var(--gradient-blue)/0.08)] rounded-full blur-3xl animate-float-slower" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-gradient-to-bl from-[hsl(var(--gradient-pink)/0.1)] to-[hsl(var(--gradient-purple)/0.15)] rounded-full blur-3xl animate-float-medium" />
      <div className="absolute top-[60%] right-[10%] w-64 h-64 bg-gradient-to-tl from-[hsl(var(--gradient-blue)/0.1)] to-[hsl(var(--gradient-red)/0.08)] rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-[10%] left-[40%] w-48 h-48 bg-gradient-to-br from-[hsl(var(--gradient-pink)/0.08)] to-[hsl(var(--gradient-purple)/0.12)] rounded-full blur-3xl animate-float-medium" />
      
      {/* Floating geometric shapes - squares */}
      <div className="absolute top-1/4 right-1/3 w-4 h-4 border-2 border-[hsl(var(--gradient-red)/0.3)] rotate-45 animate-spin-slow" />
      <div className="absolute top-[15%] left-[20%] w-3 h-3 border-2 border-[hsl(var(--gradient-pink)/0.35)] rotate-12 animate-spin-slower" />
      <div className="absolute top-[40%] right-[15%] w-5 h-5 border-2 border-[hsl(var(--gradient-purple)/0.3)] rotate-45 animate-spin-slow" />
      <div className="absolute top-[75%] left-[70%] w-4 h-4 border-2 border-[hsl(var(--gradient-blue)/0.35)] rotate-12 animate-spin-slower" />
      <div className="absolute top-[30%] left-[80%] w-3 h-3 border-2 border-[hsl(var(--gradient-red)/0.25)] rotate-45 animate-spin-slow" />
      <div className="absolute top-[85%] left-[25%] w-5 h-5 border-2 border-[hsl(var(--gradient-pink)/0.3)] rotate-12 animate-spin-slower" />
      <div className="absolute top-[50%] left-[5%] w-4 h-4 border-2 border-[hsl(var(--gradient-purple)/0.35)] rotate-45 animate-spin-slow" />
      <div className="absolute top-[5%] right-[25%] w-3 h-3 border-2 border-[hsl(var(--gradient-blue)/0.3)] rotate-12 animate-spin-slower" />
      
      {/* Floating circles */}
      <div className="absolute top-2/3 left-1/4 w-6 h-6 border-2 border-[hsl(var(--gradient-purple)/0.25)] rounded-full animate-pulse-slow" />
      <div className="absolute top-[20%] right-[40%] w-4 h-4 border-2 border-[hsl(var(--gradient-red)/0.3)] rounded-full animate-pulse-slow" />
      <div className="absolute top-[80%] right-[30%] w-5 h-5 border-2 border-[hsl(var(--gradient-pink)/0.25)] rounded-full animate-pulse-slow" />
      <div className="absolute top-[45%] left-[60%] w-3 h-3 border-2 border-[hsl(var(--gradient-blue)/0.3)] rounded-full animate-pulse-slow" />
      
      {/* Solid floating shapes */}
      <div className="absolute top-1/2 right-1/5 w-3 h-3 bg-[hsl(var(--gradient-pink)/0.4)] rotate-45 animate-float-fast" />
      <div className="absolute top-[35%] left-[15%] w-2 h-2 bg-[hsl(var(--gradient-red)/0.45)] rotate-45 animate-float-fast" />
      <div className="absolute top-[65%] right-[45%] w-2.5 h-2.5 bg-[hsl(var(--gradient-purple)/0.4)] rotate-12 animate-float-fast" />
      <div className="absolute top-[90%] left-[50%] w-2 h-2 bg-[hsl(var(--gradient-blue)/0.45)] rotate-45 animate-float-fast" />
      <div className="absolute top-[10%] left-[65%] w-3 h-3 bg-[hsl(var(--gradient-pink)/0.35)] rotate-12 animate-float-fast" />
      
      {/* More spinning squares */}
      <div className="absolute bottom-1/3 left-1/3 w-5 h-5 border-2 border-[hsl(var(--gradient-blue)/0.3)] animate-spin-slower" />
      <div className="absolute top-20 left-1/2 w-2 h-2 bg-[hsl(var(--gradient-red)/0.5)] rounded-full animate-ping-slow" />
      <div className="absolute top-[60%] left-[90%] w-4 h-4 border-2 border-[hsl(var(--gradient-purple)/0.25)] rotate-45 animate-spin-slow" />
      <div className="absolute top-[25%] left-[5%] w-3 h-3 border-2 border-[hsl(var(--gradient-pink)/0.3)] rotate-12 animate-spin-slower" />
      
      {/* Diamond shapes */}
      <div className="absolute top-[55%] right-[5%] w-4 h-4 border-2 border-[hsl(var(--gradient-red)/0.3)] rotate-45 animate-float-slow" />
      <div className="absolute top-[8%] left-[30%] w-3 h-3 border-2 border-[hsl(var(--gradient-blue)/0.35)] rotate-45 animate-float-medium" />
      <div className="absolute top-[72%] left-[45%] w-5 h-5 border-2 border-[hsl(var(--gradient-pink)/0.25)] rotate-45 animate-float-slower" />
      
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
        <path 
          d="M0,500 Q600,450 1200,550 T2400,500" 
          stroke="url(#line-gradient)" 
          strokeWidth="1" 
          fill="none"
          className="animate-wave"
        />
      </svg>
      
      {/* Particle dots */}
      <div className="absolute top-[15%] left-[10%] w-1.5 h-1.5 bg-[hsl(var(--gradient-red)/0.6)] rounded-full animate-twinkle" />
      <div className="absolute top-[45%] left-[85%] w-1 h-1 bg-[hsl(var(--gradient-pink)/0.5)] rounded-full animate-twinkle-delayed" />
      <div className="absolute top-[70%] left-[20%] w-1.5 h-1.5 bg-[hsl(var(--gradient-purple)/0.5)] rounded-full animate-twinkle-slow" />
      <div className="absolute top-[25%] left-[75%] w-1 h-1 bg-[hsl(var(--gradient-blue)/0.6)] rounded-full animate-twinkle" />
      <div className="absolute top-[85%] left-[60%] w-1.5 h-1.5 bg-[hsl(var(--gradient-red)/0.4)] rounded-full animate-twinkle-delayed" />
      <div className="absolute top-[55%] left-[45%] w-1 h-1 bg-[hsl(var(--gradient-pink)/0.5)] rounded-full animate-twinkle-slow" />
      <div className="absolute top-[33%] left-[55%] w-1 h-1 bg-[hsl(var(--gradient-purple)/0.6)] rounded-full animate-twinkle" />
      <div className="absolute top-[78%] left-[35%] w-1.5 h-1.5 bg-[hsl(var(--gradient-blue)/0.5)] rounded-full animate-twinkle-delayed" />
      <div className="absolute top-[12%] left-[92%] w-1 h-1 bg-[hsl(var(--gradient-red)/0.5)] rounded-full animate-twinkle-slow" />
      <div className="absolute top-[92%] left-[8%] w-1.5 h-1.5 bg-[hsl(var(--gradient-pink)/0.6)] rounded-full animate-twinkle" />
      <div className="absolute top-[5%] left-[50%] w-1 h-1 bg-[hsl(var(--gradient-purple)/0.5)] rounded-full animate-twinkle-delayed" />
      <div className="absolute top-[62%] left-[72%] w-1.5 h-1.5 bg-[hsl(var(--gradient-blue)/0.4)] rounded-full animate-twinkle-slow" />
    </div>
  );
};

export default AnimatedBackground;
