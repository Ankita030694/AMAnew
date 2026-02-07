import AmaClient from "./AmaClient";
import { db } from "@/lib/app-firebase";
import { collection, query, where, orderBy, limit, getDocs } from "firebase/firestore";

export const metadata = {
  title: "Ask Me Anything (AMA) | AMA Legal Solutions",
  description: "Get expert answers to your questions about loan settlement, legal issues, and financial recovery. Join our AMA community.",
};

async function getAnsweredQuestions(): Promise<any[]> {
  try {
    const q = query(
      collection(db, "questions"),
      orderBy("timestamp", "desc"),
      limit(50)
    );
    const snapshot = await getDocs(q);
    const questions = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as any[];
    
    // Filter for questions that actually have an answer
    return questions.filter(q => q.answer && q.answer.content);
  } catch (error) {
    console.error("Error fetching FAQ schema data:", error);
    return [];
  }
}

export default async function AmaPage() {
  const answeredQuestions = await getAnsweredQuestions();
  
  // Filter questions that have a valid answer content
  const faqs = answeredQuestions
    .filter((q: any) => q.answer && q.answer.content)
    .map((q: any) => ({
      question: q.content,
      answer: q.answer.content
    }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <AmaClient initialQuestions={answeredQuestions} />
    </>
  );
}
