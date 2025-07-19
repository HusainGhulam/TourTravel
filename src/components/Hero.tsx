import { Button } from "@/components/ui/button";
import { Play, MapPin, Star } from 'lucide-react';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/photo-1433086966358-54859d0ed716.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover
            <span className="bg-gradient-to-r from-travel-secondary to-travel-gold bg-clip-text text-transparent block">
              Incredible India
            </span>
          </h1>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl md:text-2xl mb-2 opacity-90 max-w-2xl mx-auto">
            <span className="font-semibold">Welcome to Jafri Tour & Travel</span> — your trusted choice for spiritual and cultural journeys in Northern India.
          </p>
          <p className="text-lg md:text-xl mb-2 opacity-90 max-w-2xl mx-auto">
            Begin your sacred <span className="font-semibold text-travel-gold">Char Dham Yatra</span> to <span className="font-semibold">Yamunotri</span>, <span className="font-semibold">Gangotri</span>, <span className="font-semibold">Kedarnath</span>, and <span className="font-semibold">Badrinath</span> with ease and comfort.
          </p>
          <p className="text-lg md:text-xl mb-2 opacity-90 max-w-2xl mx-auto">
            Discover the peaceful vibes of <span className="font-semibold">Haridwar</span> and <span className="font-semibold">Rishikesh</span>, and take in the natural beauty of <span className="font-semibold">Mussoorie</span> and <span className="font-semibold">Dehradun</span> along the way.
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We offer <span className="font-semibold">customized travel plans</span>, smooth arrangements, local guidance, and dependable service to make your journey meaningful and memorable.
          </p>
        </div>

        <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" style={{ animationDelay: '0.4s' }}>
          <Link to="/popular-destinations">
            <Button size="lg" className="bg-gradient-to-r from-travel-primary to-travel-secondary hover:scale-105 transition-transform text-lg px-8 py-3 text-white">
              <MapPin className="mr-2 h-5 w-5" />
              Popular Tourist Destinations in India
            </Button>
          </Link>
          
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white bg-white/10 hover:bg-white hover:text-travel-primary hover:shadow-2xl hover:border-travel-primary active:bg-travel-primary active:text-white transition-all text-lg px-8 py-3 focus:ring-2 focus:ring-travel-secondary focus:outline-none font-semibold backdrop-blur"
            style={{display: 'inline-flex', alignItems: 'center'}}
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Video
          </Button>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">4.9</div>
            <div className="flex items-center justify-center mb-1">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
            </div>
            <div className="text-sm opacity-80">Customer Rating</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">10K+</div>
            <div className="text-sm opacity-80">Happy Travelers</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-sm opacity-80">Destinations</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
