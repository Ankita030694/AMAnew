import Image from 'next/image';

const TributeCard = () => {
  return (
    <div className="bg-white text-[#6B5B3D] p-4 sm:p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start justify-start max-w-7xl mx-auto shadow-lg rounded-lg">
      <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
        <Image
          src="/imagee.png"
          alt="R.C. Malik"
          width={200}
          height={200}
          className="rounded-full border-4 border-[#6B5B3D] w-40 h-40 sm:w-48 sm:h-48 md:w-[200px] md:h-[200px]"
        />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">LATE ADV. R.C. MALIK</h1>
        <h2 className="text-lg sm:text-xl mt-4 text-gray-700 font-medium">Ex-Comptroller and Auditor General of India</h2>
        <h3 className="text-base sm:text-lg text-gray-700">Director General of Audit (Central-Receipt)</h3>
        <p className="mt-6 text-gray-600 leading-relaxed max-w-3xl text-sm sm:text-base">
          R.C. Malik started his professional journey as a gazetted officer at DGACR, progressing through different roles within the Income Tax Department before taking on administrative duties at the Office of the Comptroller and Auditor General (CAG) of India. After retiring from the CAG office, R.C. Malik transitioned into a legal career as an advocate specializing in taxation, leveraging the extensive experience gained during his tenure as an officer.
        </p>
        <div className="mt-8 flex justify-center md:justify-start">
          <Image
            src="/signature.png"
            alt="Signature"
            width={120}
            height={60}
            className="h-10 sm:h-12 w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default TributeCard;