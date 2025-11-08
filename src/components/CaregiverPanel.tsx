import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Users, Mail, Phone, Bell, Plus, Shield } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';

export function CaregiverPanel() {
  const caregivers = [
    {
      id: 1,
      name: 'Sarah Thompson',
      relationship: 'Daughter',
      phone: '+1 (555) 987-6543',
      email: 'sarah.thompson@email.com',
      role: 'Primary Caregiver',
      notifications: 'All alerts',
      status: 'active'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      relationship: 'Primary Care Physician',
      phone: '+1 (555) 234-5678',
      email: 'dr.chen@healthcare.com',
      role: 'Medical Professional',
      notifications: 'Critical only',
      status: 'active'
    },
    {
      id: 3,
      name: 'Robert Thompson',
      relationship: 'Son',
      phone: '+1 (555) 345-6789',
      email: 'robert.thompson@email.com',
      role: 'Secondary Caregiver',
      notifications: 'Critical only',
      status: 'active'
    }
  ];

  const notificationSettings = [
    { type: 'Fall Detection', enabled: true, recipients: 3 },
    { type: 'Heart Rate Abnormality', enabled: true, recipients: 2 },
    { type: 'Low Battery', enabled: true, recipients: 1 },
    { type: 'Medication Reminders', enabled: true, recipients: 2 },
    { type: 'Daily Summary', enabled: true, recipients: 3 },
  ];

  return (
    <div className="space-y-4">
      <Alert className="border-blue-200 bg-blue-50">
        <Shield className="size-4 text-blue-600" />
        <AlertDescription className="text-sm text-blue-900">
          Caregivers can monitor vitals and receive real-time alerts. All data is encrypted.
        </AlertDescription>
      </Alert>

      {/* Caregivers List */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Users className="size-5 text-indigo-500" />
              Caregivers
            </CardTitle>
            <Button size="sm">
              <Plus className="size-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {caregivers.map((caregiver) => (
            <div key={caregiver.id} className="p-3 border border-gray-200 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm text-gray-900">{caregiver.name}</h3>
                    <Badge className="bg-green-600 text-xs">Active</Badge>
                  </div>
                  <p className="text-xs text-gray-600">{caregiver.relationship}</p>
                  <Badge variant="outline" className="mt-1 text-xs">{caregiver.role}</Badge>
                </div>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex items-center gap-2">
                  <Phone className="size-3 text-gray-400" />
                  <span className="text-gray-600">{caregiver.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="size-3 text-gray-400" />
                  <span className="text-gray-600">{caregiver.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bell className="size-3 text-gray-400" />
                  <span className="text-gray-600">Receives: {caregiver.notifications}</span>
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <Button variant="outline" size="sm" className="flex-1 text-xs">Edit</Button>
                <Button variant="outline" size="sm" className="flex-1 text-xs">Test Alert</Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="size-5 text-indigo-500" />
            Alert Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {notificationSettings.map((setting, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 flex-1">
                <div className={`size-2 rounded-full ${setting.enabled ? 'bg-green-500' : 'bg-gray-300'}`} />
                <span className="text-sm text-gray-900">{setting.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-600">{setting.recipients}</span>
                <Button variant="outline" size="sm" className="text-xs">Edit</Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-start justify-between mb-1">
              <p className="text-sm text-gray-900">Daily Summary Sent</p>
              <span className="text-xs text-gray-500">2h ago</span>
            </div>
            <p className="text-xs text-gray-600">Sent to: Sarah, Robert, Dr. Chen</p>
          </div>

          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start justify-between mb-1">
              <p className="text-sm text-gray-900">Medication Reminder</p>
              <span className="text-xs text-gray-500">5h ago</span>
            </div>
            <p className="text-xs text-gray-600">Sent to: Sarah, Dr. Chen</p>
          </div>

          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start justify-between mb-1">
              <p className="text-sm text-gray-900">Low Battery Warning</p>
              <span className="text-xs text-gray-500">Yesterday</span>
            </div>
            <p className="text-xs text-gray-600">Sent to: Sarah</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}