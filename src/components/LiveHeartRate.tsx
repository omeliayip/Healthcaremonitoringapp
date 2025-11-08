import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Heart } from 'lucide-react';

interface LiveHeartRateProps {
  currentHeartRate: number;
}

export function LiveHeartRate({ currentHeartRate }: LiveHeartRateProps) {
  const [data, setData] = useState<{ time: string; bpm: number }[]>([]);

  useEffect(() => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    setData(prev => {
      const newData = [...prev, { time: timeStr, bpm: Math.round(currentHeartRate) }];
      return newData.slice(-20); // Keep last 20 data points
    });
  }, [currentHeartRate]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="size-5 text-red-500" />
          Live Heart Rate
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="time" 
              tick={{ fontSize: 10 }}
              interval="preserveStartEnd"
            />
            <YAxis 
              domain={[50, 110]} 
              tick={{ fontSize: 10 }}
            />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="bpm" 
              stroke="#ef4444" 
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}