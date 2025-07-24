import { Link } from 'react-router';
import { useState, useEffect } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1920&q=80",
      title: "Premium Howl Collection",
      subtitle: "Luxury comfort meets modern design",
      badge: "New Arrivals"
    },
    {
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1920&q=80",
      title: "Elegant Furniture",
      subtitle: "Transform your space with style",
      badge: "Best Sellers"
    },
    {
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1920&q=80",
      title: "Crafted Excellence",
      subtitle: "Quality materials, exceptional craftsmanship",
      badge: "Premium Quality"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: "🛋️",
      title: "Premium Quality",
      description: "High-quality howl and furniture materials crafted with precision and care.",
      highlight: "Lifetime Warranty"
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Quick and reliable delivery to your doorstep across the region.",
      highlight: "Free Shipping"
    },
    {
      icon: "💬",
      title: "WhatsApp Ordering",
      description: "Easy ordering process through WhatsApp for personalized service.",
      highlight: "24/7 Support"
    },
    {
      icon: "🎨",
      title: "Custom Designs",
      description: "Tailored solutions to match your specific requirements and style.",
      highlight: "Bespoke Service"
    }
  ];

  const categories = [
    {
      name: "Living Room",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
      count: "25+ Products",
      description: "Sofas, Coffee Tables, TV Units"
    },
    {
      name: "Bedroom",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
      count: "18+ Products",
      description: "Beds, Wardrobes, Nightstands"
    },
    {
      name: "Dining Room",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
      count: "12+ Products",
      description: "Dining Tables, Chairs, Cabinets"
    },
    {
      name: "Office",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
      count: "15+ Products",
      description: "Desks, Chairs, Storage"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      text: "Excellent quality furniture! The howl sofa exceeded my expectations. The craftsmanship is outstanding.",
      rating: 5,
      location: "Mumbai",
      product: "Howl Sofa Set"
    },
    {
      name: "Priya Sharma",
      text: "Great service and beautiful products. The delivery was prompt and the team was very professional.",
      rating: 5,
      location: "Delhi",
      product: "Dining Table"
    },
    {
      name: "Amit Patel",
      text: "Professional service and timely delivery. The custom design perfectly matched our requirements.",
      rating: 5,
      location: "Bangalore",
      product: "Custom Wardrobe"
    }
  ];

  const offers = [
    {
      title: "First Time Buyers",
      discount: "15% OFF",
      description: "On your first purchase above ₹20,000",
      code: "FIRST15",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Bulk Orders",
      discount: "25% OFF",
      description: "For orders above ₹1,00,000",
      code: "BULK25",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Festival Special",
      discount: "20% OFF",
      description: "Limited time festive offer",
      code: "FEST20",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              <div className="mb-6">
                <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-2xl">
                  {heroSlides[currentSlide].badge}
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight text-white font-display">
                <span className="block">Luxury</span>
                <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Furniture
                </span>
                <span className="block text-4xl md:text-5xl font-light text-gray-200">
                  & Howl Materials
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl">
                {heroSlides[currentSlide].subtitle} - Discover our curated collection of premium furniture and howl materials designed for the modern home.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Link 
                  to="/products" 
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 flex items-center justify-center"
                >
                  Explore Collection
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link 
                  to="/order" 
                  className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-5 rounded-full text-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 flex items-center justify-center"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
                  </svg>
                  WhatsApp Order
                </Link>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-8 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-4xl font-bold text-white mb-1">500+</div>
                  <div className="text-gray-300 text-sm">Happy Customers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-4xl font-bold text-white mb-1">70+</div>
                  <div className="text-gray-300 text-sm">Premium Products</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-4xl font-bold text-white mb-1">5★</div>
                  <div className="text-gray-300 text-sm">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125 shadow-lg' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>


      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4 font-display">Shop by Category</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of furniture collections for every room
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Link 
                key={index}
                to="/products"
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="aspect-w-4 aspect-h-5 relative">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm opacity-90 mb-2">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-400 font-semibold">{category.count}</span>
                    <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4 font-display">Why Choose Starmax?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide exceptional quality and service that sets us apart from the competition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group text-center p-8 rounded-3xl bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl border border-gray-200 hover:border-blue-200"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {feature.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4 font-display">Featured Products</h2>
            <p className="text-xl text-gray-600">Discover our most popular furniture pieces</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Premium Howl Sofa",
                image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80",
                price: "₹29,999",
                originalPrice: "₹39,999",
                rating: 4.9,
                reviews: 127,
                badge: "Best Seller"
              },
              {
                name: "Luxury Dining Table",
                image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
                price: "₹15,999",
                originalPrice: "₹19,999",
                rating: 4.8,
                reviews: 89,
                badge: "Premium"
              },
              {
                name: "Designer Howl Armchair",
                image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
                price: "₹8,999",
                originalPrice: "₹12,999",
                rating: 4.9,
                reviews: 156,
                badge: "Sale"
              }
            ].map((product, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full font-semibold text-sm">
                    {product.badge}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{product.name}</h3>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                      <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                    <div className="text-green-600 font-semibold">
                      {Math.round((1 - parseInt(product.price.replace(/[₹,]/g, '')) / parseInt(product.originalPrice.replace(/[₹,]/g, ''))) * 100)}% OFF
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      to="/products"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                    >
                      View Details
                    </Link>
                    <button className="bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition-all duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/products" 
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4 font-display">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real feedback from satisfied customers across India</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-blue-600 font-semibold">{testimonial.product}</p>
                    <p className="text-xs text-gray-500">Verified Purchase</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600 text-sm">Premium materials & craftsmanship</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Best Prices</h3>
              <p className="text-gray-600 text-sm">Competitive pricing guaranteed</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Always here to help you</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">Quick & safe delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-5xl font-bold mb-6 font-display">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto leading-relaxed">
            Get in touch with us today for personalized furniture solutions, expert advice, and exclusive deals. Our team is ready to help you create your dream space.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/order" 
              className="inline-block bg-white text-green-600 px-12 py-5 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2"
            >
              Start Your Order on WhatsApp
            </Link>
            <Link 
              to="/products" 
              className="inline-block border-2 border-white text-white px-12 py-5 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2"
            >
              Browse Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 
