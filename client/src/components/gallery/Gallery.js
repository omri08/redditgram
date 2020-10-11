import React from "react";
import PropTypes from "prop-types";
import Card from "../card/Card";
import styles from "./Gallery.module.scss";

export default function Gallery({ posts, loading }) {
  if (loading) return "loading";
  return (
    <div className={styles.container}>
      {posts.posts.map((post) => (
        <Card post={post} />
      ))}
    </div>
  );
}

Gallery.propTypes = {
  posts: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};
