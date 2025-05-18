import React, { useState } from 'react';
import TemplateCard from './TemplateCard';
import { templates } from '../data/templates';
import './TemplateLibrary.css';

const TemplateLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Blog', 'E-commerce', 'Social'];

  const filteredTemplates = selectedCategory === 'All'
    ? templates
    : templates.filter(template => template.category === selectedCategory);

  const handleTemplateSelect = (template) => {
    console.log('Selected template:', template.name);
  };

  return (
    <div className="template-library">
      <div className="library-header">
        <h2>Content Templates</h2>
        <p>Choose from our collection of proven templates</p>
      </div>

      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="templates-grid">
        {filteredTemplates.map(template => (
          <TemplateCard
            key={template.id}
            template={template}
            onSelect={handleTemplateSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default TemplateLibrary;