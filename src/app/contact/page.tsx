import Script from 'next/script';
import ContactPage from './contactcomp';

export const metadata = {
  title: 'Contact AMA Legal Solutions | Legal Support in Gurugram',
  description: 'Reach out to AMA Legal Solutions in Gurugram for professional legal assistance. Contact us via phone, email, or visit our office in Sushant Lok 2.',
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/contact',
  },
}

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://www.amalegalsolutions.com/contact#webpage",
  "url": "https://www.amalegalsolutions.com/contact",
  "name": "Contact AMA Legal Solutions",
  "description": "Get in touch with AMA Legal Solutions for expert legal consultation and support.",
  "publisher": { "@id": "https://www.amalegalsolutions.com/" }
};

export default function Page() {
  return (
    <>
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactPage />
    </>
  );
}