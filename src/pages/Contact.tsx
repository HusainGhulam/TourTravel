
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Helmet } from 'react-helmet-async';

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Jafri Tour & Travel Jafri House Jharipani Mussoories", "Dist:Dehradun, Uttrakhand,Pin: 248179"]
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 9557538664", "+91 7906708464"]
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["travelsjafri@gmail.com", "zackJafri@gmail.com"]
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Satuday: 9:00 AM - 9:00 PM", "Sunday: 8:00 AM - 5:00 PM"]
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Contact Us | Jafri Tour & Travel</title>
        <meta name="description" content="Contact Jafri Tour & Travel for inquiries, bookings, and travel assistance. We're here to help you plan your perfect journey in India." />
        <link rel="canonical" href="https://jafritourntravel.com/contact" />
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Contact <span className="bg-gradient-to-r from-travel-sunset to-travel-coral bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl opacity-90">We're here to help plan your perfect journey</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Google Map (replaces Contact Form) */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-0">
                <h2 className="text-3xl font-bold mb-0 pb-0 text-travel-ocean p-8 pt-8">Our Location</h2>
                <div className="relative w-full aspect-[16/14] sm:aspect-[16/12] lg:aspect-[16/16] rounded-lg overflow-hidden">
                  <iframe
                    title="Jafri Tour & Travel Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.234234234!2d78.123456789!3d30.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929e7b1b1b1b1%3A0x123456789abcdef!2sJafri%20Tour%20%26%20Travel!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-travel-ocean">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-travel-ocean to-travel-sunset rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-600">{detail}</p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
