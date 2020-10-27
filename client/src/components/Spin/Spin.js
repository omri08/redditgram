import React from "react";
import { Spin as AntdSpin } from "antd";
import style from "./Spin.module.scss";
function Spin({ tip } = " ") {
  return (
    <>
      <AntdSpin tip={`${tip}`} className={style.spin} />
    </>
  );
}

export default Spin;
