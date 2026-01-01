import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Mail, X, Loader2, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const EmailVerificationBanner = () => {
  const { user, isEmailVerified, resendVerificationEmail } = useAuth();
  const { toast } = useToast();
  const [isResending, setIsResending] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Don't show if not logged in, already verified, or dismissed
  if (!user || isEmailVerified || dismissed) return null;

  const handleResend = async () => {
    setIsResending(true);
    const { error } = await resendVerificationEmail();
    setIsResending(false);

    if (error) {
      toast({
        title: 'Failed to send email',
        description: error.message,
        variant: 'destructive'
      });
    } else {
      toast({
        title: 'Verification email sent!',
        description: 'Please check your inbox and spam folder.',
      });
    }
  };

  return (
    <div className="bg-amber-50 dark:bg-amber-950/30 border-b border-amber-200 dark:border-amber-800 px-4 py-3">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-amber-800 dark:text-amber-200">
          <Mail className="h-5 w-5 shrink-0" />
          <p className="text-sm">
            <span className="font-medium">Verify your email</span> to save quiz scores and track progress.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={handleResend}
            disabled={isResending}
            className="text-amber-800 border-amber-300 hover:bg-amber-100 dark:text-amber-200 dark:border-amber-700 dark:hover:bg-amber-900/50"
          >
            {isResending ? (
              <>
                <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <CheckCircle className="h-4 w-4 mr-1" />
                Resend Email
              </>
            )}
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setDismissed(true)}
            className="text-amber-600 hover:bg-amber-100 dark:text-amber-400 dark:hover:bg-amber-900/50"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationBanner;
