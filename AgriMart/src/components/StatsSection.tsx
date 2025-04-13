
import React from 'react';
import { Users, Tractor, MapPin, Calendar } from 'lucide-react';

const stats = [
  {
    icon: <Tractor className="h-10 w-10 text-agrimart-primary" />,
    value: '5,000+',
    label: 'Equipment Listings'
  },
  {
    icon: <Users className="h-10 w-10 text-agrimart-primary" />,
    value: '12,000+',
    label: 'Farmers & Equipment Owners'
  },
  {
    icon: <MapPin className="h-10 w-10 text-agrimart-primary" />,
    value: '1,500+',
    label: 'Locations Nationwide'
  },
  {
    icon: <Calendar className="h-10 w-10 text-agrimart-primary" />,
    value: '25,000+',
    label: 'Successful Rentals'
  }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-agrimart-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">AgriMart by the Numbers</h2>
          <p className="text-gray-600 text-lg">
            We're helping thousands of farmers access the equipment they need without the high costs of ownership.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mx-auto flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
