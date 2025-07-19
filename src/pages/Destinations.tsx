import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestinationCard from "@/components/DestinationCard";
import TourPackage from "@/components/TourPackage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MapPin, Clock, Users, Star, Heart, CheckCircle } from "lucide-react";
import { Helmet } from 'react-helmet-async';

// Popular Destinations Data (same as Index page)
const popularDestinations = [
  {
    id: 1,
    name: "Char Dham Yatra",
    image: "/destinations/char-dham-yatra.png",
    description: "Begin a holy journey to Yamunotri, Gangotri, Kedarnath, and Badrinath. Feel peace in the mountains and connect with India's spiritual soul",
    duration: "10 Days / 9 Nights",
    price: "Rs 8,000 Per Day",
    rating: 4.8,
    tags: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath", "12 Seater Tempo Traveller"]
  },
  {
    id: 2,
    name: "Nainital Hills & Lakes Tour",
    image: "/destinations/nainital-tour.jpg",
    description: "Scenic lakes, peaceful hills, and cool mountain air await you in Nainital. Explore the charming Naini Jheel, walk through pine forests, and enjoy the calm and beauty of this popular hill station.",
    duration: "5 Days / 4 Nights",
    price: "Rs 7500 Per Day",
    rating: 4.6,
    tags: ["Nature", "Hills", "Relax", "Adventure", "12 Seater Tempo Traveller"]
  },
  {
    id: 3,
    name: "Mussoorie, Dehradun, Rishikesh & Haridwar Tour",
    image: "/destinations/dehradun-rishikesh-haridwar-tour.png",
    description: "Enjoy a perfect hill and spiritual getaway. Visit the queen of hills, Mussoorie, feel the peace at Rishikesh's Ganga Aarti, explore the beauty of Dehradun, and experience the divine vibe of Haridwar.",
    duration: "6 Days / 5 Nights",
    price: "Rs 5,500 Per Day",
    rating: 4.7,
    tags: ["Nature", "Hills", "Spiritual", "12 Seater Tempo Traveller"]
  },
  {
    id: 4,
    name: "Amarnath Yatra Tour",
    image: "/destinations/char-dham-yatra.png",
    description: "Embark on a sacred pilgrimage to the holy Amarnath Cave, one of the most revered shrines in Hinduism. Experience the spiritual journey through the beautiful Kashmir Valley, witness the natural ice Shiva Lingam, and immerse yourself in divine blessings.",
    duration: "8 Days / 7 Nights",
    price: "Rs 9,500 Per Day",
    rating: 4.9,
    tags: ["Spiritual", "Pilgrimage", "Kashmir", "Amarnath", "12 Seater Tempo Traveller"]
  },
  {
    id: 5,
    name: "Kullu Manali Shimla Tour",
    image: "/destinations/nainital-tour.jpg",
    description: "Experience the magic of Himachal Pradesh with this comprehensive tour covering Kullu, Manali, and Shimla. From snow-capped peaks and lush valleys to adventure activities and local culture, discover the best of the Himalayas.",
    duration: "7 Days / 6 Nights",
    price: "Rs 7,200 Per Day",
    rating: 4.8,
    tags: ["Mountains", "Adventure", "Snow", "Culture", "12 Seater Tempo Traveller"]
  },
  {
    id: 6,
    name: "Ayodhya Prayagraj Banaras Tour",
    image: "/destinations/agra-tour.png",
    description: "Journey through the spiritual heart of India visiting Ayodhya, Prayagraj (Allahabad), and Banaras (Varanasi). Experience the divine energy of these holy cities, witness sacred rituals, and connect with India's spiritual heritage.",
    duration: "6 Days / 5 Nights",
    price: "Rs 6,800 Per Day",
    rating: 4.7,
    tags: ["Spiritual", "Temples", "Ganga", "Heritage", "12 Seater Tempo Traveller"]
  },
  {
    id: 8,
    name: "Kerala Backwaters Paradise",
    image: "/destinations/agra-tour.png",
    description: "Cruise through serene backwaters, explore spice plantations, and experience the tranquility of God's Own Country with traditional houseboat stays.",
    duration: "5 Days / 4 Nights",
    price: "Rs 7,000 Per Day",
    rating: 4.8,
    tags: ["Nature", "Backwaters", "Relaxation", "12 Seater Tempo Traveller"]
  },
  {
    id: 9,
    name: "Rajasthan Royal Experience",
    image: "/destinations/delhi.png",
    description: "Journey through the royal state of Rajasthan. Visit magnificent palaces, experience desert safaris, and witness vibrant cultural performances.",
    duration: "10 Days / 9 Nights",
    price: "Rs 8,500 Per Day",
    rating: 4.7,
    tags: ["Royal", "Desert", "Palaces", "12 Seater Tempo Traveller"]
  }
];

