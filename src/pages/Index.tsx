import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Calendar, Users, Star, Phone, Mail, Globe, Camera, Route, Car, Hotel, Mountain } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import DestinationCard from '../components/DestinationCard';
import TourPackage from '../components/TourPackage';
import ServiceCard from '../components/ServiceCard';
import GoogleReviews from '../components/GoogleReviews';
import Footer from '../components/Footer';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  
  // Search form state
  const [selectedDestination, setSelectedDestination] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [numberOfTravelers, setNumberOfTravelers] = useState('');
  const [serviceType, setServiceType] = useState('');

  const popularDestinations = [
    {
      id: 1,
      name: "Char Dham Yatra",
      image: "/destinations/char-dham-yatra.png",
      description: "Begin a holy journey to Yamunotri, Gangotri, Kedarnath, and Badrinath.Feel peace in the mountains and connect with India's spiritual soul",
      duration: "10 Days / 9 Nights",
      price: "Rs 8,000 Per Day",
      rating: 4.8,
      tags: ["Yamunotri", "Gangotri", "Kedarnath","Badrinath","12 Seater Tempo Traveller"]
      
    },
    {
      id: 2,
      name: "Nainital Hills & Lakes Tour",
      image: "/destinations/nainital-tour.jpg",
      description: "Scenic lakes, peaceful hills, and cool mountain air await you in Nainital. Explore the charming Naini Jheel, walk through pine forests, and enjoy the calm and beauty of this popular hill station. A perfect getaway for nature lovers and those looking to relax in the lap of the Himalayas.",
      duration: "5 Days / 4 Nights",
      price: "Rs 7500 Per Day",
      rating: 4.6,
      tags: ["Nature", "Hills", "Relax","Adventure","12 Seater Tempo Traveller"]
    },
    
    {
      id: 3,
      name: "Mussoorie, Dehradun, Rishikesh & Haridwar Tour",
      image: "/destinations/dehradun-rishikesh-haridwar-tour.png",
      description: "Enjoy a perfect hill and spiritual getaway. Visit the queen of hills, Mussoorie, feel the peace at Rishikesh's Ganga Aarti, explore the beauty of Dehradun, and experience the divine vibe of Haridwar. From mountain views to holy rivers, this tour gives you the best of nature, adventure, and spirituality.",
      duration: "6 Days / 5 Nights",
      price: "Rs 5,500 Per Day",
      rating: 4.7,
      tags: ["Nature", "Hills", "Spiritual", "12 Seater Tempo Traveller"]
    },
    {
      id: 4,
      name: "Amarnath Yatra Tour",
      image: "/destinations/amarnath.png",
      description: "Embark on a sacred pilgrimage to the holy Amarnath Cave, one of the most revered shrines in Hinduism. Experience the spiritual journey through the beautiful Kashmir Valley, witness the natural ice Shiva Lingam, and immerse yourself in divine blessings.",
      duration: "8 Days / 7 Nights",
      price: "Rs 9,500 Per Day",
      rating: 4.9,
      tags: ["Spiritual", "Pilgrimage", "Kashmir", "Amarnath", "12 Seater Tempo Traveller"]
    },
    {
      id: 5,
      name: "Kullu Manali Shimla Tour",
      image: "/destinations/kullu.jpg",
      description: "Experience the magic of Himachal Pradesh with this comprehensive tour covering Kullu, Manali, and Shimla. From snow-capped peaks and lush valleys to adventure activities and local culture, discover the best of the Himalayas.",
      duration: "7 Days / 6 Nights",
      price: "Rs 7,200 Per Day",
      rating: 4.8,
      tags: ["Mountains", "Adventure", "Snow", "Culture", "12 Seater Tempo Traveller"]
    },
    {
      id: 6,
      name: "Ayodhya Prayagraj Banaras Tour",
      image: "/destinations/ayodhya.png",
      description: "Journey through the spiritual heart of India visiting Ayodhya, Prayagraj (Allahabad), and Banaras (Varanasi). Experience the divine energy of these holy cities, witness sacred rituals, and connect with India's spiritual heritage.",
      duration: "6 Days / 5 Nights",
      price: "Rs 6,800 Per Day",
      rating: 4.7,
      tags: ["Spiritual", "Temples", "Ganga", "Heritage", "12 Seater Tempo Traveller"]
    }
  ];

  const tourPackages = [
            {
          id: 1,
          title: "Delhi Heritage Discovery",
          duration: "7 Days / 6 Nights",
          groupSize: "10-12 People",
          price: 25999,
          originalPrice: 30999,
          image: "/destinations/delhi.png",
          rating: 4.8,
          reviews: 87,
          highlights: [
            "India Gate",
            "Red Fort (Lal Qila)",
            "Qutub Minar",
            "Lotus Temple",
            "Jama Masjid",
            "Chandni Chowk Market",
            "Rashtrapati Bhavan",
            "Akshardham Temple"
          ],
          category: "Heritage"
        },
    {
        id: 2,
        title: "Spiritual India Journey - Agra",
        duration: "4 Days / 3 Nights",
        groupSize: "10-12 People",
        price: 19999,
        originalPrice: 24999,
        image: "/destinations/agra-tour.png",
        rating: 4.7,
        reviews: 64,
        highlights: [
          "Taj Mahal Symbol of Eternal Love",
          "Agra Fort UNESCO World Heritage Site",
          "Mehtab Bagh Sunset Viewpoint of Taj",
          "Guru Ka Tal Sikh Pilgrimage Site",
          "Akbar's Tomb, Sikandra"
        ],
        category: "Spiritual & Heritage"
      },
      {
        id: 3,
        title: "Spiritual Heights of Ladakh",
        duration: "10 Days / 9 Nights",
        groupSize: "8-10 People",
        price: 44999,
        originalPrice: 52999,
        image: "/destinations/laddakh.png",
        rating: 4.9,
        reviews: 112,
        highlights: [
          "Pangong Lake Breathtaking High-Altitude Lake",
          "Nubra Valley Sand Dunes & Double-Humped Camels",
          "Magnetic Hill Gravity-Defying Phenomenon",
          "Shanti Stupa Panoramic Views of Leh",
          "Khardung La Pass One of the World's Highest Motorable Roads",
          "Leh Palace  17th Century Royal Palace",
          "Thiksey Monastery  Spiritual Retreat",
          "Hemis Monastery Largest Monastery in Ladakh",
          "Hall of Fame Museum Tribute to Indian Army"
        ],
        category: "Adventure & Culture"
      }

  ];

  const services = [
    {
      icon: Hotel,
      title: "Comfort & Class",
      description: "Experience luxurious stays with all the modern comforts"
    },
    {
      icon: Route,
      title: "Comfortable Road Trips",
      description: "Travel across India with safe and relaxing road tours"
    },
    {
      icon: Car,
      title: "Transportation", 
      description: "Reliable and relaxing ways to get around"
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Enjoy a professional photo session to remember your journey"
    }
  ];

  const handleSearch = () => {
    console.log('Search criteria:', {
      destination: selectedDestination,
      date: selectedDate,
      time: selectedTime,
      travelers: numberOfTravelers,
      type: serviceType
    });

    // Filter tour packages based on search criteria
    let filteredResults = [...tourPackages];
    
    if (selectedDestination && selectedDestination !== 'all') {
      filteredResults = filteredResults.filter(pkg => 
        pkg.category.toLowerCase().includes(selectedDestination.toLowerCase()) ||
        pkg.title.toLowerCase().includes(selectedDestination.toLowerCase())
      );
    }

    if (numberOfTravelers) {
      const travelers = parseInt(numberOfTravelers);
      filteredResults = filteredResults.filter(pkg => {
        const maxGroup = parseInt(pkg.groupSize.split('-')[1]);
        return travelers <= maxGroup;
      });
    }

    setSearchResults(filteredResults);
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-travel-pearl via-white to-travel-cream">
      <Navbar />
      <Hero />
      
      {/* Enhanced Search Section */}
      <section className="py-16 px-4 relative -mt-20 z-10">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-travel-primary mb-2">Find Your Perfect Journey</h3>
                <p className="text-gray-600">Search and filter travel options based on your preferences</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
                <Select onValueChange={setSelectedDestination}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Destinations</SelectItem>
                    <SelectItem value="heritage">Heritage Sites</SelectItem>
                    <SelectItem value="spiritual">Spiritual Places</SelectItem>
                    <SelectItem value="adventure">Adventure Spots</SelectItem>
                    <SelectItem value="kerala">Kerala</SelectItem>
                    <SelectItem value="rajasthan">Rajasthan</SelectItem>
                    <SelectItem value="himachal">Himachal Pradesh</SelectItem>
                  </SelectContent>
                </Select>
                
                <Input 
                  type="date" 
                  placeholder="Select Date" 
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
                
                <Select onValueChange={setSelectedTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="Preferred Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (6AM - 12PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12PM - 6PM)</SelectItem>
                    <SelectItem value="evening">Evening (6PM - 10PM)</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
                
                <Input 
                  type="number" 
                  placeholder="Travelers" 
                  min="1" 
                  max="20"
                  value={numberOfTravelers}
                  onChange={(e) => setNumberOfTravelers(e.target.value)}
                />
                
                <Select onValueChange={setServiceType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Service Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tour-package">Tour Package</SelectItem>
                    <SelectItem value="hotel">Hotel</SelectItem>
                    <SelectItem value="flight">Flight</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button 
                  className="bg-gradient-to-r from-travel-primary to-travel-secondary hover:scale-105 transition-transform text-white"
                  onClick={handleSearch}
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Search Tours
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Search Results Section */}
      {showResults && (
        <section className="py-12 px-4 bg-travel-pearl">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-center mb-2 text-travel-primary">Search Results</h3>
              <p className="text-center text-gray-600">
                Found {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} matching your criteria
              </p>
            </div>
            
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {searchResults.map((pkg, index) => (
                  <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <TourPackage {...pkg} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h4 className="text-xl font-semibold mb-2">No results found</h4>
                <p className="text-gray-600">Try adjusting your search criteria to find more options.</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Popular Destinations */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-travel-primary to-travel-secondary bg-clip-text text-transparent">
              Popular Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover India's most captivating destinations with our expertly crafted tour packages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDestinations.map((destination, index) => (
              <div key={destination.id} className="animate-zoom-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <DestinationCard {...destination} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tour Packages */}
      <section className="py-20 px-4 bg-gradient-to-r from-travel-sand/30 to-travel-azure/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-slide-in-left">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-travel-forest to-travel-secondary bg-clip-text text-transparent">
              Featured Tour Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Carefully curated experiences that showcase the best of India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourPackages.map((pkg, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <TourPackage {...pkg} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-travel-primary to-travel-accent bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete travel solutions for an unforgettable journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="animate-zoom-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <GoogleReviews placeId="ChIJN1t_tDeuEmsRUsoyG83frY4" />

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-travel-primary to-travel-secondary text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-xl opacity-90">Happy Travelers</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-xl opacity-90">Tour Packages</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-xl opacity-90">Destinations</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-xl opacity-90">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
