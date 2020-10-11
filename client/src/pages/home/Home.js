import React, { useEffect, useContext } from "react";
import { store } from "../../context/context";
import { getPosts } from "../../utils/api";
import NavBar from "../../components/navBar/NavBar";
import Gallery from "../../components/gallery/Gallery";
import styles from "./Home.module.scss";

function Home() {
  const { state, dispatch } = useContext(store);
  console.log(state);

  useEffect(() => {
    getPosts(dispatch, "/posts/aww");
  }, []);
  return (
    <div className={styles.container}>
      <NavBar />
      <Gallery
        posts={state.posts}
        loading={state.loading}
        className={styles.gallery}
      />
    </div>
  );
}

export default Home;
