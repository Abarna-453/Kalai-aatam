// PdfViewer.jsx
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'; // Import necessary components
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'; // Import default styles

import { Viewer } from '@react-pdf-viewer/core'; // Import necessary components
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // Import default layout plugin
import '@react-pdf-viewer/core/lib/styles/index.css'; // Import default styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css'; // Import default layout styles

// Additional CSS styles for the PDF viewer
import './PdfViewer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`; // Set the worker source

const PdfViewer = ({ pdfUrl }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
console.log('pdfUrl:', pdfUrl);
  return (
    <div className="pdf-viewer-container">
      <Viewer
          fileUrl="/pdf/Basic Theory-Bharatanatyam-1.pdf" // Provide URL to your PDF file
          plugins={[defaultLayoutPluginInstance]} // Add the default layout plugin as a plugin
        />
         
    </div>
  );
};

export default PdfViewer;