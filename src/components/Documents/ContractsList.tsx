
import { Search, FileText, Download, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const documents = [
  {
    id: 1,
    title: "Contrato de Admissão",
    type: "Contrato",
    createdAt: "15/03/2023",
    status: "Ativo"
  },
  {
    id: 2,
    title: "Termo de Consentimento - Terapia",
    type: "Termo",
    createdAt: "15/03/2023",
    status: "Ativo"
  },
  {
    id: 3,
    title: "Regras e Condutas",
    type: "Regulamento",
    createdAt: "16/03/2023",
    status: "Ativo"
  },
  {
    id: 4,
    title: "Autorização para Procedimentos",
    type: "Autorização",
    createdAt: "20/03/2023",
    status: "Ativo"
  },
  {
    id: 5,
    title: "Compromisso Familiar",
    type: "Termo",
    createdAt: "21/03/2023",
    status: "Ativo"
  },
  {
    id: 6,
    title: "Relatório de Progresso - Modelo",
    type: "Relatório",
    createdAt: "01/04/2023",
    status: "Ativo"
  }
];

const ContractsList = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Documentos e Contratos</h2>
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            placeholder="Buscar documentos..." 
            className="pl-10"
          />
        </div>
        <Button className="maktub-btn-primary">
          <FileText size={16} className="mr-2" />
          Novo Documento
        </Button>
      </div>

      <Card>
        <div className="rounded-md overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Título</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Data de Criação</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell className="font-medium">{doc.title}</TableCell>
                  <TableCell>{doc.type}</TableCell>
                  <TableCell>{doc.createdAt}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {doc.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="icon">
                        <Eye size={16} />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Download size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default ContractsList;
