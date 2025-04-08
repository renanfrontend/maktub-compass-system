
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TherapyImage {
  id: number;
  url: string;
  alt: string;
  title: string;
}

const therapyImages: TherapyImage[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    alt: "Natureza e tranquilidade",
    title: "Conexão com a Natureza"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    alt: "Terapia em grupo ao ar livre",
    title: "Terapias em Grupo"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    alt: "Meditação e espiritualidade",
    title: "Prática Meditativa"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    alt: "Ambiente acolhedor",
    title: "Espaço de Acolhimento"
  }
];

const TherapyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? therapyImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === therapyImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Auto-rotate images
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative py-10">
      <h2 className="maktub-section-title">Nossas Terapias</h2>
      
      <div className="relative h-[400px] overflow-hidden rounded-xl">
        {therapyImages.map((image, index) => (
          <div 
            key={image.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img 
              src={image.url} 
              alt={image.alt}
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl md:text-2xl font-bold">{image.title}</h3>
              <p className="text-white/80">{image.alt}</p>
            </div>
          </div>
        ))}
        
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-maktub-yellow hover:text-black"
            onClick={handlePrevious}
          >
            <ChevronLeft size={20} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-maktub-yellow hover:text-black"
            onClick={handleNext}
          >
            <ChevronRight size={20} />
          </Button>
        </div>
      </div>
      
      <div className="flex justify-center mt-4 space-x-2">
        {therapyImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-maktub-yellow w-6" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TherapyCarousel;
