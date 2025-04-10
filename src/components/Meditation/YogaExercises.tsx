
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type YogaExercisesProps = {
  language: "pt" | "en";
};

const YogaExercises = ({ language }: YogaExercisesProps) => {
  const translations = {
    pt: {
      title: "Exercícios de Yoga",
      description: "Posturas e sequências para praticar em casa",
      introVideo: "Yoga para Iniciantes",
      exercises: [
        {
          id: "yoga1",
          name: "Postura da Montanha (Tadasana)",
          benefit: "Melhora a postura e concentração",
          steps: [
            "Fique de pé com os pés juntos",
            "Distribua o peso uniformemente em ambos os pés",
            "Braços ao lado do corpo, palmas para frente",
            "Enraíze os pés e alongue a coluna",
            "Respire profundamente por 30-60 segundos"
          ],
        },
        {
          id: "yoga2",
          name: "Postura da Árvore (Vrksasana)",
          benefit: "Melhora o equilíbrio e fortalece as pernas",
          steps: [
            "Comece na postura da montanha",
            "Transfira o peso para o pé esquerdo",
            "Coloque a sola do pé direito na parte interna da coxa esquerda",
            "Junte as mãos em posição de oração no peito",
            "Fixe o olhar em um ponto à frente e mantenha por 30 segundos",
            "Repita do outro lado"
          ],
        },
        {
          id: "yoga3",
          name: "Postura da Criança (Balasana)",
          benefit: "Relaxante, alivia tensão nas costas",
          steps: [
            "Ajoelhe-se no tapete com os dedos dos pés juntos",
            "Separe os joelhos na largura do quadril",
            "Sente-se sobre os calcanhares",
            "Estenda os braços à frente ou ao lado do corpo",
            "Relaxe a testa no chão e respire profundamente",
            "Mantenha por 1-3 minutos"
          ],
        },
        {
          id: "yoga4",
          name: "Postura do Cachorro Olhando para Baixo (Adho Mukha Svanasana)",
          benefit: "Fortalece braços e pernas, alonga a coluna",
          steps: [
            "Comece de quatro apoios",
            "Eleve os quadris para cima e para trás",
            "Estenda as pernas, empurrando os calcanhares em direção ao chão",
            "Mantenha os braços estendidos, afastando os ombros das orelhas",
            "Mantenha por 30-60 segundos"
          ],
        },
      ],
      videos: [
        {
          id: "yvid1",
          title: "Yoga para Iniciantes",
          videoId: "vsOJ8GDjVkY",
          duration: "20 minutos",
        },
        {
          id: "yvid2",
          title: "Yoga para Ansiedade",
          videoId: "m5I8g99Nces",
          duration: "15 minutos",
        },
      ],
      instructions: "Instruções",
      benefits: "Benefícios",
    },
    en: {
      title: "Yoga Exercises",
      description: "Poses and sequences to practice at home",
      introVideo: "Yoga for Beginners",
      exercises: [
        {
          id: "yoga1",
          name: "Mountain Pose (Tadasana)",
          benefit: "Improves posture and concentration",
          steps: [
            "Stand with feet together",
            "Distribute weight evenly on both feet",
            "Arms at sides, palms facing forward",
            "Root down through feet and elongate spine",
            "Breathe deeply for 30-60 seconds"
          ],
        },
        {
          id: "yoga2",
          name: "Tree Pose (Vrksasana)",
          benefit: "Improves balance and strengthens legs",
          steps: [
            "Start in mountain pose",
            "Shift weight to left foot",
            "Place sole of right foot on inner left thigh",
            "Bring hands together in prayer position at chest",
            "Fix gaze on point ahead and hold for 30 seconds",
            "Repeat on other side"
          ],
        },
        {
          id: "yoga3",
          name: "Child's Pose (Balasana)",
          benefit: "Relaxing, relieves back tension",
          steps: [
            "Kneel on mat with big toes touching",
            "Separate knees to hip width",
            "Sit back on heels",
            "Extend arms forward or alongside body",
            "Rest forehead on floor and breathe deeply",
            "Hold for 1-3 minutes"
          ],
        },
        {
          id: "yoga4",
          name: "Downward-Facing Dog (Adho Mukha Svanasana)",
          benefit: "Strengthens arms and legs, stretches spine",
          steps: [
            "Start on hands and knees",
            "Lift hips up and back",
            "Straighten legs, pressing heels toward floor",
            "Keep arms extended, drawing shoulders away from ears",
            "Hold for 30-60 seconds"
          ],
        },
      ],
      videos: [
        {
          id: "yvid1",
          title: "Yoga for Beginners",
          videoId: "v7AYKMP6rOE",
          duration: "20 minutes",
        },
        {
          id: "yvid2",
          title: "Yoga for Anxiety",
          videoId: "hJbRpHZr_d0",
          duration: "15 minutes",
        },
      ],
      instructions: "Instructions",
      benefits: "Benefits",
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
          <div className="aspect-video mb-8">
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${language === 'pt' ? 'vsOJ8GDjVkY' : 'v7AYKMP6rOE'}`}
              title={t.introVideo}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </CardContent>
      </Card>

      <Card className="dark:border-maktub-yellow/20">
        <CardHeader>
          <CardTitle className="text-xl font-bold dark:text-maktub-yellow">{t.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {t.exercises.map((exercise) => (
              <AccordionItem key={exercise.id} value={exercise.id} className="dark:border-maktub-yellow/20">
                <AccordionTrigger className="dark:text-maktub-yellow hover:dark:text-maktub-light-yellow">
                  {exercise.name}
                </AccordionTrigger>
                <AccordionContent className="dark:text-gray-300">
                  <p className="mb-4 dark:text-maktub-light-yellow">
                    <strong className="dark:text-maktub-yellow">{t.benefits}:</strong> {exercise.benefit}
                  </p>
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
          <CardTitle className="text-xl font-bold dark:text-maktub-yellow">{t.introVideo}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.videos.map((video) => (
              <div key={video.id} className="flex flex-col">
                <div className="aspect-video mb-3">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="font-medium dark:text-maktub-yellow">{video.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{video.duration}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default YogaExercises;
