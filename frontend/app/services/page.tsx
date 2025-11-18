"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      title: "Custom Jewellery Design",
      description:
        "Looking for something truly unique? At Sarawana's Jewellery, we specialise in creating stunning, one-of-a-kind pieces tailored just for you. Our expert designers and craftsmen take the time to understand your vision and bring it to life with care, precision, and artistry.",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
    },
    {
      title: "Jewellery Repair & Restoration",
      description:
        "At Sarawana's Jewellery, we specialise in comprehensive jewellery repair to bring new life to your treasured pieces. From ring resizing and clasp replacement to redesigning and remodelling your existing jewellery, our skilled craftsmen handle every job with precision and care.",
      image:
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400",
    },
    {
      title: "Engraving Services",
      description:
        "Our skilled artisans offer both hand and machine engraving services, allowing you to personalise your jewellery with messages that add beauty, meaning, and emotional depth — creating timeless keepsakes that express your love.",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
    },
    {
      title: "Bridal Jewellery",
      description:
        "Make your special day unforgettable with our exquisite bridal jewellery collection. From traditional designs to contemporary styles, we offer a complete range of wedding jewellery crafted with the finest materials and utmost attention to detail.",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
    },
    {
      title: "Gold Melting Services",
      description:
        "We offer gold melting services for those who wish to transform their old or ancestral gold into beautiful new pieces. Our expert craftsmen ensure your gold is handled with purity, precision, and care throughout the entire process.",
      image:
        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400",
    },
    {
      title: "Jewellery Consultation",
      description:
        "Not sure what you're looking for? Our experienced consultants are here to guide you through our collection and help you find or create the perfect piece that matches your style, occasion, and budget.",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400",
    },
  ];

  const faqs = [
    {
      question: "How do I place a custom jewellery order?",
      answer:
        "Visit our showroom in Neluwa to discuss your vision with our expert designers. We'll guide you through the design process, material selection, and provide you with a timeline and quote for your custom piece.",
    },
    {
      question: "Can I bring my own gold for jewellery making?",
      answer:
        "Yes, absolutely! We accept customer-provided gold and can melt and craft it into beautiful new pieces. Our craftsmen ensure the purity and quality of your gold throughout the entire process.",
    },
    {
      question: "Do you offer jewellery repair services?",
      answer:
        "Yes, we provide comprehensive repair and restoration services including ring resizing, chain repair, stone setting, polishing, and complete restoration of damaged pieces.",
    },
    {
      question: "How long does custom jewellery take to make?",
      answer:
        "The timeline varies depending on the complexity of the design. Simple pieces may take 1-2 weeks, while intricate custom designs can take 3-4 weeks. We'll provide you with an accurate timeline during consultation.",
    },
    {
      question: "What types of engraving do you offer?",
      answer:
        "We offer both traditional hand engraving and modern machine engraving services. You can personalise your jewellery with names, dates, messages, or special symbols to make each piece uniquely meaningful.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920"
            alt="Contact Us Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-800/65 to-gray-900/70"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-amber-400 text-sm tracking-widest mb-4 font-light uppercase">
            Sarawana's Jewellery (Pvt) Ltd
          </p>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-wide">
            SERVICES
          </h1>
          <div className="flex justify-center mb-12">
            <svg className="w-48 h-3" viewBox="0 0 200 10" fill="none">
              <path
                d="M0 5 L80 5 M85 5 C87 2, 88 2, 90 5 C92 8, 93 8, 95 5 C97 2, 98 2, 100 5 C102 8, 103 8, 105 5 C107 2, 108 2, 110 5 C112 8, 113 8, 115 5 M120 5 L200 5"
                stroke="#D97706"
                strokeWidth="1"
              />
            </svg>
          </div>
          <h2 className="text-2xl md:text-4xl font-light text-amber-400 tracking-wide">
            Excellence in Every Service
          </h2>
        </div>
      </section>

      {/* Our Facility Section */}
      <section className="py-20 px-4 bg-white font-serif">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">
              Our Facility At Sarawana's Jewellery
            </h2>
            <div className="flex justify-center mb-8">
              <svg className="w-48 h-3" viewBox="0 0 200 10" fill="none">
                <path
                  d="M0 5 L80 5 M85 5 C87 2, 88 2, 90 5 C92 8, 93 8, 95 5 C97 2, 98 2, 100 5 C102 8, 103 8, 105 5 C107 2, 108 2, 110 5 C112 8, 113 8, 115 5 M120 5 L200 5"
                  stroke="#D97706"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-64 md:h-96 overflow-hidden rounded-sm shadow-lg">
                <Image
                  src="https://t3.ftcdn.net/jpg/15/39/86/44/360_F_1539864467_VZe8RJfMwVcbTqKXHjlzGQz6G9AmIhVy.jpg"
                  alt="bridal design"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                  We provide a dedicated and respectful space to support your
                  traditional and spiritual needs:
                </p>
                <ul className="space-y-4 text-base md:text-lg text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>
                      State-of-the-art workshop equipped with modern tools and
                      traditional craftsmanship techniques
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>
                      Private consultation rooms for personalized jewellery
                      design discussions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>
                      Advanced refining technology ensuring the highest purity
                      standards
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>
                      Comfortable waiting area for customers during repairs and
                      custom work
                    </span>
                  </li>
                </ul>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed mt-8 italic">
                  A space built for comfort, tradition, and trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white font-serif">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">
              Our Services Offer A Complete Experience
            </h2>
            <div className="flex justify-center mb-8">
              <svg className="w-48 h-3" viewBox="0 0 200 10" fill="none">
                <path
                  d="M0 5 L80 5 M85 5 C87 2, 88 2, 90 5 C92 8, 93 8, 95 5 C97 2, 98 2, 100 5 C102 8, 103 8, 105 5 C107 2, 108 2, 110 5 C112 8, 113 8, 115 5 M120 5 L200 5"
                  stroke="#D97706"
                  strokeWidth="1"
                />
              </svg>
            </div>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer trusted services that combine craftsmanship, care, and
              convenience, delivering a complete experience from start to
              finish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="relative h-64 overflow-hidden rounded-sm mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12">
                    <svg
                      viewBox="0 0 50 50"
                      className="group-hover:rotate-180 transition-transform duration-700"
                    >
                      <circle
                        cx="25"
                        cy="25"
                        r="20"
                        stroke="#D97706"
                        strokeWidth="1"
                        fill="none"
                      />
                      <path
                        d="M25 5 L25 15 M25 35 L25 45 M5 25 L15 25 M35 25 L45 25"
                        stroke="#D97706"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4 tracking-wide text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-serif">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">
            Get In Touch With Us
          </h2>
          <div className="flex justify-center mb-8">
            <svg className="w-48 h-3" viewBox="0 0 200 10" fill="none">
              <path
                d="M0 5 L80 5 M85 5 C87 2, 88 2, 90 5 C92 8, 93 8, 95 5 C97 2, 98 2, 100 5 C102 8, 103 8, 105 5 C107 2, 108 2, 110 5 C112 8, 113 8, 115 5 M120 5 L200 5"
                stroke="#D97706"
                strokeWidth="1"
              />
            </svg>
          </div>
          <p className="text-base md:text-lg text-gray-300 mb-12 leading-relaxed">
            Get in touch for expert help and personalised service.
          </p>
          <Link
            href="/contact"
            className="inline-block border-2 border-amber-600 text-amber-400 px-10 py-4 text-base font-light tracking-widest hover:bg-amber-600 hover:text-white transition-all duration-300 uppercase"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white font-serif">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">
              Frequently Asked Questions
            </h2>
            <div className="flex justify-center mb-8">
              <svg className="w-48 h-3" viewBox="0 0 200 10" fill="none">
                <path
                  d="M0 5 L80 5 M85 5 C87 2, 88 2, 90 5 C92 8, 93 8, 95 5 C97 2, 98 2, 100 5 C102 8, 103 8, 105 5 C107 2, 108 2, 110 5 C112 8, 113 8, 115 5 M120 5 L200 5"
                  stroke="#D97706"
                  strokeWidth="1"
                />
              </svg>
            </div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Find answers to common questions about our jewellery, services,
              and policies. If you need more help, our team is always ready to
              assist.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
                >
                  <span className="text-base md:text-lg font-light text-gray-900 tracking-wide uppercase">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-amber-600 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
