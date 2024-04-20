import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './ArticleCard.module.css'; // Import the module CSS file
import PdfViewer from "./../../PdfViewer";

const KaragaCard = () => {
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
                    src="/public/images/k4.jpeg"
                    className={styles.articleCardImgTop}
                    alt="Not Found"
                  />
                  <div className={styles.articleCardBody}>
                    <h5 className={styles.articleCardTitle}>Karakaataakalai</h5>
                    <p className={styles.articleCardText}>Article 1</p>
                    <Link
                      to="/pdf-viewerK"
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
                    src="/public/images/k1.webp"
                    className={styles.articleCardImgTop}
                    alt="Not Found"
                  />
                  <div className={styles.articleCardBody}>
                    <h5 className={styles.articleCardTitle}>Karakattam</h5>
                    <p className={styles.articleCardText}>GK Theory</p>
                    <a
                      href="https://www.gktoday.in/what-is-karakattam/"
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
                    src="/public/images/k2.jpeg"
                    className={styles.articleCardImgTop}
                    alt="Not Found"
                  />
                  <div className={styles.articleCardBody}>
                    <h5 className={styles.articleCardTitle}>Karakattam</h5>
                    <p className={styles.articleCardText}>Wikipedia</p>
                    <a
                      href="https://en.wikipedia.org/wiki/Karakattam"
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
                    src="/public/images/k3.jpeg"
                    className={styles.articleCardImgTop}
                    alt="Not Found"
                  />
                  <div className={styles.articleCardBody}>
                    <h5 className={styles.articleCardTitle}>About: Karakattam</h5>
                    <p className={styles.articleCardText}>dbpedia</p>
                    <a
                      href="https://dbpedia.org/page/Karakattam"
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

export default KaragaCard;
