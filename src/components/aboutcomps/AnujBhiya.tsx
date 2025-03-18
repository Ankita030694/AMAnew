import Image from 'next/image';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

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
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/iamanujmalik/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-600 hover:text-gray-800" size={24} />
            </a>
            <a href="https://www.instagram.com/amalegalsolutions/?hl=en" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-600 hover:text-gray-800" size={24} />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-gray-700">
            I am Anuj Anand Malik, an advocate, legal consultant, banking lawyer, and loan settlement expert, committed to helping individuals, startups, and businesses overcome financial challenges and achieve legal security. With in-depth expertise in loan settlements, corporate compliance, business contracts, dispute resolution, and financial litigation, I provide strategic legal counsel and expert representation to safeguard clients’ interests through risk mitigation, regulatory compliance, and financial stability.
          </p>

          <p className="text-gray-700">
            As a member of the Indo-American Chamber of Commerce (IACC), Mumbai Centre for International Arbitration (MCIA), Bar Council of Delhi, and Bar Council of India, I bring a global legal perspective to every case, ensuring comprehensive and effective legal solutions.
          </p>

          <p className="text-gray-700">
            At AMA Legal Solutions, we are driven by a passion for empowering clients with business-focused legal strategies that navigate the complexities of India’s evolving legal, corporate, and financial landscape. Our firm is dedicated to delivering tailored legal services, including corporate legal advisory, dispute resolution, and business legal solutions that foster growth, protect assets, and ensure legal clarity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AnujBhiya;