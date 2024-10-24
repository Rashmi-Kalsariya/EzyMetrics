import React from 'react';

const LeadModal = ({ lead, onClose }) => {
  if (!lead) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{lead.name}</h2>
        <p><strong>Company:</strong> {lead.company}</p>
        <p><strong>Contact:</strong> {lead.contact}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LeadModal;
