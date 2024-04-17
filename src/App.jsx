// App.jsx
import { Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Dance1, Dance2, Dance3, Dance4, CommunityForums } from "./components/pages";
import PdfViewer from './PdfViewer'; // Import PdfViewer component
import PdfViewerT from "./PdfViewerT";
import PdfViewerK from "./PdfViewerK";
import PdfViewerO from "./PdfViewerO";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/Dance1" element={<Dance1 />} />
        <Route path="/Dance2" element={<Dance2 />} />
        <Route path="/Dance3" element={<Dance3 />} />
        <Route path="/Dance4" element={<Dance4 />} />
        <Route path="/CommunityForums" element={<CommunityForums />} />
        <Route path="/pdf-viewer" element={<PdfViewer />} />
        <Route path="/pdf-viewerK" element={<PdfViewerK />} />
        <Route path="/pdf-viewerO" element={<PdfViewerO />} />
        <Route path="/pdf-viewerT" element={<PdfViewerT />} />{" "}
        {/* Add route for PdfViewer */}
      </Routes>
    </div>
  );
}

export default App;
