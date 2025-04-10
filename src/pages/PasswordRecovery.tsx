
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const PasswordRecovery = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Email enviado",
        description: "Instruções de recuperação foram enviadas para seu email.",
      });
      // Navigate to login after successful submission
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Falha ao enviar email de recuperação.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center mb-4">
            <Link to="/login" className="hover:text-maktub-yellow mr-2">
              <ArrowLeft size={20} />
            </Link>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-maktub-yellow flex items-center justify-center">
                <span className="text-black font-bold text-sm">M</span>
              </div>
              <div className="ml-2">
                <h1 className="text-lg font-bold">MAKTUB</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">INSTITUTO TERAPÊUTICO</p>
              </div>
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Recuperar Senha</CardTitle>
          <CardDescription>
            Informe seu email para receber instruções de recuperação
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Email"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full maktub-btn-primary" 
              disabled={isLoading}
            >
              {isLoading ? "Enviando..." : "Enviar instruções"}
            </Button>
            
            <div className="text-center mt-4">
              <Link to="/login" className="text-sm text-maktub-yellow hover:underline">
                Voltar para o login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PasswordRecovery;
