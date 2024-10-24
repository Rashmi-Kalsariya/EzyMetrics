import React from 'react';
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';

const Reports = () => {
  const leadData = [
    { id: 1, name: "John Doe", company: "Company A" },
    { id: 2, name: "Jane Smith", company: "Company B" },
  ];

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Leads Report", 20, 10);
    doc.save("leads_report.pdf");
  };

  return (
    <div className="reports-section">
      <h2>Reports</h2>
      <button onClick={generatePDF}>Download PDF</button>
      <CSVLink data={leadData} filename={"leads.csv"}>Download CSV</CSVLink>
    </div>
  );
};

export default Reports;
