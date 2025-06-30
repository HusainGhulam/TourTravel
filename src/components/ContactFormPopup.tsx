
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Send } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface ContactFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormPopup = ({ isOpen, onClose }: ContactFormPopupProps) => {
  const [travelDate, setTravelDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Contact form submitted");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-travel-ocean">Get More Information</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <Input placeholder="John" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <Input placeholder="Doe" required />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input type="email" placeholder="john@example.com" required />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <Input placeholder="+91 98765 43210" required />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Interested In</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select destination/package" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Char Dham Yatra">Char Dham Yatra</SelectItem>
                <SelectItem value="Nainital Hills">Nainital Hills</SelectItem>
                <SelectItem value="Mussoorie">Mussoorie</SelectItem>
                <SelectItem value="Amarnath Yatra ">Amarnath Yatra </SelectItem>
                <SelectItem value="Kullu Manali">Kullu Manali</SelectItem>
                <SelectItem value="Ayodhya Prayagraj">Ayodhya Prayagraj</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Preferred Travel Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !travelDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {travelDate ? format(travelDate, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={travelDate}
                  onSelect={setTravelDate}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Number of Travelers</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select travelers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Person</SelectItem>
                <SelectItem value="2">2 People</SelectItem>
                <SelectItem value="3-4">3-4 People</SelectItem>
                <SelectItem value="5-8">5-8 People</SelectItem>
                <SelectItem value="9+">9+ People</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Special Requirements</label>
            <Textarea 
              placeholder="Any special requests or requirements..."
              rows={3}
            />
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
              className="flex-1 bg-gradient-to-r from-travel-ocean to-travel-sunset"
            >
              <Send className="h-4 w-4 mr-2" />
              Send Inquiry
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormPopup;
