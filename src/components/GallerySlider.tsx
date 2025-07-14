import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const galleryImages = [
  "/destinations/nainital-tour.jpg",
  "/destinations/dehradun-rishikesh-haridwar-tour.png",
  "/destinations/amarnath.png",
  "/destinations/kullu.jpg",
  "/destinations/ayodhya.png",
  "/destinations/ayodhya.png",
  "/destinations/ayodhya.png",
  "/destinations/ayodhya.png",
  "/destinations/laddakh.png",
  "/destinations/agra-tour.png"
];

const carouselOpts = {
  slidesToScroll: 1,
  breakpoints: {
    1024: { slidesToScroll: 1 }, // lg+
    768: { slidesToScroll: 1 },  // md
    0: { slidesToScroll: 1 }     // mobile
  }
};

const GallerySlider = () => (
  <section className="py-16 px-4 bg-gradient-to-r from-travel-sand/30 to-travel-azure/20">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-travel-primary to-travel-secondary bg-clip-text text-transparent">
          Stay Updated with Travel Deals
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our latest travel moments and get inspired for your next adventure!
        </p>
      </div>
      <Carousel className="relative" opts={carouselOpts}>
        <CarouselContent>
          {galleryImages.map((src, idx) => (
            <CarouselItem
              key={idx}
              className="px-2 w-full sm:w-1/2 lg:w-1/4"
            >
              <Card className="overflow-hidden border-0 shadow-lg w-full">
                <CardContent className="p-0">
                  <img
                    src={src}
                    alt={`Gallery image ${idx + 1}`}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-6 top-1/2 -translate-y-1/2" />
        <CarouselNext className="-right-6 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  </section>
);

export default GallerySlider; 