import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Divider } from "antd";
import { ReactComponent as RedditIcon } from "../../assets/svg/reddit.svg";
import style from "./SearchResult.module.scss";
function SearchResult({ sub }) {
  const { display_name, title, subscribers } = sub;
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.info}>
          <RedditIcon />
          <span className={style.details}>
            <Link to={`/${display_name}`}>{display_name}</Link>
            <p>{subscribers}</p>
          </span>
        </div>
        <p className={style.description}>{title}</p>
      </div>
      <Divider className={style.divider} />
    </div>
  );
}

SearchResult.propTypes = {
  sub: PropTypes.object.isRequired,
};

export default SearchResult;
