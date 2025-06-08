import React from 'react'
import { motion } from 'framer-motion'
import { Scissors, Palette, Crown, Truck, Clock, Shield, Star, Users } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Scissors className="w-12 h-12 text-burgundy-600" />,
      title: 'Custom Tailoring',
      description: 'Perfect fit guaranteed with our expert tailoring services. We customize every piece to your exact measurements.',
      features: ['Perfect measurements', 'Expert craftsmanship', 'Multiple fittings', 'Quality assurance'],
      price: 'Starting from ₹500'
    },
    {
      icon: <Palette className="w-12 h-12 text-gold-500" />,
      title: 'Design Consultation',
      description: 'Work with our designers to create your dream saree or blouse with personalized styling advice.',
      features: ['One-on-one consultation', 'Design sketches', 'Fabric selection', 'Color coordination'],
      price: 'Starting from ₹1,000'
    },
    {
      icon: <Crown className="w-12 h-12 text-burgundy-600" />,
      title: 'Bridal Styling',
      description: 'Complete bridal makeover with saree selection, blouse design, and styling consultation.',
      features: ['Bridal consultation', 'Complete ensemble', 'Styling session', 'Photo shoot ready'],
      price: 'Starting from ₹5,000'
    },
    {
      icon: <Truck className="w-12 h-12 text-gold-500" />,
      title: 'Home Delivery',
      description: 'Convenient doorstep delivery across major cities with secure packaging and tracking.',
      features: ['Free delivery above ₹10,000', 'Secure packaging', 'Real-time tracking', 'Easy returns'],
      price: 'Starting from ₹200'
    }
  ]

  const features = [
    {
      icon: <Clock className="w-8 h-8 text-burgundy-600" />,
      title: 'Quick Turnaround',
      description: 'Fast and efficient service without compromising on quality'
    },
    {
      icon: <Shield className="w-8 h-8 text-gold-500" />,
      title: 'Quality Guarantee',
      description: 'We stand behind every piece with our quality assurance'
    },
    {
      icon: <Star className="w-8 h-8 text-burgundy-600" />,
      title: 'Premium Materials',
      description: 'Only the finest fabrics and materials in all our creations'
    },
    {
      icon: <Users className="w-8 h-8 text-gold-500" />,
      title: 'Expert Team',
      description: 'Skilled artisans and designers with years of experience'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Discuss your requirements and preferences with our expert team'
    },
    {
      step: '02',
      title: 'Design & Selection',
      description: 'Choose from our collection or create a custom design'
    },
    {
      step: '03',
      title: 'Measurements',
      description: 'Precise measurements taken by our skilled tailors'
    },
    {
      step: '04',
      title: 'Crafting',
      description: 'Expert artisans bring your vision to life with meticulous care'
    },
    {
      step: '05',
      title: 'Quality Check',
      description: 'Thorough quality inspection before final delivery'
    },
    {
      step: '06',
      title: 'Delivery',
      description: 'Safe delivery to your doorstep with care instructions'
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-burgundy-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif font-bold gradient-text mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            From custom tailoring to bridal styling, we offer comprehensive services to make your saree dreams come true
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-semibold text-burgundy-800 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-burgundy-700">
                        {service.price}
                      </span>
                      <button className="btn-primary">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-burgundy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are committed to providing exceptional service and creating memorable experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-serif font-semibold text-burgundy-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From consultation to delivery, we ensure a seamless and delightful experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-burgundy-100 to-gold-100 rounded-2xl p-6 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-burgundy-700 to-gold-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-burgundy-800">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-burgundy-300 to-gold-300 transform -translate-y-1/2"></div>
                )}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Book a consultation today and let us help you create the perfect saree or blouse for your special occasion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary">
                Book Consultation
              </button>
              <button className="btn-outline text-white border-white hover:bg-white hover:text-burgundy-800">
                Call Us Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services