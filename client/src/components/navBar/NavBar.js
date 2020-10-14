import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Button } from "antd";
import styles from "./NavBar.module.scss";
import "react-perfect-scrollbar/dist/css/styles.css";
function NavBar() {
  return (
    <div className={styles.container}>
      <PerfectScrollbar className={styles.scroll}>
        <Button className={styles.btn}>Aww</Button>
        <Button className={styles.btn}>FoodPorn</Button>
        <Button className={styles.btn}>EarthPorn</Button>
        <Button className={styles.btn}>Cozy Places</Button>
        <Button className={styles.btn}>VillagePorn</Button>
        <Button className={styles.btn}>PraiseTheCameraMan</Button>
        <Button className={styles.btn}>Perfect Timing</Button>
        <Button className={styles.btn}>GIFs</Button>
        <Button className={styles.btn}>wholesomememes</Button>
        <Button className={styles.btn}>nonononoyes</Button>
        <Button className={styles.btn}>nevertellmetheodds</Button>
      </PerfectScrollbar>
    </div>
  );
}

export default NavBar;
