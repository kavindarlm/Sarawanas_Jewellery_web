"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function LatestCollections() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const collections = [
    {
      title: "Bridal Splendor",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
      description: "Radiant designs crafted for your most memorable moments"
    },
    {
      title: "Heritage Treasures",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
      description: "Traditional artistry meets contemporary sophistication"
    },
    {
      title: "Daily Luxe",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
      description: "Refined pieces that complement your everyday grace"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-white">
      <div ref={sectionRef} className="container mx-auto">
        <div className={`text-center mb-4 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-sm tracking-[0.3em] text-amber-600 font-semibold">SOPHISTICATION & PRESTIGE</span>
        </div>
        <h2 className={`text-4xl md:text-5xl font-serif text-center mb-4 text-blue-800 transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>NEWEST ARRIVALS</h2>
        <div className={`flex justify-center mb-12 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="h-1 w-32 bg-amber-600"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {collections.map((collection, index) => (
            <Link 
              key={index} 
              href="/jewellery" 
              className={`group relative overflow-hidden rounded-lg shadow-2xl h-96 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                   style={{backgroundImage: `url(${collection.image})`}}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-serif font-bold mb-2">{collection.title}</h3>
                <p className="text-sm font-light">{collection.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-lg text-gray-700 mb-4 font-light">ADORNMENTS FOR LIFE'S CELEBRATIONS</p>
          <div className="flex justify-center">
            <div className="h-1 w-32 bg-amber-600"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
