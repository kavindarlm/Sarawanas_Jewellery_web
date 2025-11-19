"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function VisitStore() {
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

  return (
    <section className="relative py-24 px-4 md:px-8 lg:px-12 bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: 'url(/store-bg.jpg)' }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/80"></div>
      
      {/* Content */}
      <div ref={sectionRef} className="container mx-auto text-center max-w-4xl relative z-10">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif mb-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Visit Our Flagship Store
        </h2>
        <div className={`flex justify-center mb-8 transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="h-1 w-32 bg-amber-600"></div>
        </div>
        <p className={`text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Experience our exquisite collection of fine jewellery in person. Our flagship store offers a luxurious shopping 
          environment where you can explore our latest designs and receive personalized service from our expert consultants.
        </p>
        <div className={`transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-xl md:text-2xl font-semibold text-amber-500 mb-2">
            Morawaka Road Neluwa, Galle, Sri Lanka
          </p>
          <div className="text-gray-300 space-y-1">
            <p>Phone: <a href="tel:+94112345678" className="hover:text-amber-500 transition">+94 11 234 5678</a></p>
            <p>Email: <a href="mailto:sarawanasjewellery@gmail.com" className="hover:text-amber-500 transition">sarawanasjewellery@gmail.com</a></p>
          </div>
        </div>
        {/* <Link 
          href="/contact" 
          className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-12 py-4 text-sm tracking-wider font-semibold transition-colors duration-300"
        >
          GET DIRECTIONS
        </Link> */}
      </div>
    </section>
  );
}
