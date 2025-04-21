
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search } from 'lucide-react';
import RequestForm from '@/components/blood-bank/RequestForm';

const MOCK_REQUESTS = [
  { id: 1, patientName: 'Sarah Johnson', bloodType: 'AB-', quantity: 2, hospital: 'General Hospital', urgency: 'high', date: '2023-04-22', status: 'pending' },
  { id: 2, patientName: 'James Wilson', bloodType: 'O+', quantity: 1, hospital: 'Community Medical', urgency: 'medium', date: '2023-04-21', status: 'fulfilled' },
  { id: 3, patientName: 'Maria Garcia', bloodType: 'A+', quantity: 3, hospital: 'St. Mary\'s', urgency: 'high', date: '2023-04-20', status: 'pending' },
  { id: 4, patientName: 'Robert Smith', bloodType: 'B+', quantity: 2, hospital: 'Metro Hospital', urgency: 'low', date: '2023-04-19', status: 'fulfilled' },
  { id: 5, patientName: 'Lisa Brown', bloodType: 'O-', quantity: 1, hospital: 'General Hospital', urgency: 'high', date: '2023-04-18', status: 'pending' },
];

const BloodRequests = () => {
  const [showForm, setShowForm] = useState(false);
  const [requests, setRequests] = useState(MOCK_REQUESTS);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddRequest = (request: any) => {
    setRequests([...requests, { ...request, id: requests.length + 1, status: 'pending', date: new Date().toISOString().slice(0, 10) }]);
    setShowForm(false);
  };

  const filteredRequests = requests.filter(request => 
    request.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    request.bloodType.toLowerCase().includes(searchQuery.toLowerCase()) ||
    request.hospital.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Blood Requests</h1>
        <Button onClick={() => setShowForm(true)} className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          New Request
        </Button>
      </div>

      {showForm ? (
        <RequestForm onSubmit={handleAddRequest} onCancel={() => setShowForm(false)} />
      ) : (
        <>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search requests..." 
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="rounded-md border">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium">Patient</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Blood Type</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Quantity</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Hospital</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Urgency</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Date</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  {filteredRequests.map((request) => (
                    <tr key={request.id} className="border-b transition-colors hover:bg-muted/50">
                      <td className="p-4 align-middle">{request.patientName}</td>
                      <td className="p-4 align-middle">{request.bloodType}</td>
                      <td className="p-4 align-middle">{request.quantity} units</td>
                      <td className="p-4 align-middle">{request.hospital}</td>
                      <td className="p-4 align-middle">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          request.urgency === 'high' ? 'bg-red-100 text-red-800' : 
                          request.urgency === 'medium' ? 'bg-amber-100 text-amber-800' : 
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {request.urgency === 'high' ? 'High' : 
                           request.urgency === 'medium' ? 'Medium' : 'Low'}
                        </span>
                      </td>
                      <td className="p-4 align-middle">{request.date}</td>
                      <td className="p-4 align-middle">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          request.status === 'fulfilled' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {request.status === 'fulfilled' ? 'Fulfilled' : 'Pending'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BloodRequests;
