export const templates = [
  {
    id: 1,
    name: "Blog Post Outline",
    category: "Blog",
    description: "A structured template for creating engaging blog posts with introduction, main points, and conclusion.",
    usageCount: 42,
    content: `# {title}

## Introduction
{intro_hook}

## Main Content
### Point 1: {main_point_1}
{content_1}

### Point 2: {main_point_2}
{content_2}

### Point 3: {main_point_3}
{content_3}

## Conclusion
{conclusion}

## Call to Action
{cta}`
  },
  {
    id: 2,
    name: "Product Description",
    category: "E-commerce",
    description: "Professional product descriptions that highlight features and benefits to drive sales.",
    usageCount: 28,
    content: `# {product_name}

## Key Features
- {feature_1}
- {feature_2}
- {feature_3}

## Benefits
{benefit_description}

## Specifications
- Material: {material}
- Dimensions: {dimensions}
- Color: {color}

## Why Choose {product_name}?
{unique_selling_point}

**Order now and {special_offer}!**`
  },
  {
    id: 3,
    name: "Social Media Post",
    category: "Social",
    description: "Engaging social media content template for various platforms.",
    usageCount: 67,
    content: `🎯 {attention_grabber}

{main_message}

✨ Key points:
• {point_1}
• {point_2}
• {point_3}

{call_to_action}

#hashtag1 #hashtag2 #hashtag3`
  }
];

export const getTemplateById = (id) => {
  return templates.find(template => template.id === id);
};

export const getTemplatesByCategory = (category) => {
  return templates.filter(template => template.category === category);
};

export const getTemplatesWithUsage = () => {
  const usage = JSON.parse(localStorage.getItem('contentcraft-template-usage') || '{}');
  return templates.map(template => ({
    ...template,
    usageCount: usage[template.id] || template.usageCount
  }));
};