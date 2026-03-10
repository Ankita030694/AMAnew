"use client";

import Image from "next/image";

/* ─── logo pools split across two rows ─── */
const ROW_1_LOGOS = [
  "/newAssets/clientLogos/16.png",
  "/newAssets/clientLogos/3.png",
  "/newAssets/clientLogos/10.png",
  "/newAssets/clientLogos/1.png",
  "/newAssets/clientLogos/7.png",
  "/newAssets/clientLogos/14.png",
  "/newAssets/clientLogos/9.png",
  "/newAssets/clientLogos/4.png",
];

const ROW_2_LOGOS = [
  "/newAssets/clientLogos/5.png",
  "/newAssets/clientLogos/8.png",
  "/newAssets/clientLogos/2.png",
  "/newAssets/clientLogos/6.png",
  "/newAssets/clientLogos/12.png",
  "/newAssets/clientLogos/17.png",
  "/newAssets/clientLogos/15.png",
];

const INVERTED_LOGOS = [
  "/newAssets/clientLogos/9.png",  // Born Hi
  "/newAssets/clientLogos/5.png",  // DNM
];

/* ─── single logo card ─── */
const LogoCard = ({ src }: { src: string }) => {
  const isInverted = INVERTED_LOGOS.includes(src);
  return (
    <div className="logo-card">
      <Image
        src={src}
        alt="Client Logo"
        width={200}
        height={60}
        className={`logo-card-img ${isInverted ? "invert-logo" : ""}`}
        draggable={false}
      />
    </div>
  );
};

/* ─── one infinite-scroll row ─── */
const SliderRow = ({
  logos,
  direction,
}: {
  logos: string[];
  direction: "left" | "right";
}) => {
  // 4 copies to guarantee seamless looping on ultra-wide screens
  const copies = [0, 1, 2, 3];

  return (
    <div className="logo-slider-row-wrap">
      <div
        className="logo-slider-track"
        style={{
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {copies.map((copy) =>
          logos.map((src, i) => (
            <LogoCard key={`${copy}-${i}`} src={src} />
          ))
        )}
      </div>
    </div>
  );
};

/* ─── main component ─── */
const ClientLogoSlider = () => {
  return (
    <section className="client-slider-section">
      {/* heading */}
      <h2 className="client-slider-title">
        Solutions Built Around You 
      </h2>

      {/* row 1 → scrolls left to right */}
      <SliderRow logos={ROW_1_LOGOS} direction="right" />

      {/* row 2 → scrolls right to left */}
      <SliderRow logos={ROW_2_LOGOS} direction="left" />

      {/* ─── scoped styles ─── */}
      <style jsx global>{`
        /* ── section ── */
        .client-slider-section {
          position: relative;
          padding: 3rem 0 3.5rem;
          overflow: hidden;
          background: #f5f3ee;
        }

        /* ── heading ── */
        .client-slider-title {
          font-family: var(--font-polysans), -apple-system, Roboto, Helvetica,
            sans-serif;
          font-weight: 700;
          color: #1a1a1a;
          font-size: 26px;
          line-height: 1.25;
          text-align: center;
          margin: 0 auto 2rem;
          padding: 0 1.5rem;
        }
        @media (min-width: 768px) {
          .client-slider-title {
            font-size: 38px;
            margin-bottom: 2.75rem;
          }
        }

        /* ── row wrapper ── */
        .logo-slider-row-wrap {
          width: 100%;
          overflow: hidden;
          padding: 0.5rem 0;
        }
        .logo-slider-row-wrap + .logo-slider-row-wrap {
          margin-top: 0.75rem;
        }

        /* ── infinite track ── */
        .logo-slider-track {
          display: flex;
          align-items: center;
          gap: 1rem;
          width: max-content;
          animation: logoSlide 45s linear infinite;
          will-change: transform;
        }
        .logo-slider-track:hover {
          animation-play-state: paused;
        }
        @media (min-width: 768px) {
          .logo-slider-track {
            gap: 1.25rem;
          }
        }

        @keyframes logoSlide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }

        /* ── logo card ── */
        .logo-card {
          flex-shrink: 0;
          width: 140px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          border-radius: 14px;
          padding: 12px 18px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06),
            0 2px 8px rgba(0, 0, 0, 0.03);
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }
        .logo-card:hover {
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1),
            0 2px 6px rgba(0, 0, 0, 0.06);
          transform: translateY(-2px);
        }

        @media (min-width: 768px) {
          .logo-card {
            width: 175px;
            height: 80px;
            border-radius: 16px;
            padding: 14px 24px;
          }
        }
        @media (min-width: 1280px) {
          .logo-card {
            width: 195px;
            height: 88px;
          }
        }

        /* ── logo image ── */
        .logo-card-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .invert-logo {
          filter: invert(1);
        }
      `}</style>
    </section>
  );
};

export default ClientLogoSlider;
