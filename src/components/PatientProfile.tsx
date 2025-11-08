import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { User, Calendar, Phone, Mail, MapPin, Heart, Pill } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PatientProfile() {
  const patientInfo = {
    name: 'Margaret Thompson',
    age: 72,
    gender: 'Female',
    bloodType: 'O+',
    phone: '+1 (555) 123-4567',
    email: 'margaret.thompson@email.com',
    address: '1234 Oak Street, Springfield, IL 62701',
    emergencyContact: {
      name: 'Sarah Thompson (Daughter)',
      phone: '+1 (555) 987-6543'
    }
  };

  const medicalInfo = {
    conditions: ['Hypertension', 'Osteoporosis', 'Type 2 Diabetes'],
    medications: [
      { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily' },
      { name: 'Metformin', dosage: '500mg', frequency: 'Twice daily' },
      { name: 'Vitamin D', dosage: '1000 IU', frequency: 'Once daily' },
    ],
    allergies: ['Penicillin', 'Latex']
  };

  const deviceInfo = {
    model: 'Vesta Band Pro',
    serialNumber: 'VB-2024-7821',
    batteryLevel: 78,
    lastSync: '2 minutes ago',
    firmwareVersion: '2.4.1'
  };

  return (
    <div className="space-y-4">
      {/* Patient Info Card */}
      <Card>
        <CardHeader>
          <CardTitle>Patient Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="size-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="size-8 text-white" />
              </div>
              <div>
                <h3 className="text-gray-900">{patientInfo.name}</h3>
                <p className="text-sm text-gray-600">{patientInfo.age} years • {patientInfo.gender}</p>
                <p className="text-sm text-gray-600">Blood Type: {patientInfo.bloodType}</p>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="size-4 text-gray-400" />
                <span className="text-gray-600">{patientInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="size-4 text-gray-400" />
                <span className="text-gray-600">{patientInfo.email}</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="size-4 text-gray-400 mt-0.5" />
                <span className="text-gray-600">{patientInfo.address}</span>
              </div>
            </div>

            <div className="pt-3 border-t">
              <p className="text-sm text-gray-600 mb-2">Emergency Contact</p>
              <p className="text-gray-900">{patientInfo.emergencyContact.name}</p>
              <p className="text-sm text-gray-600">{patientInfo.emergencyContact.phone}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Medical Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="size-5 text-red-500" />
            Medical Conditions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {medicalInfo.conditions.map((condition, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-900">{condition}</span>
              <Badge variant="outline" className="text-xs">Active</Badge>
            </div>
          ))}

          <div className="pt-3 border-t">
            <p className="text-sm text-gray-600 mb-2">Allergies</p>
            <div className="flex flex-wrap gap-2">
              {medicalInfo.allergies.map((allergy, index) => (
                <Badge key={index} className="bg-red-100 text-red-700 border-red-200 text-xs">
                  {allergy}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Pill className="size-5 text-blue-500" />
            Current Medications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {medicalInfo.medications.map((med, index) => (
            <div key={index} className="p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-900">{med.name}</span>
                <Badge variant="outline" className="text-xs">{med.dosage}</Badge>
              </div>
              <p className="text-xs text-gray-600">{med.frequency}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Device Information */}
      <Card>
        <CardHeader>
          <CardTitle>Wristband Device</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Device Model</p>
              <p className="text-sm text-gray-900">{deviceInfo.model}</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Serial Number</p>
              <p className="text-sm text-gray-900">{deviceInfo.serialNumber}</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Battery Level</p>
              <div className="flex items-center gap-2">
                <p className="text-sm text-gray-900">{deviceInfo.batteryLevel}%</p>
                <Badge className="bg-green-600 text-xs">Good</Badge>
              </div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Last Sync</p>
              <p className="text-sm text-gray-900">{deviceInfo.lastSync}</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Firmware</p>
              <p className="text-sm text-gray-900">{deviceInfo.firmwareVersion}</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Status</p>
              <div className="flex items-center gap-2">
                <div className="size-2 bg-green-500 rounded-full" />
                <p className="text-sm text-gray-900">Connected</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <Button className="flex-1" size="sm">Update Settings</Button>
            <Button variant="outline" className="flex-1" size="sm">Sync Device</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}