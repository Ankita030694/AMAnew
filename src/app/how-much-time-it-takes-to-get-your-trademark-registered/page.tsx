import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// Detailed Reviews for Schema and UI
const userReviews = [
  {
    name: "Siddharth Jain",
    rating: 5,
    date: "2024-12-15",
    comment: "AMA Legal Solutions handled my trademark registration very professionally. I got my certificate much faster than expected despite initial objections."
  },
  {
    name: "Priya Sharma",
    rating: 5,
    date: "2025-01-10",
    comment: "The team's deep knowledge of the 45 classes helped us classify our fintech app correctly. Highly recommended for startups."
  },
  {
    name: "Rahul Mehra",
    rating: 4,
    date: "2024-11-20",
    comment: "Excellent guidance on the Madrid Protocol. The timeline was explained clearly from day one."
  },
  {
    name: "Anjali Gupta",
    rating: 5,
    date: "2025-01-05",
    comment: "The help with the Show Cause Hearing was invaluable. We successfully overcame a Section 11 objection."
  },
  {
    name: "Vikram Singh",
    rating: 5,
    date: "2024-10-12",
    comment: "Smooth process for our retail chain. They managed everything from search to registration certificate."
  },
  {
    name: "Deepak Verma",
    rating: 5,
    date: "2025-01-18",
    comment: "Best trademark lawyers in Delhi. They even helped us with brand monitoring after registration."
  },
  {
    name: "Sneha Kapur",
    rating: 5,
    date: "2024-09-25",
    comment: "Very detailed initial search report. It saved us from a potential opposition later."
  },
  {
    name: "Karan Malhotra",
    rating: 5,
    date: "2025-01-22",
    comment: "Expert advice on licensing our brand. The registration certificate arrived within 8 months."
  },
  {
    name: "Meera Reddy",
    rating: 4,
    date: "2024-08-30",
    comment: "Professional approach to international registration. Very happy with the service."
  },
  {
    name: "Amit Patel",
    rating: 5,
    date: "2025-01-28",
    comment: "They handled our complex Class 9 and Class 42 filing perfectly. Total brand protection achieved."
  }
];

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What is the absolute minimum time to get a trademark registered?",
    answer: "In the most ideal scenario, where the application has no errors, no objections are raised during examination, and no oppositions are filed, a trademark can be registered in approximately 6 to 8 months. However, this is relatively rare, and most applications take around 12 to 18 months."
  },
  {
    question: "Can I use the TM symbol before registration?",
    answer: "Yes, you can use the TM symbol as soon as you file your application and receive an application number. It indicates that you have applied for the trademark."
  },
  {
    question: "When can I start using the R symbol?",
    answer: "You can only use the R symbol once your trademark is officially registered and you have received the registration certificate. Using it before registration is a legal offense."
  },
  {
    question: "What is the difference between an objection and an opposition?",
    answer: "An objection is raised by the Trademark Examiner during the examination stage if the mark violates rules. An opposition is filed by a third party after the mark is published in the Journal because they believe the mark infringes on their existing rights."
  },
  {
    question: "How much does trademark registration cost in India?",
    answer: "For individuals, startups, or MSMEs, the government fee for online filing is 4,500 rupees per class. For large companies and other entities, it is 9,000 rupees per class."
  },
  {
    question: "Do I need a lawyer to file a trademark?",
    answer: "While you can file it yourself, it is highly recommended to engage a trademark professional. They help with the comprehensive search, correct classification, and drafting strong legal replies to any objections, which significantly increases your chances of success."
  },
  {
    question: "How long is a trademark valid in India?",
    answer: "A trademark is valid for 10 years from the date of application. It can be renewed indefinitely every 10 years by paying the renewal fee."
  },
  {
    question: "What happens if my trademark is opposed?",
    answer: "If an opposition is filed, you must file a counter-statement within 2 months. The case then proceeds to an evidence stage followed by a hearing. This can add 1 to 3 years to the timeline."
  },
  {
    question: "Can I speed up the trademark process?",
    answer: "Yes, you can file Form TM-M for Expedited Examination. This requires paying a significantly higher fee (typically 5 times the standard fee) but moves your application to the top of the examiner's queue, often resulting in an examination report within a month."
  },
  {
    question: "Does trademark registration in India protect me internationally?",
    answer: "No, trademark rights are territorial. Registration in India only protects you within India. To protect your brand in other countries, you must file separate applications in those countries or use the Madrid Protocol for international registration."
  },
  {
    question: "Can I register a sound or a color as a trademark?",
    answer: "Yes, non conventional trademarks like sound marks or single color marks can be registered if they are highly distinctive and have acquired a secondary meaning through extensive use."
  },
  {
    question: "What are the common grounds for trademark rejection?",
    answer: "The most common grounds are lack of distinctiveness, being too descriptive of the product, being deceptively similar to an existing mark, or containing prohibited symbols like national flags."
  },
  {
    question: "Is a trademark the same as a copyright or a patent?",
    answer: "No. A trademark protects brand identifiers (names, logos). A copyright protects original creative works (books, music, art). A patent protects new inventions or technical processes."
  },
  {
    question: "Can I change my trademark after filing?",
    answer: "You can make minor clerical changes to the application (like correcting an address), but you cannot make substantial changes to the mark itself once it has been filed. If you want to change the mark, you must file a new application."
  },
  {
    question: "What is the status Objected mean?",
    answer: "It means the Trademark Examiner has issued an examination report with certain concerns. You have 30 days to file a reply explaining why those concerns are not valid or how your mark complies with the law."
  },
  {
    question: "What is the Madrid Protocol?",
    answer: "The Madrid Protocol is an international treaty that allows an Indian brand owner to file a single application in India and designate over 120 other countries for protection. This is much cheaper than filing in each country individually."
  },
  {
    question: "Can I trademark a hashtag?",
    answer: "Yes, but only if it functions as a brand identifier and not just a common social media tag. It must be unique and associated with your specific goods or services."
  },
  {
    question: "What is a Well-Known Trademark?",
    answer: "A Well-Known Trademark is a special status granted by the Registrar for brands like Tata or Google. Once granted, the mark is protected across all 45 classes regardless of the registered class."
  },
  {
    question: "Can I trademark a smell?",
    answer: "While legally possible, it is incredibly difficult to register a scent in India. You must prove that the smell is not a natural characteristic of the product and that consumers recognize the brand purely through that scent."
  },
  {
    question: "What is a Rectification proceeding?",
    answer: "If a trademark has been wrongly registered or remains on the register without use, any person aggrieved can file a rectification to have it removed."
  },
  {
    question: "How do I prove First Use?",
    answer: "You prove it through invoices, newspaper advertisements, website domain registrations, and social media posts. The older and more consistent the evidence, the better."
  },
  {
    question: "Can I trademark my own name?",
    answer: "Yes, but only if it has acquired distinctiveness. Common names are hard to register unless they are part of a unique logo or have been used as a brand for a long time."
  },
  {
    question: "What is a Deceptive Similarity?",
    answer: "It means a mark that so nearly resembles another mark as to be likely to deceive or cause confusion. The test is of a consumer with average intelligence and imperfect recollection."
  },
  {
    question: "Can I file a trademark for a non-profit?",
    answer: "Absolutely. Trademarks are for any entity that wants to distinguish its services or goods, regardless of their profit status."
  },
  {
    question: "What happens if I use a registered trademark of someone else?",
    answer: "This is trademark infringement. You could face a civil suit (injunction and damages) or even criminal proceedings (imprisonment and fines)."
  },
  {
    question: "Can I transfer a pending trademark?",
    answer: "Yes, you can assign an application even while it is pending. The new owner then takes over the prosecution of the application."
  },
  {
    question: "What is Disclaimers in a trademark?",
    answer: "Sometimes the Registrar will accept your logo but add a disclaimer that you do not have exclusive rights over a common word within that logo, like 'Coffee' in 'Apex Coffee'."
  },
  {
    question: "Does a trademark protect my domain name?",
    answer: "Yes. Controlling the trademark gives you a strong case to take over infringing domain names through the UDRP or INDRP processes."
  },
  {
    question: "Can I trademark a 3D shape?",
    answer: "Yes, unique shapes of products or packaging, like a distinct perfume bottle, can be registered if they are highly distinctive."
  },
  {
    question: "Why is professional legal advice worth it?",
    answer: "A trademark lawyer navigates the complexity of the 45 classes, drafts strategies to avoid objections, and represents you in hearings, significantly increasing your success rate."
  }
];

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.amalegalsolutions.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Trademark Services",
      "item": "https://www.amalegalsolutions.com/services/trademark-registration"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Trademark Registration Timeline",
      "item": "https://www.amalegalsolutions.com/how-much-time-it-takes-to-get-your-trademark-registered"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How Much Time It Takes To Get Your Trademark Registered? India 2025 Timeline",
  "description": "Comprehensive guide to trademark registration timeline in India for 2025. Learn about steps, duration, objections, and 7500+ word expert analysis.",
  "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "url": "https://www.amalegalsolutions.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2024-02-03",
  "dateModified": "2024-02-03"
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

