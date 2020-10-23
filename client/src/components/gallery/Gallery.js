import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import Card from "../card/Card";
import styles from "./Gallery.module.scss";

export default function Gallery({ posts }) {
  const history = useHistory();
  const cardStyle = React.useCallback(
    {
      width: "350px",
      height: "350px",
      cursor: "pointer",
    },
    []
  );
  return (
    <div className={styles.container}>
      {posts.posts.map((post) => (
        <Card
          key={post.id}
          post={post}
          customStyle={cardStyle}
          onClick={() => history.push(`/post/${post.id}`)}
          controls={false}
        />
      ))}
    </div>
  );
}

Gallery.propTypes = {
  posts: PropTypes.object.isRequired,
};
