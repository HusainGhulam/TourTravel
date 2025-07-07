import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarIcon, CreditCard } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import emailjs from '@emailjs/browser';

interface BookingFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingFormPopup = ({ isOpen, onClose }: BookingFormPopupProps) => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_410d7ke', // Service ID
      'template_zvvgqem', // Template ID
      e.currentTarget, // The form element
      'dJC0lkYpFfxOYbUn-' // Public key
    )
    .then((result) => {
        alert('Booking request sent successfully!');
        // Optionally reset the form here
    }, (error) => {
        alert('Failed to send booking request. Please try again.');
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-travel-ocean">Complete Your Booking</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Personal Information */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <Input name="first_name" placeholder="John" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <Input name="last_name" placeholder="Doe" required />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input name="email" type="email" placeholder="john@example.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <Input name="phone" placeholder="Enter Phone Number" required />
              </div>
            </div>
          </div>

          {/* Travel Details */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Travel Details</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-1">Start Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "PPP") : "Start date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
                {/* Hidden input for start_date */}
                <input type="hidden" name="start_date" value={startDate ? format(startDate, 'yyyy-MM-dd') : ''} />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">End Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !endDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, "PPP") : "End date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
                {/* Hidden input for end_date */}
                <input type="hidden" name="end_date" value={endDate ? format(endDate, 'yyyy-MM-dd') : ''} />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-1">Adults</label>
                <Select name="adults" onValueChange={value => {
                  const event = { target: { value } } as any;
                  (document.getElementsByName('adults')[0] as HTMLInputElement).value = value;
                }}>
                  <SelectTrigger>
                    <SelectValue placeholder="Adults" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Adult</SelectItem>
                    <SelectItem value="2">2 Adults</SelectItem>
                    <SelectItem value="3">3 Adults</SelectItem>
                    <SelectItem value="4">4 Adults</SelectItem>
                    <SelectItem value="5+">5+ Adults</SelectItem>
                  </SelectContent>
                </Select>
                {/* Hidden input for adults */}
                <input type="hidden" name="adults" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Children</label>
                <Select name="children" onValueChange={value => {
                  const event = { target: { value } } as any;
                  (document.getElementsByName('children')[0] as HTMLInputElement).value = value;
                }}>
                  <SelectTrigger>
                    <SelectValue placeholder="Children" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">0 Children</SelectItem>
                    <SelectItem value="1">1 Child</SelectItem>
                    <SelectItem value="2">2 Children</SelectItem>
                    <SelectItem value="3">3 Children</SelectItem>
                    <SelectItem value="4+">4+ Children</SelectItem>
                  </SelectContent>
                </Select>
                {/* Hidden input for children */}
                <input type="hidden" name="children" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Room Type</label>
              <Select name="room_type" onValueChange={value => {
                const event = { target: { value } } as any;
                (document.getElementsByName('room_type')[0] as HTMLInputElement).value = value;
              }}>
                <SelectTrigger>
                  <SelectValue placeholder="Select room type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="single">Single Room</SelectItem>
                  <SelectItem value="double">Double Room</SelectItem>
                  <SelectItem value="twin">Twin Room</SelectItem>
                  <SelectItem value="suite">Suite</SelectItem>
                </SelectContent>
              </Select>
              {/* Hidden input for room_type */}
              <input type="hidden" name="room_type" />
            </div>
          </div>

          {/* Add-on Services */}
          {/*<div className="space-y-3">
            <h3 className="text-lg font-semibold">Add-on Services</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="airport-transfer" />
                <label htmlFor="airport-transfer" className="text-sm">Airport Transfer (+₹2,000)</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="travel-insurance" />
                <label htmlFor="travel-insurance" className="text-sm">Travel Insurance (+₹1,500)</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="guide" />
                <label htmlFor="guide" className="text-sm">Professional Guide (+₹3,000)</label>
              </div>
            </div>
          </div>*/}

          {/* Payment Method */}
          <div>
            <label className="block text-sm font-medium mb-1">Payment Method</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select payment method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full">Full Payment</SelectItem>
                <SelectItem value="partial">Partial Payment (30%)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Special Requests</label>
            <Textarea 
              placeholder="Any special requests or dietary requirements..."
              rows={3}
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="terms" 
              checked={agreeTerms}
              onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
            />
            <label htmlFor="terms" className="text-sm">
              I agree to the Terms and Conditions and Privacy Policy
            </label>
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!agreeTerms}
              className="flex-1 bg-gradient-to-r from-travel-ocean to-travel-sunset"
            >
              <CreditCard className="h-4 w-4 mr-2" />
              Book Now
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingFormPopup;
