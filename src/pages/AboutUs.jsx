
import React from "react";

const achievements = [
  {
    
    title: "5+ Years Experience",
    description: "Crafting exceptional travel experiences since 2020",
  },
  {
    
    title: "100+ Destinations",
    description: "Covering all continents with local expertise",
  },
  {
    
    title: "10,000+ Happy Clients",
    description: "Creating memories that last a lifetime",
  },
  {
    
    title: "Expert Team",
    description: "Travel specialists passionate about your journey",
  },
];

const AboutUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-sky-800 mb-6">
              Why Choose
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                Wanderly?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
              We're not just a travel agency – we're your partners in creating
              extraordinary adventures. With over a decade of experience and a
              passion for exploration, we turn your travel dreams into reality.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of travel experts has personally visited every destination
              we recommend. We believe in authentic experiences, sustainable
              tourism, and creating connections that go beyond the typical tourist path.
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/cycle.jpg"
                alt="Travel planning"
                className="rounded-2xl shadow-xl w-full h-100"
              />
              <div className="space-y-4">
                <img
                  src="/street.jpg"
                  alt="street"
                  className="rounded-2xl shadow-xl w-55 h-45"
                />
                <img
                  src="/tea1.jpg"
                  alt="food"
                  className="rounded-2xl shadow-xl w-55 h-50"
                />
              </div>
            </div>

            {/* Support Badge */}
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-sky-500 to-orange-500 rounded-2xl p-6 text-white shadow-xl">
              <h4 className="text-2xl font-bold mb-2">24/7</h4>
              <p className="text-sm">Customer Support</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
