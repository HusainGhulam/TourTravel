import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Calendar, Users, Star, Clock, CheckCircle, Heart, Share2, Phone, Mail, Globe, Camera, Route, Car, Hotel, Mountain, ArrowLeft, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingFormPopup from '../components/BookingFormPopup';

// Slug to ID mapping for SEO-friendly URLs
const slugToIdMap: { [key: string]: number } = {
  // Destination-based tours
  'char-dham-yatra': 1,
  'nainital-hills-lakes': 2,
  'mussoorie-dehradun-rishikesh-haridwar': 3,
  'amarnath-yatra': 4,
  'kullu-manali-shimla': 5,
  'ayodhya-prayagraj-banaras': 6,
  // Tour package-based tours
  'delhi-heritage-discovery': 7,
  'spiritual-india-journey-agra': 8,
  'spiritual-heights-ladakh': 9,
  'goa-beach-paradise': 10,
  'kerala-ayurveda-wellness': 11,
  'rajasthan-desert-safari': 12
};

// Tour data - in a real app, this would come from an API
const tourData = {
  // Destination-based tours
  'char-dham-yatra': {
    id: 1,
    title: "Char Dham Yatra",
    duration: "10 Days / 9 Nights",
    groupSize: "10-12 People",
    price: 80000,
    originalPrice: 90000,
    image: "/destinations/char-dham-yatra.png",
    rating: 4.8,
    reviews: 234,
    highlights: [
      "Yamunotri - Source of Yamuna River",
      "Gangotri - Source of Ganga River", 
      "Kedarnath - Lord Shiva Temple",
      "Badrinath - Lord Vishnu Temple",
      "Spiritual Journey Through Himalayas",
      "Sacred River Bathing",
      "Ancient Temple Architecture",
      "Mountain Scenery"
    ],
    category: "Spiritual & Pilgrimage",
    description: "Begin a holy journey to Yamunotri, Gangotri, Kedarnath, and Badrinath. Feel peace in the mountains and connect with India's spiritual soul. This sacred yatra takes you through the most revered pilgrimage sites in the Himalayas.",
    detailedItinerary: [
      {
        day: "Day 1-2",
        title: "Drive to Haridwar",
        activities: ["Start Journey", "Evening Ganga Aarti", "Hotel check-in"]
      },
      {
        day: "Day 3-4",
        title: "Yamunotri Dham",
        activities: ["Drive to Yamunotri", "Temple darshan", "Hot water spring bath", "Return to hotel"]
      },
      {
        day: "Day 5-6",
        title: "Gangotri Dham",
        activities: ["Drive to Gangotri", "Temple darshan", "Ganga river bathing", "Evening prayers"]
      },
      {
        day: "Day 7-8",
        title: "Kedarnath Dham",
        activities: ["Drive to Kedarnath", "Temple darshan", "Mountain trek", "Spiritual experience"]
      },
      {
        day: "Day 9-10",
        title: "Badrinath Dham",
        activities: ["Drive to Badrinath", "Temple darshan", "Tapt Kund bath", "Return journey"]
      }
    ],
    inclusions: [
      "Accommodation in hotels and guest houses",
      "Daily meals (breakfast, lunch, dinner)",
      "AC transportation throughout",
      "Professional guide and support staff",
      "All temple entry fees and permits",
      "Medical support and first aid",
      "Welcome kit and travel documents"
    ],
    exclusions: [
      "International/Domestic flights",
      "Personal expenses",
      "Tips and gratuities",
      "Travel insurance",
      "Additional activities not mentioned"
    ],
    importantInfo: [
      "Physical fitness certificate required",
      "Valid ID proof mandatory",
      "Warm clothes essential for high altitude",
      "Best time: May to June and September to October",
      "Altitude sickness precautions necessary",
      "Photography restrictions at some sites"
    ],
    gallery: [
      "/destinations/char-dham-yatra.png",
      "/destinations/agra-tour.png",
      "/destinations/nainital-tour.jpg",
      "/destinations/nainital-tour.jpg",
      "/destinations/nainital-tour.jpg",
      "/destinations/nainital-tour.jpg"
    ]
  },
  'nainital-hills-lakes': {
    id: 2,
    title: "Nainital Hills & Lakes Tour",
    duration: "5 Days / 4 Nights",
    groupSize: "10-12 People",
    price: 37500,
    originalPrice: 45000,
    image: "/destinations/nainital-tour.jpg",
    rating: 4.6,
    reviews: 189,
    highlights: [
      "Naini Lake - Heart of Nainital",
      "Snow View Point - Panoramic Views",
      "Eco Cave Gardens - Natural Caves",
      "Tiffin Top - Sunset Point",
      "Naina Devi Temple - Sacred Temple",
      "Mall Road - Shopping & Food",
      "Bhimtal Lake - Peaceful Waters",
      "Sattal - Seven Lakes"
    ],
    category: "Nature & Hills",
    description: "Scenic lakes, peaceful hills, and cool mountain air await you in Nainital. Explore the charming Naini Jheel, walk through pine forests, and enjoy the calm and beauty of this popular hill station. A perfect getaway for nature lovers and those looking to relax in the lap of the Himalayas.",
    detailedItinerary: [
      {
        day: "Day 1",
        title: "Arrival in Nainital",
        activities: ["Start Journey", "Hotel check-in", "Evening at Mall Road", "Welcome dinner"]
      },
      {
        day: "Day 2",
        title: "Nainital Local",
        activities: ["Naini Lake boat ride", "Naina Devi Temple", "Mall Road walk", "Evening at Tiffin Top"]
      },
      {
        day: "Day 3",
        title: "Excursions",
        activities: ["Snow View Point", "Eco Cave Gardens", "Bhimtal Lake", "Sattal visit"]
      },
      {
        day: "Day 4",
        title: "Adventure & Relaxation",
        activities: ["Trekking options", "Shopping at Mall Road", "Evening at lake", "Farewell dinner"]
      },
      {
        day: "Day 5",
        title: "Departure",
        activities: ["Breakfast", "Hotel check-out", "Airport drop"]
      }
    ],
    inclusions: [
      "Accommodation in 3-star hotels",
      "Daily breakfast and dinner",
      "AC transportation throughout",
      "Professional guide",
      "All sightseeing and entry fees",
      "Boat ride on Naini Lake",
      "Welcome kit and travel documents"
    ],
    exclusions: [
      "International/Domestic flights",
      "Personal expenses",
      "Lunch (except where mentioned)",
      "Tips and gratuities",
      "Travel insurance",
      "Additional activities not mentioned"
    ],
    importantInfo: [
      "Valid ID proof required",
      "Warm clothes essential (especially in winter)",
      "Comfortable walking shoes recommended",
      "Best time: March to June and September to December",
      "Photography allowed at most sites",
      "Carry water and snacks for excursions"
    ],
    gallery: [
      "/destinations/nainital-tour.jpg",
      "/destinations/char-dham-yatra.png",
      "/destinations/char-dham-yatra.png",
      "/destinations/char-dham-yatra.png",
      "/destinations/char-dham-yatra.png",
      "/destinations/dehradun-rishikesh-haridwar-tour.png"
    ]
  },
  'mussoorie-dehradun-rishikesh-haridwar': {
    id: 3,
    title: "Mussoorie, Dehradun, Rishikesh & Haridwar Tour",
    duration: "6 Days / 5 Nights",
    groupSize: "10-12 People",
    price: 33000,
    originalPrice: 40000,
    image: "/destinations/dehradun-rishikesh-haridwar-tour.png",
    rating: 4.7,
    reviews: 156,
    highlights: [
      "Mussoorie - Queen of Hills",
      "Dehradun - Capital of Uttarakhand",
      "Rishikesh - Yoga Capital of World",
      "Haridwar - Gateway to Gods",
      "Ganga Aarti at Har Ki Pauri",
      "Laxman Jhula & Ram Jhula",
      "Kempty Falls - Waterfall",
      "Camel's Back Road"
    ],
    category: "Nature & Spiritual",
    description: "Enjoy a perfect hill and spiritual getaway. Visit the queen of hills, Mussoorie, feel the peace at Rishikesh's Ganga Aarti, explore the beauty of Dehradun, and experience the divine vibe of Haridwar. From mountain views to holy rivers, this tour gives you the best of nature, adventure, and spirituality.",
    detailedItinerary: [
      {
        day: "Day 1",
        title: "Arrival in Dehradun",
        activities: ["Start Journey", "Dehradun sightseeing", "Hotel check-in", "Evening walk"]
      },
      {
        day: "Day 2",
        title: "Dehradun to Mussoorie",
        activities: ["Drive to Mussoorie", "Camel's Back Road", "Kempty Falls", "Mall Road"]
      },
      {
        day: "Day 3",
        title: "Mussoorie Local",
        activities: ["Gun Hill", "Company Garden", "Lal Tibba", "Evening at Mall Road"]
      },
      {
        day: "Day 4",
        title: "Mussoorie to Rishikesh",
        activities: ["Drive to Rishikesh", "Laxman Jhula", "Ram Jhula", "Evening Ganga Aarti"]
      },
      {
        day: "Day 5",
        title: "Rishikesh to Haridwar",
        activities: ["Drive to Haridwar", "Har Ki Pauri", "Temple visits", "Evening Aarti"]
      },
      {
        day: "Day 6",
        title: "Departure",
        activities: ["Morning prayers", "Breakfast", "Hotel check-out"]
      }
    ],
    inclusions: [
      "Accommodation in 3-star hotels",
      "Daily breakfast and dinner",
      "AC transportation throughout",
      "Professional guide",
      "All sightseeing and entry fees",
      "Boat ride in Rishikesh",
      "Welcome kit and travel documents"
    ],
    exclusions: [
      "International/Domestic flights",
      "Personal expenses",
      "Lunch (except where mentioned)",
      "Tips and gratuities",
      "Travel insurance",
      "Additional activities not mentioned"
    ],
    importantInfo: [
      "Valid ID proof required",
      "Dress modestly for temple visits",
      "Comfortable walking shoes essential",
      "Best time: March to June and September to December",
      "Photography restrictions at some sites",
      "Carry water and snacks for excursions"
    ],
    gallery: [
      "/destinations/dehradun-rishikesh-haridwar-tour.png",
      "/destinations/nainital-tour.jpg",
      "/destinations/nainital-tour.jpg",
      "/destinations/nainital-tour.jpg",
      "/destinations/nainital-tour.jpg",
      "/destinations/char-dham-yatra.png"
    ]
  },
  'amarnath-yatra': {
    id: 4,
    title: "Amarnath Yatra Tour",
    duration: "8 Days / 7 Nights",
    groupSize: "10-12 People",
    price: 76000,
    originalPrice: 85000,
    image: "/destinations/char-dham-yatra.png",
    rating: 4.9,
    reviews: 156,
    highlights: [
      "Amarnath Cave - Holy Ice Shiva Lingam",
      "Pahalgam Valley - Gateway to Amarnath",
      "Baltal Base Camp - Alternative Route",
      "Chandanwari - Starting Point of Yatra",
      "Sheshnag Lake - Sacred Lake",
      "Mahagunas Pass - High Altitude Pass",
      "Panchtarni - Last Camp Before Cave",
      "Holy Darshan at Amarnath Cave"
    ],
    category: "Spiritual & Pilgrimage",
    description: "Embark on a sacred pilgrimage to the holy Amarnath Cave, one of the most revered shrines in Hinduism. Experience the spiritual journey through the beautiful Kashmir Valley, witness the natural ice Shiva Lingam, and immerse yourself in divine blessings. This yatra is not just a journey but a spiritual transformation.",
    detailedItinerary: [
      {
        day: "Day 1",
        title: "Arrival in Srinagar",
        activities: ["Start Journey", "Hotel check-in", "Welcome dinner", "Yatra briefing"]
      },
      {
        day: "Day 2",
        title: "Srinagar to Pahalgam",
        activities: ["Drive to Pahalgam", "Local sightseeing", "Preparation for yatra", "Evening prayers"]
      },
      {
        day: "Day 3",
        title: "Pahalgam to Chandanwari",
        activities: ["Registration for yatra", "Chandanwari visit", "Acclimatization", "Evening camp"]
      },
      {
        day: "Day 4",
        title: "Chandanwari to Sheshnag",
        activities: ["Start trek to Sheshnag", "Pissu Top crossing", "Sheshnag Lake darshan", "Night camp"]
      },
      {
        day: "Day 5",
        title: "Sheshnag to Panchtarni",
        activities: ["Mahagunas Pass crossing", "Panchtarni camp", "Evening prayers", "Rest"]
      },
      {
        day: "Day 6",
        title: "Panchtarni to Amarnath Cave",
        activities: ["Early morning trek", "Holy darshan at cave", "Return to Panchtarni", "Celebration"]
      },
      {
        day: "Day 7",
        title: "Return Journey",
        activities: ["Return to Pahalgam", "Rest and relaxation", "Evening prayers", "Farewell dinner"]
      },
      {
        day: "Day 8",
        title: "Departure",
        activities: ["Breakfast", "Hotel check-out", "Journey ends"]
      }
    ],
    inclusions: [
      "Accommodation in hotels and camps",
      "Daily meals (breakfast, lunch, dinner)",
      "Transportation throughout the journey",
      "Yatra registration and permits",
      "Professional guide and support staff",
      "Medical support and first aid",
      "Pony/mule service (optional)",
      "Welcome kit and travel documents"
    ],
    exclusions: [
      "International/Domestic flights",
      "Personal expenses",
      "Tips and gratuities",
      "Travel insurance",
      "Additional activities not mentioned",
      "Pony/mule charges (if not included)"
    ],
    importantInfo: [
      "Physical fitness certificate required",
      "Valid ID proof mandatory",
      "Warm clothes and trekking gear essential",
      "Best time: July to August (Shravan month)",
      "Altitude sickness precautions necessary",
      "Photography restrictions at holy sites"
    ],
    gallery: [
      "/destinations/char-dham-yatra.png",
      "/destinations/agra-tour.png",
      "/destinations/agra-tour.png",
      "/destinations/agra-tour.png",
      "/destinations/agra-tour.png",
      "/destinations/nainital-tour.jpg"
    ]
  },
  'kullu-manali-shimla': {
    id: 5,
    title: "Kullu Manali Shimla Tour",
    duration: "7 Days / 6 Nights",
    groupSize: "10-12 People",
    price: 50400,
    originalPrice: 60000,
    image: "/destinations/nainital-tour.jpg",
    rating: 4.8,
    reviews: 203,
    highlights: [
      "Manali - Queen of Hills",
      "Shimla - Summer Capital of British India",
      "Kullu Valley - Valley of Gods",
      "Solang Valley - Adventure Hub",
      "Mall Road Shimla - Shopping Paradise",
      "Hadimba Temple - Ancient Wooden Temple",
      "Kufri - Snow Point",
      "Rohtang Pass - Snow Adventure"
    ],
    category: "Adventure & Mountains",
    description: "Experience the magic of Himachal Pradesh with this comprehensive tour covering Kullu, Manali, and Shimla. From snow-capped peaks and lush valleys to adventure activities and local culture, discover the best of the Himalayas. This tour offers perfect blend of nature, adventure, and cultural experiences.",
    detailedItinerary: [
      {
        day: "Day 1",
        title: "Arrival in Shimla",
        activities: ["Start Journey", "Hotel check-in", "Mall Road walk", "Evening at Ridge"]
      },
      {
        day: "Day 2",
        title: "Shimla Exploration",
        activities: ["Viceregal Lodge", "Christ Church", "Kufri snow point", "Evening shopping"]
      },
      {
        day: "Day 3",
        title: "Shimla to Manali",
        activities: ["Drive to Manali", "Kullu Valley sightseeing", "Hotel check-in", "Local market"]
      },
      {
        day: "Day 4",
        title: "Manali Local",
        activities: ["Hadimba Temple", "Vashisht hot springs", "Old Manali", "Evening at Mall Road"]
      },
      {
        day: "Day 5",
        title: "Solang Valley Adventure",
        activities: ["Solang Valley", "Adventure activities", "Rohtang Pass (if open)", "Evening relaxation"]
      },
      {
        day: "Day 6",
        title: "Manali to Shimla",
        activities: ["Return to Shimla", "Free time for shopping", "Farewell dinner", "Evening walk"]
      },
      {
        day: "Day 7",
        title: "Departure",
        activities: ["Breakfast", "Hotel check-out", "Journey ends"]
      }
    ],
    inclusions: [
      "Accommodation in 3-star hotels",
      "Daily breakfast and dinner",
      "AC transportation throughout",
      "Professional English-speaking guide",
      "All sightseeing and entry fees",
      "Welcome kit and travel documents",
      "24/7 customer support"
    ],
    exclusions: [
      "International/Domestic flights",
      "Personal expenses",
      "Lunch (except where mentioned)",
      "Tips and gratuities",
      "Travel insurance",
      "Adventure activities charges",
      "Rohtang Pass permit charges"
    ],
    importantInfo: [
      "Valid ID proof required",
      "Warm clothes essential (especially in winter)",
      "Rohtang Pass may be closed due to weather",
      "Best time: March to June and September to December",
      "Adventure activities are optional and chargeable",
      "Photography allowed at most sites"
    ],
    gallery: [
      "/destinations/nainital-tour.jpg",
      "/destinations/char-dham-yatra.png",
      "/destinations/char-dham-yatra.png",
      "/destinations/char-dham-yatra.png",
      "/destinations/char-dham-yatra.png",
      "/destinations/dehradun-rishikesh-haridwar-tour.png"
    ]
  },
  'ayodhya-prayagraj-banaras': {
    id: 6,
    title: "Ayodhya Prayagraj Banaras Tour",
    duration: "6 Days / 5 Nights",
    groupSize: "10-12 People",
    price: 40800,
    originalPrice: 48000,
    image: "/destinations/agra-tour.png",
    rating: 4.7,
    reviews: 178,
    highlights: [
      "Ayodhya - Birthplace of Lord Rama",
      "Prayagraj - Triveni Sangam",
      "Banaras - Spiritual Capital of India",
      "Ram Janmabhoomi Temple",
      "Ganga Aarti at Dashashwamedh Ghat",
      "Sarnath - Buddhist Pilgrimage",
      "Hanuman Garhi Temple",
      "Kashi Vishwanath Temple"
    ],
    category: "Spiritual & Heritage",
    description: "Journey through the spiritual heart of India visiting Ayodhya, Prayagraj (Allahabad), and Banaras (Varanasi). Experience the divine energy of these holy cities, witness sacred rituals, and connect with India's spiritual heritage. This tour offers deep spiritual experiences and cultural immersion.",
    detailedItinerary: [
      {
        day: "Day 1",
        title: "Arrival in Ayodhya",
        activities: ["Start Journey", "Hotel check-in", "Ram Janmabhoomi visit", "Evening prayers"]
      },
      {
        day: "Day 2",
        title: "Ayodhya Exploration",
        activities: ["Hanuman Garhi", "Kanak Bhavan", "Nageshwarnath Temple", "Evening aarti"]
      },
      {
        day: "Day 3",
        title: "Ayodhya to Prayagraj",
        activities: ["Drive to Prayagraj", "Triveni Sangam", "Anand Bhavan", "Evening at Sangam"]
      },
      {
        day: "Day 4",
        title: "Prayagraj to Banaras",
        activities: ["Drive to Banaras", "Kashi Vishwanath Temple", "Evening Ganga Aarti", "Boat ride"]
      },
      {
        day: "Day 5",
        title: "Banaras Exploration",
        activities: ["Sarnath visit", "Morning boat ride", "Temple visits", "Evening aarti"]
      },
      {
        day: "Day 6",
        title: "Departure",
        activities: ["Morning prayers", "Breakfast", "Hotel check-out", "Return journey"]
      }
    ],
    inclusions: [
      "Accommodation in 3-star hotels",
      "Daily breakfast and dinner",
      "AC transportation throughout",
      "Professional guide",
      "All temple entry fees",
      "Boat ride in Banaras",
      "Welcome kit and travel documents"
    ],
    exclusions: [
      "International/Domestic flights",
      "Personal expenses",
      "Lunch (except where mentioned)",
      "Tips and gratuities",
      "Travel insurance",
      "Additional activities not mentioned"
    ],
    importantInfo: [
      "Dress modestly for temple visits",
      "Remove shoes before entering temples",
      "Photography restrictions at some sites",
      "Best time: October to March",
      "Carry water and comfortable shoes",
      "Respect local customs and traditions"
    ],
    gallery: [
      "/destinations/agra-tour.png",
      "/destinations/agra-tour.png",
      "/destinations/agra-tour.png",
      "/destinations/agra-tour.png",
      "/destinations/char-dham-yatra.png",
      "/destinations/delhi.png"
    ]
  },
  // Tour package-based tours (keeping original data)
  'delhi-heritage-discovery': {
    id: 7,
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
    category: "Heritage",
    description: "Embark on a fascinating journey through the heart of India's capital, Delhi. This comprehensive heritage tour takes you through centuries of history, from ancient monuments to modern marvels. Experience the perfect blend of old and new Delhi, exploring iconic landmarks, bustling markets, and spiritual sanctuaries.",
    detailedItinerary: [
      {
        day: "Day 1",
        title: "Arrival & Welcome",
        activities: ["Airport pickup", "Hotel check-in", "Welcome dinner", "Briefing session"]
      },
      {
        day: "Day 2",
        title: "Old Delhi Exploration",
        activities: ["Red Fort visit", "Jama Masjid", "Chandni Chowk market tour", "Rickshaw ride"]
      },
      {
        day: "Day 3",
        title: "New Delhi Discovery",
        activities: ["India Gate", "Rashtrapati Bhavan", "Parliament House", "Lunch at Connaught Place"]
      },
      {
        day: "Day 4",
        title: "Historical Monuments",
        activities: ["Qutub Minar", "Humayun's Tomb", "Lotus Temple", "Evening at Khan Market"]
      },
      {
        day: "Day 5",
        title: "Spiritual Journey",
        activities: ["Akshardham Temple", "ISKCON Temple", "Lunch at Dilli Haat", "Evening walk at Lodhi Garden"]
      },
      {
        day: "Day 6",
        title: "Cultural Experience",
        activities: ["National Museum", "Crafts Museum", "Shopping at Dilli Haat", "Farewell dinner"]
      },
      {
        day: "Day 7",
        title: "Departure",
        activities: ["Breakfast", "Hotel check-out", "Airport drop"]
      }
    ],
    inclusions: [
      "Accommodation in 4-star hotels",
      "Daily breakfast and dinner",
      "AC transportation throughout the tour",
      "Professional English-speaking guide",
      "All monument entry fees",
      "Welcome kit and travel documents",
      "24/7 customer support"
    ],
    exclusions: [
      "International/Domestic flights",
      "Personal expenses",
      "Lunch (except where mentioned)",
      "Tips and gratuities",
      "Travel insurance",
      "Any additional activities not mentioned"
    ],
    importantInfo: [
      "Valid ID proof required for all travelers",
      "Dress modestly when visiting religious sites",
      "Carry comfortable walking shoes",
      "Best time to visit: October to March",
      "Photography allowed at most sites (some restrictions apply)"
    ],
    gallery: [
      "/destinations/delhi.png",
      "/destinations/agra-tour.png",
      "/destinations/char-dham-yatra.png"
    ]
  },
  'spiritual-india-journey-agra': {
    id: 8,
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
    category: "Spiritual & Heritage",
    description: "Experience the spiritual essence of India through this carefully curated journey to Agra. Visit the iconic Taj Mahal, explore ancient forts, and immerse yourself in the rich cultural heritage of the Mughal era. This tour combines architectural marvels with spiritual experiences.",
    detailedItinerary: [
      {
        day: "Day 1",
        title: "Arrival in Agra",
        activities: ["Hotel check-in", "Welcome dinner", "Briefing about the tour"]
      },
      {
        day: "Day 2",
        title: "Taj Mahal & Agra Fort",
        activities: ["Sunrise at Taj Mahal", "Agra Fort exploration", "Local lunch", "Evening at Mehtab Bagh"]
      },
      {
        day: "Day 3",
        title: "Spiritual Sites",
        activities: ["Guru Ka Tal", "Akbar's Tomb", "Fatehpur Sikri", "Evening prayer experience"]
      },
      {
        day: "Day 4",
        title: "Departure",
        activities: ["Breakfast", "Final shopping", "Hotel check-out", "Departure"]
      }
    ],
    inclusions: [
      "3-star hotel accommodation",
      "Daily breakfast and dinner",
      "AC transportation",
      "Professional guide",
      "All monument entry fees",
      "Welcome kit"
    ],
    exclusions: [
      "International/Domestic flights",
      "Personal expenses",
      "Lunch",
      "Tips and gratuities",
      "Travel insurance"
    ],
    importantInfo: [
      "Taj Mahal closed on Fridays",
      "Dress modestly for religious sites",
      "Carry water and comfortable shoes",
      "Best time: October to March",
      "Photography restrictions at some sites"
    ],
    gallery: [
      "/destinations/agra-tour.png",
      "/destinations/delhi.png",
      "/destinations/char-dham-yatra.png"
    ]
  },
  'spiritual-heights-ladakh': {
    id: 9,
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
      "Leh Palace 17th Century Royal Palace",
      "Thiksey Monastery Spiritual Retreat",
      "Hemis Monastery Largest Monastery in Ladakh",
      "Hall of Fame Museum Tribute to Indian Army"
    ],
    category: "Adventure & Culture",
    description: "Journey to the mystical land of Ladakh, where spirituality meets adventure. Experience the unique culture of the Himalayas, visit ancient monasteries, and witness breathtaking landscapes. This tour offers a perfect blend of spiritual exploration and adventure activities.",
    detailedItinerary: [
      {
        day: "Day 1-2",
        title: "Acclimatization",
        activities: ["Arrival in Leh", "Rest and acclimatization", "Light local exploration"]
      },
      {
        day: "Day 3",
        title: "Leh City Tour",
        activities: ["Leh Palace", "Shanti Stupa", "Local market", "Evening prayer at monastery"]
      },
      {
        day: "Day 4",
        title: "Monastery Circuit",
        activities: ["Thiksey Monastery", "Hemis Monastery", "Shey Palace", "Traditional lunch"]
      },
      {
        day: "Day 5",
        title: "Khardung La Pass",
        activities: ["World's highest motorable pass", "Nubra Valley", "Sand dunes", "Camel safari"]
      },
      {
        day: "Day 6-7",
        title: "Nubra Valley",
        activities: ["Diskit Monastery", "Hunder village", "Local culture experience"]
      },
      {
        day: "Day 8",
        title: "Pangong Lake",
        activities: ["Chang La Pass", "Pangong Lake", "Camping experience", "Stargazing"]
      },
      {
        day: "Day 9",
        title: "Return to Leh",
        activities: ["Magnetic Hill", "Hall of Fame Museum", "Farewell dinner"]
      },
      {
        day: "Day 10",
        title: "Departure",
        activities: ["Breakfast", "Hotel check-out", "Departure"]
      }
    ],
    inclusions: [
      "Guest house accommodation",
      "Daily meals (breakfast, lunch, dinner)",
      "AC transportation",
      "Oxygen support",
      "Professional guide",
      "All permits and entry fees",
      "Camping equipment for Pangong"
    ],
    exclusions: [
      "International/Domestic flights",
      "Personal expenses",
      "Tips and gratuities",
      "Travel insurance",
      "Additional activities"
    ],
    importantInfo: [
      "Acclimatization is mandatory",
      "Carry warm clothes and medicines",
      "Altitude sickness precautions",
      "Best time: June to September",
      "Physical fitness required"
    ],
    gallery: [
      "/destinations/laddakh.png",
      "/destinations/char-dham-yatra.png",
      "/destinations/dehradun-rishikesh-haridwar-tour.png"
    ]
  },
  'goa-beach-paradise': {
    id: 10,
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
    category: "Beach & Adventure",
    description: "Experience the perfect blend of sun, sand, and sea in Goa. From pristine beaches to historic churches, from water sports to nightlife, this tour offers everything that makes Goa a paradise for travelers.",
    detailedItinerary: [
      {
        day: "Day 1",
        title: "Arrival in Goa",
        activities: ["Airport pickup", "Hotel check-in", "Beach visit", "Welcome dinner"]
      },
      {
        day: "Day 2",
        title: "North Goa Beaches",
        activities: ["Calangute Beach", "Baga Beach", "Water sports", "Evening at beach"]
      },
      {
        day: "Day 3",
        title: "Old Goa & Churches",
        activities: ["Basilica of Bom Jesus", "Se Cathedral", "Dudhsagar Falls", "Spice plantation"]
      },
      {
        day: "Day 4",
        title: "South Goa & Cruise",
        activities: ["Palolem Beach", "Sunset cruise", "Casino experience", "Shopping"]
      },
      {
        day: "Day 5",
        title: "Departure",
        activities: ["Breakfast", "Hotel check-out", "Airport drop"]
      }
    ],
    inclusions: [
      "Accommodation in 3-star hotels",
      "Daily breakfast and dinner",
      "AC transportation",
      "Professional guide",
      "Beach activities",
      "Sunset cruise",
      "Welcome kit"
    ],
    exclusions: [
      "International/Domestic flights",
      "Personal expenses",
      "Lunch",
      "Tips and gratuities",
      "Travel insurance",
      "Casino charges"
    ],
    importantInfo: [
      "Valid ID proof required",
      "Beach wear and sunscreen essential",
      "Best time: November to March",
      "Photography allowed at most sites",
      "Respect local customs"
    ],
    gallery: [
      "/destinations/nainital-tour.jpg",
      "/destinations/char-dham-yatra.png",
      "/destinations/agra-tour.png"
    ]
  },
  'kerala-ayurveda-wellness': {
    id: 11,
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
    category: "Wellness & Nature",
    description: "Rejuvenate your mind, body, and soul in the serene backwaters of Kerala. Experience authentic Ayurvedic treatments, traditional therapies, and immerse yourself in the natural beauty of God's Own Country.",
    detailedItinerary: [
      {
        day: "Day 1",
        title: "Arrival in Kerala",
        activities: ["Airport pickup", "Resort check-in", "Welcome ceremony", "Evening relaxation"]
      },
      {
        day: "Day 2",
        title: "Ayurvedic Wellness",
        activities: ["Ayurvedic consultation", "Traditional treatments", "Yoga session", "Evening meditation"]
      },
      {
        day: "Day 3",
        title: "Backwater Experience",
        activities: ["Houseboat cruise", "Traditional lunch", "Village visit", "Sunset view"]
      },
      {
        day: "Day 4",
        title: "Nature & Culture",
        activities: ["Tea plantation", "Spice garden", "Kathakali show", "Traditional dinner"]
      },
      {
        day: "Day 5",
        title: "Adventure & Relaxation",
        activities: ["Wildlife sanctuary", "Cooking class", "Evening spa", "Farewell dinner"]
      },
      {
        day: "Day 6",
        title: "Departure",
        activities: ["Morning yoga", "Breakfast", "Resort check-out", "Airport drop"]
      }
    ],
    inclusions: [
      "Accommodation in wellness resorts",
      "Daily meals (breakfast, lunch, dinner)",
      "Ayurvedic treatments",
      "Professional therapists",
      "Yoga and meditation sessions",
      "Houseboat cruise",
      "Welcome kit and wellness guide"
    ],
    exclusions: [
      "International/Domestic flights",
      "Personal expenses",
      "Additional treatments",
      "Tips and gratuities",
      "Travel insurance"
    ],
    importantInfo: [
      "Medical consultation before treatments",
      "Comfortable clothing for yoga",
      "Best time: September to March",
      "Photography allowed at most sites",
      "Respect wellness center rules"
    ],
    gallery: [
      "/destinations/char-dham-yatra.png",
      "/destinations/nainital-tour.jpg",
      "/destinations/dehradun-rishikesh-haridwar-tour.png"
    ]
  },
  'rajasthan-desert-safari': {
    id: 12,
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
    category: "Desert & Culture",
    description: "Experience the royal heritage of Rajasthan with this comprehensive desert safari tour. From the golden sands of Jaisalmer to the blue city of Jodhpur, from the lake city of Udaipur to the pink city of Jaipur, discover the magic of the desert kingdom.",
    detailedItinerary: [
      {
        day: "Day 1",
        title: "Arrival in Jaipur",
        activities: ["Airport pickup", "Hotel check-in", "Local market", "Welcome dinner"]
      },
      {
        day: "Day 2",
        title: "Jaipur Exploration",
        activities: ["Amber Fort", "City Palace", "Hawa Mahal", "Evening shopping"]
      },
      {
        day: "Day 3",
        title: "Jaipur to Pushkar",
        activities: ["Drive to Pushkar", "Brahma Temple", "Pushkar Lake", "Evening aarti"]
      },
      {
        day: "Day 4",
        title: "Pushkar to Jodhpur",
        activities: ["Drive to Jodhpur", "Mehrangarh Fort", "Blue city walk", "Evening at fort"]
      },
      {
        day: "Day 5",
        title: "Jodhpur to Jaisalmer",
        activities: ["Drive to Jaisalmer", "Jaisalmer Fort", "Desert camp", "Camel safari"]
      },
      {
        day: "Day 6",
        title: "Desert Experience",
        activities: ["Sunrise in desert", "Folk music", "Desert activities", "Stargazing"]
      },
      {
        day: "Day 7",
        title: "Jaisalmer to Udaipur",
        activities: ["Drive to Udaipur", "Lake Palace", "City Palace", "Boat ride"]
      },
      {
        day: "Day 8",
        title: "Departure",
        activities: ["Breakfast", "Hotel check-out", "Airport drop"]
      }
    ],
    inclusions: [
      "Accommodation in hotels and desert camp",
      "Daily meals (breakfast, lunch, dinner)",
      "AC transportation throughout",
      "Professional guide",
      "Camel safari experience",
      "Folk music performance",
      "Welcome kit and travel documents"
    ],
    exclusions: [
      "International/Domestic flights",
      "Personal expenses",
      "Tips and gratuities",
      "Travel insurance",
      "Additional activities not mentioned"
    ],
    importantInfo: [
      "Valid ID proof required",
      "Comfortable clothing for desert",
      "Best time: October to March",
      "Photography allowed at most sites",
      "Respect local customs and traditions"
    ],
    gallery: [
      "/destinations/dehradun-rishikesh-haridwar-tour.png",
      "/destinations/char-dham-yatra.png",
      "/destinations/nainital-tour.jpg"
    ]
  }
};

const TourDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [tour, setTour] = useState(null);

  useEffect(() => {
    if (slug && tourData[slug]) {
      setTour(tourData[slug]);
    }
  }, [slug]);

  if (!tour) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-travel-pearl via-white to-travel-cream">
        <Navbar />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-travel-primary mb-4">Tour Not Found</h2>
            <Button onClick={() => navigate('/')} className="bg-gradient-to-r from-travel-primary to-travel-secondary text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const discountPercentage = tour.originalPrice ? Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-travel-pearl via-white to-travel-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/')}
              className="mr-4 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Badge className="bg-travel-secondary text-white font-semibold">
              {tour.category}
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {tour.title}
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-lg">
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              <span>{tour.groupSize}</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 mr-2 text-yellow-400" />
              <span>{tour.rating} ({tour.reviews} reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-travel-primary">Overview</h2>
                  <p className="text-gray-600 leading-relaxed">{tour.description}</p>
                </CardContent>
              </Card>

              {/* Highlights */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-travel-primary">Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {tour.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-travel-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Detailed Itinerary */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-travel-primary">Detailed Itinerary</h2>
                  <div className="space-y-4">
                    {tour.detailedItinerary.map((day, index) => (
                      <div key={index} className="border-l-4 border-travel-primary pl-4">
                        <h3 className="font-bold text-lg text-travel-primary">{day.day}: {day.title}</h3>
                        <ul className="mt-2 space-y-1">
                          {day.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="text-gray-600 flex items-start">
                              <span className="w-2 h-2 bg-travel-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Gallery */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-travel-primary">Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {tour.gallery.map((image, index) => (
                      <div key={index} className="overflow-hidden rounded-lg">
                        <img
                          src={image}
                          alt={`Gallery ${index + 1}`}
                          className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-lg sticky top-24">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-travel-primary">₹{tour.price.toLocaleString()}</span>
                      {tour.originalPrice && tour.originalPrice > tour.price && (
                        <span className="text-lg text-gray-500 line-through">₹{tour.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                    {discountPercentage > 0 && (
                      <Badge className="bg-travel-accent text-white font-semibold mb-2">
                        {discountPercentage}% OFF
                      </Badge>
                    )}
                    <p className="text-sm text-gray-500">per person</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">{tour.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Group Size:</span>
                      <span className="font-medium">{tour.groupSize}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Rating:</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="font-medium">{tour.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      className="w-full bg-gradient-to-r from-travel-primary to-travel-secondary hover:scale-105 transition-transform text-white"
                      onClick={() => setIsBookingFormOpen(true)}
                    >
                      Book Now
                    </Button>
                    
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white hover:scale-105 transition-transform"
                      onClick={() => {
                        const message = `Hi! I'm interested in the ${tour.title} tour. Can you provide more details about pricing, availability, and booking process?`;
                        const whatsappUrl = `https://wa.me/919557538664?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h3 className="font-semibold mb-3 text-travel-primary">Need Help?</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-travel-primary" />
                        <span>+91 9557538664</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-travel-primary" />
                        <span>info@jafritravel.com</span>
                      </div>
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 mr-2 text-travel-primary" />
                        <span>www.jafritravel.com</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Information Tabs */}
          <div className="mt-12">
            <Tabs defaultValue="inclusions" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-travel-pearl">
                <TabsTrigger value="inclusions" className="data-[state=active]:bg-travel-primary data-[state=active]:text-white">Inclusions</TabsTrigger>
                <TabsTrigger value="exclusions" className="data-[state=active]:bg-travel-primary data-[state=active]:text-white">Exclusions</TabsTrigger>
                <TabsTrigger value="important-info" className="data-[state=active]:bg-travel-primary data-[state=active]:text-white">Important Info</TabsTrigger>
                <TabsTrigger value="reviews" className="data-[state=active]:bg-travel-primary data-[state=active]:text-white">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="inclusions" className="mt-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-travel-primary">What's Included</h3>
                    <ul className="space-y-2">
                      {tour.inclusions.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-travel-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="exclusions" className="mt-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-travel-primary">What's Not Included</h3>
                    <ul className="space-y-2">
                      {tour.exclusions.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-travel-rose rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="important-info" className="mt-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-travel-primary">Important Information</h3>
                    <ul className="space-y-2">
                      {tour.importantInfo.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-travel-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-travel-primary">Customer Reviews</h3>
                    <div className="text-center py-8">
                      <div className="text-4xl mb-4">⭐</div>
                      <h4 className="text-lg font-semibold mb-2">Excellent Experience!</h4>
                      <p className="text-gray-600 mb-4">
                        "Amazing tour with professional guides and comfortable accommodations. 
                        Highly recommended for anyone wanting to explore India's rich heritage."
                      </p>
                      <div className="text-sm text-gray-500">
                        - Sarah Johnson, USA
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />

      <BookingFormPopup 
        isOpen={isBookingFormOpen} 
        onClose={() => setIsBookingFormOpen(false)} 
      />
    </div>
  );
};

export default TourDetails; 