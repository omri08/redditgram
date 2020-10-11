import React from "react";
import PropTypes from "prop-types";
import style from "./Card.module.scss";
function Card({ post }) {
  return (
    <div className={style.container}>
      <img src={post.media} />
    </div>
  );
}

Card.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Card;