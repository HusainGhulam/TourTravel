
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Calendar, Users, Star, Clock, Plane, Hotel, Camera, Shield, Utensils, Car } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PlanYourTrip = () => {
  const [tripDetails, setTripDetails] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    travelers: '',
    budget: '',
    interests: [],
    accommodation: '',
    transport: '',
    specialRequests: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const interests = [
    { id: 'heritage', label: 'Heritage & Culture', icon: '🏛️' },
    { id: 'adventure', label: 'Adventure Sports', icon: '🏔️' },
    { id: 'spiritual', label: 'Spiritual Journey', icon: '🕉️' },
    { id: 'wildlife', label: 'Wildlife Safari', icon: '🐅' },
    { id: 'beaches', label: 'Beach Relaxation', icon: '🏖️' },
    { id: 'food', label: 'Food & Cuisine', icon: '🍛' },
    { id: 'photography', label: 'Photography', icon: '📸' },
    { id: 'wellness', label: 'Wellness & Spa', icon: '🧘' }
  ];

  const handleInterestChange = (interestId, checked) => {
    if (checked) {
      setTripDetails(prev => ({
        ...prev,
        interests: [...prev.interests, interestId]
      }));
    } else {
      setTripDetails(prev => ({
        ...prev,
        interests: prev.interests.filter(id => id !== interestId)
      }));
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Trip Details:', tripDetails);
    alert('Trip plan submitted! Our travel experts will contact you within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-travel-ocean to-travel-sunset text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Plan Your Perfect Trip</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Let us help you create a personalized travel experience tailored to your preferences and interests
          </p>
        </div>
      </section>

      {/* Progress Indicator */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step <= currentStep 
                    ? 'bg-travel-ocean text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step}
                </div>
                {step < 4 && (
                  <div className={`h-1 w-24 mx-4 ${
                    step < currentStep ? 'bg-travel-ocean' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Steps */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              
              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-travel-ocean mb-2">Basic Information</h2>
                    <p className="text-gray-600">Tell us about your travel preferences</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Preferred Destination</label>
                      <Select onValueChange={(value) => setTripDetails(prev => ({...prev, destination: value}))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose your destination" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="golden-triangle">Golden Triangle (Delhi-Agra-Jaipur)</SelectItem>
                          <SelectItem value="kerala">Kerala Backwaters</SelectItem>
                          <SelectItem value="rajasthan">Royal Rajasthan</SelectItem>
                          <SelectItem value="himachal">Himachal Mountains</SelectItem>
                          <SelectItem value="goa">Goa Beaches</SelectItem>
                          <SelectItem value="kashmir">Kashmir Valley</SelectItem>
                          <SelectItem value="northeast">Northeast India</SelectItem>
                          <SelectItem value="south-india">South India Temple Tour</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Number of Travelers</label>
                      <Input 
                        type="number" 
                        placeholder="Enter number of travelers"
                        min="1"
                        value={tripDetails.travelers}
                        onChange={(e) => setTripDetails(prev => ({...prev, travelers: e.target.value}))}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Start Date</label>
                      <Input 
                        type="date"
                        value={tripDetails.startDate}
                        onChange={(e) => setTripDetails(prev => ({...prev, startDate: e.target.value}))}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">End Date</label>
                      <Input 
                        type="date"
                        value={tripDetails.endDate}
                        onChange={(e) => setTripDetails(prev => ({...prev, endDate: e.target.value}))}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range (per person)</label>
                    <Select onValueChange={(value) => setTripDetails(prev => ({...prev, budget: value}))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="budget">Budget (₹20,000 - ₹50,000)</SelectItem>
                        <SelectItem value="mid-range">Mid-Range (₹50,000 - ₹100,000)</SelectItem>
                        <SelectItem value="luxury">Luxury (₹100,000 - ₹200,000)</SelectItem>
                        <SelectItem value="premium">Premium (₹200,000+)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Step 2: Interests & Activities */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-travel-ocean mb-2">Your Interests</h2>
                    <p className="text-gray-600">Select activities and experiences you're interested in</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {interests.map((interest) => (
                      <div key={interest.id} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                        <Checkbox 
                          id={interest.id}
                          checked={tripDetails.interests.includes(interest.id)}
                          onCheckedChange={(checked) => handleInterestChange(interest.id, checked)}
                        />
                        <label htmlFor={interest.id} className="flex items-center space-x-2 cursor-pointer flex-1">
                          <span className="text-2xl">{interest.icon}</span>
                          <span className="font-medium">{interest.label}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Accommodation & Transport */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-travel-ocean mb-2">Preferences</h2>
                    <p className="text-gray-600">Choose your accommodation and transport preferences</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Accommodation Type</label>
                      <Select onValueChange={(value) => setTripDetails(prev => ({...prev, accommodation: value}))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select accommodation" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="budget-hotel">Budget Hotels</SelectItem>
                          <SelectItem value="mid-range-hotel">Mid-Range Hotels</SelectItem>
                          <SelectItem value="luxury-hotel">Luxury Hotels</SelectItem>
                          <SelectItem value="heritage-hotel">Heritage Hotels</SelectItem>
                          <SelectItem value="resort">Beach/Mountain Resorts</SelectItem>
                          <SelectItem value="homestay">Homestays</SelectItem>
                          <SelectItem value="camping">Camping/Glamping</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Transport Preference</label>
                      <Select onValueChange={(value) => setTripDetails(prev => ({...prev, transport: value}))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select transport" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="private-car">Private Car with Driver</SelectItem>
                          <SelectItem value="train">Train Travel</SelectItem>
                          <SelectItem value="flight">Domestic Flights</SelectItem>
                          <SelectItem value="bus">Luxury Bus</SelectItem>
                          <SelectItem value="mixed">Mixed Transport</SelectItem>
                          <SelectItem value="self-drive">Self-Drive Car</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Final Details */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-travel-ocean mb-2">Additional Details</h2>
                    <p className="text-gray-600">Any special requirements or requests?</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Special Requests or Requirements</label>
                    <Textarea 
                      placeholder="Tell us about any dietary restrictions, accessibility needs, special occasions, or specific experiences you'd like to include..."
                      className="min-h-32"
                      value={tripDetails.specialRequests}
                      onChange={(e) => setTripDetails(prev => ({...prev, specialRequests: e.target.value}))}
                    />
                  </div>
                  
                  {/* Summary */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-4 text-travel-ocean">Trip Summary</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div><strong>Destination:</strong> {tripDetails.destination || 'Not selected'}</div>
                      <div><strong>Travelers:</strong> {tripDetails.travelers || 'Not specified'}</div>
                      <div><strong>Duration:</strong> {tripDetails.startDate && tripDetails.endDate ? 
                        `${tripDetails.startDate} to ${tripDetails.endDate}` : 'Not specified'}</div>
                      <div><strong>Budget:</strong> {tripDetails.budget || 'Not selected'}</div>
                      <div><strong>Interests:</strong> {tripDetails.interests.length} selected</div>
                      <div><strong>Accommodation:</strong> {tripDetails.accommodation || 'Not selected'}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button 
                  variant="outline" 
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>
                
                {currentStep < totalSteps ? (
                  <Button 
                    onClick={handleNext}
                    className="bg-gradient-to-r from-travel-ocean to-travel-sunset"
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button 
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-travel-ocean to-travel-sunset"
                  >
                    Submit Trip Plan
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlanYourTrip;
