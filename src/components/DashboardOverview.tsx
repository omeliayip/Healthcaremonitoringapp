import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Alert, AlertDescription } from './ui/alert';
import { Heart, Activity, AlertTriangle, TrendingUp } from 'lucide-react';
import { AlertsPanel } from './AlertsPanel';
import { LiveHeartRate } from './LiveHeartRate';
import { MovementTracker } from './MovementTracker';
import { FallDetectionStatus } from './FallDetectionStatus';

export function DashboardOverview() {
  const [heartRate, setHeartRate] = useState(72);
  const [movement, setMovement] = useState(3500);
  const [fallsToday, setFallsToday] = useState(0);

  // Simulate real-time heart rate
  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate(prev => {
        const change = (Math.random() - 0.5) * 5;
        return Math.max(60, Math.min(100, prev + change));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Simulate movement tracking
  useEffect(() => {
    const interval = setInterval(() => {
      setMovement(prev => prev + Math.floor(Math.random() * 50));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 gap-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-gray-600">Heart Rate</CardTitle>
            <Heart className="size-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-gray-900">{Math.round(heartRate)}</span>
              <span className="text-sm text-gray-600">BPM</span>
            </div>
            <Badge variant="outline" className="mt-2 border-green-200 text-green-700 bg-green-50">
              Normal
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-gray-600">Steps Today</CardTitle>
            <Activity className="size-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-gray-900">{movement.toLocaleString()}</span>
              <span className="text-sm text-gray-600">steps</span>
            </div>
            <div className="flex items-center gap-1 mt-2 text-sm text-gray-600">
              <TrendingUp className="size-3 text-green-600" />
              <span>Goal: 5,000</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-gray-600">Falls Today</CardTitle>
            <AlertTriangle className="size-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-gray-900">{fallsToday}</span>
              <span className="text-sm text-gray-600">incidents</span>
            </div>
            <Badge variant="outline" className="mt-2 border-green-200 text-green-700 bg-green-50">
              No falls detected
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Main Monitoring Grid */}
      <div className="space-y-4">
        <LiveHeartRate currentHeartRate={heartRate} />
        <MovementTracker />
      </div>

      <div className="space-y-4">
        <FallDetectionStatus />
        <AlertsPanel />
      </div>
    </div>
  );
}