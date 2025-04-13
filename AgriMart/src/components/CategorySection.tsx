
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'tractors',
    name: 'Tractors',
    description: 'From small utility to large farm tractors',
    image: 'https://images.unsplash.com/photo-1592805144716-feeccccef5ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    count: 126
  },
  {
    id: 'harvesters',
    name: 'Harvesters',
    description: 'Combine, forage and specialty harvesters',
    image: 'https://images.unsplash.com/photo-1588190090782-6da56453a091?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    count: 58
  },
  {
    id: 'seeders',
    name: 'Seeders & Planters',
    description: 'Equipment for planting seeds and seedlings',
    image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    count: 84
  },
  {
    id: 'irrigation',
    name: 'Irrigation Systems',
    description: 'Sprinklers, drip systems and pumps',
    image: 'https://images.unsplash.com/photo-1629931599452-c7881eda9272?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    count: 42
  },
  {
    id: 'tools',
    name: 'Small Tools',
    description: 'Handheld and specialized farming tools',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    count: 139
  },
  {
    id: 'transportation',
    name: 'Transportation',
    description: 'Trailers, trucks and agricultural vehicles',
    image: 'https://images.unsplash.com/photo-1584345604325-f5091269a0d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    count: 47
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Browse By Category</h2>
          <p className="text-gray-600 text-lg">
            Find exactly what you need from our wide range of agricultural equipment categories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} to={`/equipment/${category.id}`}>
              <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
                <div className="relative h-48 w-full">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <CardContent className="text-white p-5">
                      <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                      <p className="text-white/80 text-sm mb-2">{category.description}</p>
                      <span className="text-sm bg-agrimart-primary/80 px-2 py-0.5 rounded-full">
                        {category.count} listings
                      </span>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
