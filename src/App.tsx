import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Feedback from "./pages/Feedback";
import SubjectQuiz from "./pages/SubjectQuiz";
import SubjectPYQ from "./pages/SubjectPYQ";
import SubjectTopics from "./pages/SubjectTopics";
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
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/:subjectId/quiz" element={<SubjectQuiz />} />
          <Route path="/:subjectId/pyq" element={<SubjectPYQ />} />
          <Route path="/:subjectId/important-topics" element={<SubjectTopics />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;