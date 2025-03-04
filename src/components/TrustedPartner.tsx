import Image from 'next/image';

export default function TrustedPartner() {
  return (
    <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-xl -mt-32 md:-mt-40">
        <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#6B5B3D]">
              Trusted Legal Partnerships
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputate.
            </p>
            <div>
              <Image
                src="/signature.png"
                alt="Signature"
                width={50}
                height={50}
                className="h-16 w-auto"
              />
              <p className="text-gray-700 mt-2">Julio Jefferson</p>
            </div>
          </div>

          {/* Image */}
          <div className="hidden md:block">
            <div className="aspect-w-4 aspect-h-3 flex items-center justify-center">
              <Image
                src="/imagee.png"
                alt="Lawyer"
                width={151}
                height={210}
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}