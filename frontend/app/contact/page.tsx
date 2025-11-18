"use client";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://static.malabargoldanddiamonds.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/n/k/nkimz22823_c_2.jpg"
            alt="Contact Us Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-800/65 to-gray-900/70"></div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-amber-400 text-sm tracking-widest mb-4 font-light uppercase">
            Sarawana's Jewellery (Pvt) Ltd
          </p>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-wide">
            CONTACT US
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
            Get In Touch With Us
          </h2>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-wide">
                Visit Our Store
              </h2>
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0">
                    <svg viewBox="0 0 50 50" className="w-full h-full">
                      <circle cx="25" cy="25" r="20" stroke="#D97706" strokeWidth="1" fill="none"/>
                      <path d="M25 15 L25 25 L32 25" stroke="#D97706" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-2 tracking-wide">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Main Street, Neluwa<br />
                      Galle District<br />
                      Sri Lanka
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0">
                    <svg viewBox="0 0 50 50" className="w-full h-full">
                      <circle cx="25" cy="25" r="20" stroke="#D97706" strokeWidth="1" fill="none"/>
                      <path d="M18 18 L22 22 M28 28 L32 32" stroke="#D97706" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-2 tracking-wide">Phone</h3>
                    <p className="text-gray-600 leading-relaxed">
                      <a href="tel:+94123456789" className="hover:text-amber-600 transition-colors">
                        +94 12 345 6789
                      </a>
                      <br />
                      <a href="tel:+94987654321" className="hover:text-amber-600 transition-colors">
                        +94 98 765 4321
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0">
                    <svg viewBox="0 0 50 50" className="w-full h-full">
                      <circle cx="25" cy="25" r="20" stroke="#D97706" strokeWidth="1" fill="none"/>
                      <path d="M15 20 L25 28 L35 20 M15 20 L15 30 L35 30 L35 20" stroke="#D97706" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-2 tracking-wide">Email</h3>
                    <p className="text-gray-600 leading-relaxed">
                      <a href="mailto:info@sarawanasjewellery.lk" className="hover:text-amber-600 transition-colors">
                        info@sarawanasjewellery.lk
                      </a>
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0">
                    <svg viewBox="0 0 50 50" className="w-full h-full">
                      <circle cx="25" cy="25" r="20" stroke="#D97706" strokeWidth="1" fill="none"/>
                      <path d="M25 5 L25 15 M25 35 L25 45 M5 25 L15 25 M35 25 L45 25" stroke="#D97706" strokeWidth="1"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-2 tracking-wide">Business Hours</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-8">
                  <h3 className="text-xl font-light text-gray-900 mb-4 tracking-wide">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 border border-amber-600 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all duration-300 group"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 border border-amber-600 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all duration-300 group"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-sm">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-wide">
                Send Us A Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-light text-gray-700 mb-2 tracking-wide uppercase">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-amber-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-2 tracking-wide uppercase">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-amber-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-light text-gray-700 mb-2 tracking-wide uppercase">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-amber-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-light text-gray-700 mb-2 tracking-wide uppercase">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-amber-600 focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="custom">Custom Design</option>
                    <option value="repair">Repair Service</option>
                    <option value="bridal">Bridal Jewellery</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-light text-gray-700 mb-2 tracking-wide uppercase">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-amber-600 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white px-8 py-4 text-base font-light tracking-widest hover:bg-amber-700 transition-all duration-300 uppercase"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">
              Find Us Here
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

          <div className="relative w-full h-96 md:h-[500px] bg-gray-200 rounded-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1299563203247!2d80.35865727480459!3d6.3772203936130625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3d9be6fd837f1%3A0x1e75d5d0d1d68ec6!2sSarawanas%20Jewellery%20-%20Neluwa!5e0!3m2!1sen!2slk!4v1763490315588!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sarawana's Jewellery Location"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-serif">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-wide">
            We're Here To Help
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
            Whether you're looking for a custom piece, need repairs, or have questions about our collection,
            our experienced team is ready to assist you. Visit us in-store or reach out today.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12">
              <svg viewBox="0 0 50 50" className="animate-spin-slow">
                <circle cx="25" cy="25" r="20" stroke="#D97706" strokeWidth="1" fill="none"/>
                <path d="M25 5 L25 15 M25 35 L25 45 M5 25 L15 25 M35 25 L45 25" stroke="#D97706" strokeWidth="1"/>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
