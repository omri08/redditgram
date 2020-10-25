import React from "react";
import { Input, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useComponent, useWindowSize } from "../../utils/hooks";
import { ReactComponent as HomeIcon } from "../../assets/svg/home.svg";
import { ReactComponent as HomeFilledIcon } from "../../assets/svg/homeFilled.svg";
import { ReactComponent as HeartIcon } from "../../assets/svg/heart.svg";
import { ReactComponent as HeartFilledIcon } from "../../assets/svg/heartFilled.svg";
import { ReactComponent as ExploreIcon } from "../../assets/svg/explore.svg";
import styles from "./Header.module.scss";

const { Search } = Input;

export default function Header() {
  const { pathname } = useLocation();
  const history = useHistory();
  const Home = useComponent(HomeIcon, HomeFilledIcon, "/" === pathname);
  const Heart = useComponent(HeartIcon, HeartFilledIcon, "/loved" === pathname);

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
        <Link to="/loved">
          <Heart />
        </Link>
        {width <= 640 ? (
          <Link to="/explore">
            <ExploreIcon />
          </Link>
        ) : (
          ""
        )}
        <Avatar icon={<UserOutlined />} />
      </span>
    </div>
  );
}
