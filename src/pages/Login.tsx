
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Lock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Sucesso",
        description: "Login realizado com sucesso!",
      });
      // Navigate to dashboard after successful login
      navigate("/");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Falha no login. Verifique suas credenciais.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      toast({
        title: "Google Login",
        description: "Iniciando login com Google...",
      });
      // This would be implemented with actual Google authentication
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate("/");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Falha no login com Google.",
      });
    }
  };

  const handleInstagramLogin = async () => {
    try {
      toast({
        title: "Instagram Login",
        description: "Iniciando login com Instagram...",
      });
      // This would be implemented with actual Instagram authentication
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate("/");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Falha no login com Instagram.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center mb-4">
            <Link to="/" className="hover:text-maktub-yellow mr-2">
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
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Entre com suas credenciais para acessar o sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
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
            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  type="password"
                  placeholder="Senha"
                  className="pl-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-end">
                <Link 
                  to="/recuperar-senha" 
                  className="text-sm text-maktub-yellow hover:underline"
                >
                  Esqueceu a senha?
                </Link>
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full maktub-btn-primary" 
              disabled={isLoading}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          <div className="relative my-6">
            <Separator />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white dark:bg-gray-800 px-2 text-sm text-gray-500">ou continue com</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center" 
              onClick={handleGoogleLogin}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </Button>
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center" 
              onClick={handleInstagramLogin}
            >
              <Instagram size={20} className="mr-2 text-pink-500" />
              Instagram
            </Button>
          </div>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-500 dark:text-gray-400">
              Não tem uma conta?{" "}
              <Link to="/cadastro" className="text-maktub-yellow hover:underline">
                Cadastre-se
              </Link>
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
