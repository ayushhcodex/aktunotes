import { MessageSquare } from "lucide-react";

const FloatingFeedbackButton = () => {
  return (
    <a
      href="/feedback"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <MessageSquare className="h-5 w-5" />
      <span className="font-medium">Feedback</span>
    </a>
  );
};

export default FloatingFeedbackButton;
