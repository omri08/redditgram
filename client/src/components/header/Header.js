import React from "react";
import { Input } from "antd";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useComponent, useWindowSize } from "../../utils/hooks";
import { HomeIcon, HomeFilledIcon, ExploreIcon } from "../../assets/svg";
import styles from "./Header.module.scss";

const { Search } = Input;

export default function Header() {
  const { pathname } = useLocation();
  const history = useHistory();
  const Home = useComponent(HomeIcon, HomeFilledIcon, "/" === pathname);

  const { width } = useWindowSize();
  return (
    <div className={styles.container}>
      <Link className={styles.logo} to="/">
        <h1>RedditGram</h1>
      </Link>
      <Search
        placeholder="Search subreddits"
        onSearch={(value) => history.push(`/search/${value}`)}
        style={{ width: 400 }}
        className={styles.search}
      />
      <span className={styles.icons}>
        <Link to="/">
          <Home />
        </Link>
        {width <= 640 ? (
          <Link to="/explore">
            <ExploreIcon />
          </Link>
        ) : (
          ""
        )}
      </span>
    </div>
  );
}
