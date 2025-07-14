
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourPackage from "@/components/TourPackage";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, MapPin } from "lucide-react";
import GallerySlider from '../components/GallerySlider';

const tourPackages = [
  {
    id: 1,
    title: "Mystic Darjeeling Escape",
    image: "/destinations/darj.jpeg", // replace with a relevant Darjeeling image ID if needed
    duration: "7 Days / 6 Nights",
    groupSize: "2-12 People",
    price: 25000,
    originalPrice: 30000,
    rating: 4.8,
    reviews: 124,
    highlights: [
      "Scenic Toy Train Ride",
      "Visit to Tiger Hill Sunrise Point",
      "Explore Tea Gardens",
      "Darjeeling Himalayan Zoo",
      "Peace Pagoda Visit",
      "Local Tibetan Cuisine"
    ],
    category: "Nature & Culture"
  }
  ,
  {
  id: 2,
  title: "Kerala Backwater Paradise",
  image: "/destinations/kerla.jpeg",// Replace with an actual image URL or asset path
  duration: "5 Days / 4 Nights",
  groupSize: "2-12 People",
  price: 18000,
  originalPrice: 22000,
  rating: 4.9,
  reviews: 89,
  highlights: [
    "Luxury Houseboat Cruise in Alleppey",
    "Visit to Spice Plantations in Thekkady",
    "Relaxing Ayurveda Spa Session",
    "Kathakali & Mohiniyattam Cultural Performance",
    "Sunset at Marari Beach",
    "Authentic Kerala Cuisine Experience"
  ],
  category: "Nature & Wellness"
}
,
  {
    id: 3,
    title: "Rajasthan Royal Experience",
    image: "/destinations/rajis.jpg",
    duration: "10 Days / 9 Nights",
    groupSize: "2-12 People",
    price: 35000,
    originalPrice: 42000,
    rating: 4.7,
    reviews: 156,
    highlights: ["Palace Hotels", "Desert Safari", "Cultural Shows", "Royal Dining"],
    category: "Luxury"
  },
  {
    id: 4,
    title: "Goa Beach Tour",
    image: "/destinations/goa.jpeg",
    duration: "4 Days / 3 Nights",
    groupSize: "2-8 People",
    price: 15000,
    originalPrice: 18000,
    rating: 4.6,
    reviews: 203,
    highlights: ["Beach Resort", "Water Sports", "Sunset Cruise", "Beach Parties"],
    category: "Beach"
  }
];

const categories = ["All", "Heritage", "Nature", "Luxury", "Beach", "Adventure", "Cultural"];

const TourPackages = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Tour <span className="bg-gradient-to-r from-travel-sunset to-travel-coral bg-clip-text text-transparent">Packages</span>
          </h1>
          <p className="text-xl opacity-90">Curated experiences for every traveler</p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "secondary"}
                className="cursor-pointer hover:bg-travel-ocean hover:text-white transition-colors px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {tourPackages.map((pkg) => (
              <TourPackage key={pkg.id} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      <GallerySlider />
      <Footer />
    </div>
  );
};

export default TourPackages;
