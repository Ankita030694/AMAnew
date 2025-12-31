"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppWidget = () => {
  return (
    <Link
      href="https://wa.me/918700343611?text=I%20want%20legal%20help"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-white w-8 h-8" />
    </Link>
  );
};

export default WhatsAppWidget;
