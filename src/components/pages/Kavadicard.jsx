import React, { useState } from 'react'; // Import useState hook
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './ArticleCard.module.css';
const KavadiCard = () => {
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
                    src="/public/images/o4.jpeg"
                    className={styles.articleCardImgTop}
                    alt="Not Found"
                  />
                  <div className={styles.articleCardBody}>
                    <h5 className={styles.articleCardTitle}>Oyilattam Field Study</h5>
                    <p className={styles.articleCardText}>iorpress</p>
                    <Link to="/pdf-viewerO" className={styles.articleBtnDarkGrey}>
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
                    src="/public/images/o1.jpeg"
                    className={styles.articleCardImgTop}
                    alt="Not Found"
                  />
                  <div className={styles.articleCardBody}>
                    <h5 className={styles.articleCardTitle}>Oyilattam</h5>
                    <p  className={styles.articleCardText}>Wordpress</p>
                    <a
                      href="https://formsofdancesintamilnadu.wordpress.com/oyilattam/"
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
                    src="/public/images/o2.jpeg"
                    className={styles.articleCardImgTop}
                    alt="Not Found"
                  />
                  <div className={styles.articleCardBody}>
                    <h5 className={styles.articleCardTitle}>About: Oyilattam</h5>
                    <p  className={styles.articleCardText}>dbpedia</p>
                    <a
                      href="https://dbpedia.org/page/Oyilattam"
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
                    src="/public/images/o3.jpeg"
                    className={styles.articleCardImgTop}
                    alt="Not Found"
                  />
                  <div className={styles.articleCardBody}>
                    <h5  className={styles.articleCardTitle}>Largest Oyilattam dance</h5>
                    <p  className={styles.articleCardText}>Guinness Records</p>
                    <a
                      href="https://www.guinnessworldrecords.com/world-records/520678-largest-oyilattam-dance"
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

export default KavadiCard;
