import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Trophy, Target, BookOpen, Loader2 } from 'lucide-react';

interface QuizScore {
  id: string;
  subject: string;
  unit: string;
  score: number;
  total_questions: number;
  quiz_type: string;
  created_at: string;
}

interface SubjectProgress {
  subject: string;
  quizzes_completed: number;
  topics_viewed: number;
  last_accessed: string;
}

const Progress = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [quizScores, setQuizScores] = useState<QuizScore[]>([]);
  const [subjectProgress, setSubjectProgress] = useState<SubjectProgress[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      fetchProgress();
    }
  }, [user]);

  const fetchProgress = async () => {
    setLoading(true);
    
    const [scoresResult, progressResult] = await Promise.all([
      supabase
        .from('quiz_scores')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20),
      supabase
        .from('subject_progress')
        .select('*')
        .order('last_accessed', { ascending: false })
    ]);

    if (scoresResult.data) {
      setQuizScores(scoresResult.data);
    }
    if (progressResult.data) {
      setSubjectProgress(progressResult.data);
    }
    
    setLoading(false);
  };

  const calculateOverallStats = () => {
    const totalQuizzes = quizScores.length;
    const totalScore = quizScores.reduce((sum, q) => sum + q.score, 0);
    const totalQuestions = quizScores.reduce((sum, q) => sum + q.total_questions, 0);
    const avgPercentage = totalQuestions > 0 ? Math.round((totalScore / totalQuestions) * 100) : 0;
    
    return { totalQuizzes, avgPercentage };
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const stats = calculateOverallStats();

  return (
    <>
      <Helmet>
        <title>My Progress | Study Portal</title>
        <meta name="description" content="Track your study progress and quiz scores." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <h1 className="text-3xl font-bold mb-8">My Progress</h1>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  Quizzes Completed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{stats.totalQuizzes}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-500" />
                  Average Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{stats.avgPercentage}%</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-500" />
                  Subjects Studied
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{subjectProgress.length}</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Recent Quiz Scores */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Recent Quiz Scores</CardTitle>
              <CardDescription>Your last 20 quiz attempts</CardDescription>
            </CardHeader>
            <CardContent>
              {quizScores.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  No quiz scores yet. Take a quiz to see your progress!
                </p>
              ) : (
                <div className="space-y-3">
                  {quizScores.map((score) => (
                    <div 
                      key={score.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                    >
                      <div>
                        <p className="font-medium capitalize">{score.subject}</p>
                        <p className="text-sm text-muted-foreground">
                          {score.unit} • {score.quiz_type === 'ai' ? 'AI Quiz' : 'Manual Quiz'}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">
                          {score.score}/{score.total_questions}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {Math.round((score.score / score.total_questions) * 100)}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Progress;
