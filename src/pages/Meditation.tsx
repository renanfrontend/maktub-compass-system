
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SentimentAnalysis from "@/components/Meditation/SentimentAnalysis";
import BreathingExercises from "@/components/Meditation/BreathingExercises";
import MeditationVideos from "@/components/Meditation/MeditationVideos";
import MeditationAudios from "@/components/Meditation/MeditationAudios";
import YogaExercises from "@/components/Meditation/YogaExercises";

const MeditationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [language, setLanguage] = useState<"pt" | "en">("pt");

  // Translation object
  const translations = {
    pt: {
      title: "Meditação & Bem-estar",
      back: "Voltar",
      subtitle: "Encontre paz e equilíbrio com exercícios de respiração, meditação e yoga",
      breathing: "Respiração",
      meditation: "Meditação",
      yoga: "Yoga",
      analysis: "Análise de Sentimentos",
      scrollTop: "Voltar ao topo",
    },
    en: {
      title: "Meditation & Well-being",
      back: "Back",
      subtitle: "Find peace and balance with breathing exercises, meditation, and yoga",
      breathing: "Breathing",
      meditation: "Meditation",
      yoga: "Yoga",
      analysis: "Sentiment Analysis",
      scrollTop: "Back to top",
    }
  };

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    // Set language based on document class
    const isDark = document.documentElement.classList.contains("dark");
    const htmlLang = document.documentElement.lang;
    if (htmlLang === "en") {
      setLanguage("en");
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleBack = () => {
    if (location.key === "default") {
      navigate("/");
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBack}
            className="mr-2 text-gray-700 dark:text-maktub-yellow"
          >
            <ArrowLeft size={24} />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-maktub-yellow">
              {t.title}
            </h1>
            <p className="text-gray-600 dark:text-maktub-light-yellow">
              {t.subtitle}
            </p>
          </div>
        </div>

        <Tabs defaultValue="breathing" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="breathing" className="dark:data-[state=active]:bg-maktub-yellow dark:data-[state=active]:text-black">
              {t.breathing}
            </TabsTrigger>
            <TabsTrigger value="meditation" className="dark:data-[state=active]:bg-maktub-yellow dark:data-[state=active]:text-black">
              {t.meditation}
            </TabsTrigger>
            <TabsTrigger value="yoga" className="dark:data-[state=active]:bg-maktub-yellow dark:data-[state=active]:text-black">
              {t.yoga}
            </TabsTrigger>
            <TabsTrigger value="analysis" className="dark:data-[state=active]:bg-maktub-yellow dark:data-[state=active]:text-black">
              {t.analysis}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="breathing" className="space-y-8">
            <BreathingExercises language={language} />
          </TabsContent>

          <TabsContent value="meditation" className="space-y-8">
            <MeditationVideos language={language} />
            <MeditationAudios language={language} />
          </TabsContent>

          <TabsContent value="yoga" className="space-y-8">
            <YogaExercises language={language} />
          </TabsContent>

          <TabsContent value="analysis" className="space-y-8">
            <SentimentAnalysis language={language} />
          </TabsContent>
        </Tabs>

        {showScrollButton && (
          <Button
            className="fixed bottom-8 right-8 rounded-full shadow-lg bg-maktub-yellow text-black hover:bg-maktub-dark-yellow"
            size="icon"
            onClick={scrollToTop}
            aria-label={t.scrollTop}
          >
            <ArrowUp size={24} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default MeditationPage;
