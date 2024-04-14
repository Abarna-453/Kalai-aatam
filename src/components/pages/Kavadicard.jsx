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
                    src="/public/images/o4.jpeg"
                    className="card-img-top"
                    alt="Not Found"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Oyilattam Field Study</h5>
                    <p className="card-text">iorpress</p>
                    <Link to="/pdf-viewerO" className="btn btn-dark-grey">
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
                    src="/public/images/o1.jpeg"
                    className="card-img-top"
                    alt="Not Found"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Oyilattam</h5>
                    <p className="card-text">Wordpress</p>
                    <a
                      href="https://formsofdancesintamilnadu.wordpress.com/oyilattam/"
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
                    src="/public/images/o2.jpeg"
                    className="card-img-top"
                    alt="Not Found"
                  />
                  <div className="card-body">
                    <h5 className="card-title">About: Oyilattam</h5>
                    <p className="card-text">dbpedia</p>
                    <a
                      href="https://dbpedia.org/page/Oyilattam"
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
                    src="/public/images/o3.jpeg"
                    className="card-img-top"
                    alt="Not Found"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Largest Oyilattam dance</h5>
                    <p className="card-text">Guinness Records</p>
                    <a
                      href="https://www.guinnessworldrecords.com/world-records/520678-largest-oyilattam-dance"
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
