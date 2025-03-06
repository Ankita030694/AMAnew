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
            I am Anuj Anand Malik, a dedicated advocate, legal consultant, and business lawyer in India, and the Founder of AMA Legal Solutions, a top law firm in Gurugram specializing in banking and finance law, corporate law, arbitration, real estate law, and entertainment law.
          </p>

          <p className="text-gray-700">
            With extensive experience in loan settlements, debt restructuring, corporate compliance, business contracts, dispute resolution, and financial litigation, I provide strategic legal advisory and expert legal services to individuals, startups, and businesses across India, ensuring risk mitigation, regulatory compliance, and financial security. As a member of the Indo-American Chamber of Commerce (IACC), Mumbai Centre for International Arbitration (MCIA), Bar Council of Delhi, and Bar Council of India, I bring a global legal perspective to every case.
          </p>

          <p className="text-gray-700">
            My passion lies in empowering clients with business-driven legal strategies to navigate India&apos;s evolving legal, corporate, and financial landscape. At AMA Legal Solutions, we are committed to providing trusted legal solutions, corporate legal advisory, dispute resolution, and business legal services that support growth, protect assets, and ensure legal clarity.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AnujBhiya