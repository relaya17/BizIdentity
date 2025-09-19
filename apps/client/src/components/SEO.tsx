import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
}) => {
  const siteName = 'BizIdentity';
  const defaultTitle = 'BizIdentity - Professional Business Cards';
  const defaultDescription = 'Create beautiful, professional business cards online. Easy to use, customizable templates, and instant sharing.';
  
  const seoTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const seoDescription = description || defaultDescription;

  // Update document title and meta tags
  React.useEffect(() => {
    document.title = seoTitle;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoDescription);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords || 'business cards, digital cards, professional cards, networking, contact cards');
    }
  }, [seoTitle, seoDescription, keywords]);

  return null;
};

export default SEO;
