"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Gold Rate Banner */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-500 text-white py-2.5 text-center text-xs">
        <div className="container mx-auto px-4">
          <span className="font-semibold tracking-wide">GOLD RATE  |  DATE: {new Date().toLocaleDateString('en-GB')}  |  22KT LKR 314,500</span>
        </div>
      </div>
      
      <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img 
                src="/Sarawanas Logo.png" 
                alt="Sarawanas Jewellery" 
                className="h-10 md:h-12 w-auto"
              />
              <div className="hidden sm:block">
                <span className="text-xl md:text-2xl font-serif font-bold text-blue-800 tracking-wider">
                  SARAWANAS <span className="text-amber-700">JEWELLERY</span>
                </span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-8 xl:gap-10 text-gray-700 text-sm font-medium">
              <Link href="/" className="hover:text-amber-600 transition-colors relative group">
                HOME
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              
              {/* Jewellery Dropdown */}
              <div className="relative group">
                <Link href="/jewellery" className="hover:text-amber-600 transition-colors relative flex items-center gap-1">
                  JEWELLERY
                  <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-4 px-2">
                    <div className="grid grid-cols-2 gap-4">
                      <Link href="/jewellery/necklaces" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-amber-600 transition-colors group/item">
                        <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=50" alt="Necklaces" className="w-8 h-8 object-cover rounded-full" />
                        <span className="text-sm font-serif">Necklaces</span>
                      </Link>
                      <Link href="/jewellery/chains" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-amber-600 transition-colors group/item">
                        <img src="https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=50" alt="Chains" className="w-8 h-8 object-cover rounded-full" />
                        <span className="text-sm font-serif">Chains</span>
                      </Link>
                      <Link href="/jewellery/pendants" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-amber-600 transition-colors group/item">
                        <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=50" alt="Pendants" className="w-8 h-8 object-cover rounded-full" />
                        <span className="text-sm font-serif">Pendants</span>
                      </Link>
                      <Link href="/jewellery/bangles" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-amber-600 transition-colors group/item">
                        <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=50" alt="Bangles" className="w-8 h-8 object-cover rounded-full" />
                        <span className="text-sm font-serif">Bangles</span>
                      </Link>
                      <Link href="/jewellery/earrings" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-amber-600 transition-colors group/item">
                        <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=50" alt="Earrings" className="w-8 h-8 object-cover rounded-full" />
                        <span className="text-sm font-serif">Earrings</span>
                      </Link>
                      <Link href="/jewellery/rings" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-amber-600 transition-colors group/item">
                        <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=50" alt="Rings" className="w-8 h-8 object-cover rounded-full" />
                        <span className="text-sm font-serif">Rings</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link href="/our-story" className="hover:text-amber-600 transition-colors relative group">
                OUR STORY
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/services" className="hover:text-amber-600 transition-colors relative group">
                SERVICES
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/contact" className="hover:text-amber-600 transition-colors relative group">
                CONTACT US
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-2xl text-gray-700 hover:text-amber-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-6 pb-2 flex flex-col gap-4 text-gray-700 text-sm font-medium border-t pt-4">
              <Link href="/" className="hover:text-amber-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>HOME</Link>
              <Link href="/jewellery" className="hover:text-amber-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>JEWELLERY</Link>
              <Link href="/our-story" className="hover:text-amber-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>OUR STORY</Link>
              <Link href="/services" className="hover:text-amber-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>SERVICES</Link>
              <Link href="/contact" className="hover:text-amber-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>CONTACT US</Link>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
