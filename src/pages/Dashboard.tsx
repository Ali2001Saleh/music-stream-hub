
import React from 'react';
import { Card } from '@/components/ui/card';
import { Droplet, Users, Calendar } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { 
      title: 'Blood Units Available', 
      value: 153, 
      icon: <Droplet className="h-8 w-8 text-red-500" />,
      change: '+12% from last month',
      color: 'bg-red-50'
    },
    { 
      title: 'Registered Donors', 
      value: 2845, 
      icon: <Users className="h-8 w-8 text-blue-500" />,
      change: '+5% from last month',
      color: 'bg-blue-50'
    },
    { 
      title: 'Pending Requests', 
      value: 24, 
      icon: <Calendar className="h-8 w-8 text-amber-500" />,
      change: '-3% from last month',
      color: 'bg-amber-50'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat, index) => (
          <Card key={index} className={`${stat.color} border-none shadow-sm`}>
            <div className="p-6 flex flex-col">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <h3 className="text-3xl font-bold mt-1">{stat.value}</h3>
                </div>
                <div className="p-2 rounded-full bg-white shadow-sm">
                  {stat.icon}
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">{stat.change}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-medium mb-4">Recent Donations</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-gray-500">A+ • 1 unit • {new Date().toLocaleDateString()}</p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Completed</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-medium mb-4">Blood Inventory</h3>
            <div className="grid grid-cols-4 gap-4">
              {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((type) => (
                <div key={type} className="text-center p-3 rounded-lg bg-gray-50">
                  <p className="text-lg font-bold">{type}</p>
                  <p className="text-sm">{Math.floor(Math.random() * 50)} units</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
