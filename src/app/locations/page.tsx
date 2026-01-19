
import Locations from "@/components/locations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Locations | AMA Legal Solutions",
  description: "Find AMA Legal Solutions offices across India. We are present in New Delhi, Mumbai, Kolkata, Jaipur, Bengaluru, Chennai, and more."
};

export default function LocationsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Locations />
    </div>
  );
}
