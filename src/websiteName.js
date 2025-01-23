import React from 'react';
import { Helmet } from 'react-helmet';

function websiteName() {
  return (
    <>
      <Helmet>
        <title>Sadashri</title>
        <meta name="description" content="This is a description of Sadashri." />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        {/* Add other meta tags as needed */}
      </Helmet>

      {/* Rest of your component's JSX */}
    </>
  );
}

export default websiteName;