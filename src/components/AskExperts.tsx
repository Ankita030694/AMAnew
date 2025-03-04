import Image from 'next/image';

export default function AskExperts() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <Image
          src="/bannerbg.png"
          alt="Banner background"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              Have Legal Questions? Ask Our Experts!
            </h2>
            <button className="bg-[#6B5B3D] hover:bg-[#5A4C33] text-white px-8 py-3 rounded transition-colors duration-300">
              Ask an expert
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}