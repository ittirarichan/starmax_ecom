import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import WhatsAppOrder from './pages/WhatsAppOrder';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Modern Premium Navigation */}
        <nav className="bg-white/90 backdrop-blur-xl shadow-lg sticky top-0 z-50 border-b border-gray-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Premium Logo */}
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold font-display bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    Starmax
                  </span>
                  <div className="text-xs text-gray-500 font-medium tracking-wide -mt-1">PREMIUM FURNITURE</div>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="relative text-gray-700 hover:text-blue-600 font-medium text-sm transition-all duration-300 group">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link to="/products" className="relative text-gray-700 hover:text-blue-600 font-medium text-sm transition-all duration-300 group">
                  Products
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <div className="flex items-center space-x-3 text-xs">
                  <div className="text-gray-600">
                    <div className="font-semibold">Call Now</div>
                    <div className="text-blue-600 font-medium">+91 99999 99999</div>
                  </div>
                </div>
                <Link 
                  to="/order" 
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2.5 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center space-x-2 font-medium text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516z"/>
                  </svg>
                  <span>WhatsApp</span>
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-blue-600 focus:outline-none"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium text-sm">Home</Link>
                  <Link to="/products" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium text-sm">Products</Link>
                  <Link to="/order" className="block px-3 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium text-sm text-center">WhatsApp Order</Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/order" element={<WhatsAppOrder />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">S</span>
                  </div>
                  <span className="text-2xl font-bold">Starmax</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Premium howl and furniture materials for your home and business. Quality, durability, and style in every product.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                  <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
                  <li><Link to="/order" className="text-gray-400 hover:text-white transition-colors">Order</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p className="text-gray-400 mb-2">WhatsApp: +91 99999 99999</p>
                <p className="text-gray-400">Email: info@starmax.com</p>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Starmax. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;




