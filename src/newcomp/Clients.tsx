import Image from "next/image";
import { Fragment } from "react";

const ALL_LOGOS = [
  "/newAssets/clientLogos/16.png", // Globaton
  "/newAssets/clientLogos/3.png",  // HDFC
  "/newAssets/clientLogos/11.png", // Billcut
  "/newAssets/clientLogos/10.png", // 9Consultants
  "/newAssets/clientLogos/1.png",  // BCB
  "/newAssets/clientLogos/7.png",  // Hero Fincorp
  "/newAssets/clientLogos/14.png", // SettleLoans
  "/newAssets/clientLogos/9.png",  // Born Hi
  "/newAssets/clientLogos/4.png",  // IPR Karo
  "/newAssets/clientLogos/5.png",  // DNM
  "/newAssets/clientLogos/8.png",  // Jivo Energy
  "/newAssets/clientLogos/2.png",  // Designncode
  "/newAssets/clientLogos/13.png", // milsipp
  "/newAssets/clientLogos/6.png",  // CredSettle
  "/newAssets/clientLogos/12.png", // Pinecone
  "/newAssets/clientLogos/17.png", // Jivo Solutions
  "/newAssets/clientLogos/15.png", // Globaton
];

const Clients = () => {
  // Unit percentage for staggering (approx width of one logo + separator space)
  const UNIT_PCT = 22; // 18% logo + 4% separator space approx

  return (
    <section 
      className="relative py-8 md:py-16 px-4 md:px-8 overflow-hidden"
      style={{
        background: "linear-gradient(270deg, #D29E0D 30.76%, rgba(255, 255, 255, 0.00) 100%)"
      }}
    >

      <div className="w-full">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Left side - Heading */}
          <div className="flex-shrink-0 pt-0 md:pt-4 w-full md:w-[25%] md:ml-[4%] text-left">
            <h2 
              className="text-[31px] md:text-[47px] leading-[1.2] font-normal text-[#30261C]"
              style={{
                fontFamily: "var(--font-polysans), -apple-system, Roboto, Helvetica, sans-serif",
                fontStyle: "normal"
              }}
            >
              Solutions Built<br />Around You
            </h2>
          </div>

          {/* Mobile Grid View */}
          <div className="block md:hidden w-full flex flex-col gap-8 mt-4 px-2">
             {(() => {
                const rows: string[][] = [];
                let i = 0;
                while (i < ALL_LOGOS.length) {
                  const isThree: boolean = rows.length % 2 === 0;
                  const take: number = isThree ? 3 : 2;
                  rows.push(ALL_LOGOS.slice(i, i + take));
                  i += take;
                }
                return rows.map((row, rowIndex) => (
                  <div 
                    key={rowIndex} 
                    className={`flex items-center w-full ${
                      row.length === 3 ? 'justify-between' : 'justify-center gap-4'
                    }`}
                  >
                    {row.map((src, idx) => (
                      <Fragment key={idx}>
                        <div className="relative w-[28%] h-[50px] flex items-center justify-center">
                          <Image 
                            src={src} 
                            alt="Client Logo" 
                            fill
                            className="object-contain"
                          />
                        </div>
                        {idx < row.length - 1 && (
                          <div className="w-[1px] h-[30px] bg-[#30261C]" />
                        )}
                      </Fragment>
                    ))}
                  </div>
                ));
             })()}
          </div>

          {/* Desktop Right side - Logo Grid with staggered rows */}
          <div className="hidden md:block flex-1 relative">
            <div className="flex flex-col gap-[1vw]">
              {/* Row 1: Globaton | HDFC | Billcut - rightmost */}
              <div className="flex items-center justify-end">
                <div className="flex items-center w-full justify-end">
                  <LogoCard src="/newAssets/clientLogos/16.png" /> {/* Globaton */}
                  <div className="ml-[4%]">
                  <Separator/>

                  </div>
                  <LogoCard src="/newAssets/clientLogos/3.png" />  {/* HDFC */}
                  <Separator />
                  <LogoCard src="/newAssets/clientLogos/11.png" /> {/* Billcut */}
                </div>
              </div>

              {/* Row 2: 9Consultants | BCB | Hero Fincorp - offset 1 unit left */}
              <div className="flex items-center justify-end" style={{ marginRight: `${UNIT_PCT * 0.3}%` }}>
                <div className="flex items-center w-full justify-end">
                  <LogoCard src="/newAssets/clientLogos/10.png" /> {/* 9Consultants */}
                <div className="px-[4%]">
                  <Separator/>

                </div>


                  <LogoCard src="/newAssets/clientLogos/1.png" />  {/* BCB */}
                  <div className="px-[4%]">
                  <Separator/>

                  </div>
                  <LogoCard src="/newAssets/clientLogos/7.png" />  {/* Hero Fincorp */}
                  <div className="px-[2%]">
                  <Separator/>

                  </div>

                </div>
              </div>

              {/* Row 3: SettleLoans | Born Hi | IPR Karo | DNM - offset 2 units left */}
              <div className="flex items-center justify-end" style={{ marginRight: `${UNIT_PCT * 0.2}%` }}>
                <div className="flex items-center w-full justify-end">
                  <LogoCard src="/newAssets/clientLogos/14.png" /> {/* SettleLoans */}

                  <Separator />
                  <LogoCard src="/newAssets/clientLogos/9.png" className="mx-[2%]" />  {/* Born Hi */}
                  <Separator />
                  <LogoCard src="/newAssets/clientLogos/4.png" />  {/* IPR Karo */}
                  <Separator />
                  <div className="px-[2%]">

                  </div>
                  <LogoCard src="/newAssets/clientLogos/5.png" />  {/* DNM */}
                </div>
              </div>

              {/* Row 4: Jivo Energy | Designncode | LD Counsels | CredSettle - offset 3 units left */}
              <div className="flex items-center justify-end" style={{ marginRight: `${UNIT_PCT * 0.3}%` }}>
                <div className="flex items-center w-full justify-end">

                  <LogoCard src="/newAssets/clientLogos/8.png" />  {/* Jivo Energy */}
                  <div className="px-[8%]">
                  <Separator />

                  </div>
                  <LogoCard src="/newAssets/clientLogos/2.png" />  {/* Designncode */}
                  <div className="px-[4%]">
                  <Separator />

                  </div>
                  <LogoCard src="/newAssets/clientLogos/13.png" /> {/* milsipp */}

                  <Separator />
                  <LogoCard src="/newAssets/clientLogos/6.png" />  {/* CredSettle */}
                  <div className="px-[2%]">
                  <Separator />

                  </div>
                </div>
              </div>

              {/* Row 5: Globaton | milsipp | Pinecone | Jivo Solutions | Globaton - offset 4 units left */}
              <div className="flex items-center justify-end" style={{ marginRight: `${UNIT_PCT * 0.1}%`, marginLeft: "40px" }}>
                <div className="flex items-center w-full justify-end">

                  <div className="px-[4%]">


                  </div>

                  <LogoCard src="/newAssets/clientLogos/12.png" /> {/* Pinecone */}
                  <div className="px-[4%]">
                  <Separator />

                  </div>
                  <LogoCard src="/newAssets/clientLogos/17.png" /> {/* Jivo Solutions */}
                  <div className="px-[4%]">
                  <Separator />

                  </div>
                  <LogoCard src="/newAssets/clientLogos/15.png" /> {/* Globaton */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LogoCard = ({ src, className = "" }: { src: string, className?: string }) => {
  return (
    <div className={`w-[18%] aspect-[220/130] flex items-center justify-center px-[1%] ${className}`}>
      <Image 
        src={src} 
        alt="Client Logo" 
        width={250} 
        height={70}
        className="w-full h-auto object-contain"
      />
    </div>
  );
};

const Separator = () => {
  return (
    <div className="w-[1px] h-[4vw] bg-[#30261C]" />
  );
};

export default Clients;
