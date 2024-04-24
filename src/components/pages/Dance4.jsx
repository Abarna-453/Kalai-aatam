//kavadiAttam
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DescriptionIcon from '@mui/icons-material/Description';
import EventIcon from '@mui/icons-material/Event';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import './Navbarpages.css'; 
import { CheckCircle, Aperture, GitHub } from 'react-feather';
import Footer from './Footer';
import KavadiCard from './Kavadicard';
import Oyilvideo from './Oyilvideo';
import Oyilevent from './Oyilevent';

export const Dance4 = () => {
  const [value, setValue] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Middle Header (Navigation) */}
      <nav className="middle-header">
        <Link to="/" className="title">
          <img src="/src/logo.png" alt="KalaiAttam Logo" className="logo" />
          <div className="text-container">
            <span className="line1">KalaiAttam</span>
            <span className="line2">நடனம் உங்கள் கலையில், உங்கள் கையில்!</span>
          </div>
        </Link>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/Dance1">Bharathanatyam</NavLink>
          </li>
          <li>
            <NavLink to="/Dance2">Therukoothu</NavLink>
          </li>
          <li>
            <NavLink to="/Dance3">Karakattam</NavLink>
          </li>
          <li>
            <NavLink to="/Dance4">Oyilattam</NavLink>
          </li>
          <li>
            <NavLink to="/CommunityForums">Community Forum</NavLink>
          </li>
        </ul>
      </nav>

      {/* Content for Dance2 */}
      <div
        className="column"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Image on the left side */}
        <div style={{ width: "50%", textAlign: "center", padding: "5%" }}>
          {/* Your image component goes here */}
          <img
            src="/public/images/kavadi1.jpg"
            alt="Your Image"
            style={{
              width: "55%",
              height: "80%",
              maxWidth: "800px",
              maxHeight: "800px",
            }}
          />
        </div>

        {/* Content for the tabs on the right side */}
        <div
          className="column"
          style={{ width: "60%", marginTop: "30px", marginBottom: "30px" }}
        >
          <table
            style={{
              border: "1px solid #ccc",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
              width: "90%",
              height: "80%",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="icon label tabs example"
              style={{
                width: "100%",
                backgroundColor: "#404040",
                color: "#fff",
              }}
            >
              <Tab
                icon={<DescriptionIcon />}
                label="ARTICLES"
                value={0}
                style={{ width: "25%", color: "white" }}
              />
              <Tab
                icon={<LiveTvIcon />}
                label="VIDEOS"
                value={1}
                style={{ width: "25%", color: "white" }}
              />
              <Tab
                icon={<LocalLibraryIcon />}
                label="NEWS"
                value={2}
                style={{ width: "25%", color: "white" }}
              />
              <Tab
                icon={<EventIcon />}
                label="EVENTS"
                value={3}
                style={{ width: "25%", color: "white" }}
              />
            </Tabs>
            {/* Content based on the selected tab */}
            {value === 0 && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  textAlign: "left",
                  padding: "10%",
                }}
              >
                <KavadiCard />
              </div>
            )}
            {value === 1 && (
              <div style={{ textAlign: "left", padding: "10%" }}>
                <Oyilvideo />
              </div>
            )}
            {value === 2 && (
              <div
                style={{
                  textAlign: "center",
                  padding: "10%",
                  maxHeight: "600px",
                  overflow: "auto",
                  paddingTop: "3%",
                }}
              >
                <div
                  className="row py-2"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    marginBottom: "10px",
                  }}
                >
                  <div className="col-2 col-sm-1 col-md-3 col-lg-2 py-1 pe-md-0 mb-md-1">
                    <div className="d-inline-block d-md-block bg-primary text-white text-center breaking-caret py-1 px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1rem"
                        height="1rem"
                        fill="currentColor"
                        className="bi bi-lightning-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                      </svg>
                      <span className="d-none d-md-inline-block">
                        News Feed
                      </span>
                    </div>
                  </div>

                  <div className="col-10 col-sm-11 col-md-9 col-lg-10 ps-1 ps-md-2">
                    <div className="breaking-box position-relative py-1">
                      {" "}
                      {/* Adjusted padding here */}
                      <div
                        className="box-carousel"
                        data-flickity='{ "cellAlign": "left", "wrapAround": true, "adaptiveHeight": true, "prevNextButtons": true , "autoPlay": 5000, "pageDots": false, "imagesLoaded": true }'
                      >
                        <div className="row">
                          <div
                            className="col-12 aribudin"
                            style={{ textAlign: "left" }}
                          >
                            <a
                              className="h6 fw-normal"
                              style={{ textDecoration: "none" }}
                              href="#"
                            >
                              Folk singer Velmurugan hopes to revive ‘oyilattam’
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                          <a
                            href="https://www.thehindu.com/entertainment/music/folk-singer-velmurugans-efforts-to-revive-oyilattam/article25565021.ece"
                            className="btn btn-primary"
                            style={{ fontSize: "0.8rem", marginTop: "10px" }}
                          >
                            Know More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="row py-2"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    marginBottom: "10px",
                  }}
                >
                  <div className="col-2 col-sm-1 col-md-3 col-lg-2 py-1 pe-md-0 mb-md-1">
                    <div className="d-inline-block d-md-block bg-primary text-white text-center breaking-caret py-1 px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1rem"
                        height="1rem"
                        fill="currentColor"
                        className="bi bi-lightning-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                      </svg>
                      <span className="d-none d-md-inline-block">
                        News Feed
                      </span>
                    </div>
                  </div>

                  <div className="col-10 col-sm-11 col-md-9 col-lg-10 ps-1 ps-md-2">
                    <div className="breaking-box position-relative py-1">
                      {" "}
                      {/* Adjusted padding here */}
                      <div
                        className="box-carousel"
                        data-flickity='{ "cellAlign": "left", "wrapAround": true, "adaptiveHeight": true, "prevNextButtons": true , "autoPlay": 5000, "pageDots": false, "imagesLoaded": true }'
                      >
                        <div className="row">
                          <div
                            className="col-12 aribudin"
                            style={{ textAlign: "left" }}
                          >
                            <a
                              className="h6 fw-normal"
                              style={{ textDecoration: "none" }}
                              href="#"
                            >
                              From Tradition To Grace: Dance Forms Of Tamil Nadu
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                          <a
                            href="https://www.outlooktraveller.com/destinations/india/from-tradition-to-grace-dance-forms-of-tamil-nadu"
                            className="btn btn-primary"
                            style={{ fontSize: "0.8rem", marginTop: "10px" }}
                          >
                            Know More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="row py-2"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    marginBottom: "10px",
                  }}
                >
                  <div className="col-2 col-sm-1 col-md-3 col-lg-2 py-1 pe-md-0 mb-md-1">
                    <div className="d-inline-block d-md-block bg-primary text-white text-center breaking-caret py-1 px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1rem"
                        height="1rem"
                        fill="currentColor"
                        className="bi bi-lightning-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                      </svg>
                      <span className="d-none d-md-inline-block">
                        News Feed
                      </span>
                    </div>
                  </div>

                  <div className="col-10 col-sm-11 col-md-9 col-lg-10 ps-1 ps-md-2">
                    <div className="breaking-box position-relative py-1">
                      {" "}
                      {/* Adjusted padding here */}
                      <div
                        className="box-carousel"
                        data-flickity='{ "cellAlign": "left", "wrapAround": true, "adaptiveHeight": true, "prevNextButtons": true , "autoPlay": 5000, "pageDots": false, "imagesLoaded": true }'
                      >
                        <div className="row">
                          <div
                            className="col-12 aribudin"
                            style={{ textAlign: "left" }}
                          >
                            <a
                              className="h6 fw-normal"
                              style={{ textDecoration: "none" }}
                              href="#"
                            >
                              Chennai Sangamam to return in different avatar
                              across cities
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                          <a
                            href="https://timesofindia.indiatimes.com/city/chennai/chennai-sangamam-to-return-in-different-avatar-across-cities/articleshow/88266078.cms"
                            className="btn btn-primary"
                            style={{ fontSize: "0.8rem", marginTop: "10px" }}
                          >
                            Know More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="row py-2"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  <div className="col-2 col-sm-1 col-md-3 col-lg-2 py-1 pe-md-0 mb-md-1">
                    <div className="d-inline-block d-md-block bg-primary text-white text-center breaking-caret py-1 px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1rem"
                        height="1rem"
                        fill="currentColor"
                        className="bi bi-lightning-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                      </svg>
                      <span className="d-none d-md-inline-block">
                        News Feed
                      </span>
                    </div>
                  </div>

                  <div className="col-10 col-sm-11 col-md-9 col-lg-10 ps-1 ps-md-2">
                    <div className="breaking-box position-relative py-1">
                      {" "}
                      {/* Adjusted padding here */}
                      <div
                        className="box-carousel"
                        data-flickity='{ "cellAlign": "left", "wrapAround": true, "adaptiveHeight": true, "prevNextButtons": true , "autoPlay": 5000, "pageDots": false, "imagesLoaded": true }'
                      >
                        <div className="row">
                          <div
                            className="col-12 aribudin"
                            style={{ textAlign: "left" }}
                          >
                            <a
                              className="h6 fw-normal"
                              style={{ textDecoration: "none" }}
                              href="#"
                            >
                              A New Historical Nobel World Record Set As 1600
                              Oyilatta Artists Perform Non-Stop For 4 Hours
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                          <a
                            href="https://www.aninews.in/news/business/business/a-new-historical-nobel-world-record-set-as-1600-oyilatta-artists-perform-non-stop-for-4-hours20231005154509/"
                            className="btn btn-primary"
                            style={{ fontSize: "0.8rem", marginTop: "10px" }}
                          >
                            Know More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {value === 3 && (
              <div
                style={{
                  textAlign: "center",
                  padding: "5%",
                  maxHeight: "600px",
                  overflow: "auto",
                }}
              >
                <Oyilevent />
              </div>
            )}
          </table>
        </div>
      </div>
      {/* Add the Footer component */}
      <Footer />
    </div>
  );
};
