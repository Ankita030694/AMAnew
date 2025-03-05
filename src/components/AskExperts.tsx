'use client'
import { useRef } from 'react';
import Image from 'next/image';

const timelineData = [
  {
    year: '1982',
    title: 'Inspired by Justice',
    description: 'Inspired by a deep passion for justice and a vision to serve the community, R.C. Malik pursued law with a commitment to providing exceptional legal counsel.'
  },
  {
    year: '1985-2016',
    title: 'Building On a Foundation',
    description: 'R.C. Malik\'s steadfast dedication and strong ethical compass established a reputation founded on integrity and professionalism.'
  },
  {
    year: '2014-2019',
    title: 'Carrying Forward',
    description: 'Carrying forward the torch of his grandfather\'s vision, Anuj Anand Malik embarked on a journey to honour and expand upon this legacy.'
  },
  {
    year: '2020',
    title: 'Executing the Vision',
    description: 'Anuj Anand Malik infused vitality into the firm, leveraging modern legal strategies while upholding timeless values.'
  },
  {
    year: '2021',
    title: 'Legacy Extended',
    description: 'AMA Legal Solutions upholds enduring vision, values, and legal excellence since inception, guided by integrity and innovation in the profession.'
  }
];

export default function AskExperts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative py-12">
      <Image
        src="/bannerbg.png"
        alt="Background"
        fill
        className="object-cover -z-10"
        quality={100}
      />
      <div className="max-w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-white mb-4">LEGACY EXTENDED</h2>
          <p className="text-sm tracking-widest uppercase text-white">OUR VISION DEFINES OUR ESSENCE</p>
        </div>
        
        <div className="relative">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 p-2 rounded-full shadow-lg text-white"
          >
            ←
          </button>
          
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide no-scrollbar"
            style={{
              scrollbarWidth: 'none',  /* Firefox */
              msOverflowStyle: 'none',  /* IE and Edge */
            }}
          >
            <div className="flex space-x-8 min-w-max p-4 relative">
              {/* Timeline Line */}
              <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-white" />
              
              {timelineData.map((item, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center w-80 relative"
                >
                  {index % 2 === 0 ? (
                    // Even items - Year below line
                    <>
                      <div className="flex flex-col items-center mb-16">
                        <h3 className="text-xl font-medium mb-4 text-white">
                          {item.title}
                        </h3>
                        <p className="text-white text-center leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white transform rotate-45" />
                      <div className="text-3xl font-serif text-white mt-16">
                        {item.year}
                      </div>
                    </>
                  ) : (
                    // Odd items - Year above line
                    <>
                      <div className="text-3xl font-serif text-white mb-16">
                        {item.year}
                      </div>
                      <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white transform rotate-45" />
                      <div className="flex flex-col items-center mt-16">
                        <h3 className="text-xl font-medium mb-4 text-white">
                          {item.title}
                        </h3>
                        <p className="text-white text-center leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 p-2 rounded-full shadow-lg text-white"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}