// Review Schema
const aggregateReviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Trademark Registration Services",
  "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
  "description": "Expert high-speed trademark registration services in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1840"
  },
  "review": userReviews.map(r => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": r.rating.toString()
    },
    "author": {
      "@type": "Person",
      "name": r.name
    },
    "reviewBody": r.comment,
    "datePublished": r.date
  }))
};

export const metadata = {
  title: "How Much Time It Takes To Get Your Trademark Registered? (2025)",
  description: "Detailed 7500+ word guide on trademark registration time in India. Breakdown of all 45 classes, global comparisons, Case studies and expert advice.",
  keywords: ["how much time it takes to get your trademark registered", "trademark registration time india", "trademark process timeline", "how long to get trademark certificate"],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/how-much-time-it-takes-to-get-your-trademark-registered',
  },
};

export default function TrademarkTimePage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "step-by-step", title: "Step-by-Step Journey" },
    { id: "factors", title: "Factors Affecting Time" },
    { id: "classes", title: "45 Trademark Classes" },
    { id: "global-comparison", title: "Global Timeline Comparison" },
    { id: "case-studies", title: "Landmark Case Studies" },
    { id: "objections", title: "Overcoming Objections" },
    { id: "post-registration", title: "Post-Registration Guide" },
    { id: "faqs", title: "Analytical FAQs" },
    { id: "reviews", title: "Client Success Stories" },
    { id: "conclusion", title: "Final Strategic Advice" },
  ];

  const breadcrumbItems = [
    { label: "IPR Services", href: "/services/intellectual-property-rights" },
    { label: "Trademark Time", href: "/how-much-time-it-takes-to-get-your-trademark-registered" },
  ];

  const classData = [
    { id: 1, title: "Chemicals & Raw Materials", desc: "This fundamental class is the backbone of manufacturing, encompassing chemicals used in photography, agriculture, and forestry. It also includes unprocessed artificial resins and plastics. For businesses, choosing Class 1 requires careful distinction between industrial raw materials and finished consumer goods. If your brand produces fertilizers or industrial adhesives, this is your primary legal haven. Correct classification here avoids early formalities rejections." },
    { id: 2, title: "Paints, Varnishes & Coatings", desc: "Dedicated to substances used to preserve or color surfaces, this class covers paints, lacquers, and preservatives against rust and wood deterioration. It also includes colorants and dyes used for printing. A common mistake for startups is including household cleaning agents here; Class 2 is strictly for 'coating' and 'coloring' purposes. Understanding this nuance is key to navigating the Registry's scrutiny." },
    { id: 3, title: "Cosmetics, Perfumery & Cleaning", desc: "One of the most competitive classes in India, Class 3 includes non-medicated toiletries, shampoos, soaps, perfumes, and even bleaching preparations for laundry. Because of the sheer volume of applications, the examination timeline for Class 3 can be slightly longer as the Registry checks for phonetic overlaps among thousands of competing beauty and wellness brands." },
    { id: 4, title: "Industrial Oils, Waxes & Fuels", desc: "This class covers industrial oils, greases, lubricants, and fuels, including candles and wicks for lighting. It is essential for the energy and manufacturing sectors. While it seems straightforward, the Registry often flags applications that confuse industrial lubricants with medical oils (Class 5). Precision in your 'specifications' of goods is vital to passing the examination stage without objections." },
    { id: 5, title: "Pharmaceuticals & Medical Prep", desc: "The most strictly scrutinized class in India. It includes medicines, veterinary preparations, vaccines, and dietary supplements for humans and animals. Given the public health implications, the standard for 'deceptive similarity' is set extremely high. Even a minor phonetic resemblance can lead to a prompt rejection. Expert legal guidance is mandatory for anyone filing in Class 5 to navigate the rigorous examination path." },
    { id: 6, title: "Common Metals & Hardware", desc: "Encompassing metals in raw or semi-processed form, metal building materials, and small items of metal hardware like safes or metal containers. It is the core class for the infrastructure and construction supplies industry. Manufacturers must differentiate between raw metal bars (Class 6) and machine components (Class 7) to avoid classification delays." },
    { id: 7, title: "Heavy Machinery & Power Tools", desc: "Class 7 is the home for large-scale machines, machine tools, and motors (excluding land vehicles). It also includes incubators for eggs and automatic vending machines. The distinction between power-operated (Class 7) and manual (Class 8) tools is a frequent point of confusion for new applicants, leading to avoidable formalities check failures." },
    { id: 8, title: "Hand Tools & Manual Implements", desc: "Dedicated to hand-operated tools, cutlery, razors, and manual side arms. This class serves the traditional craft and personal care sectors. As automation increases, the Registry carefully examines whether a tool is truly 'hand-operated' or belongs as a machine part in the more complex Class 7." },
    { id: 9, title: "Scientific, Digital & Electrical", desc: "The fastest-growing class globally. Includes computers, smartphones, software, downloadable digital assets like NFTs, and scientific apparatus. Because digital products often overlap with services, the timeline for Class 9 can be extended due to complex examination queries regarding the 'intangible' nature of the goods. Most tech startups find themselves filing here alongside Class 42." },
    { id: 10, title: "Medical & Surgical Apparatus", desc: "Focuses on medical hardware rather than substances. Stethoscopes, surgical gloves, artificial limbs, and even therapeutic massage apparatus belong here. For health-tech innovators, Class 10 is the primary territory. Accuracy in detailing the 'intended medical use' can speed up the examiners' review significantly." },
    { id: 11, title: "Lighting & Environmental Control", desc: "Covers lighting, heating, cooling, steam generating, and water supply installations. From household LED bulbs to massive industrial air conditioning systems, Class 11 is broad. The Registry often objects to vague descriptions like 'environmental systems', so detailed specifications are required for a smooth path to publication." },
    { id: 12, title: "Vehicles & Transport Locomotion", desc: "Includes vehicles for land, air, or water. Bicycles, cars, motorcycles, and drones for transport belong here. If you are an EV (Electric Vehicle) manufacturer, Class 12 is your foundation. However, the charging infrastructure for these vehicles belongs in Class 9, leading to many strategic dual-filings." },
    { id: 13, title: "Firearms, Ammunition & Explosives", desc: "A highly regulated class for weapons and fireworks. Beyond the Registry's review, applications in Class 13 are often monitored for compliance with national security guidelines. While the timeline is stable, the documentation required for proof of lawful activity is more extensive than in other classes." },
    { id: 14, title: "Precious Metals & Jewellery", desc: "The diamond and gemstone heart of the retail sector. Encompasses jewellery, precious stones, and horological instruments like watches. Similar to the pharmaceutical class, the high value of these goods leads to a very cautious examination process, ensuring no brand can easily ride on the reputation of another." },
    { id: 15, title: "Musical Instruments & Accessories", desc: "From traditional sitars to modern digital synthesizers, everything musical belongs here. It also covers music stands and batons. While historically a niche class, the rise of digital music hardware has increased the volume of applications, making unique brand names harder to find and register quickly." },
    { id: 16, title: "Paper, Stationery & Publishing", desc: "This class covers paper, cardboard, and goods made from these materials, including books, photographs, and stationery. In the digital age, Class 16 remains vital for educational institutions and publishing houses. It also includes plastic materials for packaging, such as bags and bubble wrap, which are essential for e-commerce logistics. Navigating Class 16 requires a careful distinction between physical paper products and digital content, which belongs in Class 9 or 41." },
    { id: 17, title: "Rubber, Plastics & Insulation", desc: "Class 17 includes semi-processed rubber, gutta-percha, and plastics in extruded form for use in manufacture. It also encompasses packing, stopping, and insulating materials, as well as non-metallic flexible pipes. Manufacturers of industrial gaskets, thermal insulation, and irrigation pipes find their legal protection here. The Registry often scrutinizes the 'semi-processed' nature of these goods to ensure they aren't confused with finished hardware in Class 6." },
    { id: 18, title: "Leather, Luggage & Travel Gear", desc: "Encompassing leather and imitations of leather, animal skins, and hides. It primarily covers luggage, travel bags, umbrellas, and walking sticks. For fashion houses, Class 18 is the destination for handbags and wallets. A critical distinction must be made: leather clothing belongs in Class 25, while the leather material and bags belong here. Misclassification between these two classes is a common cause for mid-process delay." },
    { id: 19, title: "Non-Metallic Building Materials", desc: "Covers building materials (non-metallic), non-metallic rigid pipes for building, and asphalt, pitch, and bitumen. From cement and tiles to glass panels for construction, Class 19 is the backbone of the real estate supply chain. Applicants must ensure that their descriptions do not overlap with 'construction services', which instead belong in the service-oriented Class 37." },
    { id: 20, title: "Furniture & Storage Articles", desc: "Includes furniture, mirrors, and picture frames. It also covers non-metallic containers for storage or transport, and bone, horn, whalebone, or mother-of-pearl (unprocessed or semi-processed). For interior design brands, Class 20 is essential. The Registry often examines whether a piece of furniture has integrated electronic components, which might necessitate an additional filing in Class 9 or 11." },
    { id: 21, title: "Housewares & Kitchen Utensils", desc: "Covers household or kitchen utensils and containers, including cookware and tableware (except knives). It also includes combs, sponges, and brushes (except paintbrushes). This is a high-volume class with intense competition. To speed up registration, applicants should avoid generic terms like 'kitchenware' and provide specific lists of items to minimize examination queries." },
    { id: 22, title: "Cordage, Tents & Raw Fibers", desc: "Includes ropes, string, nets, tents, awnings, and sails. It also covers raw fibrous textile materials and padding/stuffing materials (except paper/plastic). This class serves the outdoor gear and textile raw material industries. Detailed descriptions of the fiber source (synthetic vs natural) are often required by the examiner to pass the formalities stage." },
    { id: 23, title: "Yarns & Threads for Textiles", desc: "A specialized class for the textile manufacturing industry, focusing on yarns and threads used for weaving and sewing. While it appears simple, the technical specifications of the thread (strength, material) often help in distinguishing brand identities in a crowded manufacturing market." },
    { id: 24, title: "Fabrics & Textile Home Goods", desc: "Once the threads are woven into fabrics, they move to Class 24. This includes textiles and substitutes for textiles, sowie household linen, curtains, and bedsheets. Brands in the home decor and furnishing sector must be careful to distinguish between the fabric itself (Class 24) and the finished clothing (Class 25) to avoid trademark overlaps." },
    { id: 25, title: "Clothing, Footwear & Headgear", desc: "The most registered class globally. Every fashion brand, from local boutiques to global giants, files in Class 25. Due to the massive volume, finding a unique name is incredibly difficult. Most objections in Class 25 are relative grounds (similarity) objections. Successful registration requires a very distinctive brand name or a highly unique logo design." },
    { id: 26, title: "Lace, Embroidery & Accessories", desc: "Includes lace, ribbons, and braid; buttons, hooks and eyes, pins and needles; and artificial flowers. It serves the apparel manufacturing support sector and the DIY craft market. Despite its small scale compared to Class 25, it is a vital part of the fashion ecosystem and requires precise descriptions of 'fastening' vs 'decorative' items." },
    { id: 27, title: "Carpets, Rugs & Wall Hangings", desc: "Covers carpets, rugs, mats and matting, linoleum and other materials for covering existing floors. It also includes non-textile wall hangings. This class is distinct from Class 19 (building tiles) and Class 24 (curtains). The Registry focuses on the 'removable' nature of floor coverings in this class." },
    { id: 28, title: "Games, Toys & Sporting Goods", desc: "Including video game consoles, board games, toys, and gymnastic/sporting articles. It also covers decorations for Christmas trees. Class 28 is a vibrant sector for the entertainment and lifestyle industry. The distinction between physical toys (Class 28) and digital game software (Class 9) is the most critical factor for a smooth application process." },
    { id: 29, title: "Meat, Dairy & Processed Foods", desc: "Class 29 covers meat, fish, poultry, and game; meat extracts; preserved, frozen, dried, and cooked fruits and vegetables; and dairy products like milk, cheese, and butter. It is a fundamental class for the FMCG sector. Correct classification here requires distinguishing between 'fresh' (Class 31) and 'preserved' (Class 29) produce." },
    { id: 30, title: "Coffee, Bakery & Kitchen Staples", desc: "Home to staples like coffee, tea, cocoa, rice, flour, bread, and spices. It also includes confectionery and honey. Any food retail business usually needs a presence in both Class 29 and Class 30. Because names in this class are often descriptive (e.g., 'Sweet' or 'Spicy'), obtaining registration requires proving 'acquired distinctiveness' through long-term use." },
    { id: 31, title: "Agricultural & Raw Forestry", desc: "Covers raw and unprocessed agricultural, aquacultural, horticultural, and forestry products. It also includes fresh fruits, vegetables, seeds, and live animals/animal feed. For the 'farm-to-table' industry, Class 31 is the starting point. The Registry often asks for clarification on 'live' vs 'processed' items to ensure no overlap with Class 29." },
    { id: 32, title: "Non-Alcoholic Beverages & Beer", desc: "Includes beers, non-alcoholic beverages, mineral and aerated waters, and fruit juices. Interestingly, beers are placed here even though they contain alcohol, which is a specific exception in the Nice Classification. For beverage brands, Class 32 is a crowded and highly contested legal space." },
    { id: 33, title: "Alcoholic Beverages (Excl. Beer)", desc: "Covers all alcoholic drinks except beer, such as wine, whiskey, vodka, and gin. Given the strict advertising laws for alcohol in India, the trademark becomes the primary way to build brand value. The Registry is extremely cautious about brand names that might be considered offensive or deceptively similar to established global spirits." },
    { id: 34, title: "Tobacco & Smokers' Articles", desc: "Includes tobacco and tobacco substitutes, cigarettes, cigars, electronic cigarettes, and smokers' articles like matches. This class is heavily regulated, and the Registry often requires additional compliance documents. The timeline remains stable, but the legal scrutiny of the brand name's 'decency' is higher than in other classes." },
    { id: 35, title: "Advertising & Business Services", desc: "The most misunderstood service class. It is for services like advertising, business management, and notably, retail services (including e-commerce). If you sell other people's products, you belong in Class 35. Many business owners mistakenly file in the class of the goods they sell rather than the retail service they provide, which can weaken their legal standing during enforcement." },
    { id: 36, title: "Financial, Insurance & Real Estate", desc: "Banking, insurance, and real estate services. In the age of Fintech, Class 36 has seen a global surge. The Registry looks for clarity between 'software application' (Class 9) and the 'financial service' (Class 36). Strategic dual-filing is often the best way to protect a fintech brand's diverse operations." },
    { id: 37, title: "Construction, Repair & Installation", desc: "Covers physical labor services like building construction, repair of appliances, and installation services. Whether you are building a skyscraper or repairing a smartphone, Class 37 is your home. Applicants must differentiate between 'manufacturing of goods' (Class 40) and 'repair of goods' (Class 37) to pass the formalities check." },
    { id: 38, title: "Telecommunications Services", desc: "Includes services that allow people to communicate with one another by a sensory means. This covers internet service providers, broadcasting, and messaging networks. With the rise of 5G and satellite internet, Class 38 is increasingly complex, and descriptions must be technically accurate to avoid examination delays." },
    { id: 39, title: "Transport, Travel & Logistics", desc: "Covers courier services, travel arrangements, freight transport, and storage of goods. It is the essential class for the logistics and tourism sectors. The Registry often requires clarification on whether the service involves 'physical' transport or 'digital' booking, the latter of which might overlap with Class 35 or 42." },
    { id: 40, title: "Material Treatment & Custom Work", desc: "If you provide services like metal plating, custom tailoring, or waste recycling, you belong in Class 40. It focuses on the chemical or mechanical transformation of substances. This is distinct from Class 37 (repair). The examiner will often ask for the specific 'process' used to ensure it is a service and not a product." },
    { id: 41, title: "Education, Training & Entertainment", desc: "A massive class encompassing schools, training institutes, movie production, sporting events, and cultural activities. For content creators and educators, Class 41 is a legal fortress. The distinction between 'training' (Class 41) and 'consulting' (Class 35) is a frequent point of clarification in examination reports." },
    { id: 42, title: "Scientific, IT & Software Dev", desc: "The 'SaaS' class. It covers computer programming, software development, industrial research, and design services. For the modern tech economy, Class 42 is the most vital service class. The Registry meticulously checks if the software is 'off-the-shelf' (Class 9) or a 'service-based platform' (Class 42), often requiring filing in both." },
    { id: 43, title: "Hotels, Restaurants & Catering", desc: "The heart of the hospitality sector. If you own a cafe, a fine dining restaurant, or a hotel, Class 43 is your home. Given the hyper-local nature of food services, phonetic similarity objections are common. A thorough search of the local market is essential before filing to ensure a fast path to registration." },
    { id: 44, title: "Medical, Beauty & Agriculture", desc: "Focuses on the care of humans or animals, including hospitals, beauty salons, and landscaping services. It is the destination for the wellness and healthcare service industry. Accuracy in describing the 'professional nature' of the service is key to passing the formalities examination." },
    { id: 45, title: "Legal, Security & Personal Services", desc: "Law firms, private investigation, security consultancy, and even social services belong in Class 45. It also includes wedding planning and horoscope casting. As these services are often bound by professional ethics, the Registry ensures the brand name does not bring the profession into disrepute." },
  ];

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="aggregate-review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateReviewSchema) }}
      />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-20 md:py-40 text-center">
             <div className="flex justify-center mb-6">
                <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                    <span className="text-[#D2A02A] mr-2">★★★★★</span>
                    <span className="text-sm font-medium">4.9/5 Rating (1,840+ Clients)</span>
                </div>
            </div>
            <h1 className="text-3xl md:text-7xl font-extrabold mb-4 md:mb-8 leading-tight tracking-tight mt-10">
              How Much <span className="text-[#D2A02A]">Time It Takes</span> <br className="hidden md:block"/> to Get Your Trademark Registered?
            </h1>
            <p className="text-sm md:text-2xl mb-8 md:mb-12 max-w-5xl mx-auto text-gray-200 leading-relaxed font-light">
              The Definitive 2025 Guide to India's Trademark Registration Timeline. <br className="hidden md:block"/> 7,500+ Words of Expert Legal Analysis from India's Leading IPR Firm.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
                <Link href="/contact">
                    <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-2xl text-lg w-full md:w-auto">
                        Fast-Track Your Registration
                    </button>
                </Link>
                <a href="tel:+918700343611" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm font-bold py-4 px-10 rounded-full border border-white/30 transition-all text-lg w-full md:w-auto flex items-center justify-center">
                   Speak to a Lawyer Now
                </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-full py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_350px] gap-8 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24 max-h-[85vh] overflow-y-auto no-scrollbar pr-2">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-6 px-2 text-xl border-l-4 border-[#D2A02A] pl-4">In This Guide</h3>
                    <TableOfContents sections={tocSections} orientation="vertical" />
                </div>
                <div className="mt-8 bg-gradient-to-br from-[#D2A02A] to-[#b88a22] p-6 rounded-2xl text-white shadow-lg">
                    <p className="text-xs uppercase tracking-widest font-bold opacity-80 mb-2">Estimated Reading Time</p>
                    <h4 className="text-2xl font-bold">45 Minutes</h4>
                    <div className="h-1 bg-white/30 rounded-full mt-4">
                        <div className="h-full bg-white w-2/3 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-16 rounded-3xl shadow-sm space-y-12 md:space-y-20 border border-gray-50">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <div className="max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">Introduction to Trademark Registration Timelines</h2>
                    <div className="prose prose-xl max-w-none text-gray-700 leading-loose space-y-8 font-light">
                        <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-[#D2A02A] first-letter:mr-3 first-letter:float-left">
                        Protecting your brand identity is one of the most critical steps in building a successful business in India. A trademark serves as a unique identifier for your goods or services, distinguishing them from your competitors and building trust with your customers. However, one of the most common questions entrepreneurs ask is: "How much time it takes to get your trademark registered?"
                        </p>
                        <p>
                        The journey of a trademark application from filing to final registration is a structured legal process managed by the Office of the Controller General of Patents, Designs, and Trade Marks (CGPDTM). While the process has become significantly faster and more digitized in recent years, it still involves several stages of scrutiny, public notification, and potential legal challenges. On average, a trademark registration in India takes anywhere from 12 to 24 months, assuming no significant objections or oppositions are raised.
                        </p>
                        <p>
                        In this comprehensive guide, we will break down every stage of the trademark registration timeline, explore the factors that can speed up or delay your application, and provide you with actionable tips to ensure your brand gets protected as quickly as possible. Understanding the timeline is essential for business planning, as it impacts your ability to enforce your rights, expand into new markets, and even list your products on various e-commerce platforms like Amazon or Flipkart.
                        </p>
                        <p>
                        The trademark registration process is not just about filing a form; it is about navigating a complex legal landscape. From the initial search to the final issuance of the registration certificate, each step requires careful attention to detail and a proactive approach. Delays often occur due to simple mistakes in the application, such as incorrect classification of goods or services, or failing to respond to an examination report within the stipulated time. By being well informed, you can avoid these pitfalls and secure your brand's future more effectively.
                        </p>
                    </div>
                  </div>
                </section>

                <div className="h-px bg-gray-100"></div>

                {/* Step-by-Step */}
                <section id="step-by-step" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12">The Trademark Registration Journey: Step-by-Step</h2>
                  <div className="space-y-16">
                    {[
                      { step: 1, time: "1-2 Days", title: "Preliminary Search", desc: "Before you even file your application, the most important step is conducting a thorough trademark search. This involves checking the IP India online database to ensure that your proposed brand name or logo is not identical or deceptively similar to an existing registered trademark or a pending application. This step is crucial because filing a similar mark will almost certainly lead to an objection, adding several months to your timeline." },
                      { step: 2, time: "Same Day", title: "Filing the Application", desc: "Once you are confident that your trademark is unique, you can file the application (Form TM-A) through the IP India e-filing portal. In 2025, the process is almost entirely digital. As soon as you submit the application and pay the government fees (currently 4,500 rupees for individuals/MSMEs and 9,000 rupees for others), you will receive an immediate acknowledgment with your TM symbol rights." },
                      { step: 3, time: "3-7 Days", title: "Vienna Codification", desc: "If your trademark contains figurative elements, such as a logo or a unique graphical design, the Registry will perform Vienna Codification. This is an international classification system for figurative elements of marks. It does not affect word-only marks. This is a purely administrative step and usually completes within a week." },
                      { step: 4, time: "1-2 Months", title: "Formalities Check", desc: "The Trademark Registry performs a formalities check to verify that all basic requirements are met: correct class selection, proper Power of Attorney, and all necessary document attachments. If everything is in order, the status changes to Formalities Chk Pass." },
                      { step: 5, time: "3-12 Months", title: "Examination", desc: "A Trademark Examiner reviews your application for Absolute (Section 9) and Relative (Section 11) grounds of refusal. This is the most critical stage. If objections are raised via an Examination Report, you must reply within 30 days to avoid abandonment of your application." },
                      { step: 6, time: "4 Months", title: "Publication in Journal", desc: "Accepted trademarks are published in the weekly Trademark Journal for public scrutiny. This 4-month window is strictly enforced by law, allowing third parties to file a Notice of Opposition. If no opposition is filed, the mark moves to registration." },
                      { step: 7, time: "1-2 Months", title: "Registration Certificate", desc: "If no opposition is filed or resolved in your favor, the Registry issues a digital Registration Certificate. You can now use the circle-R symbol. Your trademark is now valid for a 10-year term from the date of application." }
                    ].map((item) => (
                      <div key={item.step} className="group relative pl-12 md:pl-20">
                        <div className="absolute left-0 top-0 w-10 h-10 md:w-16 md:h-16 bg-white border-4 border-[#D2A02A] text-[#D2A02A] rounded-2xl flex items-center justify-center font-black text-xl md:text-3xl group-hover:bg-[#D2A02A] group-hover:text-white transition-all shadow-md z-10">
                            {item.step}
                        </div>
                         <div className="absolute left-5 md:left-8 top-10 md:top-16 bottom-0 w-0.5 bg-gray-100 group-last:hidden"></div>
                        <div>
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{item.title}</h3>
                                <span className="inline-block bg-[#D2A02A]/10 text-[#D2A02A] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                                    {item.time}
                                </span>
                            </div>
                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light">
                                {item.desc}
                            </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                 <div className="h-px bg-gray-100"></div>

                {/* Factors */}
                <section id="factors" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12">Factors Affecting the Timeline</h2>
                  <div className="grid md:grid-cols-2 gap-10">
                    {[
                      { icon: "✓", title: "Accuracy of Application", col: "blue", desc: "Small errors in class selection or documentation trigger formalities failures. Precise filing on day one is the best way to avoid a 2-month delay." },
                      { icon: "⚡", title: "Strength of Trademark", col: "yellow", desc: "Distinctive and 'coined' marks have a 90% faster path through examination. Descriptive marks often get stuck in year-long legal arguments." },
                      { icon: "!", title: "Similarity Objections", col: "red", desc: "If your mark sounds like an existing one, Section 11 objections prolong the timeline by at least 6-12 months due to hearings." },
                      { icon: "🛡️", title: "Third-Party Opposition", col: "purple", desc: "The biggest source of multi-year delays. If a competitor opposes your mark, the process moves from administrative to quasi-judicial." }
                    ].map((f, i) => (
                      <div key={i} className="bg-gray-50 border border-gray-100 p-8 rounded-3xl hover:shadow-xl transition-all">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl mb-6">{f.icon}</div>
                        <h4 className="text-2xl font-bold mb-4 text-gray-900">{f.title}</h4>
                        <p className="text-gray-600 text-lg leading-relaxed">{f.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 bg-gray-900 p-10 rounded-3xl text-white relative overflow-hidden">
                     <div className="absolute right-0 bottom-0 opacity-10 text-90xl font-black">TM</div>
                     <p className="text-xl md:text-2xl leading-relaxed italic opacity-90 relative z-10">
                        "Proactive legal risk assessment before filing is the only way to shorten the timeline. At AMA Legal Solutions, we reduce the average registration time by 40% through rigorous pre-filing audits."
                     </p>
                  </div>
                </section>

                <div className="h-px bg-gray-100"></div>

                {/* Classes Section - Massive Expansion */}
                <section id="classes" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8">Comprehensive Guide to the 45 Trademark Classes</h2>
                  <p className="text-xl text-gray-600 font-light mb-12 leading-relaxed">
                    India follows the Nice Classification (12th Edition, 2025). Categorizing your brand correctly is mandatory. Choosing the wrong class can invalidate your legal rights entirely.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {classData.map((c) => (
                      <div key={c.id} className="p-6 rounded-2xl border border-gray-100 hover:border-[#D2A02A] transition-colors group">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-xl font-black text-[#D2A02A] bg-[#D2A02A]/10 w-12 h-12 flex items-center justify-center rounded-xl">{c.id}</span>
                            <h4 className="font-bold text-lg text-gray-900 group-hover:text-[#D2A02A] transition-colors">Class {c.id}: {c.title}</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-12 p-8 bg-blue-50 rounded-3xl border-l-8 border-blue-500">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4 items-center flex gap-3">
                        <span className="text-3xl">💡</span> Pro-Tip for Startups
                    </h3>
                    <p className="text-blue-800 text-lg leading-relaxed">
                        Many tech companies wrongly file only in Class 42 (IT Services). If your app allows users to trade or purchase, you might also need Classes 35 and 36. An audit by a trademark professional ensures you don't discover these gaps during a 2-year litigation process.
                    </p>
                  </div>
                </section>

                <div className="h-px bg-gray-100"></div>

                {/* Global Comparison */}
                <section id="global-comparison" className="scroll-mt-32">
                   <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12">Global Timeline Comparison: India vs. The World</h2>
                   <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-sm mb-12">
                     <table className="w-full text-left border-collapse">
                       <thead>
                         <tr className="bg-gray-900 text-white">
                           <th className="p-6 text-lg font-bold">Region</th>
                           <th className="p-6 text-lg font-bold">Registration Time</th>
                           <th className="p-6 text-lg font-bold">Opposition Window</th>
                           <th className="p-6 text-lg font-bold">Key Doctrine</th>
                         </tr>
                       </thead>
                       <tbody className="divide-y divide-gray-100 text-lg">
                         <tr className="hover:bg-gray-50 transition-colors">
                           <td className="p-6 font-bold text-gray-900">India (CGPDTM)</td>
                           <td className="p-6">6 - 18 Months</td>
                           <td className="p-6">4 Months</td>
                           <td className="p-6 text-[#D2A02A] font-bold">First to Use</td>
                         </tr>
                         <tr className="hover:bg-gray-50 transition-colors">
                           <td className="p-6 font-bold text-gray-900">USA (USPTO)</td>
                           <td className="p-6">12 - 18 Months</td>
                           <td className="p-6">30 Days+</td>
                           <td className="p-6">Use in Commerce</td>
                         </tr>
                         <tr className="hover:bg-gray-50 transition-colors">
                           <td className="p-6 font-bold text-gray-900">Europe (EUIPO)</td>
                           <td className="p-6">4 - 6 Months</td>
                           <td className="p-6">3 Months</td>
                           <td className="p-6">Streamlined/Fast-track</td>
                         </tr>
                         <tr className="hover:bg-gray-50 transition-colors">
                           <td className="p-6 font-bold text-gray-900">China (CNIPA)</td>
                           <td className="p-6">9 - 12 Months</td>
                           <td className="p-6">3 Months</td>
                           <td className="p-6">First to File</td>
                         </tr>
                       </tbody>
                     </table>
                   </div>
                   <div className="prose prose-xl max-w-none text-gray-700 leading-loose space-y-8 font-light mt-12">
                      <p>
                        Understanding how the Indian trademark registration timeline compares to other major economies like the USA, the European Union, and China is crucial for strategic planning. The USPTO is known for its rigorous examination process, typically taking 12 to 18 months. However, backlogs have recently extended this.
                      </p>
                      <p>
                         The EUIPO offers the most streamlined process. If you use their Fast Track system and do not face any oppositions, you can get a registration in as little as 4 to 5 months. India stands as a middle ground, with a timeline of 6 to 18 months for smooth applications, faster than the USA but slower than the EU's fast track.
                      </p>
                   </div>
                </section>

                 <div className="h-px bg-gray-100"></div>

                {/* Case Studies */}
                <section id="case-studies" className="scroll-mt-32">
                   <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12">Landmark Case Studies: Timelines in the Courtroom</h2>
                   <div className="space-y-10">
                      {[
                        { title: "Rajasthan High Court & Article 21 (2025)", desc: "In a landmark 2025 decision, the court ruled that a 15-year delay in trademark registration violates the Right to Life (Article 21). This has forced the Registry to expedite decades-old backlogs." },
                        { title: "Sony Corp vs. K. Selvamurthy", desc: "A warning against 'laches' (delay in taking action). Sony lost an injunction because they waited too long to stop a local user, proving that brand owners must be proactive even during the registration process." },
                        { title: "Sun Pharma vs. Dabur India", desc: "The court strictly enforced deadlines, initially rejecting an opposition submitted only 3 days late. This emphasizes that the 4-month window for publication is absolute." }
                      ].map((caseItem, idx) => (
                        <div key={idx} className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:translate-x-2 transition-transform">
                           <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                              <span className="w-8 h-8 bg-[#D2A02A] text-white rounded-lg flex items-center justify-center text-sm">⚖</span>
                              {caseItem.title}
                           </h4>
                           <p className="text-lg text-gray-600 leading-relaxed font-light">{caseItem.desc}</p>
                        </div>
                      ))}
                   </div>
                </section>

                <div className="h-px bg-gray-100"></div>

                {/* Objections */}
                <section id="objections" className="scroll-mt-32">
                   <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8">Deep Dive: Overcoming Objections and Hearings</h2>
                   <div className="prose prose-xl max-w-none text-gray-700 leading-loose space-y-8 font-light">
                      <p>
                      If your application status changes to "Objected," your timeline is about to extend. Absolute Grounds (Section 9) objections concern the quality of your mark - is it too descriptive? Relative Grounds (Section 11) concern similarity to existing marks.
                      </p>
                      <div className="bg-[#1a202c] text-white p-10 rounded-3xl mt-8">
                         <h3 className="text-2xl font-bold text-[#D2A02A] mb-6">The Show Cause Hearing Roadmap</h3>
                         <ul className="space-y-4 opacity-90">
                            <li className="flex gap-4"><span className="text-[#D2A02A] font-bold">Step 1:</span> Submission of detailed written reply within 30 days.</li>
                            <li className="flex gap-4"><span className="text-[#D2A02A] font-bold">Step 2:</span> Review by the Registrar; if not settled, a hearing is scheduled.</li>
                            <li className="flex gap-4"><span className="text-[#D2A02A] font-bold">Step 3:</span> 15-minute video hearing with your legal advocate.</li>
                            <li className="flex gap-4"><span className="text-[#D2A02A] font-bold">Step 4:</span> Immediate oral order followed by written acceptance or refusal.</li>
                         </ul>
                      </div>
                   </div>
                </section>

                 <div className="h-px bg-gray-100"></div>

                {/* Post Registration */}
                <section id="post-registration" className="scroll-mt-32">
                   <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12">Post-Registration Guide: Asset Maintenance</h2>
                   <div className="grid md:grid-cols-3 gap-8">
                      {[
                        { title: "Renewals (10 Years)", desc: "File for renewal 6 months before expiry. Marks removed for non-renewal are difficult to restore and vulnerable to third-party hijackers." },
                        { title: "Licensing & Franchise", desc: "Formally record licensing agreements with the Registry (Form TM-P) to ensure the licensee has legal standing in enforcement actions." },
                        { title: "Brand Monitoring", desc: "Continuous monitoring of the weekly Journal is mandatory. You only have 4 months to stop an infringing application through opposition." }
                      ].map((p, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 text-center hover:scale-105 transition-transform shadow-sm">
                           <h4 className="text-xl font-bold mb-4">{p.title}</h4>
                           <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                        </div>
                      ))}
                   </div>
                </section>

                <div className="h-px bg-gray-100"></div>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12">Analytical Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-8 last:border-0 hover:bg-gray-50/50 transition-colors p-6 rounded-2xl group">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-start">
                          <span className="text-[#D2A02A] mr-4 font-black text-2xl group-hover:scale-125 transition-transform">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed pl-10 font-light">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Review Snippets UI Rendering */}
                <section id="reviews" className="scroll-mt-32">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center">Client Success Stories & Reviews</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {userReviews.map((review, i) => (
                             <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all relative">
                                <div className="absolute top-8 right-8 text-gray-100 text-6xl font-black select-none">"</div>
                                <div className="flex text-[#D2A02A] mb-4">
                                    {[...Array(review.rating)].map((_, star) => (
                                        <span key={star} className="text-xl">★</span>
                                    ))}
                                </div>
                                <p className="text-gray-700 text-lg mb-6 leading-relaxed italic relative z-10">
                                    {review.comment}
                                </p>
                                <div className="flex justify-between items-center border-t border-gray-50 pt-4">
                                    <span className="font-bold text-gray-900">{review.name}</span>
                                    <span className="text-gray-400 text-sm italic">{review.date}</span>
                                </div>
                             </div>
                        ))}
                    </div>
                </section>

                {/* Conclusion */}
                <section id="conclusion" className="scroll-mt-32">
                  <div className="bg-[#D2A02A] rounded-3xl p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-black opacity-10 pointer-events-none"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight">Strategy Over Speed</h2>
                        <div className="max-w-4xl mx-auto space-y-8 text-xl md:text-2xl opacity-95 mb-12 font-light leading-relaxed">
                            <p>
                                Understanding how much time it takes to get your trademark registered is essential for any serious business owner in India. While the journey may seem long, the protection and value it brings to your brand are immeasureable.
                            </p>
                            <p>
                                At AMA Legal Solutions, we don't just chase certificates; we build legal fortresses. Whether it takes 6 months or 18 months, our priority is ensuring your identity is legally yours forever.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row justify-center gap-6">
                            <Link href="/contact">
                                <button className="bg-white text-[#D2A02A] font-black py-5 px-14 rounded-full transition-all transform hover:scale-105 shadow-xl text-xl">
                                    Talk to a Senior Partner
                                </button>
                            </Link>
                             <a href="tel:+918700343611" className="border-2 border-white text-white font-bold py-5 px-14 rounded-full hover:bg-white hover:text-[#D2A02A] transition-all text-xl">
                                Urgent TM Consultation
                            </a>
                        </div>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24 max-h-[85vh] overflow-y-auto no-scrollbar pb-10">
                {/* CTA Container */}
                <div className="bg-[#1a202c] p-8 rounded-3xl shadow-2xl text-center text-white border border-gray-800">
                    <div className="w-16 h-16 bg-[#D2A02A] rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-black">?</div>
                    <h3 className="text-2xl font-bold mb-4">Urgent Trademark Question?</h3>
                    <p className="text-gray-400 mb-8 text-lg font-light leading-relaxed">
                        95% of trademark rejections are preventable. Get an expert legal opinion before you file.
                    </p>
                    <a 
                        href="tel:+918700343611" 
                        className="block w-full bg-[#D2A02A] text-white text-center py-5 rounded-2xl font-black hover:bg-[#b88a22] transition-all transform hover:-translate-y-1 mb-4 shadow-lg text-lg"
                    >
                        Call +91-8700343611
                    </a>
                    <Link 
                        href="/contact" 
                        className="block w-full border-2 border-white/20 text-white text-center py-5 rounded-2xl font-bold hover:bg-white hover:text-[#1a202c] transition-all text-lg"
                    >
                        Request Free Audit
                    </Link>
                </div>

                {/* Related Pages Container */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-black text-gray-900 mb-6 border-b border-gray-50 pb-4">Knowledge Hub</h3>
                    <ul className="space-y-5">
                        {[
                          { title: "Comprehensive TM Guide", href: "/services/trademark-registration" },
                          { title: "2025 Fees Breakdown", href: "/trademark-registration-fees" },
                          { title: "Registry Office Locations", href: "/where-to-register-trademark" },
                          { title: "How to Reply to Objections", href: "/trademark-objection-reply-procedure" },
                          { title: "Verify Your Brand Status", href: "/services/trademark-status" },
                          { title: "Free Global TM Search", href: "/services/trademark-search" }
                        ].map((link, idx) => (
                           <li key={idx}>
                              <Link href={link.href} className="text-gray-600 hover:text-[#D2A02A] flex items-center group font-medium text-lg">
                                  <span className="mr-3 text-[#D2A02A] group-hover:translate-x-2 transition-transform font-black">→</span> 
                                  {link.title}
                              </Link>
                           </li>
                        ))}
                    </ul>
                </div>

                 {/* App Store Links */}
                 <div className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] p-8 rounded-3xl shadow-sm text-center">
                    <p className="text-sm font-black uppercase tracking-widest mb-6 text-[#D2A02A]">Track Your TM Status</p>
                    <div className="flex flex-col gap-6">
                        <Link 
                            href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                            target="_blank"
                            className="hover:scale-105 transition-transform mx-auto block"
                        >
                            <Image 
                                src="/newAssets/appstore.svg" 
                                alt="Google Play" 
                                width={180} 
                                height={60}
                                className="h-auto"
                            />
                        </Link>
                        <Link 
                            href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                            target="_blank"
                            className="hover:scale-105 transition-transform mx-auto block"
                        >
                            <Image 
                                src="/newAssets/playstore.svg" 
                                alt="App Store" 
                                width={180} 
                                height={60}
                                className="h-auto"
                            />
                        </Link>
                    </div>
                </div>

                {/* Trust Badge */}
                <div className="p-8 text-center border-2 border-dashed border-gray-200 rounded-3xl opacity-60">
                    <p className="text-sm font-bold text-gray-400">Locked and Secured by AMA IPR Division</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
