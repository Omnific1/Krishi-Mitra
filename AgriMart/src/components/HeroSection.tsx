
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select } from './ui/select';

const HeroSection = () => {
  return (
    <div className="hero-section text-white">
      <div className="container mx-auto py-24 px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Find the Right Agricultural Equipment for Your Farm
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Rent farm machinery with ease. Search thousands of listings from trusted owners across the country.
          </p>
          
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                  What equipment do you need?
                </label>
                <div className="relative">
                  <Input 
                    id="search"
                    type="text"
                    placeholder="Search tractors, harvesters, seeders..."
                    className="pl-10 w-full"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <Input 
                  id="location"
                  type="text"
                  placeholder="City or ZIP code"
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Equipment Category
                </label>
                <select 
                  id="category"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">All Categories</option>
                  <option value="tractors">Tractors</option>
                  <option value="harvesters">Harvesters</option>
                  <option value="seeders">Seeders</option>
                  <option value="irrigation">Irrigation Systems</option>
                  <option value="tools">Small Tools</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Rental Date
                </label>
                <Input 
                  id="date"
                  type="date"
                  className="w-full"
                />
              </div>
              
              <div className="flex items-end">
                <Button className="w-full bg-agrimart-primary hover:bg-agrimart-dark text-white py-2">
                  Search Equipment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
