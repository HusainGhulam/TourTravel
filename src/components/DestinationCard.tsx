import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, Heart } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface DestinationCardProps {
  id: number;
  name: string;
  image: string;
  description: string;
  duration: string;
  price: string;
  rating: number;
  tags: string[];
}

const DestinationCard = ({ id, name, image, description, duration, price, rating, tags }: DestinationCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  // Map destination IDs to tour slugs for navigation
  const destinationToSlugMap: { [key: number]: string } = {
    1: 'char-dham-yatra',
    2: 'nainital-hills-lakes', 
    3: 'mussoorie-dehradun-rishikesh-haridwar',
    4: 'amarnath-yatra',
    5: 'kullu-manali-shimla',
    6: 'ayodhya-prayagraj-banaras'
  };

  const handleViewDetails = () => {
    const slug = destinationToSlugMap[id] || 'char-dham-yatra'; // Default to char-dham-yatra if no mapping
    navigate(`/tour-details/${slug}`);
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
      <div className="relative overflow-hidden">
        <img
         src={`${image}?auto=format&fit=crop&w=600&h=300&q=80`}
          alt={`${name} - Tour destination photo`}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'text-travel-rose fill-current' : 'text-gray-600'}`} />
        </button>

        {/* Price Badge */}
        <div className="absolute top-3 left-3">
          <Badge className="bg-travel-secondary text-white font-semibold px-3 py-1">
            {price}
          </Badge>
        </div>

        {/* Rating */}
        <div className="absolute bottom-3 left-3 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
          <Star className="h-3 w-3 text-yellow-500 fill-current" />
          <span className="text-xs font-medium">{rating}</span>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span>India</span>
          <Clock className="h-4 w-4 ml-3 mr-1" />
          <span>{duration}</span>
        </div>

        <h3 className="text-lg font-bold mb-2 group-hover:text-travel-primary transition-colors">
          {name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs bg-travel-sand text-travel-forest"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <Button 
          className="w-full bg-gradient-to-r from-travel-primary to-travel-secondary hover:scale-105 transition-transform text-white"
          onClick={handleViewDetails}
        >
          View Details
        </Button>
        <Button
          asChild
          className="w-full mt-2 bg-gradient-to-r from-travel-secondary to-travel-primary hover:scale-105 transition-transform text-white"
        >
          <a href="tel:+919557538664">📞 Call to Book Your Trip</a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
