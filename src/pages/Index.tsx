
import Header from "@/components/Header";
import PatientStats from "@/components/Dashboard/PatientStats";
import WeeklySchedule from "@/components/Dashboard/WeeklySchedule";
import TestimonialsCarousel from "@/components/Carousel/TestimonialsCarousel";
import TherapyCarousel from "@/components/Carousel/TherapyCarousel";
import { Button } from "@/components/ui/button";
import { Instagram, Phone, MapPin, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-black text-white">
          <div
            className="absolute inset-0 z-0 opacity-60"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Instituto Maktub Terapêutico
              </h1>
              <p className="text-xl mb-8">
                Transformando vidas através de terapias integradas, espiritualidade e conexão humana. 
                Nosso compromisso é guiar cada indivíduo no caminho da recuperação e autoconhecimento.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="maktub-btn-primary">
                  Conheça Nossos Programas
                </Button>
                <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                  Fale Conosco
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Overview */}
        <section className="py-10 px-4">
          <div className="container mx-auto">
            <PatientStats />
            
            <div className="mt-12">
              <WeeklySchedule />
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-maktub-yellow">
                    <img
                      src="/lovable-uploads/e159b71b-4efe-45bb-b147-42147f730a15.png"
                      alt="Logo Maktub"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Sobre o Instituto Maktub</h2>
                <p className="text-gray-700 mb-4">
                  O Instituto Maktub Terapêutico é um centro de recuperação e tratamento para dependência química que combina abordagens terapêuticas tradicionais com práticas holísticas e espiritualidade.
                </p>
                <p className="text-gray-700 mb-4">
                  Nossa missão é proporcionar um ambiente acolhedor e estruturado para que cada pessoa possa reconectar-se consigo mesma e reconstruir sua vida, seguindo os princípios dos 12 passos e utilizando diferentes modalidades terapêuticas.
                </p>
                <p className="text-gray-700 mb-6">
                  Acreditamos no potencial de recuperação de cada indivíduo e trabalhamos com um programa personalizado que respeita a singularidade de cada história.
                </p>
                <div className="flex items-center">
                  <a
                    href="https://www.instagram.com/institutomaktub/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-black hover:text-maktub-yellow transition-colors"
                  >
                    <Instagram size={24} className="mr-2" />
                    <span className="font-medium">@institutomaktub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Therapy Carousel Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <TherapyCarousel />
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <TestimonialsCarousel />
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 bg-maktub-yellow">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Entre em Contato</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4">
                  <Phone size={24} className="text-maktub-yellow" />
                </div>
                <h3 className="text-xl font-bold mb-2">Telefone</h3>
                <p>11 9 6588-8148</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4">
                  <MapPin size={24} className="text-maktub-yellow" />
                </div>
                <h3 className="text-xl font-bold mb-2">Endereço</h3>
                <p>São Paulo, SP</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4">
                  <Mail size={24} className="text-maktub-yellow" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p>contato@institutomaktub.com.br</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-10 h-10 rounded-full bg-maktub-yellow flex items-center justify-center mr-3">
                <span className="text-black font-bold text-sm">M</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">MAKTUB</h3>
                <p className="text-xs text-gray-400">INSTITUTO TERAPÊUTICO</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/institutomaktub/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-maktub-yellow transition-colors"
              >
                <Instagram size={20} />
              </a>
              <span className="text-gray-400">|</span>
              <span className="text-sm">© {new Date().getFullYear()} Instituto Maktub. Todos os direitos reservados.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
