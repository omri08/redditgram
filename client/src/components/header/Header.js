import React from "react";
import { Input, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useComponent } from "../../utils/hooks";
import { ReactComponent as HomeIcon } from "../../assets/svg/home.svg";
import { ReactComponent as HomeFilledIcon } from "../../assets/svg/homeFilled.svg";
import { ReactComponent as HeartIcon } from "../../assets/svg/heart.svg";
import { ReactComponent as HeartFilledIcon } from "../../assets/svg/heartFilled.svg";
import styles from "./Header.module.scss";

const { Search } = Input;

export default function Header() {
  const { pathname } = useLocation();
  const Home = useComponent(HomeIcon, HomeFilledIcon, "/", pathname);
  const Heart = useComponent(HeartIcon, HeartFilledIcon, "/loved", pathname);
  return (
    <div className={styles.container}>
      <h1>Hello World</h1>
      <Search
        placeholder="Search subreddit"
        onSearch={(value) => console.log(value)}
        style={{ width: 200 }}
        className={styles.search}
      />
      <span className={styles.icons}>
        <Link to="/">
          <Home />
        </Link>
        <Link to="/loved">
          <Heart />
        </Link>
        <Avatar icon={<UserOutlined />} />
      </span>
    </div>
  );
}
