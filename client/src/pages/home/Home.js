import React, { useEffect } from "react";
import { useAppState, useAppDispatch } from "../../context/context";
import { getPosts } from "../../utils/api";
import NavBar from "../../components/navBar/NavBar";
import styles from "./Home.module.scss";

function Home() {
  const { loading } = useAppState();
  const dispatch = useAppDispatch();
  console.log(process.env.REACT_APP_API_ENDPOINT);
  useEffect(() => {
    getPosts(dispatch, "/posts/aww");
  });

  return (
    <div className={styles.container}>
      <NavBar />
    </div>
  );
}

export default Home;
