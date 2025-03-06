'use client'
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    // Store the current value of the ref
    const currentScrollContainer = scrollContainerRef.current;
    
    let lastScrollPosition = 0;
    const handleScroll = () => {
      if (currentScrollContainer) {
        const currentScrollPosition = currentScrollContainer.scrollLeft;
        const isScrollingRight = currentScrollPosition > lastScrollPosition;
        
        controls.start({
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 20
          }
        });

        timelineData.forEach((_, index) => {
          const delay = isScrollingRight ? index * 0.1 : (timelineData.length - index) * 0.1;
          controls.start(`visible${index}`, {
            delay
          });
        });

        lastScrollPosition = currentScrollPosition;
      }
    };

    if (currentScrollContainer) {
      currentScrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      // Use the stored value in cleanup
      if (currentScrollContainer) {
        currentScrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [controls]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      className="relative py-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Image
        src="/bannerbg.png"
        alt="Background"
        fill
        className="object-cover -z-10"
        quality={100}
      />
      <div className="max-w-full">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-serif text-[#D2A02A] mb-4">LEGACY EXTENDED</h2>
          <p className="text-sm tracking-widest uppercase text-white">OUR VISION DEFINES OUR ESSENCE</p>
        </motion.div>
        
        <div className="relative">
          <motion.button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 p-2 rounded-full shadow-lg text-white"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.9 }}
          >
            ←
          </motion.button>
          
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide no-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <motion.div 
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              className="flex space-x-8 min-w-max p-4 relative"
            >
              <motion.div 
                className="absolute left-0 right-0 top-1/2 h-0.5 bg-white"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              
              {timelineData.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  className="flex flex-col items-center w-80 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {index % 2 === 0 ? (
                    <>
                      <motion.div 
                        className="flex flex-col items-center mb-16"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ delay: index * 0.2 }}
                      >
                        <h3 className="text-xl font-medium mb-4 text-white">
                          {item.title}
                        </h3>
                        <p className="text-white text-center leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                      <motion.div 
                        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white transform rotate-45"
                        animate={{ rotate: [45, 225, 45], scale: [1, 1.2, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <motion.div 
                        className="text-3xl font-serif text-[#D2A02A] mt-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ delay: index * 0.3 }}
                      >
                        {item.year}
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <motion.div 
                        className="text-3xl font-serif text-[#D2A02A] mb-16"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ delay: index * 0.3 }}
                      >
                        {item.year}
                      </motion.div>
                      <motion.div 
                        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white transform rotate-45"
                        animate={{ rotate: [45, 225, 45], scale: [1, 1.2, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <motion.div 
                        className="flex flex-col items-center mt-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <h3 className="text-xl font-medium mb-4 text-white">
                          {item.title}
                        </h3>
                        <p className="text-white text-center leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 p-2 rounded-full shadow-lg text-white"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.9 }}
          >
            →
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}