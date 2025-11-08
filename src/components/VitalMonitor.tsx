import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { Heart, Activity, Thermometer, Droplets } from 'lucide-react';

export function VitalMonitor() {
  const [heartRateData, setHeartRateData] = useState<{ time: string; value: number }[]>([]);
  const [currentVitals, setCurrentVitals] = useState({
    heartRate: 72,
    temperature: 37.2,
    oxygenLevel: 98,
    bloodPressure: { systolic: 120, diastolic: 80 }
  });

  // Generate mock data on mount
  useEffect(() => {
    const generateData = () => {
      const data = [];
      const now = Date.now();
      for (let i = 30; i >= 0; i--) {
        const time = new Date(now - i * 60000);
        data.push({
          time: time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          heartRate: 68 + Math.random() * 15,
          temperature: 36.8 + Math.random() * 0.8,
          oxygen: 96 + Math.random() * 3,
        });
      }
      return data;
    };
    setHeartRateData(generateData());
  }, []);

  return (
    <div className="space-y-4">
      {/* Current Vitals Grid */}
      <div className="grid grid-cols-2 gap-3">
        <Card>
          <CardContent className="pt-4 pb-4">
            <div className="flex flex-col items-center text-center">
              <Heart className="size-6 text-red-500 mb-2" />
              <p className="text-xs text-gray-600 mb-1">Heart Rate</p>
              <p className="text-gray-900">{currentVitals.heartRate}</p>
              <p className="text-xs text-gray-500">BPM</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4 pb-4">
            <div className="flex flex-col items-center text-center">
              <Thermometer className="size-6 text-orange-500 mb-2" />
              <p className="text-xs text-gray-600 mb-1">Temperature</p>
              <p className="text-gray-900">{currentVitals.temperature}°C</p>
              <p className="text-xs text-gray-500">Normal</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4 pb-4">
            <div className="flex flex-col items-center text-center">
              <Droplets className="size-6 text-blue-500 mb-2" />
              <p className="text-xs text-gray-600 mb-1">Blood Oxygen</p>
              <p className="text-gray-900">{currentVitals.oxygenLevel}%</p>
              <p className="text-xs text-gray-500">Normal</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4 pb-4">
            <div className="flex flex-col items-center text-center">
              <Activity className="size-6 text-purple-500 mb-2" />
              <p className="text-xs text-gray-600 mb-1">BP</p>
              <p className="text-gray-900">{currentVitals.bloodPressure.systolic}/{currentVitals.bloodPressure.diastolic}</p>
              <p className="text-xs text-gray-500">mmHg</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Charts */}
      <Card>
        <CardHeader>
          <CardTitle>Vital Trends (30 min)</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="heartRate" className="space-y-4">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="heartRate" className="text-xs">Heart</TabsTrigger>
              <TabsTrigger value="temperature" className="text-xs">Temp</TabsTrigger>
              <TabsTrigger value="oxygen" className="text-xs">O2</TabsTrigger>
            </TabsList>

            <TabsContent value="heartRate">
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={heartRateData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="time" tick={{ fontSize: 9 }} />
                  <YAxis domain={[60, 90]} tick={{ fontSize: 9 }} />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="heartRate" 
                    stroke="#ef4444" 
                    fill="#fee2e2"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="temperature">
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={heartRateData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="time" tick={{ fontSize: 9 }} />
                  <YAxis domain={[36, 38]} tick={{ fontSize: 9 }} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="temperature" 
                    stroke="#f97316" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="oxygen">
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={heartRateData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="time" tick={{ fontSize: 9 }} />
                  <YAxis domain={[94, 100]} tick={{ fontSize: 9 }} />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="oxygen" 
                    stroke="#3b82f6" 
                    fill="#dbeafe"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}