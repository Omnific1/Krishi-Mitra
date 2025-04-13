
import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';

const IntegrationBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-agrimart-dark to-agrimart-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">24/7 Support Via IVRS & WhatsApp</h2>
            <p className="text-white/90 text-lg mb-6">
              Need help finding equipment? Have questions about a rental? Our automated support systems are always available to assist you.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl">IVRS Support</h3>
                  <p className="text-white/80">
                    Call our interactive voice response system for quick answers to common questions and to book equipment over the phone.
                  </p>
                  <a href="tel:+15551234567" className="inline-block mt-2 underline">+1 (555) 123-4567</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MessageSquare className="h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl">WhatsApp Bot</h3>
                  <p className="text-white/80">
                    Message our WhatsApp bot for instant equipment recommendations, booking confirmations, and rental assistance.
                  </p>
                  <a href="https://wa.me/15559876543" className="inline-block mt-2 underline">+1 (555) 987-6543</a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button variant="secondary" className="mr-4">Try IVRS Demo</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp Support
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80" 
              alt="Farmer using phone in field" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationBanner;
