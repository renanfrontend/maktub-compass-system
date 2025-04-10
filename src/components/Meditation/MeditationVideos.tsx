
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type MeditationVideosProps = {
  language: "pt" | "en";
};

const MeditationVideos = ({ language }: MeditationVideosProps) => {
  const translations = {
    pt: {
      title: "Vídeos de Meditação",
      description: "Vídeos guiados para ajudar na sua prática de meditação",
      videos: [
        {
          id: "vid1",
          title: "Meditação Guiada para Iniciantes",
          videoId: "BN8RMQ5IfCM",
          duration: "10 minutos",
        },
        {
          id: "vid2",
          title: "Meditação para Ansiedade",
          videoId: "3TqzBJa0LbY",
          duration: "15 minutos",
        },
        {
          id: "vid3",
          title: "Meditação para Dormir Melhor",
          videoId: "1IQiw3L_ZX0",
          duration: "20 minutos",
        },
      ],
    },
    en: {
      title: "Meditation Videos",
      description: "Guided videos to help with your meditation practice",
      videos: [
        {
          id: "vid1",
          title: "Guided Meditation for Beginners",
          videoId: "inpok4MKVLM",
          duration: "10 minutes",
        },
        {
          id: "vid2",
          title: "Meditation for Anxiety",
          videoId: "O-6f5wQXSu8",
          duration: "15 minutes",
        },
        {
          id: "vid3",
          title: "Meditation for Better Sleep",
          videoId: "aEqlQvczMJQ",
          duration: "20 minutes",
        },
      ],
    }
  };

  const t = translations[language];

  return (
    <Card className="dark:border-maktub-yellow/20">
      <CardHeader>
        <CardTitle className="text-2xl font-bold dark:text-maktub-yellow">{t.title}</CardTitle>
        <CardDescription className="dark:text-maktub-light-yellow">{t.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
};

export default MeditationVideos;
