
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Globe, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-travel-ocean to-travel-sunset py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Travel Deals</h3>
          <p className="mb-6 opacity-90">Subscribe to our newsletter for exclusive offers and travel tips</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
            <Button variant="secondary" className="bg-white text-travel-ocean hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold">JAFRI Tour & Travel</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Sharing the beauty and heritage of India with travelers India.
      Creating unforgettable memories since 2009.
              </p>
              <div className="flex space-x-4">
				  <a
					href="https://www.facebook.com/share/1GFPnJTAgS/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Visit our Facebook page"
				  >
					<Facebook className="h-5 w-5 text-gray-400 hover:text-travel-ocean cursor-pointer transition-colors" />
				  </a>
				  <a
					href="https://www.instagram.com/jafritravels/?utm_source=qr&igsh=Y2VjenpnaGttbHFw"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Visit our Instagram page"
				  >
					<Instagram className="h-5 w-5 text-gray-400 hover:text-travel-ocean cursor-pointer transition-colors" />
				  </a>
				  <a
					href="https://www.youtube.com/@zackjafri1898"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Visit our YouTube channel"
				  >
					<Youtube className="h-5 w-5 text-gray-400 hover:text-travel-ocean cursor-pointer transition-colors" />
				  </a>
				</div>

            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About Us', 'Our Services', 'Destinations', 'Tour Packages', 'Travel Guide', 'Reviews'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-travel-ocean transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinations */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Popular Destinations</h4>
              <ul className="space-y-2">
                {[
                  { name: 'Char Dham Yatra', slug: 'char-dham-yatra' },
                  { name: 'Nainital Hills', slug: 'nainital-hills-lakes' },
                  { name: 'Mussoorie, Dehradun, Rishikesh ,Haridwar Tour', slug: 'mussoorie-dehradun-rishikesh-haridwar' },
                  { name: 'Amarnath Yatra Tour', slug: 'amarnath-yatra' },
                  { name: 'Kullu Manali Shimla Tour', slug: 'kullu-manali-shimla' },
                  { name: 'Ayodhya Prayagraj Banaras Tour', slug: 'ayodhya-prayagraj-banaras' },
                ].map((destination) => (
                  <li key={destination.slug}>
                    <a href={`/tour-details/${destination.slug}`} className="text-gray-400 hover:text-travel-ocean transition-colors">
                      {destination.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-travel-ocean mt-0.5 flex-shrink-0" />
                  <div className="text-gray-400">
                    <div>Jafri Tour & Travel</div>
                    <div>Jafri House Jharipani Mussoories, Pin: 248179</div>
                    <div>Dist:Dehradun, Uttrakhand</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-travel-ocean flex-shrink-0" />
                  <span className="text-gray-400">+91 9557538664</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-travel-ocean flex-shrink-0" />
                  <span className="text-gray-400">travelsjafri@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Jafri Tour & Travel. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-travel-ocean transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-travel-ocean transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-travel-ocean transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
