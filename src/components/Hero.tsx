import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      <div className="absolute inset-0 bg-gray-900">
        <Image
          src="/hero.svg"
          alt="Hero background"
          fill
          quality={100}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
          className="object-cover object-top sm:object-center opacity-70"
          priority
          style={{ position: 'absolute' }}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl mb-6">
          EMPOWERING LEGAL EXPERTISE
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
        AMA Legal Solutions embodies a firm culture rooted in values and principles that prioritize excellence and integrity
        </p>
        <button className="bg-[#6B5B3D] hover:bg-[#5A4C33] text-white px-8 py-3 rounded">
          Make enquiry
        </button>
      </div>
    </div>
  )
}