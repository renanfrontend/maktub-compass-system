
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type BreathingExerciseProps = {
  language: "pt" | "en";
};

const BreathingExercises = ({ language }: BreathingExerciseProps) => {
  const translations = {
    pt: {
      title: "Exercícios de Respiração",
      description: "Pratique exercícios de respiração para reduzir o estresse e aumentar o bem-estar",
      exercises: [
        {
          id: "ex1",
          name: "Respiração 4-7-8",
          description: "Um exercício calmante que ajuda a reduzir a ansiedade e promove o sono.",
          steps: [
            "Sente-se em uma posição confortável",
            "Inspire silenciosamente pelo nariz contando até 4",
            "Segure a respiração contando até 7",
            "Expire completamente pela boca fazendo um som audível contando até 8",
            "Repita o ciclo 4 vezes"
          ],
        },
        {
          id: "ex2",
          name: "Respiração Abdominal",
          description: "Uma técnica que utiliza o diafragma para melhorar a oxigenação e relaxamento.",
          steps: [
            "Deite-se ou sente-se confortavelmente",
            "Coloque uma mão no peito e outra no abdômen",
            "Inspire profundamente pelo nariz, expandindo o abdômen (a mão no abdômen deve subir)",
            "Expire lentamente pela boca, contraindo levemente os músculos abdominais",
            "Repita por 5-10 minutos"
          ],
        },
        {
          id: "ex3",
          name: "Respiração Alternada",
          description: "Uma técnica de yoga que equilibra os dois hemisférios do cérebro.",
          steps: [
            "Sente-se confortavelmente com a coluna ereta",
            "Feche a narina direita com o polegar direito e inspire pela narina esquerda",
            "Feche a narina esquerda com o dedo anelar direito, solte o polegar e expire pela narina direita",
            "Inspire pela narina direita",
            "Feche a narina direita, solte a esquerda e expire pela narina esquerda",
            "Continue alternando por 5-10 minutos"
          ],
        },
        {
          id: "ex4",
          name: "Respiração de Coerência Cardíaca",
          description: "Sincroniza a respiração com o ritmo cardíaco para reduzir o estresse.",
          steps: [
            "Inspire por 5 segundos",
            "Expire por 5 segundos",
            "Mantenha este ritmo por 5 minutos (cerca de 6 respirações por minuto)",
            "Pratique pelo menos duas vezes ao dia"
          ],
        },
      ],
      instructions: "Instruções",
      breathingVideo: "Vídeo Guiado de Respiração",
    },
    en: {
      title: "Breathing Exercises",
      description: "Practice breathing exercises to reduce stress and increase well-being",
      exercises: [
        {
          id: "ex1",
          name: "4-7-8 Breathing",
          description: "A calming exercise that helps reduce anxiety and promotes sleep.",
          steps: [
            "Sit in a comfortable position",
            "Inhale quietly through your nose to a count of 4",
            "Hold your breath for a count of 7",
            "Exhale completely through your mouth making a whoosh sound to a count of 8",
            "Repeat the cycle 4 times"
          ],
        },
        {
          id: "ex2",
          name: "Diaphragmatic Breathing",
          description: "A technique that uses the diaphragm to improve oxygenation and relaxation.",
          steps: [
            "Lie down or sit comfortably",
            "Place one hand on your chest and the other on your abdomen",
            "Breathe in deeply through your nose, expanding your abdomen (the hand on your abdomen should rise)",
            "Exhale slowly through your mouth, gently contracting your abdominal muscles",
            "Repeat for 5-10 minutes"
          ],
        },
        {
          id: "ex3",
          name: "Alternate Nostril Breathing",
          description: "A yoga technique that balances the two hemispheres of the brain.",
          steps: [
            "Sit comfortably with your spine erect",
            "Close your right nostril with your right thumb and inhale through the left nostril",
            "Close your left nostril with your right ring finger, release your thumb and exhale through the right nostril",
            "Inhale through the right nostril",
            "Close the right nostril, release the left and exhale through the left nostril",
            "Continue alternating for 5-10 minutes"
          ],
        },
        {
          id: "ex4",
          name: "Heart Coherence Breathing",
          description: "Synchronizes breathing with heart rhythm to reduce stress.",
          steps: [
            "Inhale for 5 seconds",
            "Exhale for 5 seconds",
            "Maintain this rhythm for 5 minutes (about 6 breaths per minute)",
            "Practice at least twice a day"
          ],
        },
      ],
      instructions: "Instructions",
      breathingVideo: "Guided Breathing Video",
    }
  };

  const t = translations[language];

  return (
    <div className="space-y-8">
      <Card className="dark:border-maktub-yellow/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold dark:text-maktub-yellow">{t.title}</CardTitle>
          <CardDescription className="dark:text-maktub-light-yellow">{t.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {t.exercises.map((exercise) => (
              <AccordionItem key={exercise.id} value={exercise.id} className="dark:border-maktub-yellow/20">
                <AccordionTrigger className="dark:text-maktub-yellow hover:dark:text-maktub-light-yellow">
                  {exercise.name}
                </AccordionTrigger>
                <AccordionContent className="dark:text-gray-300">
                  <p className="mb-4 dark:text-maktub-light-yellow">{exercise.description}</p>
                  <h4 className="font-medium mb-2 dark:text-maktub-yellow">{t.instructions}:</h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    {exercise.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card className="dark:border-maktub-yellow/20">
        <CardHeader>
          <CardTitle className="text-xl font-bold dark:text-maktub-yellow">{t.breathingVideo}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${language === 'pt' ? 'KJSgZP84eTQ' : 'tEmt1Znux58'}`}
              title={t.breathingVideo}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BreathingExercises;
