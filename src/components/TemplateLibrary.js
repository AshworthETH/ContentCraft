import React, { useState } from 'react';
import TemplateCard from './TemplateCard';
import ContentEditor from './ContentEditor';
import { getTemplatesWithUsage } from '../data/templates';
import { useContent } from '../hooks/useContent';
import './TemplateLibrary.css';

const TemplateLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showEditor, setShowEditor] = useState(false);
  const { saveContent } = useContent();

  const categories = ['All', 'Blog', 'E-commerce', 'Social'];
  const templatesWithUsage = getTemplatesWithUsage();

  const filteredTemplates = selectedCategory === 'All'
    ? templatesWithUsage
    : templatesWithUsage.filter(template => template.category === selectedCategory);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setShowEditor(true);
  };

  const handleSaveContent = (contentData) => {
    saveContent(contentData);
    setShowEditor(false);
    setSelectedTemplate(null);
  };

  const handleCancelEdit = () => {
    setShowEditor(false);
    setSelectedTemplate(null);
  };

  if (showEditor) {
    return (
      <ContentEditor
        template={selectedTemplate}
        onSave={handleSaveContent}
        onCancel={handleCancelEdit}
      />
    );
  }

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