
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

type SentimentAnalysisProps = {
  language: "pt" | "en";
};

const SentimentAnalysis = ({ language }: SentimentAnalysisProps) => {
  const [feeling, setFeeling] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const translations = {
    pt: {
      title: "Análise de Sentimentos",
      description: "Descreva como você está se sentindo para receber exercícios personalizados",
      howFeeling: "Como está se sentindo hoje?",
      feelingOptions: {
        anxiety: "Ansioso(a)",
        stress: "Estressado(a)",
        sadness: "Triste",
        insomnia: "Com insônia",
        withdrawal: "Em abstinência",
        anger: "Com raiva",
        overwhelmed: "Sobrecarregado(a)",
        calm: "Calmo(a)",
        happy: "Feliz",
      },
      tellMore: "Conte mais (opcional)",
      placeholderText: "Descreva como você está se sentindo com mais detalhes...",
      analyze: "Analisar",
      analyzing: "Analisando...",
      recommendationsTitle: "Recomendações personalizadas",
      recommendations: {
        anxiety: [
          "Pratique o exercício de respiração 4-7-8 por 5 minutos",
          "Experimente uma meditação de escanemento corporal de 10 minutos",
          "Faça uma caminhada consciente de 15 minutos ao ar livre",
          "Pratique a postura da criança (Balasana) por 3-5 minutos"
        ],
        stress: [
          "Pratique respiração abdominal por 10 minutos",
          "Experimente uma meditação guiada para redução de estresse",
          "Faça uma pausa e ouça os sons da natureza por 15 minutos",
          "Pratique a sequência de yoga para alívio de estresse"
        ],
        sadness: [
          "Pratique a meditação da bondade amorosa por 10 minutos",
          "Faça uma atividade física leve, como uma caminhada",
          "Escreva em um diário sobre seus sentimentos",
          "Conecte-se com alguém querido por telefone ou pessoalmente"
        ],
        insomnia: [
          "Faça o exercício de respiração 4-7-8 antes de dormir",
          "Escute sons de chuva ou natureza enquanto se prepara para dormir",
          "Pratique o relaxamento muscular progressivo na cama",
          "Evite telas pelo menos 1 hora antes de dormir"
        ],
        withdrawal: [
          "Pratique respiração de coerência cardíaca quando sentir vontade de usar",
          "Faça uma meditação de 5 minutos a cada 2 horas",
          "Use a técnica de tensionar e relaxar os músculos quando sentir ansiedade",
          "Mantenha um diário dos gatilhos e pratique respiração consciente quando eles surgirem"
        ],
        anger: [
          "Faça 10 respirações profundas antes de reagir",
          "Pratique a meditação de visualização de um lugar seguro",
          "Escreva seus pensamentos sem censura em um papel",
          "Faça exercício físico vigoroso para liberar endorfinas"
        ],
        overwhelmed: [
          "Divida suas tarefas em pequenos passos",
          "Faça a respiração quadrada por 5 minutos",
          "Experimente a meditação de apenas 1 minuto várias vezes ao dia",
          "Pratique a postura da montanha para se sentir enraizado"
        ],
        calm: [
          "Continue sua prática de meditação diária",
          "Compartilhe sua experiência positiva com alguém",
          "Experimente uma nova técnica de respiração",
          "Mantenha um diário de gratidão"
        ],
        happy: [
          "Pratique a meditação da gratidão",
          "Compartilhe sua alegria com pessoas queridas",
          "Experimente uma nova postura de yoga",
          "Desfrute de uma atividade que você ama com plena consciência"
        ],
      }
    },
    en: {
      title: "Sentiment Analysis",
      description: "Describe how you are feeling to receive personalized exercises",
      howFeeling: "How are you feeling today?",
      feelingOptions: {
        anxiety: "Anxious",
        stress: "Stressed",
        sadness: "Sad",
        insomnia: "Insomnia",
        withdrawal: "Withdrawal",
        anger: "Angry",
        overwhelmed: "Overwhelmed",
        calm: "Calm",
        happy: "Happy",
      },
      tellMore: "Tell me more (optional)",
      placeholderText: "Describe how you're feeling in more detail...",
      analyze: "Analyze",
      analyzing: "Analyzing...",
      recommendationsTitle: "Personalized Recommendations",
      recommendations: {
        anxiety: [
          "Practice 4-7-8 breathing exercise for 5 minutes",
          "Try a 10-minute body scan meditation",
          "Take a 15-minute mindful walk outdoors",
          "Practice Child's Pose (Balasana) for 3-5 minutes"
        ],
        stress: [
          "Practice diaphragmatic breathing for 10 minutes",
          "Try a guided meditation for stress reduction",
          "Take a break and listen to nature sounds for 15 minutes",
          "Practice the yoga sequence for stress relief"
        ],
        sadness: [
          "Practice loving-kindness meditation for 10 minutes",
          "Do some light physical activity like walking",
          "Journal about your feelings",
          "Connect with a loved one via phone or in person"
        ],
        insomnia: [
          "Do the 4-7-8 breathing exercise before bed",
          "Listen to rain or nature sounds as you prepare for sleep",
          "Practice progressive muscle relaxation in bed",
          "Avoid screens at least 1 hour before sleep"
        ],
        withdrawal: [
          "Practice heart coherence breathing when you feel cravings",
          "Do a 5-minute meditation every 2 hours",
          "Use the technique of tensing and relaxing muscles when feeling anxious",
          "Keep a journal of triggers and practice mindful breathing when they arise"
        ],
        anger: [
          "Take 10 deep breaths before reacting",
          "Practice visualization meditation of a safe place",
          "Write down your thoughts uncensored on paper",
          "Do vigorous exercise to release endorphins"
        ],
        overwhelmed: [
          "Break down your tasks into small steps",
          "Do box breathing for 5 minutes",
          "Try 1-minute meditation several times a day",
          "Practice mountain pose to feel grounded"
        ],
        calm: [
          "Continue your daily meditation practice",
          "Share your positive experience with someone",
          "Try a new breathing technique",
          "Keep a gratitude journal"
        ],
        happy: [
          "Practice gratitude meditation",
          "Share your joy with loved ones",
          "Try a new yoga pose",
          "Enjoy an activity you love with full awareness"
        ],
      }
    }
  };

  const t = translations[language];

  const handleAnalysis = () => {
    if (!feeling) {
      toast({
        variant: "destructive",
        title: language === "pt" ? "Erro" : "Error",
        description: language === "pt" 
          ? "Por favor selecione como você está se sentindo." 
          : "Please select how you are feeling.",
      });
      return;
    }

    setIsAnalyzing(true);
    setResult(null);

    // Simulate analysis delay
    setTimeout(() => {
      // Get recommendations based on selected feeling
      const key = feeling as keyof typeof t.recommendations;
      setResult(key);
      setIsAnalyzing(false);

      toast({
        title: language === "pt" ? "Análise Completa" : "Analysis Complete",
        description: language === "pt" 
          ? "Preparamos recomendações personalizadas para você." 
          : "We've prepared personalized recommendations for you.",
      });
    }, 1500);
  };

  return (
    <div className="space-y-8">
      <Card className="dark:border-maktub-yellow/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold dark:text-maktub-yellow">{t.title}</CardTitle>
          <CardDescription className="dark:text-maktub-light-yellow">{t.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium dark:text-maktub-yellow">{t.howFeeling}</label>
              <Select onValueChange={setFeeling} value={feeling}>
                <SelectTrigger className="dark:border-maktub-yellow/30">
                  <SelectValue placeholder={t.howFeeling} />
                </SelectTrigger>
                <SelectContent className="dark:bg-gray-800 dark:border-maktub-yellow/30">
                  {Object.entries(t.feelingOptions).map(([key, value]) => (
                    <SelectItem key={key} value={key} className="dark:text-maktub-light-yellow dark:focus:bg-maktub-yellow/10">
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium dark:text-maktub-yellow">{t.tellMore}</label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={t.placeholderText}
                className="resize-none dark:border-maktub-yellow/30"
                rows={4}
              />
            </div>

            <Button 
              onClick={handleAnalysis} 
              disabled={isAnalyzing} 
              className="bg-maktub-yellow text-black hover:bg-maktub-dark-yellow w-full"
            >
              {isAnalyzing ? t.analyzing : t.analyze}
            </Button>
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className="dark:border-maktub-yellow/20 border-l-4 border-l-maktub-yellow">
          <CardHeader>
            <CardTitle className="text-xl font-bold dark:text-maktub-yellow">{t.recommendationsTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 list-disc pl-5">
              {t.recommendations[result as keyof typeof t.recommendations].map((recommendation, index) => (
                <li key={index} className="dark:text-maktub-light-yellow">{recommendation}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SentimentAnalysis;
