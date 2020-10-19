import React from "react";
import PropTypes from "prop-types";
import Card from "../card/Card";
import styles from "./Gallery.module.scss";

export default function Gallery({ posts }) {
  const cardStyle = {
    width: "350px",
    height: "350px",
  };
  return (
    <div className={styles.container}>
      {posts.posts.map((post) => (
        <Card key={post.id} post={post} size={cardStyle} />
      ))}
    </div>
  );
}

Gallery.propTypes = {
  posts: PropTypes.object.isRequired,
};
