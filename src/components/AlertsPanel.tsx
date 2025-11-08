import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Bell, AlertCircle, Info, CheckCircle } from 'lucide-react';

export function AlertsPanel() {
  const alerts = [
    {
      id: 1,
      type: 'info',
      title: 'Hydration Reminder',
      message: "It's been 3 hours since last water intake",
      time: '10 mins ago',
      icon: Info,
      color: 'blue'
    },
    {
      id: 2,
      type: 'success',
      title: 'Medication Taken',
      message: 'Morning medication confirmed',
      time: '2 hours ago',
      icon: CheckCircle,
      color: 'green'
    },
    {
      id: 3,
      type: 'info',
      title: 'Activity Goal',
      message: '70% of daily step goal achieved',
      time: '4 hours ago',
      icon: Info,
      color: 'blue'
    },
  ];

  const getIconColor = (color: string) => {
    switch(color) {
      case 'blue': return 'text-blue-500';
      case 'green': return 'text-green-500';
      case 'red': return 'text-red-500';
      case 'orange': return 'text-orange-500';
      default: return 'text-gray-500';
    }
  };

  const getBgColor = (color: string) => {
    switch(color) {
      case 'blue': return 'bg-blue-50 border-blue-200';
      case 'green': return 'bg-green-50 border-green-200';
      case 'red': return 'bg-red-50 border-red-200';
      case 'orange': return 'bg-orange-50 border-orange-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="size-5 text-indigo-500" />
            Notifications & Alerts
          </div>
          <Badge variant="outline">3 New</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert) => {
          const Icon = alert.icon;
          return (
            <div 
              key={alert.id} 
              className={`p-3 rounded-lg border ${getBgColor(alert.color)}`}
            >
              <div className="flex items-start gap-3">
                <Icon className={`size-5 ${getIconColor(alert.color)} flex-shrink-0 mt-0.5`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-gray-900">{alert.title}</p>
                    <span className="text-xs text-gray-500">{alert.time}</span>
                  </div>
                  <p className="text-sm text-gray-600">{alert.message}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Button variant="outline" className="w-full mt-4">
          View All Notifications
        </Button>
      </CardContent>
    </Card>
  );
}
