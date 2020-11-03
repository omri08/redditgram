import React from "react";
import { useHistory } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Button } from "antd";
import { v4 as uuid } from "uuid";
import styles from "./NavBar.module.scss";
import "react-perfect-scrollbar/dist/css/styles.css";
function NavBar() {
  const history = useHistory();
  const names = [
    "aww",
    "Earth Porn",
    "Food Porn",
    "Cozy Places",
    "Village Porn",
    "Praise TheCamera Man",
    "Perfect Timing",
    "GIFs",
    "wholesome memes",
    "nonononoyes",
    "never tell me the odds",
  ];

  function changeUrl(url) {
    const merge = url.replaceAll(" ", "");
    const final = "/" + merge;
    history.replace(final);
  }
  return (
    <div className={styles.container}>
      <PerfectScrollbar className={styles.scroll}>
        {names.map((text) => (
          <Button
            key={uuid()}
            className={styles.btn}
            onClick={() => changeUrl(text)}
          >
            {text}
          </Button>
        ))}
      </PerfectScrollbar>
    </div>
  );
}

export default NavBar;
