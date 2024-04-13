import React, { useState } from "react";
import "./CardDisplay.css";

import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";

const CardDisplay = ({ isFirstTime }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Define different sets of cards
  const firstSetOfCards = [
    {
      header: "News Highlight 1",
      title:
        "Apply for the post of Folk Art Instructors and Supervisors for Part Time Folk Art Training Center",
      text: "Press Release 18.12.2023",
      footer: "2 days ago",
      link: "https://artandculture.tn.gov.in/apply-post-folk-art-instructors-and-supervisors-part-time-folk-art%C2%A0training%C2%A0center-0",
    },
    {
      header: "News Highlight 2",
      title:
        "Application Invited for District Art Awards for the year 2022-2023 & 2023-2024",
      text: "pr300523_1052",
      footer: "2 days ago",
      link: "https://artandculture.tn.gov.in/application-invited-district-art-awards-year-2022-2023-2023-2024",
    },
  ];

  const secondSetOfCards = [
    {
      header: "Event Highlight 1",
      title: "சங்கமம்-நம்ம-ஊரு-திருவிழா 2023-24",
      text: "சென்னை நம்ம ஊரு சங்கமம்-நம்ம-ஊரு-திருவிழா நிகழ்ச்சி தொகுப்பு (Day2-5)Linkbelow",
      footer: "3 days ago",
      link: "https://artandculture.tn.gov.in/event/%E0%AE%9A%E0%AE%99%E0%AF%8D%E0%AE%95%E0%AE%AE%E0%AE%AE%E0%AF%8D-%E0%AE%A8%E0%AE%AE%E0%AF%8D%E0%AE%AE-%E0%AE%8A%E0%AE%B0%E0%AF%81-%E0%AE%A4%E0%AE%BF%E0%AE%B0%E0%AF%81%E0%AE%B5%E0%AE%BF%E0%AE%B4%E0%AE%BE-2023-24",
    },
    {
      header: "Event Highlight 2",
      title: "Tamil Nadu Day Celebration at Tn Illam Newdelhi",
      text: "Tamil Nadu Day Celebration at Tn illam Newdelhi Around 35 Artist head by Hemanathan, Regional Assist Director Salem",
      footer: "3 days ago",
      link: "https://artandculture.tn.gov.in/tamil-nadu-day-celebration-tn-illam-newdelhi",
    },
  ];

  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % featuredCards.length);
  };

  const goToPrevCard = () => {
    setCurrentCardIndex(
      (prevIndex) =>
        (prevIndex - 1 + featuredCards.length) % featuredCards.length
    );
  };

  const handleGoSomewhere = () => {
    const currentCard = featuredCards[currentCardIndex];
    window.location.href = currentCard.link; // Redirect to the specified link
  };

  // Determine which set of cards to use based on the prop
  const featuredCards = isFirstTime ? firstSetOfCards : secondSetOfCards;

  return (
    <div className="card-container">
      <MDBCard className="card" alignment="center">
        <MDBCardHeader className="card-header">
          {featuredCards[currentCardIndex].header}
          <div className="card-arrows">
            <MDBBtn onClick={goToPrevCard} disabled={currentCardIndex === 0}>
              <i className="bi bi-arrow-left"></i>
            </MDBBtn>
            <MDBBtn
              onClick={goToNextCard}
              disabled={currentCardIndex === featuredCards.length - 1}
            >
              <i className="bi bi-arrow-right"></i>
            </MDBBtn>
          </div>
        </MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>{featuredCards[currentCardIndex].title}</MDBCardTitle>
          <MDBCardText>{featuredCards[currentCardIndex].text}</MDBCardText>
          <MDBBtn onClick={handleGoSomewhere} className="card-footer-btn">
            Visit
          </MDBBtn>
        </MDBCardBody>
        <MDBCardFooter>{featuredCards[currentCardIndex].footer}</MDBCardFooter>
      </MDBCard>
    </div>
  );
};

export default CardDisplay;
