import React, { useState } from 'react'; // Import useState hook
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ArticleCard.css';
const ArticleCard = () => {
  const [selectedPdf, setSelectedPdf] = useState(null); // Use useState hook

  const handleCardClick = (pdfUrl) => {
    setSelectedPdf(pdfUrl);
  };
  
  return (
    <div>
      <Carousel slidesToShow={2}>
        <Carousel.Item>
          <div className="cards-wrapper">
            <div className="row">
              <div className="col-md-6">
                <div className="card" onClick={() => handleCardClick('/public/pdf/pdfbhara2.pdf')}>
                  <img src="/public/images/karagattam.jpg" className="card-img-top" alt="Not Found" />
                  <div className="card-body">
                    <h5 className="card-title">Card title 1</h5>
                    <p className="card-text"> Article 1</p>
                    <Link to="/pdf-viewer" className="btn btn-dark-grey">Read More</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card" onClick={() => handleCardClick('/public/pdf/Basic Theory-Bharatanatyam-1.pdf')}>
                  <img src="/public/images/karagattam.jpg" className="card-img-top" alt="Not Found" />
                  <div className="card-body">
                    <h5 className="card-title">Card title 2</h5>
                    <p className="card-text">Article 2</p>
                    <Link to="/pdf-viewer" className="btn btn-dark-grey">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="cards-wrapper">
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <img src="/public/images/karagattam.jpg" className="card-img-top" alt="Not Found" />
                  <div className="card-body">
                    <h5 className="card-title">Card title 3</h5>
                    <p className="card-text"> Article 3</p>
                    <Link to="/pdf-viewer" className="btn btn-dark-grey">Read More</Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card">
                  <img src="/public/images/karagattam.jpg" className="card-img-top" alt="Not Found" />
                  <div className="card-body">
                    <h5 className="card-title">Card title 4</h5>
                    <p className="card-text"> Article 4</p>
                    <Link to="/pdf-viewer" className="btn btn-dark-grey">Read More</Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      
      {/* Render PdfViewer component with selected PDF URL */}
      {selectedPdf && <PdfViewer pdfUrl={selectedPdf} />}
    </div>
  );
};

export default ArticleCard;
