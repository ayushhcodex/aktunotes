import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import Index from "./pages/Index";
import Feedback from "./pages/Feedback";
import AIQuiz from "./pages/AIQuiz";
import ImportantTopics from "./pages/ImportantTopics";
import Auth from "./pages/Auth";
import Progress from "./pages/Progress";
import NotFound from "./pages/NotFound";
import FloatingFeedbackButton from "./components/FloatingFeedbackButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <FloatingFeedbackButton />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/ai-quiz" element={<AIQuiz />} />
            <Route path="/important-topics" element={<ImportantTopics />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/progress" element={<Progress />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;