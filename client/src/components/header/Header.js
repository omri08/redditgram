import React from "react";
import { Input } from "antd";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useComponent, useWindowSize } from "../../utils/hooks";
import { HomeIcon, HomeFilledIcon } from "../../assets/svg";
import styles from "./Header.module.scss";

const { Search } = Input;

export default function Header() {
  const { pathname } = useLocation();
  const size = useWindowSize();
  const history = useHistory();
  const Home = useComponent(HomeIcon, HomeFilledIcon, "/" === pathname);

  return (
    <div className={styles.container}>
      <Link className={styles.logo} to="/">
        {size.width > 640 ? <h1>RedditGram</h1> : <h1>R</h1>}
      </Link>
      <Search
        placeholder="Search subreddits"
        onSearch={(value) => history.push(`/search/${value}`)}
        style={size.width > 640 ? { width: 400 } : { width: 200 }}
        className={styles.search}
      />
      <span className={styles.icons}>
        <Link to="/">
          <Home />
        </Link>
      </span>
    </div>
  );
}
