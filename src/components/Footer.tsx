import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-burgundy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-burgundy-700 to-gold-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-serif font-bold">Srika</span>
            </div>
            <p className="text-burgundy-200 leading-relaxed">
              Celebrating the timeless elegance of Indian heritage through exquisite sarees and blouses crafted with love and tradition.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-burgundy-300 hover:text-gold-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-burgundy-300 hover:text-gold-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-burgundy-300 hover:text-gold-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-burgundy-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-burgundy-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/collections" className="text-burgundy-200 hover:text-white transition-colors">Collections</Link></li>
              <li><Link to="/gallery" className="text-burgundy-200 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/services" className="text-burgundy-200 hover:text-white transition-colors">Services</Link></li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">Collections</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-burgundy-200 hover:text-white transition-colors">Silk Sarees</a></li>
              <li><a href="#" className="text-burgundy-200 hover:text-white transition-colors">Cotton Sarees</a></li>
              <li><a href="#" className="text-burgundy-200 hover:text-white transition-colors">Designer Blouses</a></li>
              <li><a href="#" className="text-burgundy-200 hover:text-white transition-colors">Bridal Collection</a></li>
              <li><a href="#" className="text-burgundy-200 hover:text-white transition-colors">Festive Wear</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-gold-400" />
                <span className="text-burgundy-200 text-sm">123 Fashion Street, Mumbai, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gold-400" />
                <span className="text-burgundy-200 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gold-400" />
                <span className="text-burgundy-200 text-sm">hello@srika.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-burgundy-800 mt-8 pt-8 text-center">
          <p className="text-burgundy-300 text-sm">
            © 2024 Srika. All rights reserved. Crafted with love for Indian tradition.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer