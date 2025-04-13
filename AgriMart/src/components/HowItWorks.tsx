
import React from 'react';
import { Search, Calendar, Tractor, MessageSquare } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-12 w-12 text-agrimart-primary" />,
      title: 'Search',
      description: 'Browse through our extensive collection of agricultural machinery and equipment.'
    },
    {
      icon: <Calendar className="h-12 w-12 text-agrimart-primary" />,
      title: 'Book',
      description: 'Select your dates and submit a booking request to the equipment owner.'
    },
    {
      icon: <Tractor className="h-12 w-12 text-agrimart-primary" />,
      title: 'Use',
      description: 'Pick up the equipment and use it for your farming needs during the rental period.'
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-agrimart-primary" />,
      title: 'Support',
      description: 'Get help via IVRS or WhatsApp bot for any questions or issues during your rental.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">How AgriMart Works</h2>
          <p className="text-gray-600 text-lg">
            Renting agricultural equipment has never been easier. Follow these simple steps to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-agrimart-light h-24 w-24 rounded-full mx-auto flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
