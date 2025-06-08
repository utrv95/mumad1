import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Heart, Award, Users } from 'lucide-react'

const Home = () => {
  const collections = [
    {
      title: 'Silk Sarees',
      description: 'Luxurious silk sarees with intricate designs',
      image: 'https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₹15,000'
    },
    {
      title: 'Cotton Sarees',
      description: 'Comfortable everyday wear with elegant patterns',
      image: 'https://images.pexels.com/photos/8839888/pexels-photo-8839888.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₹3,000'
    },
    {
      title: 'Designer Blouses',
      description: 'Contemporary blouses with traditional touch',
      image: 'https://images.pexels.com/photos/8839889/pexels-photo-8839889.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₹2,500'
    },
    {
      title: 'Bridal Collection',
      description: 'Exquisite pieces for your special day',
      image: 'https://images.pexels.com/photos/8839890/pexels-photo-8839890.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From ₹50,000'
    }
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      text: 'The quality and craftsmanship at Srika is unmatched. My wedding saree was absolutely perfect!',
      rating: 5
    },
    {
      name: 'Anita Patel',
      text: 'Beautiful collection with excellent customer service. Highly recommended for authentic Indian wear.',
      rating: 5
    },
    {
      name: 'Meera Reddy',
      text: 'Love the variety and attention to detail. Srika has become my go-to for all special occasions.',
      rating: 5
    }
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-bg pattern-overlay">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight"
          >
            Timeless Elegance
            <span className="block text-gold-400">Redefined</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed"
          >
            Discover the finest collection of handcrafted sarees and blouses that celebrate the rich heritage of Indian craftsmanship
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/collections" className="btn-primary inline-flex items-center">
              Explore Collections
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/about" className="btn-outline">
              Our Story
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-4">
              Featured Collections
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each piece in our collection tells a story of tradition, craftsmanship, and timeless beauty
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collections.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-semibold">{item.price}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-burgundy-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="text-burgundy-700 font-medium hover:text-burgundy-800 transition-colors inline-flex items-center">
                    View Collection
                    <ArrowRight className="ml-1" size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-4">
              Why Choose Srika
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are committed to preserving the art of traditional Indian craftsmanship while embracing modern elegance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12 text-gold-500" />,
                title: 'Premium Quality',
                description: 'Handpicked fabrics and meticulous craftsmanship ensure lasting beauty'
              },
              {
                icon: <Heart className="w-12 h-12 text-burgundy-600" />,
                title: 'Made with Love',
                description: 'Each piece is crafted with passion and attention to detail'
              },
              {
                icon: <Users className="w-12 h-12 text-gold-500" />,
                title: 'Expert Artisans',
                description: 'Skilled craftspeople with generations of experience'
              },
              {
                icon: <Star className="w-12 h-12 text-burgundy-600" />,
                title: 'Customer Satisfaction',
                description: 'Dedicated to exceeding your expectations every time'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-burgundy-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-burgundy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from the women who have made Srika a part of their special moments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-burgundy-800">
                  {testimonial.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-bg pattern-overlay">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to Find Your Perfect Saree?
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Visit our showroom or browse our online collection to discover the perfect piece for your special occasion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/collections" className="btn-secondary">
                Shop Now
              </Link>
              <Link to="/contact" className="btn-outline text-white border-white hover:bg-white hover:text-burgundy-800">
                Visit Showroom
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home