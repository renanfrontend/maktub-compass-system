
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { lazy, Suspense } from "react";

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
