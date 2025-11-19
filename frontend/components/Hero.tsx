"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[600px] bg-cover bg-center flex items-center justify-center" 
             style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80')"}}>
      <div 
        ref={heroRef}
        className={`text-center text-white max-w-4xl px-4 md:px-8 lg:px-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
        <div className="mb-8">
          <div className="inline-block border-t border-b border-amber-400 py-3 px-8">
            <span className="text-xs tracking-[0.4em] font-light">GRACE & OPULENCE</span>
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
          Enduring Beauty,<br/>Rooted In Tradition
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-12 font-light leading-relaxed max-w-2xl mx-auto">
          Discover masterfully crafted adornments where ancestral artistry embraces contemporary refinement.
        </p>
        <div className="flex gap-5 justify-center flex-wrap">
          <Link href="/jewellery" className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-4 text-xs tracking-[0.2em] font-bold transition-all duration-300 shadow-lg hover:shadow-xl">
            VIEW JEWELLERY
          </Link>
          <Link href="/our-story" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-12 py-4 text-xs tracking-[0.2em] font-bold transition-all duration-300">
            OUR STORY
          </Link>
        </div>
      </div>
    </section>
  );
}
