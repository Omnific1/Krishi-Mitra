
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Calendar, MapPin } from 'lucide-react';

export interface EquipmentItem {
  id: number;
  name: string;
  category: string;
  price: number;
  priceUnit: string; // per day, per hour, etc.
  location: string;
  image: string;
  rating: number;
  available: boolean;
}

interface EquipmentCardProps {
  equipment: EquipmentItem;
}

const EquipmentCard: React.FC<EquipmentCardProps> = ({ equipment }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <Link to={`/equipment/${equipment.id}`}>
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={equipment.image}
            alt={equipment.name}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-2 right-2">
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
              equipment.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {equipment.available ? 'Available' : 'Booked'}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
            <h3 className="text-lg font-semibold text-white">{equipment.name}</h3>
            <p className="text-sm text-gray-200">{equipment.category}</p>
          </div>
        </div>
      </Link>

      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-xl text-agrimart-dark">
              ${equipment.price} <span className="text-sm font-normal text-gray-500">/{equipment.priceUnit}</span>
            </p>
          </div>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${
                  i < equipment.rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        <div className="mt-3 flex items-center text-sm text-gray-500">
          <MapPin className="mr-1 h-4 w-4" />
          {equipment.location}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between border-t p-4">
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          Check Availability
        </Button>
        <Button className="bg-agrimart-primary hover:bg-agrimart-dark" size="sm">
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EquipmentCard;
