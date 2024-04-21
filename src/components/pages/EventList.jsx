import React from 'react';
import "./EventList.css"

const EventList = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-offset-2 col-sm-8">
          <ul className="event-list">
          <li>
              <div className="event-ticket">
                <img src="https://farm4.staticflickr.com/3100/2693171833_3545fb852c_q.jpg" alt="Independence Day" className="event-image" />
                <div className="event-details">
                  <h2 className="event-title">EKADASA VISHNUM <br />A Celebration of the 11 Tirunangur Divya Desams </h2>
                  <time className="event-time" dateTime="2024-07-04">June 29, 2024 <br /> Narada Gana Sabha Hall, Chennai.  <br /> Time: 06:00 pm
        </time>
                  
                  <p className="event-desc"> TN Government - Tamil Dance Day </p>
                  
                  <div className="event-social">
                    <ul>
                      <li className="facebook"><a href="#facebook"><span className="fa fa-facebook"></span></a></li>
                      <li className="twitter"><a href="#twitter"><span className="fa fa-twitter"></span></a></li>
                      <li className="google-plus"><a href="#google-plus"><span className="fa fa-google-plus"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="event-ticket">
                <img src="https://farm4.staticflickr.com/3100/2693171833_3545fb852c_q.jpg" alt="Independence Day" className="event-image" />
                <div className="event-details">
                  <h2 className="event-title">Indian Dance Festival Mamallapuram</h2>
                  <time className="event-time" dateTime="2024-07-04">Janurary 21, 2024 <br /> Saraswathy Kalanikethan, Chennai</time>
                  
                  <p className="event-desc"> TN Government - Tamil Dance Day </p>
                  
                  <div className="event-social">
                    <ul>
                      <li className="facebook"><a href="#facebook"><span className="fa fa-facebook"></span></a></li>
                      <li className="twitter"><a href="#twitter"><span className="fa fa-twitter"></span></a></li>
                      <li className="google-plus"><a href="#google-plus"><span className="fa fa-google-plus"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* Add more event items here */}
            <li>
              <div className="event-ticket">
                <img src="https://farm4.staticflickr.com/3100/2693171833_3545fb852c_q.jpg" alt="Independence Day" className="event-image" />
                <div className="event-details">
                  <h2 className="event-title">Indian Dance Festival Mamallapuram</h2>
                  <time className="event-time" dateTime="2024-07-04">Janurary 18, 2024 <br /> S.K. Natya Kalaniketan Academy,
Chennai
</time>
                  
                  <p className="event-desc"> TN Government - Tamil Dance Day </p>
                  
                  <div className="event-social">
                    <ul>
                      <li className="facebook"><a href="#facebook"><span className="fa fa-facebook"></span></a></li>
                      <li className="twitter"><a href="#twitter"><span className="fa fa-twitter"></span></a></li>
                      <li className="google-plus"><a href="#google-plus"><span className="fa fa-google-plus"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            {}
            <li>
              <div className="event-ticket">
                <img src="https://farm4.staticflickr.com/3100/2693171833_3545fb852c_q.jpg" alt="Independence Day" className="event-image" />
                <div className="event-details">
                  <h2 className="event-title">Trial courses<br />solos by two child artistes - Akshatha Viswanath and Angeleena Avnee </h2>
                  <time className="event-time" dateTime="2024-07-04">April 21, 2024<br /> Medai, Koramangala,Banglore. <br /> Time: 11am
        </time>
                  
                  <p className="event-desc"> TN Government - Tamil Dance Day </p>
                  
                  <div className="event-social">
                    <ul>
                      <li className="facebook"><a href="#facebook"><span className="fa fa-facebook"></span></a></li>
                      <li className="twitter"><a href="#twitter"><span className="fa fa-twitter"></span></a></li>
                      <li className="google-plus"><a href="#google-plus"><span className="fa fa-google-plus"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            {}
            <li>
              <div className="event-ticket">
                <img src="https://farm4.staticflickr.com/3100/2693171833_3545fb852c_q.jpg" alt="Independence Day" className="event-image" />
                <div className="event-details">
                  <h2 className="event-title">Trial courses<br />solos by two child artistes - Akshatha Viswanath and Angeleena Avnee </h2>
                  <time className="event-time" dateTime="2024-07-04">April 21, 2024<br /> Medai, Koramangala,Banglore. <br /> Time: 11am
        </time>
                  
                  <p className="event-desc"> TN Government - Tamil Dance Day </p>
                  
                  <div className="event-social">
                    <ul>
                      <li className="facebook"><a href="#facebook"><span className="fa fa-facebook"></span></a></li>
                      <li className="twitter"><a href="#twitter"><span className="fa fa-twitter"></span></a></li>
                      <li className="google-plus"><a href="#google-plus"><span className="fa fa-google-plus"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventList;
