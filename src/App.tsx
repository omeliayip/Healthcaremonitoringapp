import { useState, useEffect } from 'react';
import { DashboardOverview } from './components/DashboardOverview';
import { VitalMonitor } from './components/VitalMonitor';
import { AlertsPanel } from './components/AlertsPanel';
import { HistoricalData } from './components/HistoricalData';
import { PatientProfile } from './components/PatientProfile';
import { CaregiverPanel } from './components/CaregiverPanel';
import { Activity, Heart, BarChart3, User, Users } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const getContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'vitals':
        return <VitalMonitor />;
      case 'history':
        return <HistoricalData />;
      case 'profile':
        return <PatientProfile />;
      case 'caregivers':
        return <CaregiverPanel />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pb-20">
      {/* Mobile Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Activity className="size-5 text-white" />
              </div>
              <div>
                <h1 className="text-indigo-900">Vesta Health</h1>
                <div className="flex items-center gap-1.5">
                  <div className="size-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-gray-600">Connected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-4">
        {getContent()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-20">
        <div className="grid grid-cols-5 gap-1 px-2 py-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-colors ${
              activeTab === 'dashboard'
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600'
            }`}
          >
            <Activity className="size-5 mb-1" />
            <span className="text-xs">Home</span>
          </button>

          <button
            onClick={() => setActiveTab('vitals')}
            className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-colors ${
              activeTab === 'vitals'
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600'
            }`}
          >
            <Heart className="size-5 mb-1" />
            <span className="text-xs">Vitals</span>
          </button>

          <button
            onClick={() => setActiveTab('history')}
            className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-colors ${
              activeTab === 'history'
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600'
            }`}
          >
            <BarChart3 className="size-5 mb-1" />
            <span className="text-xs">History</span>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-colors ${
              activeTab === 'profile'
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600'
            }`}
          >
            <User className="size-5 mb-1" />
            <span className="text-xs">Profile</span>
          </button>

          <button
            onClick={() => setActiveTab('caregivers')}
            className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-colors ${
              activeTab === 'caregivers'
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600'
            }`}
          >
            <Users className="size-5 mb-1" />
            <span className="text-xs">Care</span>
          </button>
        </div>
      </nav>
    </div>
  );
}