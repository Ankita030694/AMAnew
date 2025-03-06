import Image from 'next/image';

export default function Clients() {
  return (
    <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-xl -mt-32 md:-mt-36">
        <div className="p-4 md:p-6 flex justify-center items-center">
          <Image 
            src="/logot.png" 
            alt="AMA Legal Solutions" 
            width={900} 
            height={900} 
            quality={100}
            className='object-contain'
          />
        </div>
      </div>
    </div>
  );
}
