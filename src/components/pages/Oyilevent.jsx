import React from 'react';
import "./EventList.css"

const EventList = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-offset-2 col-sm-8">
          <ul className="event-list">
         
            <li>
            <div className="event-12345">
                <img src="https://farm4.staticflickr.com/3100/2693171833_3545fb852c_q.jpg" alt="Independence Day" className="event-image" />
                <div className="event-details">
                  <h2 className="event-title">Namma Ooru Thiruvizha-Oyilattam<br /> Street performance</h2>
                  <time className="event-time" dateTime="2024-07-04">january 14 - 15 2023  <br /> Sangamam chennai <br /></time>
                  
                  <p className="event-desc"> TN Government - Tamil Dance Day </p>
                  
                  <div className="event-social">
                    
                  </div>
                </div>
              </div>
            </li>
   {/* Add more event items here */}
   <li>
                <div className="event-12345">
                <img src="https://farm4.staticflickr.com/3100/2693171833_3545fb852c_q.jpg" alt="Independence Day" className="event-image" />
                <div className="event-details">
                  <h2 className="event-title">Oyilattam Coimbatore Village event<br /></h2>
                  <time className="event-time" dateTime="2024-07-04">july 15 2019 <br />Santhosh Nagar,Kaniyur,Coimbatore<br /> </time>
                  
                  <p className="event-desc"> TN Government - Tamil Dance Day </p>
                  
                  <div className="event-social">
                    
                  </div>
                </div>
              </div>
            </li>
             
          <li>
          <div className="event-12345">
                <img src="https://farm4.staticflickr.com/3100/2693171833_3545fb852c_q.jpg" alt="Independence Day" className="event-image" />
                <div className="event-details">
                  <h2 className="event-title">Shilpgram Festival 2010 <br />Oyilattam folk dance of Tamilnadu in cultural festival </h2>
                  <time className="event-time" dateTime="2024-07-04">2010<br/>Shilpgram,Udaipur.<br /> Time: 07:00 pm
        </time>
                  
                  <p className="event-desc"> TN Government - Tamil Dance Day </p>
                  
                  <div className="event-social">
                    
                  </div>
                </div>
              </div>
            </li>
            {}
            <li>
              <div className="event-12345">
                <img src="https://farm4.staticflickr.com/3100/2693171833_3545fb852c_q.jpg" alt="Independence Day" className="event-image" />
                <div className="event-details">
                  <h2 className="event-title">Tamil pongal Festival honouring-Oyilattam <br />Oyilattam during Pongal celebrations at St. Mary's College.</h2>
                  <time className="event-time" dateTime="2024-07-04"> January 12, 2015<br/>St. Mary's College in Tuticorin<br /> Time: 07:00 pm
        </time>
                  
                  <p className="event-desc"> TN Government - Tamil Dance Day </p>
                  
                  <div className="event-social">
                    
                  </div>
                </div>
              </div>
            </li>
            {}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventList;
