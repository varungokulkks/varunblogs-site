import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./Card.scss";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { AiOutlineComment, AiFillDelete } from "react-icons/ai";
import { IconContext } from "react-icons";

function Cards({ cardData, cardimg, cardtitle, cardlike, cardcontent }) {
  const [like, setLike] = useState(false);
  const [likecount, setLikecount] = useState(cardlike);
  return (
    <div>
      <Card className="cardmain">
        <Card.Img variant="top" className="card_image" src={cardimg} />
        <Card.Body>
          <Card.Title className="card-title">{cardtitle}</Card.Title>
          <Card.Text className="card-content">{cardcontent}</Card.Text>
          <div className="cardbody">
            <IconContext.Provider value={{ size: "3em" }}>
              <div
                className="likeicon"
                onClick={() => {
                  setLike(!like);
                  if (like === true) {
                    setLikecount(likecount - 1);
                  } else {
                    setLikecount(likecount + 1);
                  }
                }}
              >
                {like === true ? (
                  <FcLike className="icon" />
                ) : (
                  <FcLikePlaceholder className="icon" />
                )}
                <div className="likecount">{likecount}</div>
              </div>
              <div className="commenticon">
                <AiOutlineComment />
              </div>
              <div className="deleteicon">
                <AiFillDelete />
              </div>
            </IconContext.Provider>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
