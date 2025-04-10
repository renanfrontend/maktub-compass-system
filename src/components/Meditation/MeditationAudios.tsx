
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Pause, SkipForward, SkipBack } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

type MeditationAudiosProps = {
  language: "pt" | "en";
};

const MeditationAudios = ({ language }: MeditationAudiosProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(0);

  const translations = {
    pt: {
      title: "Áudios de Meditação",
      description: "Áudios guiados para meditação e relaxamento",
      play: "Reproduzir",
      pause: "Pausar",
      next: "Próximo",
      previous: "Anterior",
      tracks: [
        {
          id: "track1",
          title: "Sons da Natureza - Floresta",
          duration: "10:00",
          source: "https://assets.mixkit.co/sfx/preview/mixkit-forest-wind-ambience-1237.mp3",
        },
        {
          id: "track2",
          title: "Meditação para Relaxamento",
          duration: "15:00",
          source: "https://assets.mixkit.co/sfx/preview/mixkit-peaceful-meditation-583.mp3",
        },
        {
          id: "track3",
          title: "Som de Chuva para Dormir",
          duration: "20:00",
          source: "https://assets.mixkit.co/sfx/preview/mixkit-light-rain-loop-2393.mp3",
        },
      ],
    },
    en: {
      title: "Meditation Audio",
      description: "Guided audio for meditation and relaxation",
      play: "Play",
      pause: "Pause",
      next: "Next",
      previous: "Previous",
      tracks: [
        {
          id: "track1",
          title: "Nature Sounds - Forest",
          duration: "10:00",
          source: "https://assets.mixkit.co/sfx/preview/mixkit-forest-wind-ambience-1237.mp3",
        },
        {
          id: "track2",
          title: "Relaxation Meditation",
          duration: "15:00",
          source: "https://assets.mixkit.co/sfx/preview/mixkit-peaceful-meditation-583.mp3",
        },
        {
          id: "track3",
          title: "Rain Sounds for Sleep",
          duration: "20:00",
          source: "https://assets.mixkit.co/sfx/preview/mixkit-light-rain-loop-2393.mp3",
        },
      ],
    }
  };

  const t = translations[language];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // In a real app, this would control the audio playback
  };

  const handleNext = () => {
    setCurrentTrack((prev) => (prev === t.tracks.length - 1 ? 0 : prev + 1));
    setProgress(0);
  };

  const handlePrevious = () => {
    setCurrentTrack((prev) => (prev === 0 ? t.tracks.length - 1 : prev - 1));
    setProgress(0);
  };

  return (
    <Card className="dark:border-maktub-yellow/20">
      <CardHeader>
        <CardTitle className="text-2xl font-bold dark:text-maktub-yellow">{t.title}</CardTitle>
        <CardDescription className="dark:text-maktub-light-yellow">{t.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-medium mb-2 dark:text-maktub-yellow">
              {t.tracks[currentTrack].title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {t.tracks[currentTrack].duration}
            </p>
            
            <Slider
              value={[progress]}
              max={100}
              step={1}
              onValueChange={(value) => setProgress(value[0])}
              className="mb-6"
            />
            
            <div className="flex justify-center items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevious}
                className="rounded-full dark:border-maktub-yellow dark:text-maktub-yellow"
              >
                <SkipBack size={18} />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                onClick={handlePlayPause}
                className="w-12 h-12 rounded-full dark:border-maktub-yellow dark:text-maktub-yellow"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="rounded-full dark:border-maktub-yellow dark:text-maktub-yellow"
              >
                <SkipForward size={18} />
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            {t.tracks.map((track, index) => (
              <div 
                key={track.id}
                className={`p-3 rounded-md flex items-center justify-between cursor-pointer ${
                  currentTrack === index
                    ? "bg-maktub-yellow/10 border border-maktub-yellow/30"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                onClick={() => {
                  setCurrentTrack(index);
                  setProgress(0);
                }}
              >
                <div>
                  <h4 className="font-medium dark:text-maktub-yellow">{track.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{track.duration}</p>
                </div>
                {currentTrack === index && isPlaying && (
                  <div className="flex space-x-1 items-center">
                    <div className="w-1 h-4 bg-maktub-yellow rounded-full animate-pulse"></div>
                    <div className="w-1 h-6 bg-maktub-yellow rounded-full animate-pulse delay-75"></div>
                    <div className="w-1 h-3 bg-maktub-yellow rounded-full animate-pulse delay-150"></div>
                    <div className="w-1 h-5 bg-maktub-yellow rounded-full animate-pulse delay-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MeditationAudios;
