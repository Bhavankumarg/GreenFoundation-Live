import React from 'react';

const WebsiteSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "GreenFoundation",
    "url": "https://greenfoundation.in/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://greenfoundation.in/income-generation-programs{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
    </>
  );
};

export default WebsiteSchema;
