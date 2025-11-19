"use client";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Link from "next/link";

const categories = [
  { name: "Rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600" },
  { name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600" },
  { name: "Bangles", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600" },
  { name: "Pendants", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600" },
  { name: "Chains", image: "https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=600" },
  { name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600" }
];

const sampleProducts = [
  { id: 1, name: "Diamond Solitaire Ring", category: "Rings", imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400" },
  { id: 2, name: "Gold Chain Necklace", category: "Necklaces", imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400" },
  { id: 3, name: "Pearl Drop Earrings", category: "Earrings", imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400" },
  { id: 4, name: "Gold Bangles Set", category: "Bangles", imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400" },
  { id: 5, name: "Ruby Pendant", category: "Pendants", imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400" },
  { id: 6, name: "Platinum Chain", category: "Chains", imageUrl: "https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=400" },
  { id: 7, name: "Emerald Ring", category: "Rings", imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400" },
  { id: 8, name: "Diamond Necklace", category: "Necklaces", imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400" },
  { id: 9, name: "Gold Hoop Earrings", category: "Earrings", imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400" },
  { id: 10, name: "Silver Bangles", category: "Bangles", imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400" },
  { id: 11, name: "Sapphire Pendant", category: "Pendants", imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400" },
  { id: 12, name: "Rose Gold Chain", category: "Chains", imageUrl: "https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=400" }
];

export default function Products() {
  const [products, setProducts] = useState(sampleProducts);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
  const [isShopVisible, setIsShopVisible] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const shopRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Try to fetch from backend, but use sample data if unavailable
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`)
      .then(res => {
        if (res.data && res.data.length > 0) {
          setProducts(res.data);
          setFilteredProducts(res.data);
        }
      })
      .catch(err => {
        console.log("Using sample data");
        // Keep using sample data
      });
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === categoriesRef.current && entry.isIntersecting) {
            setIsCategoriesVisible(true);
          }
          if (entry.target === shopRef.current && entry.isIntersecting) {
            setIsShopVisible(true);
          }
          if (entry.target === ctaRef.current && entry.isIntersecting) {
            setIsCtaVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (categoriesRef.current) observer.observe(categoriesRef.current);
    if (shopRef.current) observer.observe(shopRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      if (categoriesRef.current) observer.unobserve(categoriesRef.current);
      if (shopRef.current) observer.unobserve(shopRef.current);
      if (ctaRef.current) observer.unobserve(ctaRef.current);
    };
  }, []);

  return (
    <>
      {/* Categories Section */}
      <section className="py-24 px-4 md:px-8 lg:px-12 bg-gray-50">
        <div ref={categoriesRef} className="container mx-auto">
          <div className={`text-center mb-4 transition-all duration-700 ${
            isCategoriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-xs tracking-[0.4em] text-amber-600 font-semibold">OUR PRODUCTS</span>
          </div>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif text-center mb-6 text-blue-800 transition-all duration-700 delay-100 ${
            isCategoriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>OUR JEWELLERY</h2>
          <div className={`flex justify-center mb-16 transition-all duration-700 delay-200 ${
            isCategoriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="h-1 w-32 bg-amber-600"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
            {categories.map((category, index) => (
              <Link key={category.name} href={`/jewellery/${category.name.toLowerCase()}`} 
                    className={`group cursor-pointer text-center transition-all duration-700 ${
                      isCategoriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}>
                <div className="overflow-hidden rounded-sm mb-4 shadow-xl aspect-square">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-amber-600 transition-colors tracking-wide">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-20 px-4 md:px-8 lg:px-12 bg-gray-50">
        <div ref={shopRef} className="container mx-auto">
          <div className={`text-center mb-4 transition-all duration-700 ${
            isShopVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-xs tracking-[0.4em] text-amber-600 font-semibold">ELEGANCE BEGINS HERE</span>
          </div>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif text-center mb-6 text-blue-800 transition-all duration-700 delay-100 ${
            isShopVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>SHOP</h2>
          <div className={`flex justify-center mb-16 transition-all duration-700 delay-200 ${
            isShopVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="h-1 w-32 bg-amber-600"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filter */}
            <div className={`lg:w-1/4 transition-all duration-700 delay-300 ${
              isShopVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="bg-white p-6 rounded-sm shadow-sm sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                  PRODUCT CATEGORIES
                </h3>
                <ul className="space-y-3">
                  <li>
                    <button 
                      onClick={() => setSelectedCategory("All")}
                      className={`text-left w-full py-2 px-3 rounded transition-colors ${
                        selectedCategory === "All" 
                          ? "bg-amber-600 text-white font-semibold" 
                          : "text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                      }`}
                    >
                      All Products
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.name}>
                      <button 
                        onClick={() => setSelectedCategory(cat.name)}
                        className={`text-left w-full py-2 px-3 rounded transition-colors ${
                          selectedCategory === cat.name 
                            ? "bg-amber-600 text-white font-semibold" 
                            : "text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                        }`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`lg:w-3/4 transition-all duration-700 delay-400 ${
              isShopVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="mb-6 flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  Showing {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
                </p>
                <select className="border border-gray-300 rounded px-4 py-2 text-sm text-gray-700 focus:outline-none focus:border-amber-600">
                  <option>Default sorting</option>
                  <option>Sort by popularity</option>
                  <option>Sort by latest</option>
                  <option>Sort by price: low to high</option>
                  <option>Sort by price: high to low</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product: any) => (
                    <div key={product.id} className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                      <Link href={`/product/${product.id}`}>
                        <div className="relative overflow-hidden aspect-square cursor-pointer">
                          <img 
                            src={product.imageUrl || "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400"} 
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        </div>
                      </Link>
                      <div className="p-5 text-center">
                        <p className="text-xs text-gray-500 mb-2 tracking-wider">{product.category}</p>
                        <h3 className="text-base font-semibold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                          {product.name}
                        </h3>
                        <Link href={`/product/${product.id}`}>
                          <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs tracking-wider py-3 px-6 transition-colors duration-300">
                            VIEW MORE
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-20">
                    <p className="text-gray-500 text-lg">No products found in this category.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 px-4 md:px-8 lg:px-12 bg-gray-100">
        <div ref={ctaRef} className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Product Image */}
            <div className={`relative transition-all duration-700 ${
              isCtaVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <img 
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800" 
                alt="Gold Bangles"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Right - Content */}
            <div className={`text-left lg:pr-8 transition-all duration-700 delay-200 ${
              isCtaVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="mb-4">
                <span className="text-xs tracking-[0.3em] text-amber-600 font-semibold">VISIT US</span>
              </div>
              
              <div className="mb-8">
                <div className="h-1 w-32 bg-amber-600"></div>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 leading-tight text-gray-800">
                SEEKING YOUR IDEAL ADORNMENT?
              </h2>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8">
                Sarawanas stands as your distinguished choice for magnificent gold, silver and platinum creations, 
                designed to enhance daily experiences and honor life's cherished occasions with distinction.
              </p>

              <Link 
                href="/contact" 
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 text-xs tracking-[0.2em] font-semibold transition-colors duration-300"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
