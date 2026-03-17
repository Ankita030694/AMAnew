import ServicesClient from "./client";

export const metadata = {
  title: 'Legal Services & Expert Consultation | AMA Legal Solutions',
  description: 'Explore our expert legal services, including banking law, loan settlements, and corporate legal strategy across India, UK & Dubai.',
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services',
  },
}

export default function Services() {
  return <ServicesClient />;
}