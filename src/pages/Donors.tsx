
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search } from 'lucide-react';
import DonorForm from '@/components/blood-bank/DonorForm';

const MOCK_DONORS = [
  { id: 1, name: 'John Doe', bloodType: 'A+', phone: '555-123-4567', lastDonation: '2023-03-15', status: 'eligible' },
  { id: 2, name: 'Jane Smith', bloodType: 'O-', phone: '555-987-6543', lastDonation: '2023-02-10', status: 'eligible' },
  { id: 3, name: 'Robert Johnson', bloodType: 'B+', phone: '555-555-5555', lastDonation: '2023-01-05', status: 'ineligible' },
  { id: 4, name: 'Emily Davis', bloodType: 'AB+', phone: '555-111-2222', lastDonation: '2023-04-20', status: 'eligible' },
  { id: 5, name: 'Michael Wilson', bloodType: 'A-', phone: '555-333-4444', lastDonation: '2022-12-12', status: 'eligible' },
];

const Donors = () => {
  const [showForm, setShowForm] = useState(false);
  const [donors, setDonors] = useState(MOCK_DONORS);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddDonor = (donor: any) => {
    setDonors([...donors, { ...donor, id: donors.length + 1, status: 'eligible' }]);
    setShowForm(false);
  };

  const filteredDonors = donors.filter(donor => 
    donor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    donor.bloodType.toLowerCase().includes(searchQuery.toLowerCase()) ||
    donor.phone.includes(searchQuery)
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Donors</h1>
        <Button onClick={() => setShowForm(true)} className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          Add Donor
        </Button>
      </div>

      {showForm ? (
        <DonorForm onSubmit={handleAddDonor} onCancel={() => setShowForm(false)} />
      ) : (
        <>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search donors..." 
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
                    <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Blood Type</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Phone</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Last Donation</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  {filteredDonors.map((donor) => (
                    <tr key={donor.id} className="border-b transition-colors hover:bg-muted/50">
                      <td className="p-4 align-middle">{donor.name}</td>
                      <td className="p-4 align-middle">{donor.bloodType}</td>
                      <td className="p-4 align-middle">{donor.phone}</td>
                      <td className="p-4 align-middle">{donor.lastDonation}</td>
                      <td className="p-4 align-middle">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          donor.status === 'eligible' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {donor.status === 'eligible' ? 'Eligible' : 'Ineligible'}
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

export default Donors;
