import React, { useState } from 'react'; // Import useState hook
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ArticleCard.css';
import PdfViewer from "./../../PdfViewer";
const ArticleCard = () => {
  const [selectedPdf, setSelectedPdf] = useState(null); // Use useState hook

  const handleCardClick = (pdfUrl) => {
    setSelectedPdf(pdfUrl);

    console.log("Selected PDF URL 1:", pdfUrl);
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
                    src="/public/images/b1.webp"
                    className="card-img-top"
                    alt="Not Found"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Bharatanatyam Theory </h5>
                    <p className="card-text">Cosmic Dance</p>
                    <Link
                      to={`/pdf-viewer?url=${selectedPdf}`}
                      className="btn btn-dark-grey"
                    >
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
                    src="/public/images/b2.jpeg"
                    className="card-img-top"
                    alt="Not Found"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Cultural significance</h5>
                    <p className="card-text">Pranavam School of dance</p>
                    {/* <Link to="/pdf-viewer" className="btn btn-dark-grey">
                      Read More
                    </Link> */}
                    <a
                      href="https://www.pranavamschoolofdance.com/bharathanatyam-dance-and-its-cultural-significance/"
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
                    src="/public/images/b3.webp"
                    className="card-img-top"
                    alt="Not Found"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Bharatanatyam Overview</h5>
                    <p className="card-text">ipassio</p>
                    <a
                      href="https://www.ipassio.com/wiki/dance/indian-classical-dance/bharatanatyam"
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
                    src="/public/images/b4.webp"
                    className="card-img-top"
                    alt="Not Found"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Famous dancers</h5>
                    <p className="card-text">shortpedia</p>
                    <a
                      href="https://www.shortpedia.com/en-in/gallery/entertainment/5-most-famous-bharatanatyam-dancers-of-all-time-1625131817"
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
      {/* {selectedPdf && <PdfViewer pdfUrl={selectedPdf} />} */}
    </div>
  );
};

export default ArticleCard;
