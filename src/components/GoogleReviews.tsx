import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Loader2 } from 'lucide-react';
import { useGoogleReviews } from '../hooks/useGoogleReviews';

interface GoogleReviewsProps {
  placeId: string;
}

const GoogleReviews = ({ placeId }: GoogleReviewsProps) => {
  const { reviews, placeDetails, loading, error } = useGoogleReviews(placeId);

  if (loading) {
    return (
      <section className="py-20 px-4 bg-gradient-to-r from-travel-sand/30 to-travel-azure/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-travel-primary" />
            <p className="text-gray-600">Loading Google Reviews...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 px-4 bg-gradient-to-r from-travel-sand/30 to-travel-azure/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-red-600 mb-4">Unable to load Google Reviews</p>
            <p className="text-gray-600 text-sm">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getGradientClass = (index: number) => {
    const gradients = [
      'from-travel-primary to-travel-secondary',
      'from-travel-forest to-travel-accent',
      'from-travel-secondary to-travel-rose',
      'from-travel-accent to-travel-primary',
      'from-travel-rose to-travel-secondary',
      'from-travel-primary to-travel-forest'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-travel-sand/30 to-travel-azure/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-travel-primary to-travel-secondary bg-clip-text text-transparent">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from our happy customers on Google Reviews
          </p>
          {placeDetails && (
            <div className="flex items-center justify-center mt-4">
              <Star className="h-6 w-6 text-yellow-500 fill-current mr-2" />
              <span className="text-2xl font-bold text-travel-primary">{placeDetails.rating}</span>
              <span className="text-gray-600 ml-2">out of 5</span>
              <span className="text-gray-500 ml-2">• {placeDetails.user_ratings_total.toLocaleString()} reviews</span>
            </div>
          )}
        </div>
        
        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.slice(0, 6).map((review, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">{review.relative_time_description}</span>
                  </div>
                  <p className="text-gray-700 mb-4 italic line-clamp-4">
                    "{review.text}"
                  </p>
                  <div className="flex items-center">
                    {review.profile_photo_url ? (
                      <img 
                        src={review.profile_photo_url} 
                        alt={review.author_name}
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                      />
                    ) : (
                      <div className={`w-10 h-10 bg-gradient-to-r ${getGradientClass(index)} rounded-full flex items-center justify-center text-white font-bold mr-3`}>
                        {getInitials(review.author_name)}
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-travel-primary">{review.author_name}</p>
                      <p className="text-sm text-gray-500">Verified Google Review</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">⭐</div>
            <h4 className="text-xl font-semibold mb-2">No reviews available</h4>
            <p className="text-gray-600">Be the first to review our services!</p>
          </div>
        )}

        {/* View More Reviews Button */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            className="bg-gradient-to-r from-travel-primary to-travel-secondary hover:scale-105 transition-transform text-white px-8 py-3"
            onClick={() => {
              // Open Google Reviews page for the business
              const googleReviewsUrl = `https://www.google.com/maps/place/?q=place_id:${placeId}`;
              window.open(googleReviewsUrl, '_blank');
            }}
          >
            <Star className="mr-2 h-5 w-5" />
            View All Google Reviews
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews; 