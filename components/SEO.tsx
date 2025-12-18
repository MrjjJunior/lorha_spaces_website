import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  schema?: object;
}

const SEO: React.FC<SEOProps> = ({ title, description, schema }) => {
  useEffect(() => {
    // Update Document Title
    document.title = `${title} | Lorha Spaces Architecture & Engineering`;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Inject JSON-LD Schema
    if (schema) {
      const scriptId = 'json-ld-schema';
      let script = document.getElementById(scriptId) as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(schema);
    }

    return () => {
      // Cleanup schema on unmount if needed, though usually fine to let next page overwrite
    };
  }, [title, description, schema]);

  return null;
};

export default SEO;