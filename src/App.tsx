import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FirstYear from "./pages/FirstYear";
import SecondYear from "./pages/SecondYear";
import Subject from "./pages/Subject";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";
import FloatingFeedbackButton from "./components/FloatingFeedbackButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <FloatingFeedbackButton />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/first-year" element={<FirstYear />} />
          <Route path="/second-year" element={<SecondYear />} />
          <Route path="/subject/:subjectId" element={<Subject />} />
          <Route path="/feedback" element={<Feedback />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
