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
                <div
                  className="card"
                  onClick={() => handleCardClick("/public/pdf/pdfbhara2.pdf")}
                >
                  <img
                    src="/public/images/t3.jpeg"
                    className="card-img-top"
                    alt="Not Found"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Therukoothu</h5>
                    <p className="card-text"> Map Academy</p>
                    <Link to="/pdf-viewerT" className="btn btn-dark-grey">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="card"
                  onClick={() =>
                    handleCardClick(
                      "/public/pdf/Basic Theory-Bharatanatyam-1.pdf"
                    )
                  }
                >
                  <img
                    src="/public/images/t6.jpeg"
                    className="card-img-top"
                    alt="Not Found"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Therukoothu potraits</h5>
                    <p className="card-text">FStoppers</p>
                    <a
                      href="https://shorturl.at/HIJU3"
                      className="btn btn-dark-grey"
                    >
                      Read More
                    </a>
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
                  <img
                    src="/public/images/t5.jpeg"
                    className="card-img-top"
                    alt="Not Found"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Therukoothu - Artform</h5>
                    <p className="card-text">South Tourism</p>
                    <a
                      href="https://www.southtourism.in/tamilnadu/artforms/therukoothu.php"
                      className="btn btn-dark-grey"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card">
                  <img
                    src="/public/images/t4.jpeg"
                    className="card-img-top"
                    alt="Not Found"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Koothu</h5>
                    <p className="card-text"> Wikipedia</p>
                    <a
                      href="https://en.wikipedia.org/wiki/Koothu"
                      className="btn btn-dark-grey"
                    >
                      Read More
                    </a>
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
