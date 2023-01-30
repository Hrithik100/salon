import {
  KeyboardArrowDownOutlined,
  StarBorderOutlined,
  StarOutlined,
} from "@mui/icons-material";
import React from "react";
import "./reviews.css";

const Reviews = () => {
  const USER_COMMENTS = [
    {
      username: "Dhruva",
      date: "12 Dec, 2021",
      comment: "Great service!",
      bgColor: "#FF8B8B",
    },
    {
      username: "Namrata",
      date: "15 Dec, 2021",
      comment: "The stylists are magician.",
      bgColor: "#8BA4FF",
    },
    {
      username: "Sangeeta",
      date: "29 Nov, 2021",
      comment: "I can’t be happier with my hair.",
      bgColor: "#B7FF8B",
    },
  ];
  return (
    <div className="reviewconta">
      <div className="review">
        <div className="totalratings">
          <div className="totalstars">
            <StarOutlined style={{ color: "#B68300" }} />
            <StarOutlined style={{ color: "#B68300" }} />
            <StarOutlined style={{ color: "#B68300" }} />
            <StarOutlined style={{ color: "#B68300" }} />
            <StarBorderOutlined style={{ color: "#B68300" }} />
          </div>
          <div className="totalreview">
            <div className="singlestar">
              <span>
                <StarOutlined
                  style={{
                    color: "#B68300",
                    position: "relative",
                    top: 3,
                    right: 7,
                    fontSize: 20,
                  }}
                />
                Good<p>(312 reviews)</p>
              </span>
            </div>
          </div>
        </div>
        <div className="singleratings">
          <h3>Ratings</h3>
          <div className="allstarcontainer">
            <div className="allstar">
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <span>(65 reviews)</span>
            </div>
            <div className="allstar">
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarBorderOutlined />
              <span>(230 reviews)</span>
            </div>
            <div className="allstar">
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarBorderOutlined />
              <StarBorderOutlined />
              <span>(17 reviews)</span>
            </div>
            <div className="allstar">
              <StarOutlined />
              <StarOutlined />
              <StarBorderOutlined />
              <StarBorderOutlined />
              <StarBorderOutlined />
              <span>(0 reviews)</span>
            </div>
            <div className="allstar">
              <StarOutlined />
              <StarBorderOutlined />
              <StarBorderOutlined />
              <StarBorderOutlined />
              <StarBorderOutlined />
              <span>(0 reviews)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="user-reviev-section">
        {USER_COMMENTS.map(({ username, date, comment, bgColor }) => (
          <div className="comment-section">
            <div className="comment-wrapper">
              <div className="comment-user-info">
                <div className="avatar" style={{ backgroundColor: `${bgColor}` }}>
                  {username.charAt()}
                </div>
                <div className="user-info">
                  <h2>{username}</h2>
                  <p>{date}</p>
                </div>
              </div>
              <div className="stars">
                <StarOutlined style={{ fontSize: 20 }} />
                <StarOutlined style={{ fontSize: 20 }} />
                <StarOutlined style={{ fontSize: 20 }} />
                <StarOutlined style={{ fontSize: 20 }} />
                <StarOutlined style={{ fontSize: 20 }} />
              </div>
            </div>
            <div className="user-comment">{comment}</div>
          </div>
        ))}
      </div>
      <div className="loadMorebutton">
        <div className="loadMoretext">
          <span>Load more</span>
          <KeyboardArrowDownOutlined
            style={{ color: "#B68300", position: "relative", top: 2 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
