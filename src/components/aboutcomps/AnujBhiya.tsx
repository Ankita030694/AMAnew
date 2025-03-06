import Image from 'next/image'

const AnujBhiya = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 max-w-7xl mx-auto px-4 py-12">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 aspect-[4/4] max-w-md">
        <div className="absolute inset-0 rounded-tr-[100px] -z-10 translate-x-4 translate-y-4" />
        <div className="relative h-full w-full">
          <Image
            src="/anujbhiya.svg"
            alt="Anuj Anand Malik - Founder of AMA Legal Solutions"
            fill
            className="object-cover object-center rounded-lg p-2"
            priority
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 space-y-6">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-gray-900">Anuj Anand Malik</h2>
          <p className="text-xl text-gray-600">Founder</p>
        </div>

        <div className="space-y-4">
          <p className="text-gray-700">
            I&apos;m a dedicated legal professional and the Founder of AMA LEGAL SOLUTIONS. My passion lies in navigating the complex intersections of law, finance, and business.
          </p>

          <p className="text-gray-700">
            I specialize in banking, finance, and arbitration, providing strategic guidance to individuals and corporations to protect their interests in the dynamic economic landscape. In addition to finance, I also create empowering entertainment agreements for creators and handle the intricacies of real estate law. However, my true enthusiasm shines when guiding startups, helping them establish strong legal foundations to thrive in the ever-changing business world.
          </p>

          <p className="text-gray-700">
            I believe law is fundamental to society, driving innovation and nurturing growth. Let&apos;s connect and work together to navigate legal complexities and contribute to your ongoing success.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AnujBhiya