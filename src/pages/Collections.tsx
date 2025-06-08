import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Filter, Grid, List, Heart, ShoppingBag } from 'lucide-react'

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')

  const categories = [
    { id: 'all', name: 'All Collections' },
    { id: 'silk', name: 'Silk Sarees' },
    { id: 'cotton', name: 'Cotton Sarees' },
    { id: 'blouses', name: 'Designer Blouses' },
    { id: 'bridal', name: 'Bridal Collection' },
    { id: 'festive', name: 'Festive Wear' }
  ]

  const products = [
    {
      id: 1,
      name: 'Royal Burgundy Silk Saree',
      category: 'silk',
      price: '₹18,500',
      originalPrice: '₹22,000',
      image: 'https://images.pexels.com/photos/8839896/pexels-photo-8839896.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Luxurious silk saree with intricate gold zari work',
      colors: ['burgundy', 'gold', 'maroon'],
      isNew: true
    },
    {
      id: 2,
      name: 'Golden Elegance Blouse',
      category: 'blouses',
      price: '₹3,200',
      originalPrice: '₹4,000',
      image: 'https://images.pexels.com/photos/8839897/pexels-photo-8839897.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Contemporary blouse with traditional embroidery',
      colors: ['gold', 'cream', 'beige'],
      isNew: false
    },
    {
      id: 3,
      name: 'Bridal Dream Collection',
      category: 'bridal',
      price: '₹65,000',
      originalPrice: '₹75,000',
      image: 'https://images.pexels.com/photos/8839898/pexels-photo-8839898.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Exquisite bridal saree with heavy embellishments',
      colors: ['red', 'gold', 'maroon'],
      isNew: true
    },
    {
      id: 4,
      name: 'Cotton Comfort Saree',
      category: 'cotton',
      price: '₹2,800',
      originalPrice: '₹3,500',
      image: 'https://images.pexels.com/photos/8839899/pexels-photo-8839899.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Soft cotton saree perfect for daily wear',
      colors: ['blue', 'white', 'navy'],
      isNew: false
    },
    {
      id: 5,
      name: 'Festive Glory Silk',
      category: 'festive',
      price: '₹12,500',
      originalPrice: '₹15,000',
      image: 'https://images.pexels.com/photos/8839900/pexels-photo-8839900.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Vibrant silk saree for special occasions',
      colors: ['purple', 'gold', 'violet'],
      isNew: false
    },
    {
      id: 6,
      name: 'Traditional Handloom',
      category: 'cotton',
      price: '₹4,200',
      originalPrice: '₹5,000',
      image: 'https://images.pexels.com/photos/8839901/pexels-photo-8839901.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Authentic handloom cotton with traditional motifs',
      colors: ['green', 'gold', 'olive'],
      isNew: true
    }
  ]

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory)

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
            Our Collections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover our curated selection of premium sarees and blouses, each piece crafted with love and attention to detail
          </motion.p>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-burgundy-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-burgundy-100 hover:text-burgundy-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${
                    viewMode === 'grid' ? 'bg-burgundy-700 text-white' : 'text-gray-600 hover:text-burgundy-700'
                  }`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${
                    viewMode === 'list' ? 'bg-burgundy-700 text-white' : 'text-gray-600 hover:text-burgundy-700'
                  }`}
                >
                  <List size={20} />
                </button>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-burgundy-700 transition-colors">
                <Filter size={16} />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden card-hover ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                <div className={`relative ${
                  viewMode === 'list' ? 'w-1/3' : 'h-80'
                } overflow-hidden`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {product.isNew && (
                    <div className="absolute top-4 left-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      New
                    </div>
                  )}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                      <Heart size={16} className="text-burgundy-700" />
                    </button>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <button className="btn-primary">
                      <ShoppingBag size={16} className="mr-2" />
                      Quick View
                    </button>
                  </div>
                </div>

                <div className={`p-6 ${viewMode === 'list' ? 'w-2/3 flex flex-col justify-between' : ''}`}>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-burgundy-800 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    {/* Color Options */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm text-gray-500">Colors:</span>
                      <div className="flex gap-1">
                        {product.colors.map((color, i) => (
                          <div
                            key={i}
                            className={`w-4 h-4 rounded-full border-2 border-gray-300 ${
                              color === 'burgundy' ? 'bg-burgundy-700' :
                              color === 'gold' ? 'bg-gold-500' :
                              color === 'maroon' ? 'bg-red-800' :
                              color === 'cream' ? 'bg-yellow-100' :
                              color === 'beige' ? 'bg-yellow-200' :
                              color === 'red' ? 'bg-red-600' :
                              color === 'blue' ? 'bg-blue-600' :
                              color === 'white' ? 'bg-white' :
                              color === 'navy' ? 'bg-blue-900' :
                              color === 'purple' ? 'bg-purple-600' :
                              color === 'violet' ? 'bg-violet-600' :
                              color === 'green' ? 'bg-green-600' :
                              color === 'olive' ? 'bg-green-700' :
                              'bg-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-burgundy-800">{product.price}</span>
                      <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                    <button className="btn-primary">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="btn-outline">
              Load More Products
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Collections