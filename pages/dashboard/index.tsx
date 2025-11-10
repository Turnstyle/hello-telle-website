/**
 * Dashboard overview page
 */
import { TrendingUp, Calendar, Heart, MessageCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Navigation } from '@/components/Navigation';

function DashboardOverview() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen gradient-bg py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
            <p className="text-slate-600">Here\'s how your loved ones are doing</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <MessageCircle className="w-8 h-8 text-cornflower-600" />
                  <Badge variant="success">+2 this week</Badge>
                </div>
                <p className="text-2xl font-bold mb-1">12</p>
                <p className="text-sm text-slate-600">Total Conversations</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <Heart className="w-8 h-8 text-butter-600" fill="currentColor" />
                  <TrendingUp className="w-5 h-5 text-cornflower-600" />
                </div>
                <p className="text-2xl font-bold mb-1">82%</p>
                <p className="text-sm text-slate-600">Average Mood Score</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <Calendar className="w-8 h-8 text-cornflower-600" />
                  <span className="text-xs text-slate-500">This week</span>
                </div>
                <p className="text-2xl font-bold mb-1">2</p>
                <p className="text-sm text-slate-600">Upcoming Calls</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-2">
                  <Badge variant="success">Standard Plan</Badge>
                </div>
                <p className="text-2xl font-bold mb-1">2 of 4</p>
                <p className="text-sm text-slate-600">Summaries Used This Month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-4 pb-4 border-b border-slate-100 last:border-0">
                      <div className="w-12 h-12 bg-cornflower-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-cornflower-700" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-slate-900 mb-1">Call with Grandma</p>
                        <p className="text-sm text-slate-600 mb-1">
                          Discussed gardening and upcoming family visit. Mood: Happy
                        </p>
                        <p className="text-xs text-slate-400">2 days ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Calls</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-cornflower-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-slate-900">Tomorrow at 10:00 AM</p>
                      <p className="text-sm text-slate-600">Weekly check-in with Grandma</p>
                    </div>
                    <Calendar className="w-5 h-5 text-cornflower-600" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-cornflower-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-slate-900">Friday at 2:00 PM</p>
                      <p className="text-sm text-slate-600">Bi-weekly conversation</p>
                    </div>
                    <Calendar className="w-5 h-5 text-cornflower-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardOverview />
    </ProtectedRoute>
  );
}

