"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function page() {
  // Sample service data (replace with your actual content)
  const service = {
    title: "Professional Consultation",
    bannerImage: "/services/5.png", // Replace with your actual image path
    description:
      "Our professional consultation service provides expert guidance tailored to your specific needs. We work closely with you to understand your requirements and deliver solutions that exceed your expectations. Our team of experienced consultants brings years of industry knowledge to help you navigate complex challenges and achieve your goals.",
    buttonText: "Get Started",
    buttonLink: "/contact",
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Banner Section - 1920x550 as specified */}
      <motion.div
        className="relative w-full h-[300px] md:h-[550px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={service.bannerImage}
          alt={service.title}
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Service Description Section */}
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-[#5A4C33] text-lg leading-relaxed mb-8">
            <strong>
              Entertainment Law Services – Legal Protection for Artists,
              Creators & Media Businesses
            </strong>
            <br />
            <br />
            <strong>
              Legal Solutions for the Entertainment & Media Industry
            </strong>
            <br />
            <br />
            The entertainment industry is evolving rapidly, and legal protection
            is essential for artists, filmmakers, musicians, influencers,
            content creators, production houses, and media companies. Whether
            it’s contract negotiations, intellectual property protection,
            licensing deals, or dispute resolution, expert legal assistance
            ensures that your rights and creative work remain safeguarded.
            <br />
            <br />
            At AMA Legal Solutions, we provide comprehensive entertainment law
            services to protect the legal and commercial interests of
            professionals and businesses in the film, music, television, digital
            media, and performing arts sectors.
            <br />
            <br />
            <strong>Our Entertainment Law Services:</strong>
            <br />
            <br />
            <strong>1. Contract Drafting & Negotiation</strong>
            <br />
            Contracts are the backbone of any entertainment deal. We assist
            with:
            <br />
            • Artist and talent agreements
            <br />
            • Film production contracts
            <br />
            • Music licensing and distribution agreements
            <br />
            • Brand endorsement and influencer contracts
            <br />
            • Publishing and distribution deals
            <br />
            <br />
            <strong>2. Intellectual Property Rights (IPR) Protection</strong>
            <br />
            Creative works need strong legal protection to prevent unauthorized
            use. We specialize in:
            <br />
            • Copyright registration for films, music, scripts, and content
            <br />
            • Trademark protection for artists, brands, and production houses
            <br />
            • Patent and design protection for innovative media technology
            <br />
            • Legal action against content piracy and copyright infringement
            <br />
            <br />
            <strong>3. Film & Music Industry Legal Compliance</strong>
            <br />
            The entertainment industry is subject to complex regulations. We
            provide:
            <br />
            • Censorship and content regulation compliance (CBFC certification,
            IT laws, media laws)
            <br />
            • Music royalties and licensing compliance with IPRS & PPL
            regulations
            <br />
            • OTT platform regulations and digital content compliance
            <br />
            <br />
            <strong>4. Influencer & Social Media Law</strong>
            <br />
            With the rise of digital media, influencers, and content creators,
            legal support is crucial to:
            <br />
            • Draft brand collaboration agreements
            <br />
            • Protect content rights and licensing
            <br />
            • Ensure compliance with advertising and endorsement laws
            <br />
            • Resolve disputes with brands and platforms
            <br />
            <br />
            <strong>5. Defamation & Media Law Protection</strong>
            <br />
            Reputation is everything in entertainment. We handle:
            <br />
            • Defamation lawsuits for celebrities, artists, and brands
            <br />
            • Media disputes and unauthorized publications
            <br />
            • Social media harassment and legal remedies
            <br />
            <br />
            <strong>6. Dispute Resolution & Litigation</strong>
            <br />
            We provide legal representation for:
            <br />
            • Contract breaches in entertainment deals
            <br />
            • Music and film copyright infringement cases
            <br />
            • Royalties and revenue disputes
            <br />
            • Alternative Dispute Resolution (ADR) for media conflicts
            <br />
            <br />
            <strong>
              Who Can Benefit from Our Entertainment Law Services?
            </strong>
            <br />
            <br />
            • Film production houses & OTT platforms
            <br />
            • Musicians, composers, and record labels
            <br />
            • Actors, directors, and scriptwriters
            <br />
            • Social media influencers & digital content creators
            <br />
            • Event organizers and talent management agencies
            <br />
            • Gaming and e-sports professionals
            <br />
            <br />
            <strong>Why Choose AMA Legal Solutions?</strong>
            <br />
            <br />• <strong>Industry Expertise</strong> – Legal specialists with
            deep knowledge of media, entertainment, and intellectual property
            laws.
            <br />• <strong>Tailored Legal Solutions</strong> – We offer
            customized legal strategies for artists, creators, and media
            businesses.
            <br />• <strong>Strong Contract Negotiation & Drafting</strong> – We
            ensure fair and legally sound agreements for all parties.
            <br />• <strong>Effective Dispute Resolution & Litigation</strong> –
            Protecting clients from contract breaches, content misuse, and
            defamation.
            <br />• <strong>Confidentiality & Legal Protection</strong> –
            Ensuring that your rights, content, and business interests remain
            protected.
            <br />
            <br />
            <strong>
              Need Legal Assistance in Entertainment Law? Contact Us Today
            </strong>
            <br />
            <br />
            If you are in the entertainment industry and require legal support
            for contracts, copyright protection, disputes, or media regulations,
            AMA Legal Solutions is here to help.
            <br />
            <br />
            📞 Call us at <strong>+91-8700343611</strong>
            <br />
            🌐 Visit:{" "}
            <a
              href="http://www.amalegalsolutions.com"
              className="text-blue-600 underline"
            >
              www.amalegalsolutions.com
            </a>
            <br />
            📍 <strong>Office Location: Sector-57, Gurugram</strong>
          </p>

          {/* Feature Highlights */}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href={service.buttonLink}>
            <div
              className="inline-block bg-[#D2A02A] text-white px-8 py-4 rounded-md font-medium 
                text-lg cursor-pointer hover:bg-[#5A4C33] transition-colors duration-300"
            >
              {service.buttonText}
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
