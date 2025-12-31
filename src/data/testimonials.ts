export interface Testimonial {
    id: number;
    text: string;
    author: string;
    avatar?: string;
    rating: string;
    size: "tall" | "short";
}

export const baseTestimonials: Testimonial[] = [
    {
        id: 1,
        text: "The Ama legal Solutions staffs demonstrated exceptional professionalism, clarity, and dedication throughout the process. Their team is responsive, knowledgeable, and handles the matter with great attention to detail. I truly appreciate their timely support and effective guidance, and I would highly recommend their services.",
        author: "Imlitoshi Sangtam",
        rating: "/newAssets/stars.png",
        size: "tall",
    },
    {
        id: 2,
        text: "I’ve had a good experience working with their team. They’re definitely helpful.",
        author: "Manali Attarde",
        rating: "/newAssets/stars.png",
        size: "short",
    },
    {
        id: 3,
        text: "I approached AMA Legal Solution during a challenging time, and I must say—it was the best decision I ever made. Their team is incredibly efficient, responsive, and genuinely invested in resolving queries faster than I ever imagined.",
        author: "Ganesh Pawar",
        rating: "/newAssets/stars.png",
        size: "tall",
    },
    {
        id: 4,
        text: "Recommending Anuj in itself is not enough. From the very first meeting he had been patient, attentive and genuinely committed to helping me understand everystep of the legal process in regards to settlement. He stood like a rock beside me.",
        author: "Samrat Basu",
        rating: "/newAssets/stars.png",
        size: "tall",
    },
    {
        id: 5,
        text: "Thanks for the help for one of my case related to loan settlement, really helpful team.",
        author: "Global Holidays",
        rating: "/newAssets/stars.png",
        size: "short",
    },
    {
        id: 6,
        text: "I sincerely appreciate the support and guidance provided by the expert panel in resolving my credit card settlement process. Their approach was highly professional, transparent, and customer-focused. Every step was explained clearly.",
        author: "Santharaman Rajarajeswari",
        rating: "/newAssets/stars.png",
        size: "tall",
    },
    {
        id: 7,
        text: "Thanks for the legal advice provided by your team Adv.Anuj Anand Malik and the team. My case and query were resolved within no time and with personal touch they always kept me informed about my case.",
        author: "Shourya Sharma",
        rating: "/newAssets/stars.png",
        size: "tall",
    },
    {
        id: 8,
        text: "The AMA service is very good. Ms. Shruthi madam and Ms. Kritima are giving good advice and explaining things very clearly. They are also checking on the situation daily.",
        author: "Jagadeeshwar K",
        rating: "/newAssets/stars.png",
        size: "short",
    },
    {
        id: 9,
        text: "I had a very good experience with AMA Legal Solutions for my credit card settlement. Their team is highly professional, supportive, and transparent throughout the process. They guided me step by step and helped me close my credit card.",
        author: "deepak",
        rating: "/newAssets/stars.png",
        size: "tall",
    },
    {
        id: 10,
        text: "AMA legal have amazing team. Every member gives their 100% to resolve the issue. I would highly recommend their service and it’s worth every penny. I personally dealt with their associate adv. Latika. Her great research skills and legal knowledge made be feel at ease.",
        author: "Rehan khan",
        rating: "/newAssets/stars.png",
        size: "tall",
    },
    {
        id: 11,
        text: "Great service and friendly team. Highly recommend",
        author: "M.D Kalim",
        rating: "/newAssets/stars.png",
        size: "short",
    },
    {
        id: 12,
        text: "I’m truly impressed with AMA legal solutions, services. They made the loan settlement process so smooth and stress-free. The team is professional, transparent, and genuinely cares about solving customer issues. Highly recommended!",
        author: "Vinod Marskole",
        rating: "/newAssets/stars.png",
        size: "tall",
    },
    {
        id: 13,
        text: "Very good consultation Ama Legal solutions. Firm believe in clients delight as primary aim rather then other inters. I know few cases where clients were associated with other firms and not getting relief in few years but this firm given Very quick relief and finalized the case.",
        author: "Sk Nazir",
        rating: "/newAssets/stars.png",
        size: "tall",
    },
    {
        id: 14,
        text: "Best loan settlement legal firm! Highly recommended ☺️",
        author: "Gaurishma Suneja",
        rating: "/newAssets/stars.png",
        size: "short",
    },
    {
        id: 15,
        text: "I want to clarify that this is real ama legal solutions which deals in loansettlements and other legal services which is situated in sector 57 gurugam run by Anuj Anand Malik who is the only owner.",
        author: "Bhavya Jain",
        rating: "/newAssets/stars.png",
        size: "tall",
    },
    {
        id: 16,
        text: "I want to say the team is helpful and they are handling my case very nicely and providing me the support in dealing with agents or handling legal notices from bank. A big cheers for the ama team.",
        author: "Raaghav Bajaj",
        rating: "/newAssets/stars.png",
        size: "tall",
    },
    {
        id: 17,
        text: "I would like to thanks each member of this firm of helping me and to get out the debt problem without hassle my loan settlement was done easily because of you all.",
        author: "Nikka Kheda",
        rating: "/newAssets/stars.png",
        size: "short",
    },
    {
        id: 18,
        text: "I can’t thank enough to the team of AMA legal solutions, because of them, my life became easy, and I didn’t have to deal with the harassment calls and certainly helped me to close my loans with a complete legal support and guidance.",
        author: "Surendra Rao",
        rating: "/newAssets/stars.png",
        size: "tall",
    },
    {
        id: 19,
        text: "Am grateful to the AMA legal solutions - Adv Arora and entire team were supportive and guided me in each step of my difficult way. In the end of year 2024 I had a huge challenge to repay my loan.",
        author: "TEJA ANANTHNAG",
        rating: "/newAssets/stars.png",
        size: "tall",
    },
    {
        id: 20,
        text: "AMA legal have amazing team. Every member gives their 100% to resolve the issue. I would highly recommend their service and it’s worth every penny.",
        author: "Palak Chhabra",
        rating: "/newAssets/stars.png",
        size: "short",
    },
    {
        id: 21,
        text: "As a customer, I was very happy and contented with their service and they have helped a lot and have a prompt service. Highly recommended!",
        author: "KINJAL CHAKRABORTY",
        rating: "/newAssets/stars.png",
        size: "tall",
    },
    {
        id: 22,
        text: "I want to thanks the team for handling my case and providing valuable support in distress and supporting at all the steps be it dealing with agents or handling legal notices from bank.",
        author: "SUMITKUMAR KANOUJIYA",
        rating: "/newAssets/stars.png",
        size: "tall",
    },
    {
        id: 23,
        text: "Thanks Mr Anand for the advice Great team with good legal approach",
        author: "Radha Goel",
        rating: "/newAssets/stars.png",
        size: "short",
    },
    {
        id: 24,
        text: "Had a long call with Anuj...very professional and explained everything to me in black and white...highly recommended for any service that they offer.",
        author: "V c Pramod",
        rating: "/newAssets/stars.png",
        size: "tall",
    },
];
