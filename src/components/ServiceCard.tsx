import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
      <CardContent className="p-6 text-center">
        <div className="mb-4 relative">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-travel-primary to-travel-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-8 w-8 text-white" />
          </div>
          <div className="absolute inset-0 w-16 h-16 mx-auto bg-gradient-to-br from-travel-primary to-travel-secondary rounded-full opacity-20 scale-125 group-hover:scale-150 transition-transform duration-300"></div>
        </div>
        
        <h3 className="text-lg font-bold mb-2 group-hover:text-travel-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
