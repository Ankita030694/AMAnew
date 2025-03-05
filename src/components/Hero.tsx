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
          className="absolute w-full h-full object-cover opacity-85 brightness-125" 
          style={{ objectFit: 'cover' }}
        >
          <source src="/intro.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl mb-6 drop-shadow-lg">
          EMPOWERING LEGAL EXPERTISE
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl mb-8 drop-shadow-lg">
        AMA Legal Solutions embodies a firm culture rooted in values and principles that prioritize excellence and integrity
        </p>
        <button className="bg-[#6B5B3D] hover:bg-[#5A4C33] text-white px-8 py-3 rounded shadow-lg">
          Make enquiry
        </button>
      </div>
    </div>
  )
}