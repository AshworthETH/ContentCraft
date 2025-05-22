import { useState } from 'react';

export const useContent = () => {
  const [contents, setContents] = useState([]);

  const saveContent = (contentData) => {
    const newContent = {
      ...contentData,
      id: Date.now(),
      updatedAt: new Date().toISOString()
    };
    setContents(prev => [...prev, newContent]);
    return newContent;
  };

  const updateContent = (id, updates) => {
    setContents(prev =>
      prev.map(content =>
        content.id === id
          ? { ...content, ...updates, updatedAt: new Date().toISOString() }
          : content
      )
    );
  };

  const deleteContent = (id) => {
    setContents(prev => prev.filter(content => content.id !== id));
  };

  const getContentById = (id) => {
    return contents.find(content => content.id === id);
  };

  return {
    contents,
    saveContent,
    updateContent,
    deleteContent,
    getContentById
  };
};