import React, { useState } from "react";
import PropTypes from "prop-types";
import { Skeleton } from "antd";

import style from "./Card.module.scss";
function Card({ post, customStyle, onClick, controls }) {
  const [loaded, setLoaded] = useState(false);
  const visible = !loaded ? { display: "none" } : {};

  function showComponent() {
    return post.type === "VIDEO" ? (
      <video autoPlay loop controls={controls} muted>
        <source src={post.media} type="video/mp4"></source>
      </video>
    ) : (
      <img
        style={visible}
        onLoad={() => setLoaded(true)}
        alt={post.title}
        src={post.media}
      />
    );
  }
  return (
    <div
      className={style.container}
      style={customStyle}
      onClick={onClick ? () => onClick() : () => {}}
    >
      {!loaded && post.type !== "VIDEO" && (
        <Skeleton.Avatar active={true} style={customStyle} shape="square" />
      )}
      {showComponent()}
    </div>
  );
}

Card.propTypes = {
  post: PropTypes.object.isRequired,
  customStyle: PropTypes.object.isRequired,
  controls: PropTypes.bool.isRequired,
};

export default React.memo(Card);
