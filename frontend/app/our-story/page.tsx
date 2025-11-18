import Image from "next/image";

export default function OurStory() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-amber-400 text-sm tracking-widest mb-4 font-light uppercase">
            Sarawanas Jewellery (Pvt) Ltd
          </p>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-wide">
            OUR STORY
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
            Timeless Craftsmanship Since 1995
          </h2>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 px-4 bg-white font-serif">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-wide">
                  Timeless Craftsmanship Since 1995
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Founded in 1995 by Mr. Rata Lokuge Sarath, Sarawanas Jewellery
                  began as a small home-based shop in Matara, built on the
                  founder’s deep passion for craftsmanship and his commitment to
                  creating jewellery with honesty and precision. These humble
                  beginnings laid the foundation for a brand rooted in trust and
                  authenticity.
                </p>
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                As interest in gold craftsmanship grew, the founder began
                training young students, turning the small workshop into a place
                of learning and skill development. Over time, the number of
                learners increased steadily, allowing the business to expand its
                capacity and strengthen its reputation for quality work.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                In 2000, Sarawanas Jewellery relocated to Neluwa, marking an
                important step in its growth. The workshop developed into a
                fully equipped production space with modern tools, advanced
                refining technology, and a talented team of more than 50 skilled
                craftsmen, dedicated to maintaining high standards.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Today, Sarawanas Jewellery is a well-respected name in Neluwa,
                offering beautifully crafted gold, silver, and custom bridal
                jewellery. Combining traditional artistry with modern
                manufacturing techniques, the brand continues to deliver pieces
                that reflect purity, elegance, and lasting value.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12">
                  <svg viewBox="0 0 50 50" className="animate-spin-slow">
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
            </div>
            <div className="relative h-[500px] lg:h-[600px] rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="https://ansjewelry.com/api/wp-content/uploads/2021/08/Cover-Image.jpg"
                alt="Fine Jewellery Craftsmanship"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white font-serif">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">
              DESIGNED TO LAST
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
              Inspired by rich tradition, every piece is handmade by skilled
              artisans, blending timeless design with certified quality and
              authentic purity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {/* Authenticity */}
            <div className="text-center group">
              <div className="mb-8 relative">
                <div className="relative h-64 w-full overflow-hidden rounded-sm mb-6">
                  <Image
                    src="https://i.etsystatic.com/34923210/r/il/36ac23/5531193566/il_fullxfull.5531193566_j5hx.jpg"
                    alt="Authenticity"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex justify-center">
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
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
                Authenticity
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every gemstone is handpicked and metals are refined with care,
                ensuring certified purity and uncompromising quality at every
                step.
              </p>
            </div>

            {/* Craftsmanship */}
            <div className="text-center group">
              <div className="mb-8 relative">
                <div className="relative h-64 w-full overflow-hidden rounded-sm mb-6">
                  <Image
                    src="/Craftman-1.png"
                    alt="Craftsmanship"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex justify-center">
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
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
                Craftsmanship
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Backed by decades of expertise and a skilled team, each piece is
                meticulously handmade, polished, and perfected to perfection.
              </p>
            </div>

            {/* Bespoke */}
            <div className="text-center group">
              <div className="mb-8 relative">
                <div className="relative h-64 w-full overflow-hidden rounded-sm mb-6">
                  <Image
                    src="https://www.ubykate.com/cdn/shop/files/Sydney-Online-Bespoke-Appointment-UbyKate-4.webp?v=1747794516&width=1200"
                    alt="Bespoke Design"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex justify-center">
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
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
                Bespoke
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Rooted in tradition and innovation, we design customizable
                jewellery that blends timeless elegance with your personal
                style, ensuring each piece is uniquely yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-serif">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">
              Our History
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
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A journey of craftsmanship, honouring tradition for over three
              decades.
            </p>
          </div>

          <div className="space-y-20">
            {/* Timeline Item 1 */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-block bg-amber-600 text-white px-6 py-2 text-sm font-light tracking-widest mb-6">
                  1995
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-6 tracking-wide">
                  Timeless Craftsmanship Since 1995
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 text-xl md:text-lg">
                  Founded in 1995 by Mr. Rata Lokuge Sarath, Sarawanas Jewellery
                  began as a small home-based workshop where passion, skill, and
                  dedication shaped every piece by hand. What started as a
                  humble learning space soon grew into a trusted name in
                  jewellery craftsmanship, built on purity, honesty, and
                  tradition.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12">
                    <svg viewBox="0 0 50 50" className="animate-spin-slow">
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
              </div>
              <div className="order-1 lg:order-2 relative h-80 lg:h-96 overflow-hidden rounded-sm group">
                <Image
                  src="https://hfgnext.s3.eu-west-3.amazonaws.com/img/4YL7Q000000POilWAG-left1.jpg"
                  alt="Heritage Craftsmanship"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative h-80 lg:h-96 overflow-hidden rounded-sm group">
                <Image
                  src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800"
                  alt="Award Recognition"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <div className="inline-block bg-amber-600 text-white px-6 py-2 text-sm font-light tracking-widest mb-6">
                  2000
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-6 tracking-wide">
                  Expansion & Excellence
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 text-xl md:text-lg">
                  By the year 2000, Sarawanas Jewellery expanded from its early
                  location in Matara and established a dedicated jewellery shop
                  in Neluwa, marking a major milestone in its growth. With
                  increasing demand and more students joining to learn the
                  craft, the workshop evolved into a full-scale production space
                  with over 50 skilled artisans, enhancing both quality and
                  capacity.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12">
                    <svg viewBox="0 0 50 50" className="animate-spin-slow">
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
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-block bg-amber-600 text-white px-6 py-2 text-sm font-light tracking-widest mb-6">
                  TODAY
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-6 tracking-wide">
                  Where Tradition Meets Technology
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 text-xl md:text-lg">
                  Blending age-old techniques with cutting-edge technology,
                  Sarawana's Jewellery delivers jewellery that embodies both
                  timeless elegance and modern design. With skilled artisans and
                  a state-of-the-art facility, we craft exquisite pieces in
                  gold, silver, diamond, and platinum — each meeting the highest
                  standards of quality, purity, and craftsmanship.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12">
                    <svg viewBox="0 0 50 50" className="animate-spin-slow">
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
              </div>
              <div className="order-1 lg:order-2 relative h-80 lg:h-96 overflow-hidden rounded-sm group">
                <Image
                  src="https://5.imimg.com/data5/SELLER/Default/2023/7/329765618/VP/FE/SV/146862564/cnc-machining-for-jewelry-500x500.jpg"
                  alt="Modern Technology"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 px-4 bg-white font-serif">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 tracking-wide">
            Our Commitment to You
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            At Sarawana's Jewellery, we believe that every piece of jewellery
            tells a story. Whether it's a symbol of love, a celebration of
            achievement, or a treasured family heirloom, we are honoured to be
            part of your journey. Our commitment extends beyond creating
            beautiful jewellery — we strive to build lasting relationships with
            our customers based on trust, transparency, and exceptional service.
          </p>
          <div className="inline-block group">
            <a
              href="/jewellery"
              className="inline-block border-2 border-amber-600 text-amber-600 px-10 py-4 text-base font-light tracking-widest hover:bg-amber-600 hover:text-white transition-all duration-300 uppercase"
            >
              Explore Our Collection
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
