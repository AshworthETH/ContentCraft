import React from 'react';
import { useContent } from '../hooks/useContent';
import './ProjectDashboard.css';

const ProjectDashboard = () => {
  const { contents } = useContent();

  const stats = {
    totalContent: contents.length,
    wordsWritten: contents.reduce((total, content) => {
      return total + content.content.split(' ').filter(word => word.length > 0).length;
    }, 0),
    templatesUsed: new Set(contents.map(c => c.templateId).filter(Boolean)).size
  };

  const recentContent = contents
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(0, 5);

  return (
    <div className="project-dashboard">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <p>Your content creation overview</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">{stats.totalContent}</div>
          <div className="stat-label">Content Pieces</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.wordsWritten.toLocaleString()}</div>
          <div className="stat-label">Words Written</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.templatesUsed}</div>
          <div className="stat-label">Templates Used</div>
        </div>
      </div>

      <div className="recent-content">
        <h3>Recent Content</h3>
        {recentContent.length === 0 ? (
          <p className="empty-state">No content created yet. Start by selecting a template!</p>
        ) : (
          <div className="content-list">
            {recentContent.map(content => (
              <div key={content.id} className="content-item">
                <div className="content-info">
                  <h4>{content.title || 'Untitled'}</h4>
                  <p className="content-meta">
                    {new Date(content.updatedAt).toLocaleDateString()} •
                    {content.content.split(' ').filter(word => word.length > 0).length} words
                  </p>
                </div>
                <div className="content-actions">
                  <button className="action-btn">Edit</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDashboard;