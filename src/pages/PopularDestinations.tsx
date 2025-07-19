import React from 'react';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const destinations = [
  {
    name: "Agra",
    image: "/destinations/agra-tour.png",
    description: "Home to the magnificent Taj Mahal, Agra is a symbol of love and a UNESCO World Heritage Site.",
    alt: "Taj Mahal in Agra, India"
  },
  {
    name: "Amarnath",
    image: "/destinations/amar/amarnath-yatra1.jpg",
    description: "A sacred pilgrimage site, famous for the Amarnath Cave and its naturally occurring ice Shiva Lingam.",
    alt: "Amarnath Cave pilgrimage, Jammu and Kashmir"
  },
  {
    name: "Ayodhya",
    image: "/destinations/ayodhya.png",
    description: "The birthplace of Lord Rama, Ayodhya is a city of immense religious significance for Hindus.",
    alt: "Ayodhya city, birthplace of Lord Rama"
  },
  {
    name: "Char Dham Yatra",
    image: "/destinations/char-dham-yatra.png",
    description: "A spiritual journey to Yamunotri, Gangotri, Kedarnath, and Badrinath in the Himalayas.",
    alt: "Char Dham Yatra pilgrimage route"
  },
  {
    name: "Goa",
    image: "/destinations/goa.jpeg",
    description: "Famous for its beautiful beaches, vibrant nightlife, and Portuguese heritage.",
    alt: "Goa beach view, India"
  },
  {
    name: "Kerala",
    image: "/destinations/kerla.jpeg",
    description: "Known as 'God's Own Country', Kerala is famous for its backwaters, beaches, and hill stations.",
    alt: "Kerala backwaters, India"
  },
  {
    name: "Ladakh",
    image: "/destinations/laddakh.png",
    description: "A high-altitude desert, Ladakh is renowned for its stunning landscapes and Buddhist monasteries.",
    alt: "Ladakh landscape, India"
  },
  {
    name: "Nainital",
    image: "/destinations/nainital-tour.jpg",
    description: "A charming hill station known for its scenic lake and pleasant climate.",
    alt: "Nainital lake and hills, India"
  },
  {
    name: "Golden Triangle",
    image: "/destinations/Golden Triangle.jpg",
    description: "Covers Delhi, Agra, and Jaipur, offering a glimpse into India's rich history and culture.",
    alt: "Golden Triangle route: Delhi, Agra, Jaipur"
  },
];

const PopularDestinations = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Popular Tourist Destinations in India | Jafri Tour & Travel</title>
        <meta name="description" content="Explore the most popular tourist destinations in India including Agra, Amarnath, Ayodhya, Char Dham, Goa, Kerala, Ladakh, Nainital, and the Golden Triangle. Plan your next journey with Jafri Tour & Travel." />
        <link rel="canonical" href="https://jafritourntravel.com/popular-destinations" />
      </Helmet>
      <Navbar />
      <main className="flex-1 py-12 px-4 md:px-12">
        <header>
          <h1 className="text-4xl font-bold text-center mb-8 text-travel-primary">Popular Tourist Destinations in India</h1>
        </header>
        <section>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
            {destinations.map((dest) => (
              <article key={dest.name} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col" itemScope itemType="https://schema.org/TouristDestination">
                <img src={dest.image} alt={dest.alt} className="h-48 w-full object-cover" loading="lazy" itemProp="image" />
                <div className="p-4 flex-1 flex flex-col">
                  <h2 className="text-xl font-semibold mb-2 text-travel-secondary" itemProp="name">{dest.name}</h2>
                  <p className="text-gray-700 mb-4 flex-1" itemProp="description">{dest.description}</p>
                  <Button className="mt-auto bg-travel-primary text-white hover:bg-travel-secondary" aria-label={`Learn more about ${dest.name}`}>Learn More</Button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PopularDestinations; 