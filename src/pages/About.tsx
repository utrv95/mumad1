import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Award, Users, Clock } from 'lucide-react'

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-burgundy-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-serif font-bold gradient-text mb-6">
                Our Story
              </h1>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Srika was born from a deep love for Indian heritage and the timeless beauty of traditional sarees. Founded with a vision to preserve and celebrate the rich craftsmanship of Indian textiles, we have been serving women who appreciate authentic elegance.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every saree and blouse in our collection tells a story of skilled artisans, premium materials, and generations of textile expertise passed down through time.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/8839891/pexels-photo-8839891.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Traditional Indian saree craftsmanship"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gold-400 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-burgundy-400 rounded-full opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Srika
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-12 h-12 text-burgundy-600" />,
                title: 'Passion',
                description: 'We pour our heart into every piece, ensuring each saree reflects our love for Indian craftsmanship'
              },
              {
                icon: <Award className="w-12 h-12 text-gold-500" />,
                title: 'Quality',
                description: 'Only the finest fabrics and most skilled artisans contribute to our exceptional collection'
              },
              {
                icon: <Users className="w-12 h-12 text-burgundy-600" />,
                title: 'Community',
                description: 'Supporting local artisans and preserving traditional techniques for future generations'
              },
              {
                icon: <Clock className="w-12 h-12 text-gold-500" />,
                title: 'Heritage',
                description: 'Honoring centuries-old traditions while embracing contemporary elegance'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-burgundy-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-20 bg-burgundy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://images.pexels.com/photos/8839892/pexels-photo-8839892.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Artisan working on saree"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6">
                Master Craftsmanship
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Our artisans are the heart of Srika. With decades of experience and skills passed down through generations, they transform premium fabrics into works of art.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Hand-selected premium silk and cotton fabrics</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Traditional weaving and embroidery techniques</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Meticulous quality control at every step</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Sustainable and ethical production practices</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind Srika's success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Kavitha Sharma',
                role: 'Founder & Creative Director',
                image: 'https://images.pexels.com/photos/8839893/pexels-photo-8839893.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: 'With 20+ years in fashion, Kavitha brings her vision of modern Indian elegance to life.'
              },
              {
                name: 'Rajesh Kumar',
                role: 'Master Craftsman',
                image: 'https://images.pexels.com/photos/8839894/pexels-photo-8839894.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: 'A third-generation weaver specializing in traditional silk saree techniques.'
              },
              {
                name: 'Priya Nair',
                role: 'Design Manager',
                image: 'https://images.pexels.com/photos/8839895/pexels-photo-8839895.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: 'Blending contemporary aesthetics with traditional motifs to create timeless pieces.'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-burgundy-900/20 to-transparent"></div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-burgundy-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-gold-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 hero-bg pattern-overlay">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed">
              To celebrate and preserve the rich heritage of Indian textiles while empowering women to express their unique style through timeless, elegant sarees and blouses that honor tradition and embrace modernity.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About