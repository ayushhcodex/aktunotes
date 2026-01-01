import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Loader2, Mail } from 'lucide-react';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';

const emailSchema = z.string().email('Please enter a valid email address');
const passwordSchema = z.string().min(6, 'Password must be at least 6 characters');
const nameSchema = z.string().min(2, 'Name must be at least 2 characters');

type AuthView = 'login' | 'signup' | 'signup-otp' | 'forgot-password' | 'reset-password';

const Auth = () => {
  const [view, setView] = useState<AuthView>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string; name?: string; confirmPassword?: string }>({});
  
  const { signIn, user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check for password reset token in URL
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const type = hashParams.get('type');
    if (type === 'recovery') {
      setView('reset-password');
    }
  }, []);

  useEffect(() => {
    if (user && !loading && view !== 'reset-password') {
      navigate('/');
    }
  }, [user, loading, navigate, view]);

  const validateForm = () => {
    const newErrors: { email?: string; password?: string; name?: string; confirmPassword?: string } = {};
    
    if (view !== 'signup-otp') {
      const emailResult = emailSchema.safeParse(email);
      if (!emailResult.success) {
        newErrors.email = emailResult.error.errors[0].message;
      }
    }
    
    if (view === 'login' || view === 'signup' || view === 'reset-password') {
      const passwordResult = passwordSchema.safeParse(password);
      if (!passwordResult.success) {
        newErrors.password = passwordResult.error.errors[0].message;
      }
    }

    if (view === 'reset-password') {
      if (password !== confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    if (view === 'signup') {
      const nameResult = nameSchema.safeParse(name);
      if (!nameResult.success) {
        newErrors.name = nameResult.error.errors[0].message;
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async () => {
    const redirectUrl = `${window.location.origin}/`;
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: { name }
      }
    });
    
    if (error) {
      if (error.message.includes('already registered')) {
        toast({
          title: 'Account Exists',
          description: 'This email is already registered. Please login instead.',
          variant: 'destructive'
        });
      } else {
        toast({
          title: 'Signup Failed',
          description: error.message,
          variant: 'destructive'
        });
      }
    } else {
      toast({
        title: 'Check your email!',
        description: 'Enter the 6-digit code we sent to verify your account.'
      });
      setView('signup-otp');
    }
  };

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      toast({
        title: 'Invalid Code',
        description: 'Please enter the 6-digit verification code.',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: 'signup'
      });

      if (error) {
        toast({
          title: 'Verification Failed',
          description: error.message,
          variant: 'destructive'
        });
      } else {
        toast({
          title: 'Email Verified!',
          description: 'Your account is now verified. Welcome!'
        });
        navigate('/');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleForgotPassword = async () => {
    const emailResult = emailSchema.safeParse(email);
    if (!emailResult.success) {
      setErrors({ email: emailResult.error.errors[0].message });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth#type=recovery`
      });

      if (error) {
        toast({
          title: 'Error',
          description: error.message,
          variant: 'destructive'
        });
      } else {
        toast({
          title: 'Check your email!',
          description: 'We sent you a password reset link.'
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetPassword = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase.auth.updateUser({
        password
      });

      if (error) {
        toast({
          title: 'Error',
          description: error.message,
          variant: 'destructive'
        });
      } else {
        toast({
          title: 'Password Updated!',
          description: 'Your password has been reset successfully.'
        });
        navigate('/');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (view === 'forgot-password') {
      await handleForgotPassword();
      return;
    }

    if (view === 'reset-password') {
      await handleResetPassword();
      return;
    }

    if (view === 'signup-otp') {
      await handleVerifyOTP();
      return;
    }
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      if (view === 'login') {
        const { error } = await signIn(email, password);
        if (error) {
          if (error.message.includes('Invalid login credentials')) {
            toast({
              title: 'Login Failed',
              description: 'Invalid email or password. Please try again.',
              variant: 'destructive'
            });
          } else {
            toast({
              title: 'Login Failed',
              description: error.message,
              variant: 'destructive'
            });
          }
        } else {
          toast({
            title: 'Welcome back!',
            description: 'You have successfully logged in.'
          });
          navigate('/');
        }
      } else if (view === 'signup') {
        await handleSignup();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const resendOTP = async () => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/`
        }
      });

      if (error) {
        toast({
          title: 'Error',
          description: error.message,
          variant: 'destructive'
        });
      } else {
        toast({
          title: 'Code Resent!',
          description: 'Check your email for a new verification code.'
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const getTitle = () => {
    switch (view) {
      case 'login': return 'Welcome Back';
      case 'signup': return 'Create Account';
      case 'signup-otp': return 'Verify Your Email';
      case 'forgot-password': return 'Reset Password';
      case 'reset-password': return 'Set New Password';
    }
  };

  const getDescription = () => {
    switch (view) {
      case 'login': return 'Login to track your progress and save scores';
      case 'signup': return 'Sign up to save your quiz scores and track progress';
      case 'signup-otp': return `Enter the 6-digit code sent to ${email}`;
      case 'forgot-password': return 'Enter your email to receive a reset link';
      case 'reset-password': return 'Choose a new password for your account';
    }
  };

  return (
    <>
      <Helmet>
        <title>{getTitle()} | Study Portal</title>
        <meta name="description" content="Login or sign up to track your study progress and save quiz scores." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
        <Button
          variant="ghost"
          className="absolute top-4 left-4"
          onClick={() => {
            if (view === 'signup-otp') {
              setView('signup');
              setOtp('');
            } else if (view === 'forgot-password' || view === 'reset-password') {
              setView('login');
            } else {
              navigate('/');
            }
          }}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {view === 'signup-otp' || view === 'forgot-password' ? 'Back' : 'Back to Home'}
        </Button>
        
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            {view === 'signup-otp' && (
              <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
            )}
            <CardTitle className="text-2xl font-bold">
              {getTitle()}
            </CardTitle>
            <CardDescription>
              {getDescription()}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {view === 'signup-otp' ? (
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <InputOTP
                      value={otp}
                      onChange={setOtp}
                      maxLength={6}
                      disabled={isSubmitting}
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting || otp.length !== 6}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      'Verify Email'
                    )}
                  </Button>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={resendOTP}
                      disabled={isSubmitting}
                      className="text-sm text-primary hover:underline disabled:opacity-50"
                    >
                      Didn't receive the code? Resend
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {view === 'signup' && (
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name}</p>
                      )}
                    </div>
                  )}
                  
                  {view !== 'reset-password' && (
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>
                  )}
                  
                  {(view === 'login' || view === 'signup' || view === 'reset-password') && (
                    <div className="space-y-2">
                      <label htmlFor="password" className="text-sm font-medium">
                        {view === 'reset-password' ? 'New Password' : 'Password'}
                      </label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isSubmitting}
                      />
                      {errors.password && (
                        <p className="text-sm text-destructive">{errors.password}</p>
                      )}
                    </div>
                  )}

                  {view === 'reset-password' && (
                    <div className="space-y-2">
                      <label htmlFor="confirmPassword" className="text-sm font-medium">
                        Confirm New Password
                      </label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        disabled={isSubmitting}
                      />
                      {errors.confirmPassword && (
                        <p className="text-sm text-destructive">{errors.confirmPassword}</p>
                      )}
                    </div>
                  )}
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {view === 'login' && 'Logging in...'}
                        {view === 'signup' && 'Creating account...'}
                        {view === 'forgot-password' && 'Sending...'}
                        {view === 'reset-password' && 'Updating...'}
                      </>
                    ) : (
                      <>
                        {view === 'login' && 'Login'}
                        {view === 'signup' && 'Sign Up'}
                        {view === 'forgot-password' && 'Send Reset Link'}
                        {view === 'reset-password' && 'Update Password'}
                      </>
                    )}
                  </Button>
                </>
              )}
            </form>
            
            {view === 'login' && (
              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => {
                    setView('forgot-password');
                    setErrors({});
                  }}
                  className="text-sm text-muted-foreground hover:text-primary hover:underline"
                >
                  Forgot your password?
                </button>
              </div>
            )}
            
            {(view === 'login' || view === 'signup') && (
              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => {
                    setView(view === 'login' ? 'signup' : 'login');
                    setErrors({});
                  }}
                  className="text-sm text-primary hover:underline"
                >
                  {view === 'login' 
                    ? "Don't have an account? Sign up" 
                    : 'Already have an account? Login'}
                </button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Auth;
