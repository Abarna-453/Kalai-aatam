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
                  <h2 className="event-title">INDRAJIT<br />A Therukoothu in tamil </h2>
                  <time className="event-time" dateTime="2024-07-04">September 24, 2023 <br /> Cultural complex,Pondicherry university,Kalapet,Pondicherry.  <br /> Time: 06:00 pm
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
                  <h2 className="event-title">Indrajith<br />A full night koothu</h2>
                  <time className="event-time" dateTime="2024-07-04">October 7, 2023 <br />  Chennai<br />Time: 10pm-5am</time>
                  
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
                  <h2 className="event-title">Kalaimamani kannappa Thambiran memorial theatre festival- 2022 <br />A Therukoothu in tamil </h2>
                  <time className="event-time" dateTime="2024-07-04">October 1, 2022 <br />Purisai village,Cheyyar taluk,Thiruvannamali District <br /> </time>
                  
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
                  <h2 className="event-title">Tragedy of Abhimanyu <br />A Koothu play(Workshop production) </h2>
                  <time className="event-time" dateTime="2024-07-04">April 6, 2022 <br />Purisai kannappa thambiran,Thiruvannamali District <br />TIme :6pm-9pm </time>
                  
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
