import React from "react";
import { Button } from "antd";
import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <div className={styles.container}>
      <Button className={styles.btn}>Link1</Button>
      <Button className={styles.btn}>Link1</Button>
      <Button className={styles.btn}>Link1</Button>
      <Button className={styles.btn}>Link1</Button>
      <Button className={styles.btn}>Link1x</Button>
      <Button className={styles.btn}>Link12</Button>
      <Button className={styles.btn}>Link13</Button>
      <Button className={styles.btn}>Link18</Button>
      <Button className={styles.btn}>Link15</Button>
      <Button className={styles.btn}>Link15</Button>
      <Button className={styles.btn}>Link17</Button>
      <Button className={styles.btn}>Link19</Button>
      <Button className={styles.btn}>Link1-7</Button>
      <Button className={styles.btn}>Link1-7</Button>
      <Button className={styles.btn}>Link1-7</Button>
      <Button className={styles.btn}>Link1-7</Button>
      <Button className={styles.btn}>Link1-7</Button>
    </div>
  );
}

export default NavBar;
