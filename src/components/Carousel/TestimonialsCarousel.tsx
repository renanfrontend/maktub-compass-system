
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  relation: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Pedro S.",
    relation: "Ex-paciente",
    text: "O Instituto Maktub transformou minha vida. Graças ao programa estruturado e ao apoio constante da equipe, consegui reconquistar minha sobriedade e reestruturar minha vida pessoal e profissional."
  },
  {
    id: 2,
    name: "Maria L.",
    relation: "Familiar de paciente",
    text: "Ver meu filho se recuperar no Instituto Maktub foi uma dádiva. A abordagem holística realmente faz diferença, pois trata não apenas a dependência, mas a pessoa como um todo. A equipe é extremamente dedicada e acolhedora."
  },
  {
    id: 3,
    name: "Carlos E.",
    relation: "Ex-paciente",
    text: "Após várias tentativas em outros centros, foi no Maktub que encontrei um tratamento que realmente funcionou. O trabalho dos 12 passos integrado às práticas terapêuticas convencionais e holísticas fez toda diferença."
  },
  {
    id: 4,
    name: "Juliana R.",
    relation: "Familiar de paciente",
    text: "O suporte que recebemos como família foi fundamental. O Maktub entende que a recuperação envolve todo o círculo familiar e nos incluiu ativamente no processo. Hoje meu irmão está há 2 anos sóbrio."
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    // Reset animation flag after animation completes
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="relative py-10">
      <h2 className="maktub-section-title">Depoimentos</h2>
      <div className="relative overflow-hidden min-h-[260px] md:min-h-[220px]">
        {testimonials.map((testimonial, index) => (
          <Card 
            key={testimonial.id} 
            className={`p-6 absolute w-full transition-all duration-500 ease-in-out ${
              index === currentIndex 
                ? "opacity-100 translate-x-0" 
                : index < currentIndex 
                  ? "opacity-0 -translate-x-full" 
                  : "opacity-0 translate-x-full"
            }`}
          >
            <div className="flex justify-center mb-4">
              <div className="bg-maktub-yellow rounded-full p-2">
                <Quote size={24} className="text-black" />
              </div>
            </div>
            <p className="text-center mb-4 italic">{testimonial.text}</p>
            <div className="text-center">
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.relation}</p>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-maktub-yellow w-6" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white shadow-md hover:bg-maktub-yellow hover:text-black"
          onClick={handlePrevious}
        >
          <ChevronLeft size={20} />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white shadow-md hover:bg-maktub-yellow hover:text-black"
          onClick={handleNext}
        >
          <ChevronRight size={20} />
        </Button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
