import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = () => {
  return (
    <div className="card" style={{ width: '15rem', margin: '10px' }}>
      <img
        src="images/bh.jpeg"
        className="card-img-top"
        alt="..."
        style={{ width: '100%', height: '200px', objectFit: 'fill' }}
      />
      <div className="card-body">
        <h5 className="card-title">Article title</h5>
        <p className="card-text">Some quick text on the article title to make up the bulk of the article's content.</p>
        <Link to="/pdf-viewer" className="btn btn-primary">Read More</Link> {/* Navigate to PDF Viewer */}
      </div>
    </div>
  );
};

export default ArticleCard;
