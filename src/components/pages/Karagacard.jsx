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
                    src="/public/images/k4.jpeg"
                    className="card-img-top"
                    alt="Not Found"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Karakaataakalai</h5>
                    <p className="card-text"> Article 1</p>
                    <Link to="/pdf-viewerK" className="btn btn-dark-grey">
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
                    src="/public/images/k1.webp"
                    className="card-img-top"
                    alt="Not Found"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Karakattam</h5>
                    <p className="card-text">GK Theory</p>
                    <a
                      href="https://www.gktoday.in/what-is-karakattam/"
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
                    src="/public/images/k2.jpeg"
                    className="card-img-top"
                    alt="Not Found"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Karakattam</h5>
                    <p className="card-text">Wikipedia</p>
                    <a
                      href="https://en.wikipedia.org/wiki/Karakattam"
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
                    src="/public/images/k3.jpeg"
                    className="card-img-top"
                    alt="Not Found"
                  />
                  <div className="card-body">
                    <h5 className="card-title">About: Karakattam</h5>
                    <p className="card-text">dbpedia</p>
                    <a
                      href="https://dbpedia.org/page/Karakattam"
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
