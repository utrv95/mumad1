import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Heart, Share2 } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'silk', name: 'Silk Sarees' },
    { id: 'cotton', name: 'Cotton Sarees' },
    { id: 'blouses', name: 'Blouses' },
    { id: 'bridal', name: 'Bridal' },
    { id: 'behind-scenes', name: 'Behind the Scenes' }
  ]

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/8839902/pexels-photo-8839902.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'silk',
      title: 'Royal Silk Collection',
      description: 'Exquisite silk saree with traditional motifs'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/8839903/pexels-photo-8839903.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'blouses',
      title: 'Designer Blouse Artistry',
      description: 'Contemporary blouse with intricate embroidery'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/8839904/pexels-photo-8839904.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'bridal',
      title: 'Bridal Elegance',
      description: 'Stunning bridal saree for your special day'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/8839905/pexels-photo-8839905.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'cotton',
      title: 'Cotton Comfort',
      description: 'Soft and elegant cotton saree collection'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/8839906/pexels-photo-8839906.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'behind-scenes',
      title: 'Master Craftsman at Work',
      description: 'Our skilled artisans creating magic'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/8839907/pexels-photo-8839907.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'silk',
      title: 'Golden Threads',
      description: 'Luxurious silk with gold zari work'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/8839908/pexels-photo-8839908.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'blouses',
      title: 'Modern Elegance',
      description: 'Contemporary blouse designs'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/8839909/pexels-photo-8839909.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'cotton',
      title: 'Handloom Heritage',
      description: 'Traditional handloom cotton sarees'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/8839910/pexels-photo-8839910.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'bridal',
      title: 'Wedding Dreams',
      description: 'Bridal collection that makes dreams come true'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/8839911/pexels-photo-8839911.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'behind-scenes',
      title: 'Weaving Stories',
      description: 'The art of traditional weaving'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/8839912/pexels-photo-8839912.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'silk',
      title: 'Regal Beauty',
      description: 'Silk sarees fit for royalty'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/8839913/pexels-photo-8839913.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'cotton',
      title: 'Everyday Elegance',
      description: 'Cotton sarees for daily wear'
    }
  ]

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

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
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Explore our stunning collection through this visual journey of elegance, craftsmanship, and timeless beauty
          </motion.p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-burgundy-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-burgundy-100 hover:text-burgundy-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                      <Heart size={16} />
                    </button>
                    <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors text-white"
              >
                <X size={24} />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors text-white"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors text-white"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <h3 className="font-serif font-semibold text-xl mb-2">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="text-gray-300">
                  {filteredImages[selectedImage].description}
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  {selectedImage + 1} of {filteredImages.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery