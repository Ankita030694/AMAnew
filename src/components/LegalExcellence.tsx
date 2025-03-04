import Image from 'next/image'

export default function LegalExcellence() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/excellence.jpg"
              alt="Legal Excellence"
              fill
              className="object-cover rounded-lg"
              priority
            />
            {/* Brown gradient overlay */}
            <Image
              src="/anujbhiya.png"
              alt="Anuj Bhiya"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#6B5B3D] leading-tight">
              Legal Excellence,<br />
              Personalized Care
            </h2>
            <p style={{color: "#6B5B3D"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste aut accusantium cupiditate laudantium voluptas placeat magnam dolore quidem dolorem, sunt porro quod recusandae perspiciatis iusto. Quae, eaque molestias maiores vitae earum nobis quis eveniet aut, fugiat a eum, pariatur numquam velit nostrum dignissimos ipsam necessitatibus non illum repellendus quia quidem.</p>
            <button className="bg-[#6B5B3D] hover:bg-[#5A4C33] text-white px-8 py-3 rounded transition-colors duration-300">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 