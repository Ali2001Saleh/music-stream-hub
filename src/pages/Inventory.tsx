
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, ChevronUp, ChevronDown } from 'lucide-react';

const BLOOD_TYPES = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const Inventory = () => {
  const getRandomAmount = () => Math.floor(Math.random() * 50);
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Blood Inventory</h1>
        <Button variant="outline" className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          Record Donation
        </Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Current Inventory</h2>
          <div className="space-y-4">
            {BLOOD_TYPES.map((type) => {
              const amount = getRandomAmount();
              const isLow = amount < 10;
              return (
                <div key={type} className="flex items-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-full mr-4">
                    <span className="text-xl font-bold text-red-700">{type}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{amount} units</span>
                      {isLow && (
                        <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">
                          Low Stock
                        </span>
                      )}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div 
                        className={`h-2 rounded-full ${isLow ? 'bg-red-500' : 'bg-green-500'}`} 
                        style={{ width: `${Math.min(amount * 2, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b">
              <div>
                <p className="font-medium">Donation: A+</p>
                <p className="text-sm text-gray-500">2 units • John Doe • {new Date().toLocaleDateString()}</p>
              </div>
              <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full flex items-center">
                <ChevronUp className="h-3 w-3 mr-1" />
                Added
              </span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <div>
                <p className="font-medium">Request: O-</p>
                <p className="text-sm text-gray-500">1 unit • General Hospital • {new Date().toLocaleDateString()}</p>
              </div>
              <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full flex items-center">
                <ChevronDown className="h-3 w-3 mr-1" />
                Used
              </span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <div>
                <p className="font-medium">Donation: B+</p>
                <p className="text-sm text-gray-500">3 units • Jane Smith • {new Date().toLocaleDateString()}</p>
              </div>
              <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full flex items-center">
                <ChevronUp className="h-3 w-3 mr-1" />
                Added
              </span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <div>
                <p className="font-medium">Request: AB+</p>
                <p className="text-sm text-gray-500">2 units • Metro Hospital • {new Date().toLocaleDateString()}</p>
              </div>
              <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full flex items-center">
                <ChevronDown className="h-3 w-3 mr-1" />
                Used
              </span>
            </div>
          </div>
        </Card>
      </div>
      
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Compatibility Chart</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2 bg-gray-50">Blood Type</th>
                <th className="border p-2 bg-gray-50">Can Donate To</th>
                <th className="border p-2 bg-gray-50">Can Receive From</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2 font-medium">A+</td>
                <td className="border p-2">A+, AB+</td>
                <td className="border p-2">A+, A-, O+, O-</td>
              </tr>
              <tr>
                <td className="border p-2 font-medium">A-</td>
                <td className="border p-2">A+, A-, AB+, AB-</td>
                <td className="border p-2">A-, O-</td>
              </tr>
              <tr>
                <td className="border p-2 font-medium">B+</td>
                <td className="border p-2">B+, AB+</td>
                <td className="border p-2">B+, B-, O+, O-</td>
              </tr>
              <tr>
                <td className="border p-2 font-medium">B-</td>
                <td className="border p-2">B+, B-, AB+, AB-</td>
                <td className="border p-2">B-, O-</td>
              </tr>
              <tr>
                <td className="border p-2 font-medium">AB+</td>
                <td className="border p-2">AB+ only</td>
                <td className="border p-2">All blood types</td>
              </tr>
              <tr>
                <td className="border p-2 font-medium">AB-</td>
                <td className="border p-2">AB+, AB-</td>
                <td className="border p-2">A-, B-, AB-, O-</td>
              </tr>
              <tr>
                <td className="border p-2 font-medium">O+</td>
                <td className="border p-2">O+, A+, B+, AB+</td>
                <td className="border p-2">O+, O-</td>
              </tr>
              <tr>
                <td className="border p-2 font-medium">O-</td>
                <td className="border p-2">All blood types</td>
                <td className="border p-2">O- only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Inventory;
