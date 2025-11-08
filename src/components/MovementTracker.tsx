import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity } from 'lucide-react';
import { Progress } from './ui/progress';

export function MovementTracker() {
  const [hourlyData, setHourlyData] = useState([
    { hour: '8 AM', steps: 450 },
    { hour: '9 AM', steps: 680 },
    { hour: '10 AM', steps: 520 },
    { hour: '11 AM', steps: 390 },
    { hour: '12 PM', steps: 710 },
    { hour: '1 PM', steps: 580 },
  ]);

  const totalSteps = hourlyData.reduce((sum, data) => sum + data.steps, 0);
  const goalSteps = 5000;
  const progressPercent = (totalSteps / goalSteps) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="size-5 text-blue-500" />
          Movement Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Daily Goal</span>
            <span className="text-sm text-gray-900">{totalSteps.toLocaleString()} / {goalSteps.toLocaleString()}</span>
          </div>
          <Progress value={progressPercent} className="h-2" />
        </div>
        
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={hourlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="hour" tick={{ fontSize: 10 }} />
            <YAxis tick={{ fontSize: 10 }} />
            <Tooltip />
            <Bar dataKey="steps" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}