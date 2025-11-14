import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('/footer-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/90"></div>

      {/* Main Footer */}
      <div className="relative z-10 py-16 px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-4">
            {/* About */}
            <div className="px-4">
              <h3 className="text-white font-semibold mb-6 text-sm tracking-wider">ABOUT</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/about" className="hover:text-amber-500 transition">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-amber-500 transition">Contact Us</Link></li>
                <li><Link href="/careers" className="hover:text-amber-500 transition">Careers</Link></li>
                <li><Link href="/blog" className="hover:text-amber-500 transition">Blog</Link></li>
              </ul>
            </div>

            {/* Shop */}
            <div className="px-4">
              <h3 className="text-white font-semibold mb-6 text-sm tracking-wider">SHOP</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/jewellery/rings" className="hover:text-amber-500 transition">Rings</Link></li>
                <li><Link href="/jewellery/necklaces" className="hover:text-amber-500 transition">Necklaces</Link></li>
                <li><Link href="/jewellery/bangles" className="hover:text-amber-500 transition">Bangles</Link></li>
                <li><Link href="/jewellery/pendants" className="hover:text-amber-500 transition">Pendants</Link></li>
                <li><Link href="/jewellery/chains" className="hover:text-amber-500 transition">Chains</Link></li>
                <li><Link href="/jewellery/earrings" className="hover:text-amber-500 transition">Earrings</Link></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div className="px-4">
              <h3 className="text-white font-semibold mb-6 text-sm tracking-wider">CUSTOMER SERVICE</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/faq" className="hover:text-amber-500 transition">FAQ</Link></li>
                <li><Link href="/shipping" className="hover:text-amber-500 transition">Shipping & Delivery</Link></li>
                <li><Link href="/returns" className="hover:text-amber-500 transition">Returns & Exchanges</Link></li>
                <li><Link href="/privacy" className="hover:text-amber-500 transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-amber-500 transition">Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="px-4">
              <h3 className="text-white font-semibold mb-6 text-sm tracking-wider">CONTACT</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-white font-medium mb-1">Address</p>
                  <p className="text-gray-300 leading-relaxed">
                    Morawaka Road Neluwa,<br />
                    Galle, Sri Lanka
                  </p>
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Phone</p>
                  <p><a href="tel:+94112345678" className="hover:text-amber-500 transition">+94 11 234 5678</a></p>
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Email</p>
                  <p><a href="mailto:info@sarawanasjewellery.lk" className="hover:text-amber-500 transition">info@sarawanasjewellery.lk</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-800 py-6 px-8 bg-black/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 px-4">
            <p>&copy; {new Date().getFullYear()} Sarawanas Jewellery. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition">
                Facebook
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition">
                Instagram
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
