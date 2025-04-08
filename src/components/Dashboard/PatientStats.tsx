
import { Card } from "@/components/ui/card";
import { Users, UserCheck, UserMinus, Clock } from "lucide-react";

const PatientStats = () => {
  const stats = [
    {
      title: "Total de Pacientes",
      value: 128,
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Admissões (Mês)",
      value: 12,
      icon: UserCheck,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Altas (Mês)",
      value: 8,
      icon: UserMinus,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Tempo Médio",
      value: "45 dias",
      icon: Clock,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Estatísticas dos Pacientes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="p-4 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">{stat.title}</span>
                <span className="text-2xl font-bold">{stat.value}</span>
              </div>
              <div className={`rounded-full p-3 ${stat.color}`}>
                <stat.icon size={20} />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PatientStats;
