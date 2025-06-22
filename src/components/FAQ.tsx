
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "What is FlutterFlow, and why should I choose it for my app?",
      answer: "FlutterFlow is a powerful no-code/low-code platform built on Flutter, allowing rapid mobile app development for both Android and iOS. It speeds up development, reduces costs, and produces high-performance apps with beautiful UIs."
    },
    {
      question: "Do you offer end-to-end app development?",
      answer: "Yes! I handle everything from app planning and UI design to development, backend setup, and final deployment. You'll get a ready-to-launch app with full support."
    },
    {
      question: "Can you integrate my app with Firebase?",
      answer: "Absolutely. I have strong experience in integrating Firebase for authentication, Firestore databases, storage, notifications, and more."
    },
    {
      question: "How do I get started with you?",
      answer: "Just head over to the Contact section and reach out via email, LinkedIn, or the contact form. I'll get back to you quickly to discuss your project needs and next steps."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-card/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about working with me
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-accent/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-primary transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 pb-6 opacity-100"
                    : "max-h-0 pb-0 opacity-0"
                }`}
              >
                <div className="pt-2 border-t border-border/50">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
