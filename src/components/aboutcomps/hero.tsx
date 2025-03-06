export default function Hero() {
    return (
      <div className="relative min-h-130">
        {/* Background video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover" 
            style={{ objectFit: 'cover' }}
          >
            <source src="/about.mp4" type="video/mp4" />
          </video>
        </div>
  
        {/* Dark overlay */}
        <div className="absolute inset-0" />
        
        {/* Content */}
        {/* <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl mb-6 drop-shadow-lg">
            ABOUT US
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mb-8 drop-shadow-lg">
          AMA Legal Solutions embodies a firm culture rooted in values and principles that prioritize excellence and integrity
          </p>
        
        </div> */}
      </div>
    )
  }