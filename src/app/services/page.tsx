import ServicesClient from "./client";

export const metadata = {
  title: 'Legal Services in Gurugram | AMA Legal Solutions',
  description: 'Explore our comprehensive legal services, including banking and finance law, loan settlements, intellectual property rights, and more in India,UK & Dubai.',
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services',
  },
}

export default function Services() {
  return <ServicesClient />;
}