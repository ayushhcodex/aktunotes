import { supabase } from '@/integrations/supabase/client';

export const saveQuizScore = async (
  subject: string,
  unit: string,
  score: number,
  totalQuestions: number,
  quizType: 'manual' | 'ai' = 'manual'
) => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    // User not logged in, don't save
    return { saved: false, reason: 'not_logged_in' };
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
    return { saved: false, reason: 'error' };
  }
  
  return { saved: true };
};

export const updateSubjectProgress = async (subject: string) => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) return;
  
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
};
