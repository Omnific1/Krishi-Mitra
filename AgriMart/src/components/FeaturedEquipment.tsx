
import React from 'react';
import { Button } from './ui/button';
import EquipmentCard from './EquipmentCard';
import { EquipmentItem } from './EquipmentCard';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample equipment data
const featuredEquipment: EquipmentItem[] = [
  {
    id: 1,
    name: 'John Deere 5075E Utility Tractor',
    category: 'Tractors',
    price: 150,
    priceUnit: 'day',
    location: 'Des Moines, Iowa',
    image: 'https://images.unsplash.com/photo-1592805144716-feeccccef5ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhY3RvcnxlbnwwfHwwfHx8MA%3D%3D',
    rating: 4,
    available: true
  },
  {
    id: 2,
    name: 'Case IH Combine Harvester',
    category: 'Harvesters',
    price: 300,
    priceUnit: 'day',
    location: 'Omaha, Nebraska',
    image: 'https://images.unsplash.com/photo-1588190090782-6da56453a091?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhhcnZlc3RlcnxlbnwwfHwwfHx8MA%3D%3D',
    rating: 5,
    available: true
  },
  {
    id: 3,
    name: 'Kubota M7 Tractor with Seeder',
    category: 'Seeders',
    price: 200,
    priceUnit: 'day',
    location: 'Springfield, Illinois',
    image: 'https://images.unsplash.com/photo-1591638246754-89ba07569e3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhY3RvcnxlbnwwfHwwfHx8MA%3D%3D',
    rating: 3,
    available: false
  },
  {
    id: 4,
    name: 'Irrigation Sprinkler System',
    category: 'Irrigation',
    price: 75,
    priceUnit: 'day',
    location: 'Topeka, Kansas',
    image: 'https://images.unsplash.com/photo-1629931599452-c7881eda9272?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aXJyaWdhdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    rating: 5,
    available: true
  }
];

const FeaturedEquipment = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Equipment</h2>
          <Link to="/equipment">
            <Button variant="link" className="text-agrimart-primary flex items-center gap-1">
              View all <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredEquipment.map(item => (
            <EquipmentCard key={item.id} equipment={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEquipment;
