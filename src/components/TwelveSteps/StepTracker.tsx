
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const steps = [
  {
    number: 1,
    title: "Admitimos",
    description: "Admitimos que éramos impotentes perante a nossa adicção, que nossas vidas tinham se tornado incontroláveis.",
    completed: true
  },
  {
    number: 2,
    title: "Acreditamos",
    description: "Viemos a acreditar que um Poder maior do que nós poderia devolver-nos à sanidade.",
    completed: true
  },
  {
    number: 3,
    title: "Decidimos",
    description: "Decidimos entregar nossa vontade e nossas vidas aos cuidados de Deus, da maneira como O compreendíamos.",
    completed: true
  },
  {
    number: 4,
    title: "Fizemos",
    description: "Fizemos um profundo e destemido inventário moral de nós mesmos.",
    completed: true
  },
  {
    number: 5,
    title: "Admitimos",
    description: "Admitimos a Deus, a nós mesmos e a outro ser humano a natureza exata das nossas falhas.",
    completed: false
  },
  {
    number: 6,
    title: "Prontificamo-nos",
    description: "Prontificamo-nos inteiramente a deixar que Deus removesse todos esses defeitos de caráter.",
    completed: false
  },
  {
    number: 7,
    title: "Humildemente",
    description: "Humildemente pedimos a Ele que removesse nossos defeitos.",
    completed: false
  },
  {
    number: 8,
    title: "Fizemos uma lista",
    description: "Fizemos uma lista de todas as pessoas que tínhamos prejudicado e dispusemo-nos a fazer reparações a todas elas.",
    completed: false
  },
  {
    number: 9,
    title: "Fizemos reparações",
    description: "Fizemos reparações diretas a tais pessoas, sempre que possível, exceto quando fazê-lo pudesse prejudicá-las ou a outras.",
    completed: false
  },
  {
    number: 10,
    title: "Continuamos",
    description: "Continuamos fazendo o inventário pessoal e, quando estávamos errados, nós o admitíamos prontamente.",
    completed: false
  },
  {
    number: 11,
    title: "Procuramos",
    description: "Procuramos, através da prece e da meditação, melhorar nosso contato consciente com Deus, da maneira como O compreendíamos, rogando apenas o conhecimento da Sua vontade em relação a nós e o poder de realizar essa vontade.",
    completed: false
  },
  {
    number: 12,
    title: "Tendo experimentado",
    description: "Tendo experimentado um despertar espiritual, como resultado destes passos, procuramos levar esta mensagem a outros adictos e praticar estes princípios em todas as nossas atividades.",
    completed: false
  }
];

const StepTracker = () => {
  const completedSteps = steps.filter(step => step.completed).length;
  const progressPercentage = (completedSteps / steps.length) * 100;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Programa de 12 Passos</h2>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Progresso</span>
          <span className="text-sm font-medium">{completedSteps} de {steps.length}</span>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((step) => (
          <Card 
            key={step.number}
            className={`p-4 transition-all hover:shadow-md ${
              step.completed 
                ? "border-maktub-yellow bg-maktub-light-yellow/10" 
                : "border-gray-200"
            }`}
          >
            <div className="flex items-start space-x-4">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  step.completed 
                    ? "bg-maktub-yellow text-black" 
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {step.completed ? <CheckCircle2 size={20} /> : step.number}
              </div>
              <div>
                <h3 className="font-bold mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StepTracker;
