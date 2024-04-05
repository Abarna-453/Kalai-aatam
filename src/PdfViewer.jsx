import React from 'react';

const PdfViewer = () => {
  return (
    <div>
      <h1>PDF Viewer</h1>
      {/* Display your PDF here */}
      <embed src="path/to/your/pdf/file.pdf" width="100%" height="500px" />
    </div>
  );
};

export default PdfViewer;
