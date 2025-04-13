
import React from 'react';

const testimonials = [
  {
    quote: "AgriMart saved me thousands in equipment costs. I only needed a specialized harvester for two weeks and found the perfect match on the platform.",
    author: "Michael Johnson",
    title: "Corn Farmer, Iowa",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=100&auto=format&fit=crop"
  },
  {
    quote: "The IVRS booking system is so convenient! I was able to book a tractor while working in the field without needing internet access.",
    author: "Sarah Williams",
    title: "Organic Farmer, California",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop"
  },
  {
    quote: "As an equipment owner, I've been able to generate significant additional income by renting out my machinery during off-seasons.",
    author: "Robert Garcia",
    title: "Equipment Owner, Texas",
    image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=100&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">What Our Users Say</h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. Hear from farmers who have transformed their operations with AgriMart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="inline-block h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
