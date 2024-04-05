// PdfViewer.jsx
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'; // Import necessary components
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'; // Import default styles

// Additional CSS styles for the PDF viewer
import './PdfViewer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`; // Set the worker source

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="pdf-viewer-container">
      <h1>PDF Viewer</h1>
      <div className="pdf-viewer">
        <Document file="/pdf/pdfbhara2.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} className="react-pdf__Page" />
          ))}
        </Document>
      </div>
    </div>
  );
};

export default PdfViewer;
