
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Users, Globe, Heart, Target, Eye } from "lucide-react";

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    image: "photo-1472099645785-5658abf4ff4e",
    description: "20+ years in travel industry"
  },
  {
    name: "Priya Sharma",
    role: "Head of Operations",
    image: "photo-1494790108755-2616b04b5ad4",
    description: "Expert in customer experience"
  },
  {
    name: "Amit Patel",
    role: "Travel Specialist",
    image: "photo-1507003211169-0a1dd7228f2d",
    description: "Specialist in heritage tours"
  },
  {
    name: "Meera Singh",
    role: "Adventure Guide",
    image: "photo-1438761681033-6461ffad8d80",
    description: "Mountain & trekking expert"
  }
];

const achievements = [
  { icon: Users, number: "10,000+", label: "Happy Travelers" },
  { icon: Star, number: "4.9", label: "Average Rating" },
  { icon: Globe, number: "50+", label: "Destinations" },
  { icon: Award, number: "15+", label: "Awards Won" }
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=2000&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-travel-sunset to-travel-coral bg-clip-text text-transparent">JafriTour&Travel</span>
          </h1>
          <p className="text-xl opacity-90">Making your trip through India easy, fun, and reliable.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-travel-ocean">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, JafriTour&Travel started as a small family-run business with a big dream — to show people from around the world the beauty and culture of India.

              </p>
              <p className="text-lg text-gray-600 mb-6">
                Today, we're proud to be one of the top travel companies in India. We've helped over 10,000 people explore and enjoy unforgettable trips across the country.
              </p>
              <p className="text-lg text-gray-600">
                We love travel, and we work hard to give every customer the best experience — from creating special tour plans to offering friendly, reliable service
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&h=400&q=80"
                alt="Our Journey - JafriTour&Travel story photo"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-travel-ocean to-travel-sunset rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-travel-ocean">Our Mission</h3>
                <p className="text-gray-600">
                  To offer real, eco-friendly, and meaningful travel experiences that help people connect with India’s history, culture, and natural beauty.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-travel-sunset to-travel-coral rounded-full flex items-center justify-center">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-travel-ocean">Our Vision</h3>
                <p className="text-gray-600">
                  Our goal is to become India’s most trusted and creative travel company, encouraging millions of people to discover and enjoy the amazing variety our country offers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-travel-ocean">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-travel-ocean to-travel-sunset rounded-full flex items-center justify-center">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-travel-ocean mb-2">{achievement.number}</div>
                  <div className="text-gray-600">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
     {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-travel-ocean">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <img
                    src={`https://images.unsplash.com/${member.image}?auto=format&fit=crop&w=200&h=200&q=80`}
                    alt={`${member.name} - Team member photo`}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default AboutUs;
