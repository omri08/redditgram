import React, { useEffect, useRef, useState } from "react";
import { tryGet } from "../../utils/api";
import NavBar from "../../components/navBar/NavBar";
import Gallery from "../../components/gallery/Gallery";
import styles from "./Home.module.scss";

function Home() {
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(false);
  const [element, setElement] = useState(null);
  const loader = useRef(loadPosts);
  const observer = useRef(
    new IntersectionObserver(async (entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        await loader.current();
      }
    }),
    {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    }
  );

  async function loadPosts() {
    let final;
    setLoading(true);
    const res = await tryGet("/posts/aww", posts.after);
    if (Object.keys(posts).length !== 0) {
      final = {
        after: res.data.after,
        posts: posts.posts.concat(res.data.posts),
      };
    } else final = { ...res.data };

    setPosts(final);
    setLoading(false);
  }

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) currentObserver.observe(currentElement);

    return () => {
      if (currentElement) currentObserver.unobserve(currentElement);
    };
  }, [element]);

  useEffect(() => {
    loader.current = loadPosts;
  }, [loadPosts]);

  return (
    <div className={styles.container}>
      <NavBar />
      {Object.keys(posts).length !== 0 && <Gallery posts={posts} />}
      {loading && <li>Loading...</li>}

      {!loading && (
        <li ref={setElement} style={{ background: "transparent" }}></li>
      )}
    </div>
  );
}

export default Home;
