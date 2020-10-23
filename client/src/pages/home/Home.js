import React, {
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
} from "react";
import { useHistory } from "react-router-dom";
import { Spin } from "antd";
import { apiGet } from "../../utils/api";
import NavBar from "../../components/navBar/NavBar";
import Gallery from "../../components/gallery/Gallery";
import styles from "./Home.module.scss";

function Home() {
  const history = useHistory();
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [element, setElement] = useState(null);
  const loadPostsCallBack = useCallback(loadPosts, [
    history.location.pathname,
    posts,
  ]);
  const loader = useRef(loadPostsCallBack);

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
    const params = posts
      ? {
          after: posts.after,
        }
      : null;
    const res = await apiGet(setPath(), params);
    if (posts) {
      final = {
        after: res.data.after,
        posts: posts.posts.concat(res.data.posts),
      };
    } else final = { ...res.data };

    setPosts(final);
    setLoading(false);
  }

  function setPath() {
    let endPoint;
    if (history.location.pathname === "/") endPoint = "/all";
    else endPoint = history.location.pathname;

    return `/posts${endPoint}`;
  }

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) currentObserver.observe(currentElement);

    return () => {
      if (currentElement) currentObserver.unobserve(currentElement);
    };
  }, [element]);

  useLayoutEffect(() => {
    setPosts(null);
  }, [history.location.pathname]);

  useEffect(() => {
    loader.current = loadPostsCallBack;
  }, [loadPostsCallBack]);

  return (
    <div className={styles.container}>
      <NavBar />
      {posts && <Gallery posts={posts} />}
      {loading && <Spin tip="Loading" className={styles.spin} />}
      {!loading && (
        <li ref={setElement} style={{ background: "transparent" }}></li>
      )}
    </div>
  );
}

export default Home;
