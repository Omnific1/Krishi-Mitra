
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // In a real app, we'd redirect to search results page
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-agrimart-primary rounded-full p-1">
              <ShoppingCart className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl text-agrimart-dark">AgriMart</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-agrimart-primary font-medium">Home</Link>
            <Link to="/equipment" className="text-gray-700 hover:text-agrimart-primary font-medium">Equipment</Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-agrimart-primary font-medium">How It Works</Link>
            <Link to="/contact" className="text-gray-700 hover:text-agrimart-primary font-medium">Contact</Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <Input 
                type="text"
                placeholder="Search equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-56"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </form>
            <Button variant="outline" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <form onSubmit={handleSearch} className="relative">
              <Input 
                type="text"
                placeholder="Search equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Button type="submit" variant="ghost" size="sm" className="absolute right-1 top-1">
                <Search className="h-4 w-4" />
              </Button>
            </form>
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-agrimart-primary font-medium px-2 py-1">Home</Link>
              <Link to="/equipment" className="text-gray-700 hover:text-agrimart-primary font-medium px-2 py-1">Equipment</Link>
              <Link to="/how-it-works" className="text-gray-700 hover:text-agrimart-primary font-medium px-2 py-1">How It Works</Link>
              <Link to="/contact" className="text-gray-700 hover:text-agrimart-primary font-medium px-2 py-1">Contact</Link>
              <Button className="flex items-center justify-center gap-2 w-full bg-agrimart-primary hover:bg-agrimart-dark">
                <User className="h-4 w-4" />
                <span>Sign In</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
