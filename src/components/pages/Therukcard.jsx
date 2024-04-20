import React, { useState } from 'react'; // Import useState hook
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './ArticleCard.module.css';
const TherukCard = () => {
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
                   className={styles.articleCard}
                  onClick={() => handleCardClick("/public/pdf/pdfbhara2.pdf")}
                >
                  <img
                    src="/public/images/t3.jpeg"
                    className={styles.articleCardImgTop}
                    alt="Not Found"
                  />
                  <div className={styles.articleCardBody}>
                    <h5 className={styles.articleCardTitle}>Therukoothu</h5>
                    <p className={styles.articleCardText}> Map Academy</p>
                    <Link to="/pdf-viewerT" className={styles.articleBtnDarkGrey}>
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className={styles.articleCard}
                  onClick={() =>
                    handleCardClick(
                      "/public/pdf/Basic Theory-Bharatanatyam-1.pdf"
                    )
                  }
                >
                  <img
                    src="/public/images/t6.jpeg"
                    className={styles.articleCardImgTop}
                    alt="Not Found"
                  />
                  <div className={styles.articleCardBody}>
                    <h5  className={styles.articleCardTitle}>Therukoothu potraits</h5>
                    <p  className={styles.articleCardText}>FStoppers</p>
                    <a
                      href="https://shorturl.at/HIJU3"
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
                <div  className={styles.articleCard}>
                  <img
                    src="/public/images/t5.jpeg"
                    className={styles.articleCardImgTop}
                    alt="Not Found"
                  />
                  <div className={styles.articleCardBody}>
                    <h5  className={styles.articleCardTitle}>Therukoothu - Artform</h5>
                    <p  className={styles.articleCardText}>South Tourism</p>
                    <a
                      href="https://www.southtourism.in/tamilnadu/artforms/therukoothu.php"
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
                    src="/public/images/t4.jpeg"
                    className={styles.articleCardImgTop}
                    alt="Not Found"
                  />
                  <div className={styles.articleCardBody}>
                    <h5 className={styles.articleCardTitle}>Koothu</h5>
                    <p  className={styles.articleCardText}> Wikipedia</p>
                    <a
                      href="https://en.wikipedia.org/wiki/Koothu"
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

      {/* Render PdfViewer component with selected PDF URL */}
      {selectedPdf && <PdfViewer pdfUrl={selectedPdf} />}
    </div>
  );
};

export default TherukCard;
