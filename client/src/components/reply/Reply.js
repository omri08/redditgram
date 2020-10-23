import React from "react";
import PropTypes from "prop-types";
import { HeartFilled } from "@ant-design/icons";
import { Divider } from "antd";
import style from "./Reply.module.scss";
function Reply({ reply }) {
  return (
    <div className={style.container}>
      <span className={style.titles}>
        <p>{reply.author}</p>
        <span className={style.ups}>
          {`Upvotes: ${reply.ups} `}
          <HeartFilled className={style.icon} />
        </span>
      </span>
      <p>{reply.body}</p>
      <Divider className={style.divider} />
    </div>
  );
}

Reply.propTypes = {
  reply: PropTypes.object.isRequired,
};

export default Reply;
