"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

const categories = [
  { name: "All Jewellery", slug: "all", count: 0 },
  { name: "Rings", slug: "rings", count: 0 },
  { name: "Necklaces", slug: "necklaces", count: 0 },
  { name: "Earrings", slug: "earrings", count: 0 },
  { name: "Bangles", slug: "bangles", count: 0 },
  { name: "Pendants", slug: "pendants", count: 0 },
  { name: "Chains", slug: "chains", count: 0 }
];

const sampleProducts = [
  { id: "T5993", name: "Gold Ring", category: "rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400" },
  { id: "F138", name: "Diamond Necklace", category: "necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400" },
  { id: "F200", name: "Pearl Earrings", category: "earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400" },
  { id: "F2078", name: "Gold Bangles", category: "bangles", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400" },
  { id: "F2205", name: "Ruby Pendant", category: "pendants", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400" },
  { id: "F2207", name: "Silver Chain", category: "chains", image: "https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=400" },
  { id: "F2878", name: "Emerald Ring", category: "rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400" },
  { id: "F3111", name: "Gold Necklace", category: "necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400" },
  { id: "F3324", name: "Diamond Earrings", category: "earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400" },
  { id: "F3538", name: "Silver Bangles", category: "bangles", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400" },
  { id: "F3568", name: "Sapphire Pendant", category: "pendants", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400" },
  { id: "F3618", name: "Gold Chain", category: "chains", image: "https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=400" },
  { id: "F372", name: "Diamond Ring", category: "rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400" },
  { id: "F3750", name: "Pearl Necklace", category: "necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400" },
  { id: "F3778", name: "Gold Earrings", category: "earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400" }
];

export default function Jewellery() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showContactForm, setShowContactForm] = useState(false);
  const [categoryCounts, setCategoryCounts] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`)
      .then(res => {
        const activeProducts = res.data
          .filter((p: any) => p.isActive)
          .map((p: any) => ({ ...p, image: p.imageUrl, category: p.category.toLowerCase() }));
        setProducts(activeProducts);
        
        // Calculate category counts
        const counts: { [key: string]: number } = {
          all: activeProducts.length,
        };
        activeProducts.forEach((p: any) => {
          const cat = p.category.toLowerCase();
          counts[cat] = (counts[cat] || 0) + 1;
        });
        setCategoryCounts(counts);
        
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setProducts(sampleProducts);
        setLoading(false);
      });
  }, []);

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter((p: any) => p.category === selectedCategory);

  // Update categories with dynamic counts
  const categoriesWithCounts = categories.map(cat => ({
    ...cat,
    count: categoryCounts[cat.slug] || 0
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920"
            alt="Jewellery Collection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-800/65 to-gray-900/70"></div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-amber-400 text-sm tracking-widest mb-4 font-light uppercase">
            Sarawanas Jewellery (Pvt) Ltd
          </p>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-wide">
            JEWELLERY
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
            Timeless Elegance in Every Piece
          </h2>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-gray-50 p-6 rounded-sm mb-6">
                <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wide uppercase">
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categoriesWithCounts.map((cat) => (
                    <li key={cat.slug}>
                      <button
                        onClick={() => setSelectedCategory(cat.slug)}
                        className={`w-full text-left px-4 py-2 rounded-sm transition-all ${
                          selectedCategory === cat.slug
                            ? 'bg-amber-600 text-white'
                            : 'hover:bg-gray-200 text-gray-700'
                        }`}
                      >
                        <span className="font-light">{cat.name}</span>
                        <span className="float-right text-sm">({cat.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Promotions Card */}
              <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white p-6 rounded-sm mb-6">
                <h3 className="text-xl font-light mb-3 tracking-wide uppercase">
                  Promotions
                </h3>
                <p className="text-sm mb-4 leading-relaxed">
                  Check out our latest offers and special deals on selected jewellery pieces.
                </p>
                <Link
                  href="/promotions"
                  className="inline-block border-2 border-white text-white px-6 py-2 text-sm font-light tracking-widest hover:bg-white hover:text-amber-600 transition-all duration-300 uppercase"
                >
                  View Shop
                </Link>
              </div>

              {/* Contact Form Card */}
              <div className="bg-gray-50 p-6 rounded-sm">
                <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wide uppercase">
                  Latest Collection
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Discover our newest arrivals and exclusive designs.
                </p>
                <button
                  onClick={() => setShowContactForm(!showContactForm)}
                  className="w-full bg-amber-600 text-white px-6 py-3 text-sm font-light tracking-widest hover:bg-amber-700 transition-all duration-300 uppercase"
                >
                  Shop Now
                </button>
                
                {showContactForm && (
                  <div className="mt-4 space-y-3">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-2 border border-gray-300 focus:border-amber-600 focus:outline-none text-sm"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 border border-gray-300 focus:border-amber-600 focus:outline-none text-sm"
                    />
                    <button className="w-full bg-gray-800 text-white px-6 py-2 text-sm font-light tracking-widest hover:bg-gray-900 transition-all duration-300 uppercase">
                      Send
                    </button>
                  </div>
                )}
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="mb-6 flex justify-between items-center">
                <p className="text-gray-600 text-sm">
                  Showing 1–{filteredProducts.length} of {filteredProducts.length} results
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    className="group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                      
                      {/* Quick View Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="bg-white text-gray-900 px-6 py-2 text-sm font-light tracking-widest uppercase transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          View Details
                        </button>
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-base font-light text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">
                        {product.productId}
                      </h3>
                      <p className="text-sm text-gray-500">{product.name}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center items-center gap-2">
                <button className="px-4 py-2 border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50" disabled>
                  ←
                </button>
                <button className="px-4 py-2 bg-amber-600 text-white">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">
                  3
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
