import React, { useState } from 'react';
import './ContentEditor.css';

const ContentEditor = ({ template, onSave, onCancel }) => {
  const [content, setContent] = useState(template ? template.content : '');
  const [title, setTitle] = useState('');

  const handleSave = () => {
    const contentData = {
      title,
      content,
      templateId: template?.id,
      createdAt: new Date().toISOString()
    };
    onSave(contentData);
  };

  return (
    <div className="content-editor">
      <div className="editor-header">
        <input
          type="text"
          placeholder="Enter content title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="title-input"
        />
        <div className="editor-actions">
          <button onClick={onCancel} className="btn-secondary">Cancel</button>
          <button onClick={handleSave} className="btn-primary">Save</button>
        </div>
      </div>

      <div className="editor-body">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start writing your content..."
          className="content-textarea"
        />
      </div>

      <div className="editor-footer">
        <div className="word-count">
          {content.split(' ').filter(word => word.length > 0).length} words
        </div>
      </div>
    </div>
  );
};

export default ContentEditor;