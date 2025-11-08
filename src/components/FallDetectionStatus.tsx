import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { AlertTriangle, ShieldCheck, Bell } from 'lucide-react';

export function FallDetectionStatus() {
  const recentEvents = [
    { time: '2 hours ago', type: 'normal', message: 'System check passed' },
    { time: '5 hours ago', type: 'normal', message: 'Movement pattern normal' },
    { time: 'Yesterday 8:30 PM', type: 'normal', message: 'Daily summary sent to caregivers' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShieldCheck className="size-5 text-green-500" />
          Fall Detection System
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-green-100 rounded-full flex items-center justify-center">
              <ShieldCheck className="size-5 text-green-600" />
            </div>
            <div>
              <p className="text-gray-900">System Active</p>
              <p className="text-sm text-gray-600">Monitoring 24/7</p>
            </div>
          </div>
          <Badge className="bg-green-600">Online</Badge>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Sensitivity Level</span>
            <Badge variant="outline">Medium</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Auto-Alert</span>
            <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50">
              Enabled
            </Badge>
          </div>
        </div>

        <div className="pt-4 border-t">
          <p className="text-sm text-gray-600 mb-3">Recent Activity</p>
          <div className="space-y-2">
            {recentEvents.map((event, index) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                <div className="size-1.5 bg-green-500 rounded-full mt-1.5" />
                <div className="flex-1">
                  <p className="text-gray-600">{event.time}</p>
                  <p className="text-gray-900">{event.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
