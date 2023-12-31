import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import "./Carousel.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import Card from "./Card";

function Carousel(props) {
  const [cardIdx, setCardIdx] = useState(0);
  const card = props.cardData[cardIdx];
  const total = props.cardData.length;
  const goForward = () => setCardIdx(cardIdx < (props.cardData.length - 1) ? (cardIdx + 1) : 0);
  const goBack = () => setCardIdx(cardIdx > 0 ? (cardIdx - 1) : (props.cardData.length - 1));
  const hidden = {
    display: 'none'
  }
  return (
    <div className="Carousel">
      <h1>{props.title}</h1>
      <div className="Carousel-main">
        <FontAwesomeIcon
          icon={faCircleChevronLeft}
          size="lg"
          onClick={goBack}
          data-testid="left-arrow"
          style={cardIdx == 0 ? hidden : {}}
        />
        <Card
          caption={card.caption}
          src={card.src}
          currNum={cardIdx + 1}
          totalNum={total}
        />
        <FontAwesomeIcon
          icon={faCircleChevronRight}
          size="lg"
          onClick={goForward}
          data-testid="right-arrow"
          style={cardIdx == (props.cardData.length - 1) ? hidden : {}}
        />
      </div>
    </div>
  );
}

Carousel.defaultProps = {
  cardData: [
    {
      src: image1,
      caption: "Photo by Richard Pasquarella on Unsplash"
    },
    {
      src: image2,
      caption: "Photo by Pratik Patel on Unsplash"
    },
    {
      src: image3,
      caption: "Photo by Josh Post on Unsplash"
    }
  ],
  title: "Shells from far away beaches."
};

export default Carousel;
