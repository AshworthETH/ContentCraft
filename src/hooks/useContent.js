import { useLocalStorage } from './useLocalStorage';

export const useContent = () => {
  const [contents, setContents] = useLocalStorage('contentcraft-contents', []);

  const saveContent = (contentData) => {
    const newContent = {
      ...contentData,
      id: Date.now(),
      updatedAt: new Date().toISOString()
    };
    setContents(prev => [...prev, newContent]);

    if (contentData.templateId) {
      updateTemplateUsage(contentData.templateId);
    }

    return newContent;
  };

  const updateTemplateUsage = (templateId) => {
    const usage = JSON.parse(localStorage.getItem('contentcraft-template-usage') || '{}');
    usage[templateId] = (usage[templateId] || 0) + 1;
    localStorage.setItem('contentcraft-template-usage', JSON.stringify(usage));
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