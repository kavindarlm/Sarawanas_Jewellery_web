"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sampleProducts = [
  { id: 1, name: "Diamond Solitaire Ring", category: "Rings", imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800" },
  { id: 2, name: "Gold Chain Necklace", category: "Necklaces", imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800" },
  { id: 3, name: "Pearl Drop Earrings", category: "Earrings", imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800" },
  { id: 4, name: "Gold Bangles Set", category: "Bangles", imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800" },
  { id: 5, name: "Ruby Pendant", category: "Pendants", imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800" },
  { id: 6, name: "Platinum Chain", category: "Chains", imageUrl: "https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=800" },
  { id: 7, name: "Emerald Ring", category: "Rings", imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800" },
  { id: 8, name: "Diamond Necklace", category: "Necklaces", imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800" },
  { id: 9, name: "Gold Hoop Earrings", category: "Earrings", imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800" },
  { id: 10, name: "Silver Bangles", category: "Bangles", imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800" },
  { id: 11, name: "Sapphire Pendant", category: "Pendants", imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800" },
  { id: 12, name: "Rose Gold Chain", category: "Chains", imageUrl: "https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=800" }
];

export default function ProductPage() {
  const params = useParams();
  const productId = parseInt(params.id as string);
  const product = sampleProducts.find(p => p.id === productId);
  
  const [selectedImage, setSelectedImage] = useState(product?.imageUrl || "");

  useEffect(() => {
    if (product) {
      setSelectedImage(product.imageUrl);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/" className="text-amber-600 hover:text-amber-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const productImages = [
    product.imageUrl,
    product.imageUrl,
    product.imageUrl,
    product.imageUrl,
  ];

  const relatedProducts = sampleProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 py-4">
            <div className="text-sm text-gray-600">
              <Link href="/" className="hover:text-amber-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/#shop" className="hover:text-amber-600">Shop</Link>
              <span className="mx-2">/</span>
              <Link href={`/#${product.category.toLowerCase()}`} className="hover:text-amber-600">{product.category}</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-semibold">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Content */}
        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {/* Left Column - Images */}
              <div>
                <div className="aspect-square overflow-hidden bg-white">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Column - Product Info */}
              <div>
                <h1 className="text-2xl md:text-3xl font-normal text-gray-900 mb-6">
                  {product.name}
                </h1>
                
                <div className="text-sm text-gray-600 mb-8">
                  <span>Category: </span>
                  <Link href="/#shop" className="text-amber-600 hover:text-amber-700">
                    {product.category}
                  </Link>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Description</h2>
                  <div className="text-sm text-gray-700 leading-relaxed space-y-3">
                    <p>
                      This exquisite {product.name.toLowerCase()} represents the perfect blend of traditional craftsmanship 
                      and contemporary elegance. Each piece is meticulously handcrafted by our skilled artisans, ensuring 
                      exceptional quality and attention to detail.
                    </p>
                    <p>
                      Crafted from premium materials, this {product.category.toLowerCase().slice(0, -1)} showcases intricate 
                      designs that reflect our rich heritage while appealing to modern aesthetics. Whether for special occasions 
                      or everyday elegance, this piece adds a touch of sophistication to any ensemble.
                    </p>
                  </div>
                </div>

                {/* Returns & Delivery */}
                <div className="border-t border-gray-200 pt-8">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Returns & delivery</h2>
                  <div className="text-sm text-gray-700 leading-relaxed space-y-3">
                    <p>
                      We offer secure and insured delivery to ensure your jewellery arrives safely. Our packaging is designed 
                      to protect your precious items during transit.
                    </p>
                    <p>
                      For returns and exchanges, please contact our customer service team. We are committed to ensuring your 
                      complete satisfaction with every purchase.
                    </p>
                    <p>
                      For more information about our delivery options and return policy, please visit our store or contact us directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="max-w-6xl mx-auto">
              <h3 className="text-3xl font-serif text-gray-900 mb-12">Related Products</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {relatedProducts.map((relProd) => (
                  <Link 
                    key={relProd.id} 
                    href={`/product/${relProd.id}`}
                    className="group"
                  >
                    <div className="aspect-square overflow-hidden bg-gray-50 mb-4">
                      <img 
                        src={relProd.imageUrl} 
                        alt={relProd.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-amber-600 transition-colors mb-1">
                      {relProd.name}
                    </h4>
                    <p className="text-xs text-gray-500">{relProd.category}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
