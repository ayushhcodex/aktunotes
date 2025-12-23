import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, Send, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const feedbackSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  phoneNumber: z.string().trim().min(10, "Enter a valid phone number").max(15, "Phone number too long").regex(/^[0-9+\-\s()]+$/, "Invalid phone number format"),
  email: z.string().trim().email("Enter a valid email address").max(255, "Email must be less than 255 characters").optional().or(z.literal("")),
  year: z.string().min(1, "Please select a year"),
  message: z.string().trim().min(10, "Feedback must be at least 10 characters").max(1000, "Feedback must be less than 1000 characters"),
});

type FeedbackFormData = z.infer<typeof feedbackSchema>;

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwh2Llhwv-JrdZjaCP_IHz_6AfDxbTSF3nQCvjmprWat-ELY0851PdQft2yYAfdrCrUvQ/exec";

const Feedback = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      year: "",
      message: "",
    },
  });

  const onSubmit = async (data: FeedbackFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: data.fullName,
          phoneNumber: data.phoneNumber,
          email: data.email,
          year: data.year,
          message: data.message,
          timestamp: new Date().toISOString(),
        }),
      });

      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Error submitting feedback:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 mx-auto bg-secondary/10 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-secondary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Thank You!</h1>
          <p className="text-muted-foreground">
            Your feedback has been submitted successfully. We appreciate you taking the time to help us improve.
          </p>
          <Button asChild className="mt-4">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-border/50">
        <div className="container py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="max-w-lg mx-auto">
          {/* Title Section */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="gradient-text">Share Your Feedback</span>
            </h1>
            <p className="text-muted-foreground">
              Help us improve your learning experience. Your feedback matters!
            </p>
          </div>

          {/* Feedback Form */}
          <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-8 shadow-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your full name" 
                          {...field} 
                          className="bg-background"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your phone number" 
                          type="tel"
                          {...field} 
                          className="bg-background"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address (optional)</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your email" 
                          type="email"
                          {...field} 
                          className="bg-background"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select your year" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="2025">2025</SelectItem>
                          <SelectItem value="2026">2026</SelectItem>
                          <SelectItem value="2027">2027</SelectItem>
                          <SelectItem value="2028">2028</SelectItem>
                          <SelectItem value="2029">2029</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Feedback Message *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Share your thoughts, suggestions, or report any issues..."
                          className="min-h-[120px] bg-background resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 mr-2 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Submit Feedback
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Feedback;
