import React, { useEffect } from "react";
import { useAppState, useAppDispatch } from "../../context/context";
import { getPosts } from "../../utils/api";
function Home() {
  const { loading } = useAppState();
  const dispatch = useAppDispatch();
  console.log(process.env.REACT_APP_API_ENDPOINT);
  useEffect(() => {
    getPosts(dispatch, "/posts/aww");
  });

  return <div></div>;
}

export default Home;
