
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Wifi, Car, Coffee, Utensils, Heart } from "lucide-react";
import { useState } from "react";
import BookingFormPopup from "@/components/BookingFormPopup";

const hotels = [
  {
    id: 1,
    name: "Taj Lake Palace Udaipur",
    image: "photo-1564501049412-61c2a3083791",
    location: "Udaipur, Rajasthan",
    rating: 4.9,
    reviews: 1250,
    price: 25000,
    originalPrice: 30000,
    category: "Luxury",
    amenities: ["Free WiFi", "Pool", "Spa", "Restaurant", "Parking"],
    description: "A stunning palace hotel floating on Lake Pichola"
  },
  {
    id: 2,
    name: "Backwater Retreat Resort",
    image: "photo-1571896349842-33c89424de2d",
    location: "Alleppey, Kerala",
    rating: 4.7,
    reviews: 890,
    price: 8500,
    originalPrice: 12000,
    category: "Nature",
    amenities: ["Free WiFi", "Boat Transfer", "Ayurveda", "Restaurant"],
    description: "Serene backwater resort with traditional houseboats"
  },
  {
    id: 3,
    name: "Beach Paradise Resort",
    image: "photo-1540541338287-41700207dee6",
    location: "Goa",
    rating: 4.5,
    reviews: 2100,
    price: 6500,
    originalPrice: 8500,
    category: "Beach",
    amenities: ["Beachfront", "Pool", "Water Sports", "Bar", "Free WiFi"],
    description: "Beachfront resort with stunning ocean views"
  },
  {
    id: 4,
    name: "Mountain View Lodge",
    image: "photo-1506905925346-21bda4d32df4",
    location: "Manali, Himachal Pradesh",
    rating: 4.6,
    reviews: 760,
    price: 4500,
    originalPrice: 6000,
    category: "Mountain",
    amenities: ["Mountain View", "Heating", "Restaurant", "Trekking"],
    description: "Cozy lodge with breathtaking Himalayan views"
  }
];

const HotelCard = ({ hotel }: { hotel: typeof hotels[0] }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  
  const amenityIcons = {
    "Free WiFi": Wifi,
    "Pool": Coffee,
    "Restaurant": Utensils,
    "Parking": Car,
    "Spa": Coffee,
    "Beachfront": Coffee,
    "Mountain View": Coffee,
    "Heating": Coffee,
    "Water Sports": Coffee,
    "Bar": Coffee,
    "Boat Transfer": Coffee,
    "Ayurveda": Coffee,
    "Trekking": Coffee
  };

  return (
    <>
      <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <div className="relative overflow-hidden">
          <img
            src={`https://images.unsplash.com/${hotel.image}?auto=format&fit=crop&w=500&h=300&q=80`}
            alt={`${hotel.name} - Hotel photo`}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
          </button>

          <div className="absolute top-3 left-3">
            <Badge className="bg-travel-sunset text-white font-semibold">
              {hotel.category}
            </Badge>
          </div>

          <div className="absolute bottom-3 left-3 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
            <Star className="h-3 w-3 text-yellow-500 fill-current" />
            <span className="text-xs font-medium">{hotel.rating}</span>
            <span className="text-xs text-gray-500">({hotel.reviews})</span>
          </div>
        </div>

        <CardContent className="p-4">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{hotel.location}</span>
          </div>

          <h3 className="text-lg font-bold mb-2 group-hover:text-travel-ocean transition-colors">
            {hotel.name}
          </h3>
          
          <p className="text-gray-600 text-sm mb-3">
            {hotel.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {hotel.amenities.slice(0, 4).map((amenity, index) => {
              const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons] || Coffee;
              return (
                <div key={index} className="flex items-center gap-1 text-xs text-gray-500">
                  <IconComponent className="h-3 w-3" />
                  <span>{amenity}</span>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-2xl font-bold text-travel-ocean">₹{hotel.price.toLocaleString()}</span>
              {hotel.originalPrice > hotel.price && (
                <span className="text-sm text-gray-500 line-through ml-2">₹{hotel.originalPrice.toLocaleString()}</span>
              )}
              <div className="text-xs text-gray-500">per night</div>
            </div>
          </div>

          <Button 
            className="w-full bg-gradient-to-r from-travel-ocean to-travel-sunset hover:scale-105 transition-transform"
            onClick={() => setIsBookingFormOpen(true)}
          >
            Book Now
          </Button>
        </CardContent>
      </Card>

      <BookingFormPopup 
        isOpen={isBookingFormOpen} 
        onClose={() => setIsBookingFormOpen(false)} 
      />
    </>
  );
};

const Hotels = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2000&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Premium <span className="bg-gradient-to-r from-travel-sunset to-travel-coral bg-clip-text text-transparent">Hotels</span>
          </h1>
          <p className="text-xl opacity-90">Luxury accommodations across India</p>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {hotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hotels;
