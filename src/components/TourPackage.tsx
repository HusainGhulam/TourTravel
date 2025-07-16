import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, Heart, CheckCircle, Eye } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingFormPopup from './BookingFormPopup';

interface TourPackageProps {
  id: number;
  title: string;
  image: string;
  duration: string;
  groupSize: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  highlights: string[];
  category: string;
}

const TourPackage = ({ 
  id,
  title, 
  image, 
  duration, 
  groupSize, 
  price, 
  originalPrice, 
  rating, 
  reviews, 
  highlights, 
  category 
}: TourPackageProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const navigate = useNavigate();

  const discountPercentage = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  // Map tour IDs to slugs for SEO-friendly URLs
  const tourIdToSlugMap: { [key: number]: string } = {
    1: 'delhi-heritage-discovery',
    2: 'spiritual-india-journey-agra',
    3: 'spiritual-heights-ladakh',
    4: 'goa-beach-paradise',
    5: 'kerala-ayurveda-wellness',
    6: 'rajasthan-desert-safari'
  };

  const handleViewDetails = () => {
    const slug = tourIdToSlugMap[id] || 'delhi-heritage-discovery'; // Default fallback
    navigate(`/tour-details/${slug}`);
  };

  return (
    <>
      <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <div className="relative overflow-hidden">
          <img
            src={`${image}?auto=format&fit=crop&w=600&h=300&q=80`}
            alt={`${title} - Tour package photo`}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'text-travel-rose fill-current' : 'text-gray-600'}`} />
          </button>

          <div className="absolute top-3 left-3 flex gap-2">
            <Badge className="bg-travel-secondary text-white font-semibold">
              {category}
            </Badge>
            {discountPercentage > 0 && (
              <Badge className="bg-travel-accent text-white font-semibold">
                {discountPercentage}% OFF
              </Badge>
            )}
          </div>

          <div className="absolute bottom-3 left-3 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
            <Star className="h-3 w-3 text-yellow-500 fill-current" />
            <span className="text-xs font-medium">{rating}</span>
            <span className="text-xs text-gray-500">({reviews})</span>
          </div>
        </div>

        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-3 group-hover:text-travel-primary transition-colors">
            {title}
          </h3>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{groupSize}</span>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold mb-2 text-travel-primary">Highlights:</h4>
            <div className="grid grid-cols-2 gap-1">
              {highlights.slice(0, 4).map((highlight, index) => (
                <div key={index} className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-3 w-3 text-travel-accent mr-1 flex-shrink-0" />
                  <span className="truncate">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-travel-primary">₹{price.toLocaleString()}</span>
                {originalPrice && originalPrice > price && (
                  <span className="text-lg text-gray-500 line-through">₹{originalPrice.toLocaleString()}</span>
                )}
              </div>
              <span className="text-sm text-gray-500">per person</span>
            </div>
          </div>

          <div className="space-y-3">
            <Button 
              className="w-full bg-gradient-to-r from-travel-primary to-travel-secondary hover:scale-105 transition-transform text-white"
              onClick={() => setIsBookingFormOpen(true)}
            >
              Book Now
            </Button>
            
            {/*<Button 
              variant="outline" 
              className="w-full border-travel-primary text-travel-primary hover:bg-travel-primary hover:text-white"
              onClick={handleViewDetails}
            >
              <Eye className="mr-2 h-4 w-4" />
              View Details
            </Button>*/}
          </div>
        </CardContent>
      </Card>

      <BookingFormPopup 
        isOpen={isBookingFormOpen} 
        onClose={() => setIsBookingFormOpen(false)} 
      />
    </>
  );
};

export default TourPackage;
