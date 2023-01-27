import {
  KeyboardArrowDownOutlined,
  StarBorderOutlined,
  StarOutlined,
} from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import React from "react";
import "./reviews.css";

const Reviews = () => {
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
      <div className="comment">
        <div className="userreviews">
          <div className="userreview">
            <div className="usercontent">
              <Avatar style={{ color: "blue", background: deepOrange[600] }}>
                D
              </Avatar>
              <div className="usercontentdetails">
              <h2>Dhruva</h2>
              <span>12 Dec, 2021</span>
              <div className="star">
                <StarOutlined style={{ fontSize: 20 }} />
                <StarOutlined style={{ fontSize: 20 }} />
                <StarOutlined style={{ fontSize: 20 }} />
                <StarOutlined style={{ fontSize: 20 }} />
                <StarOutlined style={{ fontSize: 20 }} />
              </div>
            </div>
            <div className="singlecomment">
              <span>Great service!</span>
            </div>
              </div>
              <div className="usercontent">
              <Avatar style={{ color: "blue", background: deepOrange[600] , fontWeight: 700,
fontSize: "48px",
lineHeight: "72px"}} >
                D
              </Avatar>
              <div className="usercontentdetails">
              <h2>Dhruva</h2>
              <span>12 Dec, 2021</span>
              <div className="star">
                <StarOutlined style={{ fontSize: 20 }} />
                <StarOutlined style={{ fontSize: 20 }} />
                <StarOutlined style={{ fontSize: 20 }} />
                <StarOutlined style={{ fontSize: 20 }} />
                <StarOutlined style={{ fontSize: 20 }} />
              </div>
            </div>
            <div className="singlecomment">
              <span>Great service!</span>
            </div>
              </div>
              <div className="usercontent">
              <Avatar style={{ color: "blue", background: deepOrange[600] }}>
                D
              </Avatar>
              <div className="usercontentdetails">
              <h2>Dhruva</h2>
              <span>12 Dec, 2021</span>
              <div className="star">
                <StarOutlined style={{ fontSize: 20 }} />
                <StarOutlined style={{ fontSize: 20 }} />
                <StarOutlined style={{ fontSize: 20 }} />
                <StarOutlined style={{ fontSize: 20 }} />
                <StarOutlined style={{ fontSize: 20 }} />
              </div>
            </div>
            <div className="singlecomment">
              <span>Great service!</span>
            </div>
              </div>
          </div>
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
    </div>
  );
};

export default Reviews;
