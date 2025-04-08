
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const WeeklySchedule = () => {
  const schedule = [
    { time: "07:00", activity: "Despertar e Meditação", days: ["seg", "ter", "qua", "qui", "sex", "sab", "dom"] },
    { time: "07:30", activity: "Café da Manhã", days: ["seg", "ter", "qua", "qui", "sex", "sab", "dom"] },
    { time: "08:30", activity: "Terapia em Grupo", days: ["seg", "qua", "sex"] },
    { time: "08:30", activity: "Yoga / Mindfulness", days: ["ter", "qui"] },
    { time: "08:30", activity: "Atividades Livres", days: ["sab", "dom"] },
    { time: "10:30", activity: "Intervalo", days: ["seg", "ter", "qua", "qui", "sex", "sab", "dom"] },
    { time: "11:00", activity: "Terapia Individual", days: ["seg", "ter", "qui"] },
    { time: "11:00", activity: "Oficina de Arte", days: ["qua", "sex"] },
    { time: "12:30", activity: "Almoço", days: ["seg", "ter", "qua", "qui", "sex", "sab", "dom"] },
    { time: "14:00", activity: "Trabalho dos 12 Passos", days: ["seg", "qua", "sex"] },
    { time: "14:00", activity: "Psicoeducação", days: ["ter", "qui"] },
    { time: "16:00", activity: "Atividade Física", days: ["seg", "ter", "qua", "qui", "sex"] },
    { time: "18:00", activity: "Jantar", days: ["seg", "ter", "qua", "qui", "sex", "sab", "dom"] },
    { time: "19:30", activity: "Reunião NA/AA", days: ["seg", "qua", "sex"] },
    { time: "19:30", activity: "Espiritualidade", days: ["ter", "qui"] },
    { time: "21:00", activity: "Tempo Livre / Reflexão", days: ["seg", "ter", "qua", "qui", "sex", "sab", "dom"] },
    { time: "22:30", activity: "Recolher", days: ["seg", "ter", "qua", "qui", "sex", "sab", "dom"] },
  ];

  const days = ["seg", "ter", "qua", "qui", "sex", "sab", "dom"];
  const dayLabels = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Programação Semanal</h2>
      <Card className="overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Horário</TableHead>
              <TableHead>Atividade</TableHead>
              {dayLabels.map((day, index) => (
                <TableHead key={index} className="text-center">{day}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {schedule.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.time}</TableCell>
                <TableCell>{item.activity}</TableCell>
                {days.map((day, dayIndex) => (
                  <TableCell key={dayIndex} className="text-center">
                    {item.days.includes(day) ? (
                      <span className="inline-block w-3 h-3 bg-maktub-yellow rounded-full"></span>
                    ) : (
                      <span className="inline-block w-3 h-3 bg-gray-200 rounded-full"></span>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default WeeklySchedule;
