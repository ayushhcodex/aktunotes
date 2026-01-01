import { supabase } from '@/integrations/supabase/client';

export type SaveResult = {
  saved: boolean;
  reason?: 'not_logged_in' | 'not_verified' | 'error';
  message?: string;
};

export const saveQuizScore = async (
  subject: string,
  unit: string,
  score: number,
  totalQuestions: number,
  quizType: 'manual' | 'ai' = 'manual'
): Promise<SaveResult> => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return { 
      saved: false, 
      reason: 'not_logged_in',
      message: 'Login to save your scores!'
    };
  }
  
  // Check if email is verified
  if (!user.email_confirmed_at) {
    return { 
      saved: false, 
      reason: 'not_verified',
      message: 'Please verify your email to save quiz scores.'
    };
  }
  
  const { error } = await supabase
    .from('quiz_scores')
    .insert({
      user_id: user.id,
      subject,
      unit,
      score,
      total_questions: totalQuestions,
      quiz_type: quizType
    });
  
  if (error) {
    console.error('Failed to save quiz score:', error);
    return { saved: false, reason: 'error', message: 'Failed to save score.' };
  }
  
  return { saved: true };
};

export const updateSubjectProgress = async (subject: string): Promise<boolean> => {
  const { data: { user } } = await supabase.auth.getUser();
  
  // Only update progress for verified users
  if (!user || !user.email_confirmed_at) return false;
  
  // Check if progress exists
  const { data: existing } = await supabase
    .from('subject_progress')
    .select('*')
    .eq('user_id', user.id)
    .eq('subject', subject)
    .single();
  
  if (existing) {
    // Update existing progress
    await supabase
      .from('subject_progress')
      .update({
        quizzes_completed: existing.quizzes_completed + 1,
        last_accessed: new Date().toISOString()
      })
      .eq('id', existing.id);
  } else {
    // Create new progress entry
    await supabase
      .from('subject_progress')
      .insert({
        user_id: user.id,
        subject,
        quizzes_completed: 1,
        topics_viewed: 0
      });
  }
  
  return true;
};

export const canSaveProgress = async (): Promise<{ canSave: boolean; reason?: string }> => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return { canSave: false, reason: 'not_logged_in' };
  }
  
  if (!user.email_confirmed_at) {
    return { canSave: false, reason: 'not_verified' };
  }
  
  return { canSave: true };
};
