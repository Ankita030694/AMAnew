export default function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* Background video */}
      <div className="absolute inset-0 bg-gray-900">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-40" 
          style={{ objectFit: 'cover' }}
        >
          <source src="/intro.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl mb-6 drop-shadow-lg">
          EMPOWERING LEGAL EXPERTISE
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl mb-8 drop-shadow-lg">
        AMA Legal Solutions embodies a firm culture rooted in values and principles that prioritize excellence and integrity
        </p>
        <button className="relative overflow-hidden bg-[#D2A02A] hover:bg-[#5A4C33] text-white px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out group">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#D2A02A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative inline-flex items-center">
            Make enquiry
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </button>
      </div>
    </div>
  )
}