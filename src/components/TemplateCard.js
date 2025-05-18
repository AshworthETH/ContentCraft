import React from 'react';
import './TemplateCard.css';

const TemplateCard = ({ template, onSelect }) => {
  return (
    <div className="template-card" onClick={() => onSelect(template)}>
      <div className="template-header">
        <h3>{template.name}</h3>
        <span className="template-category">{template.category}</span>
      </div>
      <p className="template-description">{template.description}</p>
      <div className="template-footer">
        <span className="template-usage">Used {template.usageCount} times</span>
      </div>
    </div>
  );
};

export default TemplateCard;