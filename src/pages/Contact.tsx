import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-burgundy-600" />,
      title: 'Visit Our Showroom',
      details: ['123 Fashion Street, Bandra West', 'Mumbai, Maharashtra 400050', 'India'],
      action: 'Get Directions'
    },
    {
      icon: <Phone className="w-6 h-6 text-gold-500" />,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 98765 43211', 'Mon-Sat: 10 AM - 8 PM'],
      action: 'Call Now'
    },
    {
      icon: <Mail className="w-6 h-6 text-burgundy-600" />,
      title: 'Email Us',
      details: ['hello@srika.com', 'orders@srika.com', 'support@srika.com'],
      action: 'Send Email'
    },
    {
      icon: <Clock className="w-6 h-6 text-gold-500" />,
      title: 'Store Hours',
      details: ['Monday - Saturday: 10 AM - 8 PM', 'Sunday: 11 AM - 6 PM', 'Closed on major holidays'],
      action: 'View Calendar'
    }
  ]

  const locations = [
    {
      name: 'Mumbai Flagship Store',
      address: '123 Fashion Street, Bandra West, Mumbai 400050',
      phone: '+91 98765 43210',
      hours: 'Mon-Sat: 10 AM - 8 PM, Sun: 11 AM - 6 PM'
    },
    {
      name: 'Delhi Boutique',
      address: '456 Connaught Place, New Delhi 110001',
      phone: '+91 98765 43211',
      hours: 'Mon-Sat: 10 AM - 8 PM, Sun: 11 AM - 6 PM'
    },
    {
      name: 'Bangalore Studio',
      address: '789 Brigade Road, Bangalore 560025',
      phone: '+91 98765 43212',
      hours: 'Mon-Sat: 10 AM - 8 PM, Sun: 11 AM - 6 PM'
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We'd love to hear from you. Get in touch with us for any questions, custom orders, or to schedule a consultation
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-serif font-semibold text-burgundy-800 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
                <button className="text-burgundy-700 font-medium hover:text-burgundy-800 transition-colors">
                  {info.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-burgundy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-3xl font-serif font-bold gradient-text mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent transition-colors"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="custom-order">Custom Order</option>
                    <option value="consultation">Consultation Booking</option>
                    <option value="bridal">Bridal Services</option>
                    <option value="support">Customer Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your requirements or questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map & Store Locations */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-serif font-bold gradient-text mb-4">
                  Find Us
                </h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500">Interactive Map Coming Soon</p>
                </div>
              </div>

              {/* Store Locations */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-serif font-bold gradient-text mb-6">
                  Our Locations
                </h3>
                <div className="space-y-6">
                  {locations.map((location, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <h4 className="font-semibold text-burgundy-800 mb-2">
                        {location.name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-1">{location.address}</p>
                      <p className="text-gray-600 text-sm mb-1">{location.phone}</p>
                      <p className="text-gray-500 text-xs">{location.hours}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media & FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h3 className="text-3xl font-serif font-bold gradient-text mb-6">
                Follow Us
              </h3>
              <p className="text-gray-600 mb-8">
                Stay connected with us on social media for the latest collections, styling tips, and behind-the-scenes content
              </p>
              <div className="flex justify-center space-x-6">
                <a
                  href="#"
                  className="w-12 h-12 bg-burgundy-100 rounded-full flex items-center justify-center hover:bg-burgundy-200 transition-colors"
                >
                  <Facebook className="w-6 h-6 text-burgundy-700" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center hover:bg-gold-200 transition-colors"
                >
                  <Instagram className="w-6 h-6 text-gold-700" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-burgundy-100 rounded-full flex items-center justify-center hover:bg-burgundy-200 transition-colors"
                >
                  <Twitter className="w-6 h-6 text-burgundy-700" />
                </a>
              </div>
            </motion.div>

            {/* Quick FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl font-serif font-bold gradient-text mb-6">
                Quick Answers
              </h3>
              <div className="space-y-4">
                {[
                  {
                    question: 'Do you offer custom tailoring?',
                    answer: 'Yes, we provide expert custom tailoring services with perfect fit guarantee.'
                  },
                  {
                    question: 'What is your return policy?',
                    answer: 'We offer 30-day returns for unworn items in original condition with tags.'
                  },
                  {
                    question: 'Do you ship internationally?',
                    answer: 'Currently, we ship within India. International shipping coming soon.'
                  },
                  {
                    question: 'How long does custom tailoring take?',
                    answer: 'Custom orders typically take 7-14 days depending on complexity.'
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-l-4 border-gold-400 pl-4">
                    <h4 className="font-semibold text-burgundy-800 mb-1">
                      {faq.question}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact