import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './ArticleCard.module.css'; // Import the module CSS file
import PdfViewer from "./../../PdfViewer";

const ArticleCard = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handleCardClick = (pdfUrl) => {
    setSelectedPdf(pdfUrl);
    console.log("Selected PDF URL:", pdfUrl);
  };

  return (
    <div>
      <Carousel slidesToShow={2}>
        <Carousel.Item>
          <div className="cards-wrapper">
            <div className="row">
              <div className="col-md-6">
                <div
                  className={styles.articleCard}
                  onClick={() => handleCardClick("/public/pdf/pdfbhara2.pdf")}
                >
                  <img
                    src="/public/images/b1.webp"
                    className={styles.articleCardImgTop}
                    alt="Not Found"
                  />
                  <div className={styles.articleCardBody}>
                    <h5 className={styles.articleCardTitle}>Bharatanatyam Theory</h5>
                    <p className={styles.articleCardText}>Cosmic Dance</p>
                    <Link
                      to={`/pdf-viewer?url=${selectedPdf}`}
                      className={styles.articleBtnDarkGrey}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className={styles.articleCard}
                  onClick={() => handleCardClick("/public/pdf/Basic Theory-Bharatanatyam-1.pdf")}
                >
                  <img
                    src="/public/images/b4.webp"
                    className={styles.articleCardImgTop}
                    alt="Not Found"
                  />
                  <div className={styles.articleCardBody}>
                    <h5 className={styles.articleCardTitle}>Cultural significance</h5>
                    <p className={styles.articleCardText}>Pranavam School of dance</p>
                    <a
                      href="https://www.pranavamschoolofdance.com/bharathanatyam-dance-and-its-cultural-significance/"
                      className={styles.articleBtnDarkGrey}
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
                <div className={styles.articleCard}>
                  <img
                    src="/public/images/b2.jpeg"
                    className={styles.articleCardImgTop}
                    alt="Not Found"
                  />
                  <div className={styles.articleCardBody}>
                    <h5 className={styles.articleCardTitle}>Bharatanatyam Intro</h5>
                    <p className={styles.articleCardText}>ipassio</p>
                    <a
                      href="https://www.ipassio.com/wiki/dance/indian-classical-dance/bharatanatyam"
                      className={styles.articleBtnDarkGrey}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className={styles.articleCard}>
                  <img
                    src="/public/images/b3.webp"
                    className={styles.articleCardImgTop}
                    alt="Not Found"
                  />
                  <div className={styles.articleCardBody}>
                    <h5 className={styles.articleCardTitle}>Famous dancers</h5>
                    <p className={styles.articleCardText}>shortpedia</p>
                    <a
                      href="https://www.shortpedia.com/en-in/gallery/entertainment/5-most-famous-bharatanatyam-dancers-of-all-time-1625131817"
                      className={styles.articleBtnDarkGrey}
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
      {/* {selectedPdf && <PdfViewer pdfUrl={selectedPdf} />} */}
    </div>
  );
};

export default ArticleCard;
