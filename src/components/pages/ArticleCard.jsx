import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ArticleCard.css";

const ArticleCard = () => {
  return (
    <Carousel slidesToShow={2}>
      <Carousel.Item>
        <div className="cards-wrapper">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <img src="/public/images/bh.jpeg" className="card-img-top" alt="Not Found" />
                <div className="card-body">
                  <h5 className="card-title">Card title 1</h5>
                  <p className="card-text">Bharanatiyam Article 1</p>
                  <Link to="/pdf-viewer" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <img src="/public/images/bh.jpeg" className="card-img-top" alt="Not Found" />
                <div className="card-body">
                  <h5 className="card-title">Card title 2</h5>
                  <p className="card-text">Bharanatiyam Article 2</p>
                  <Link to="/pdf-viewer" className="btn btn-primary">Read More</Link>
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
                <img src="/public/images/bh.jpeg" className="card-img-top" alt="Not Found" />
                <div className="card-body">
                  <h5 className="card-title">Card title 3</h5>
                  <p className="card-text">Bharanatiyam Article 3</p>
                  <Link to="/pdf-viewer" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <img src="/public/images/bh.jpeg" className="card-img-top" alt="Not Found" />
                <div className="card-body">
                  <h5 className="card-title">Card title 4</h5>
                  <p className="card-text">Bharanatiyam Article 4</p>
                  <Link to="/pdf-viewer" className="btn btn-primary">Read More</Link>
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
                <img src="/public/images/bh.jpeg" className="card-img-top" alt="Not Found" />
                <div className="card-body">
                  <h5 className="card-title">Card title 5</h5>
                  <p className="card-text">Bharanatiyam Article 5</p>
                  <Link to="/pdf-viewer" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <img src="/public/images/bh.jpeg" className="card-img-top" alt="Not Found" />
                <div className="card-body">
                  <h5 className="card-title">Card title 6</h5>
                  <p className="card-text">Bharanatiyam Article 6</p>
                  <Link to="/pdf-viewer" className="btn btn-primary">Read More</Link>
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
                <img src="/public/images/bh.jpeg" className="card-img-top" alt="Not Found" />
                <div className="card-body">
                  <h5 className="card-title">Card title 7</h5>
                  <p className="card-text">Bharanatiyam Article 7</p>
                  <Link to="/pdf-viewer" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <img src="/public/images/bh.jpeg" className="card-img-top" alt="Not Found" />
                <div className="card-body">
                  <h5 className="card-title">Card title 8</h5>
                  <p className="card-text">Bharanatiyam Article 8</p>
                  <Link to="/pdf-viewer" className="btn btn-primary">Read More</Link>
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
                <img src="/public/images/bh.jpeg" className="card-img-top" alt="Not Found" />
                <div className="card-body">
                  <h5 className="card-title">Card title 9</h5>
                  <p className="card-text">Bharanatiyam Article 9</p>
                  <Link to="/pdf-viewer" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <img src="/public/images/bh.jpeg" className="card-img-top" alt="Not Found" />
                <div className="card-body">
                  <h5 className="card-title">Card title 10</h5>
                  <p className="card-text">Bharanatiyam Article 10</p>
                  <Link to="/pdf-viewer" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default ArticleCard;
