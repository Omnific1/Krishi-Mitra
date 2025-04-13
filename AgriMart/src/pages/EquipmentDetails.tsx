
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Calendar, MapPin, Phone, Clock, Star, User, MessageSquare } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { EquipmentItem } from '../components/EquipmentCard';

// Mock data for demo
const equipmentData: Record<string, EquipmentItem> = {
  "1": {
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
  "2": {
    id: 2,
    name: 'Case IH Combine Harvester',
    category: 'Harvesters',
    price: 300,
    priceUnit: 'day',
    location: 'Omaha, Nebraska',
    image: 'https://images.unsplash.com/photo-1588190090782-6da56453a091?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhhcnZlc3RlcnxlbnwwfHwwfHx8MA%3D%3D',
    rating: 5,
    available: true
  }
};

const EquipmentDetails = () => {
  const { id } = useParams<{ id: string }>();
  const equipment = id ? equipmentData[id] : null;

  if (!equipment) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Equipment Not Found</h1>
            <p className="text-gray-600 mb-6">The equipment you are looking for does not exist or has been removed.</p>
            <Button onClick={() => window.history.back()}>Go Back</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto py-8 px-4">
          {/* Breadcrumbs */}
          <div className="text-sm text-gray-500 mb-6">
            <a href="/" className="hover:text-agrimart-primary">Home</a> &gt; 
            <a href="/equipment" className="hover:text-agrimart-primary"> Equipment</a> &gt; 
            <a href={`/equipment/${equipment.category.toLowerCase()}`} className="hover:text-agrimart-primary"> {equipment.category}</a> &gt; 
            <span className="text-gray-700"> {equipment.name}</span>
          </div>

          {/* Equipment Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column - Images */}
            <div className="md:col-span-2">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={equipment.image}
                  alt={equipment.name}
                  className="w-full h-96 object-cover"
                />
              </div>
              
              <div className="mt-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{equipment.name}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < equipment.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">(12 reviews)</span>
                  <div className="ml-auto flex items-center">
                    <MapPin className="h-5 w-5 text-gray-500 mr-1" />
                    <span className="text-gray-600">{equipment.location}</span>
                  </div>
                </div>

                <Tabs defaultValue="description">
                  <TabsList className="mb-4">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="specs">Specifications</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="description" className="p-4 border rounded-md">
                    <p className="text-gray-700 mb-4">
                      This {equipment.category.toLowerCase()} is perfect for medium to large-scale farming operations. Featuring advanced technology and reliable performance, it's designed to handle a wide range of agricultural tasks with ease.
                    </p>
                    <p className="text-gray-700">
                      The equipment is well-maintained and serviced regularly. It comes with all necessary accessories and full operational training if needed. Delivery and pickup options are available for an additional fee.
                    </p>
                  </TabsContent>
                  
                  <TabsContent value="specs" className="p-4 border rounded-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border-b pb-2">
                        <span className="font-semibold">Manufacturer:</span> John Deere
                      </div>
                      <div className="border-b pb-2">
                        <span className="font-semibold">Model:</span> 5075E
                      </div>
                      <div className="border-b pb-2">
                        <span className="font-semibold">Year:</span> 2019
                      </div>
                      <div className="border-b pb-2">
                        <span className="font-semibold">Engine:</span> 75 HP
                      </div>
                      <div className="border-b pb-2">
                        <span className="font-semibold">Hours Used:</span> 1200
                      </div>
                      <div className="border-b pb-2">
                        <span className="font-semibold">Fuel Type:</span> Diesel
                      </div>
                      <div className="border-b pb-2">
                        <span className="font-semibold">Transmission:</span> Manual
                      </div>
                      <div className="border-b pb-2">
                        <span className="font-semibold">Attachments:</span> Front Loader, Backhoe
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="reviews" className="p-4 border rounded-md">
                    <div className="space-y-6">
                      <div className="border-b pb-4">
                        <div className="flex items-center mb-2">
                          <div className="flex mr-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                          <span className="font-semibold">Excellent Equipment</span>
                        </div>
                        <p className="text-gray-700 mb-2">
                          "This tractor was perfect for my needs. It was delivered on time, in great condition, and the owner was very helpful with instructions."
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="h-4 w-4 mr-1" /> 
                          <span>Michael T. - May 15, 2023</span>
                        </div>
                      </div>
                      
                      <div className="border-b pb-4">
                        <div className="flex items-center mb-2">
                          <div className="flex mr-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                          <span className="font-semibold">Good Value</span>
                        </div>
                        <p className="text-gray-700 mb-2">
                          "Rented this for a week and it performed well. Would have given 5 stars but there was a small issue with the loader attachment."
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="h-4 w-4 mr-1" /> 
                          <span>Sarah J. - April 3, 2023</span>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            {/* Right Column - Booking Details */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">${equipment.price}</h2>
                  <span className="text-gray-600">per {equipment.priceUnit}</span>
                </div>
                
                <div className="bg-agrimart-light rounded-md p-3 mb-6">
                  <div className="flex items-center text-agrimart-dark">
                    <Clock className="h-5 w-5 mr-2" />
                    <span className="font-medium">Minimum rental: 1 day</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label htmlFor="start-date" className="block text-sm font-medium text-gray-700 mb-1">
                      Start Date
                    </label>
                    <input
                      type="date"
                      id="start-date"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="end-date" className="block text-sm font-medium text-gray-700 mb-1">
                      End Date
                    </label>
                    <input
                      type="date"
                      id="end-date"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                  </div>
                </div>
                
                <Button className="w-full bg-agrimart-primary hover:bg-agrimart-dark mb-4">
                  Book Now
                </Button>
                
                <Button variant="outline" className="w-full mb-6">
                  Check Availability
                </Button>
                
                <div className="border-t pt-4">
                  <h3 className="text-lg font-semibold mb-3">Contact the Owner</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      Call (IVRS)
                    </Button>
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EquipmentDetails;
