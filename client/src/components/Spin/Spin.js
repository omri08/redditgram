import React from "react";
import { Spin as AntdSpin } from "antd";
import style from "./Spin.module.scss";
function Spin({ tip = " ", center }) {
  const position = center ? { position: "absolute" } : {};
  return (
    <>
      <AntdSpin tip={`${tip}`} className={style.spin} style={position} />
    </>
  );
}

export default Spin;
