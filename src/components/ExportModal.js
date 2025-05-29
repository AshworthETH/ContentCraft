import React, { useState } from 'react';
import { exportToTxt, exportToMarkdown, exportToHtml, copyToClipboard } from '../utils/exportUtils';
import './ExportModal.css';

const ExportModal = ({ content, onClose }) => {
  const [notification, setNotification] = useState('');

  const handleExport = async (format) => {
    try {
      switch (format) {
        case 'txt':
          exportToTxt(content);
          break;
        case 'md':
          exportToMarkdown(content);
          break;
        case 'html':
          exportToHtml(content);
          break;
        case 'clipboard':
          const result = await copyToClipboard(content.content);
          setNotification(result.message);
          setTimeout(() => setNotification(''), 3000);
          return;
        default:
          break;
      }
      setNotification('Export successful!');
      setTimeout(() => setNotification(''), 3000);
    } catch (error) {
      setNotification('Export failed. Please try again.');
      setTimeout(() => setNotification(''), 3000);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="export-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Export Content</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          <div className="content-preview">
            <h4>{content.title || 'Untitled'}</h4>
            <p className="content-meta">
              {content.content.split(' ').filter(word => word.length > 0).length} words
            </p>
          </div>

          <div className="export-options">
            <h4>Choose Export Format</h4>
            <div className="export-buttons">
              <button
                className="export-btn"
                onClick={() => handleExport('txt')}
              >
                📄 Text File (.txt)
              </button>
              <button
                className="export-btn"
                onClick={() => handleExport('md')}
              >
                📝 Markdown (.md)
              </button>
              <button
                className="export-btn"
                onClick={() => handleExport('html')}
              >
                🌐 HTML (.html)
              </button>
              <button
                className="export-btn"
                onClick={() => handleExport('clipboard')}
              >
                📋 Copy to Clipboard
              </button>
            </div>
          </div>

          {notification && (
            <div className="notification">
              {notification}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExportModal;