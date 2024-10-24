import React, { useState } from 'react';
import LeadModal from './LeadModal';
import { CSVLink } from 'react-csv';

// Function to generate random data
const generateRandomLeads = (count) => {
  const leadNames = ["John Doe", "Jane Smith", "Bob Johnson", "Alice White", "Tom Hanks"];
  const companies = ["Company A", "Company B", "Company C", "Company D", "Company E"];
  const domains = ["@example.com", "@test.com", "@demo.com"];
  
  const leads = [];
  
  for (let i = 1; i <= count; i++) {
    const randomName = leadNames[Math.floor(Math.random() * leadNames.length)];
    const randomCompany = companies[Math.floor(Math.random() * companies.length)];
    const randomEmail = `${randomName.split(' ')[0].toLowerCase()}${i}${domains[Math.floor(Math.random() * domains.length)]}`;
    
    leads.push({ id: i, name: randomName, company: randomCompany, contact: randomEmail });
  }
  
  return leads;
};

const Leads = () => {
  const [selectedLead, setSelectedLead] = useState(null);
  const leads = generateRandomLeads(50); // Generate 200 leads

  // CSV Data
  const csvData = [
    ['ID', 'Name', 'Company', 'Contact'],
    ...leads.map(lead => [lead.id, lead.name, lead.company, lead.contact]),
  ];

  return (
    <div className="leads-section">
      <h2>Leads</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Company</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {leads.map(lead => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>{lead.name}</td>
              <td>{lead.company}</td>
              <td><button onClick={() => setSelectedLead(lead)}>View</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedLead && <LeadModal lead={selectedLead} onClose={() => setSelectedLead(null)} />}

      {/* CSV Download */}
      <CSVLink
        data={csvData}
        filename={"leads-data.csv"}
        className="btn btn-download"
        target="_blank"
      >
        Download CSV
      </CSVLink>
    </div>
  );
};

export default Leads;
