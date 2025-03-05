import Image from 'next/image';

const TributeCard = () => {
  return (
    <div className="bg-white text-[#6B5B3D] p-12 flex flex-row items-start justify-start max-w-7xl mx-auto shadow-lg rounded-lg">
      <div className="flex-shrink-0 mr-12">
        <Image
          src="/imagee.png"
          alt="R.C. Malik"
          width={200}
          height={200}
          className="rounded-full border-4 border-[#6B5B3D]"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-4xl font-bold tracking-wide">LATE ADV. R.C. MALIK</h1>
        <h2 className="text-xl mt-4 text-gray-700 font-medium">Ex-Comptroller and Auditor General of India</h2>
        <h3 className="text-lg text-gray-700">Director General of Audit (Central-Receipt)</h3>
        <p className="mt-6 text-gray-600 leading-relaxed max-w-3xl">
          R.C. Malik started his professional journey as a gazetted officer at DGACR, progressing through different roles within the Income Tax Department before taking on administrative duties at the Office of the Comptroller and Auditor General (CAG) of India. After retiring from the CAG office, R.C. Malik transitioned into a legal career as an advocate specializing in taxation, leveraging the extensive experience gained during his tenure as an officer.
        </p>
        <div className="mt-8">
          <Image
            src="/signature.png"
            alt="Signature"
            width={120}
            height={60}
            className="h-12 w-auto -m-9 mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default TributeCard;