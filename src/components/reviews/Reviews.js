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
      <div className="reviewleft">
        <div className="totalratings">
          <div className="totalstars">
            <StarOutlined style={{ color: "#B68300" }} />
            <StarOutlined style={{ color: "#B68300" }} />
            <StarOutlined style={{ color: "#B68300" }} />
            <StarOutlined style={{ color: "#B68300" }} />
            <StarBorderOutlined style={{ color: "#B68300" }} />
          </div>
          <div className="totalreview">
            <StarOutlined
              style={{
                color: "#B68300",
                fontSize: 20,
              }}
            />
            <div className="singlereview">
              <span>Good</span>
              <p>(312 reviews)</p>
            </div>
          </div>
        </div>
        <div className="singleratings">
          <h3>Ratings</h3>
          <div className="allstarcontainer">
            <div className="allstar">
              <div className="staritem">
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
              </div>
              <span>(65 reviews)</span>
            </div>
            <div className="allstar">
              <div className="staritem">
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
                <StarBorderOutlined />
              </div>
              <span>(230 reviews)</span>
            </div>
            <div className="allstar">
              <div className="staritem">
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
                <StarBorderOutlined />
                <StarBorderOutlined />
              </div>
              <span>(17 reviews)</span>
            </div>
            <div className="allstar">
              <div className="staritem">
                <StarOutlined />
                <StarOutlined />
                <StarBorderOutlined />
                <StarBorderOutlined />
                <StarBorderOutlined />
              </div>
              <span>(0 reviews)</span>
            </div>
            <div className="allstar">
              <div className="staritem">
                <StarOutlined />
                <StarBorderOutlined />
                <StarBorderOutlined />
                <StarBorderOutlined />
                <StarBorderOutlined />
              </div>
              <span>(0 reviews)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="userrevievsection">
        {USER_COMMENTS.map(({ username, date, comment, bgColor }) => (
          <div className="commentsection">
            <div className="commentwrapper">
              <div className="commentuserinfo">
                <div
                  className="avatar"
                  style={{ backgroundColor: `${bgColor}` }}
                >
                  {username.charAt()}
                </div>
                <div className="userinfo">
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
            <div className="usercomment">{comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
