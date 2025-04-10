
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { lazy, Suspense } from "react";

// Lazy loaded components
const PatientForm = lazy(() => import("./components/Patients/PatientForm"));
const WeeklySchedule = lazy(() => import("./components/Dashboard/WeeklySchedule"));
const StepTracker = lazy(() => import("./components/TwelveSteps/StepTracker"));
const ContractsList = lazy(() => import("./components/Documents/ContractsList"));

// Create placeholder pages for lazy-loaded routes
const PacientesPage = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
    <Suspense fallback={<div className="flex h-screen items-center justify-center">Carregando...</div>}>
      <PatientForm />
    </Suspense>
  </div>
);

const ProgramacaoPage = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
    <Suspense fallback={<div className="flex h-screen items-center justify-center">Carregando...</div>}>
      <WeeklySchedule />
    </Suspense>
  </div>
);

const TwelveStepsPage = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
    <Suspense fallback={<div className="flex h-screen items-center justify-center">Carregando...</div>}>
      <StepTracker />
    </Suspense>
  </div>
);

const DocumentosPage = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
    <Suspense fallback={<div className="flex h-screen items-center justify-center">Carregando...</div>}>
      <ContractsList />
    </Suspense>
  </div>
);

// Placeholder pages for auth features
const RecuperarSenhaPage = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-6">Recuperar Senha</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-4">
        Esta funcionalidade será implementada em breve.
      </p>
      <div className="mt-4">
        <Link to="/login" className="text-maktub-yellow hover:underline">
          Voltar para o login
        </Link>
      </div>
    </div>
  </div>
);

const CadastroPage = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-6">Cadastro</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-4">
        Esta funcionalidade será implementada em breve.
      </p>
      <div className="mt-4">
        <Link to="/login" className="text-maktub-yellow hover:underline">
          Voltar para o login
        </Link>
      </div>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recuperar-senha" element={<RecuperarSenhaPage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
          <Route path="/pacientes" element={<PacientesPage />} />
          <Route path="/programacao" element={<ProgramacaoPage />} />
          <Route path="/12-passos" element={<TwelveStepsPage />} />
          <Route path="/documentos" element={<DocumentosPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
