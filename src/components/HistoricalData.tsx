import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Calendar, TrendingDown, TrendingUp } from 'lucide-react';

export function HistoricalData() {
  const weeklyData = [
    { day: 'Mon', heartRate: 72, steps: 4500, sleepHours: 7.5 },
    { day: 'Tue', heartRate: 75, steps: 5200, sleepHours: 8 },
    { day: 'Wed', heartRate: 70, steps: 6100, sleepHours: 7 },
    { day: 'Thu', heartRate: 73, steps: 4800, sleepHours: 7.5 },
    { day: 'Fri', heartRate: 71, steps: 5500, sleepHours: 8.5 },
    { day: 'Sat', heartRate: 69, steps: 7200, sleepHours: 9 },
    { day: 'Sun', heartRate: 68, steps: 3800, sleepHours: 8 },
  ];

  const monthlyData = [
    { week: 'Week 1', avgHeartRate: 73, totalSteps: 32000, incidents: 0 },
    { week: 'Week 2', avgHeartRate: 71, totalSteps: 35500, incidents: 0 },
    { week: 'Week 3', avgHeartRate: 72, totalSteps: 38200, incidents: 0 },
    { week: 'Week 4', avgHeartRate: 70, totalSteps: 36800, incidents: 0 },
  ];

  return (
    <div className="space-y-4">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-3">
        <Card>
          <CardContent className="pt-4 pb-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Avg Heart Rate (7 days)</p>
              <TrendingDown className="size-4 text-green-600" />
            </div>
            <p className="text-gray-900">71 BPM</p>
            <p className="text-xs text-green-600 mt-1">↓ 2 BPM from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4 pb-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Total Steps (7 days)</p>
              <TrendingUp className="size-4 text-green-600" />
            </div>
            <p className="text-gray-900">37,100</p>
            <p className="text-xs text-green-600 mt-1">↑ 12% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4 pb-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Avg Sleep (7 days)</p>
              <Calendar className="size-4 text-blue-500" />
            </div>
            <p className="text-gray-900">7.9 hours</p>
            <p className="text-xs text-gray-600 mt-1">Optimal range</p>
          </CardContent>
        </Card>
      </div>

      {/* Historical Charts */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="vitals" className="space-y-4">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="vitals" className="text-xs">Heart</TabsTrigger>
              <TabsTrigger value="activity" className="text-xs">Activity</TabsTrigger>
              <TabsTrigger value="sleep" className="text-xs">Sleep</TabsTrigger>
            </TabsList>

            <TabsContent value="vitals">
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="day" tick={{ fontSize: 10 }} />
                  <YAxis domain={[65, 80]} tick={{ fontSize: 10 }} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="heartRate" 
                    stroke="#ef4444" 
                    strokeWidth={2}
                    name="Heart Rate (BPM)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="activity">
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="day" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="steps" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    name="Steps"
                  />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="sleep">
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="day" tick={{ fontSize: 10 }} />
                  <YAxis domain={[6, 10]} tick={{ fontSize: 10 }} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="sleepHours" 
                    stroke="#8b5cf6" 
                    strokeWidth={2}
                    name="Sleep (hours)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Monthly Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {monthlyData.map((week, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-900">{week.week}</p>
                  <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50 text-xs">
                    Healthy
                  </Badge>
                </div>
                <div className="space-y-1 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>Avg Heart Rate:</span>
                    <span>{week.avgHeartRate} BPM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Steps:</span>
                    <span>{week.totalSteps.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Incidents:</span>
                    <span>{week.incidents}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}