// Featured Tour Packages Data (same as Index page)
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
      "Guru Ka Tal Sikh Pilgrimage Site"
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
      "Nubra Valley Sand Dunes",
      "Magnetic Hill Gravity-Defying Phenomenon",
      "Shanti Stupa Panoramic Views",
      "Khardung La Pass One of the World's Highest Motorable Roads"
    ],
    category: "Adventure & Culture"
  },
  {
    id: 4,
    title: "Goa Beach Paradise",
    duration: "5 Days / 4 Nights",
    groupSize: "6-8 People",
    price: 15999,
    originalPrice: 19999,
    image: "/destinations/nainital-tour.jpg",
    rating: 4.6,
    reviews: 93,
    highlights: [
      "Calangute Beach",
      "Baga Beach Water Sports",
      "Old Goa Churches",
      "Dudhsagar Falls",
      "Spice Plantation Tour",
      "Sunset Cruise",
      "Casino Experience",
      "Local Market Shopping"
    ],
    category: "Beach & Adventure"
  },
  {
    id: 5,
    title: "Kerala Ayurveda & Wellness",
    duration: "6 Days / 5 Nights",
    groupSize: "8-10 People",
    price: 22999,
    originalPrice: 27999,
    image: "/destinations/char-dham-yatra.png",
    rating: 4.8,
    reviews: 76,
    highlights: [
      "Ayurvedic Treatments",
      "Backwater Houseboat",
      "Tea Plantation Visit",
      "Kathakali Dance Show",
      "Spice Garden Tour",
      "Yoga Sessions",
      "Traditional Cooking Class",
      "Wildlife Sanctuary"
    ],
    category: "Wellness & Nature"
  },
  {
    id: 6,
    title: "Rajasthan Desert Safari",
    duration: "8 Days / 7 Nights",
    groupSize: "10-12 People",
    price: 32999,
    originalPrice: 38999,
    image: "/destinations/dehradun-rishikesh-haridwar-tour.png",
    rating: 4.7,
    reviews: 88,
    highlights: [
      "Jaisalmer Fort",
      "Desert Camp Stay",
      "Camel Safari",
      "Folk Music Performance",
      "Jodhpur Blue City",
      "Udaipur Lake Palace",
      "Pushkar Holy City",
      "Jaipur Pink City"
    ],
    category: "Desert & Culture"
  }
];

// Additional Destinations for the main grid
const additionalDestinations = [
  
  {
    id: 9,
    name: "Kashmir Valley Paradise",
    image: "/destinations/laddakh.png",
    description: "Discover the paradise on earth - Kashmir. Visit Dal Lake, Gulmarg, Pahalgam, and experience the beauty of the valley.",
    duration: "7 Days / 6 Nights",
    price: "Rs 9,000 Per Day",
    rating: 4.8,
    tags: ["Mountains", "Lakes", "Adventure", "12 Seater Tempo Traveller"]
  }
];

const Destinations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-travel-pearl via-white to-travel-cream">
      <Helmet>
        <title>Destinations in India | Jafri Tour & Travel</title>
        <meta name="description" content="Explore top destinations in India including Char Dham, Nainital, Mussoorie, Haridwar, Rishikesh, and more with Jafri Tour & Travel." />
        <link rel="canonical" href="https://jafritourntravel.com/destinations" />
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=2000&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Explore <span className="bg-gradient-to-r from-travel-secondary to-travel-gold bg-clip-text text-transparent">Destinations</span>
          </h1>
          <p className="text-xl opacity-90">Discover incredible places across India</p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search destinations..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2 border-travel-primary text-travel-primary hover:bg-travel-primary hover:text-white">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      {/* All Destinations Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-travel-primary to-travel-accent bg-clip-text text-transparent">
              All Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our complete collection of destinations across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...popularDestinations, ...additionalDestinations].map((destination, index) => (
              <div key={destination.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <DestinationCard {...destination} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-travel-primary to-travel-secondary text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-xl opacity-90">Destinations</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-xl opacity-90">Tour Packages</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-xl opacity-90">Happy Travelers</div>
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

export default Destinations;
