import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import style from "./Card.module.scss";
function Card({ post }) {
  const history = useHistory();
  return (
    <div
      className={style.container}
      onClick={() => history.push(`/post/${post.id}`)}
    >
      {post.type === "VIDEO" ? (
        <video autoPlay loop controls muted>
          <source src={post.media} type="video/mp4"></source>
        </video>
      ) : (
        <img alt={post.title} src={post.media} />
      )}
    </div>
  );
}

Card.propTypes = {
  post: PropTypes.object.isRequired,
};

export default React.memo(Card);
