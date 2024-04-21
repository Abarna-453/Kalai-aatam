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
                  <h2 className="event-title">26th Lokrang-2023 Festival<br />National Folk Dance </h2>
                  <time className="event-time" dateTime="2024-07-04">October 29 to November 8, 2023<br/>Jawahar Kala Kendra, Jaipur.<br /> Time: 07:00 pm
        </time>
                  
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
                  <h2 className="event-title">Group KaragaAttam Dance<br /> karaattam performance</h2>
                  <time className="event-time" dateTime="2024-07-04">September 29, 2011 <br /> Women Guard Special Force, Ulundur Pettah, Tamil Nadu<br /></time>
                  
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
                  <h2 className="event-title">Namma Ooru Thiruvizha<br /></h2>
                  <time className="event-time" dateTime="2024-07-04">january 20 2023 <br />Sangamam,Chennai<br /> </time>
                  
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
                  <h2 className="event-title">CRPF-Karagam<br />CRPF to present ‘Karagam’ dance for first time during R-Day function in Jammu</h2>
                  <time className="event-time" dateTime="2024-07-04">january 24 2016 <br /> Jammu,India.<br /> </time>
                  
                  <p className="event-desc"> TN Government - Tamil Dance Day </p>
                  
                  <div className="event-social">
                    
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
