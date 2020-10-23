import React, { useState, useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useParams, Link } from "react-router-dom";
import { HeartFilled } from "@ant-design/icons";
import { Spin } from "antd";
import Reply from "../../components/reply/Reply";
import Card from "../../components/card/Card";
import { apiGet } from "../../utils/api";
import style from "./Post.module.scss";

function Post() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);
  console.log(post);
  const cardStyle = {
    Width: "100%",
    height: "auto",
  };
  useEffect(() => {
    async function loadPost() {
      setLoading(true);
      const { data } = await apiGet(`/post/${id}`);
      setPost(data);
      setLoading(false);
    }
    loadPost();
  }, []);

  if (loading) return <Spin tip="Loading" className={style.spin} />;
  return (
    <div className={style.container}>
      <div className={style.content}>
        <section className={style.info}>
          <span className={style.titles}>
            <Link to={`/${post.sub}`}>
              <p className={style.sub}>{`r/${post.sub}`}</p>
            </Link>
            <p className={style.author}>{`Posted by: ${post.author}`}</p>
            <span className={style.ups}>
              {`Upvotes: ${post.ups} `}
              <HeartFilled className={style.icon} />
            </span>
          </span>
          <h1>{post.title}</h1>
        </section>
        <Card post={post} customStyle={cardStyle} controls={true} />
      </div>
      <PerfectScrollbar className={style.replies}>
        {Object.keys(post.replies).length > 0 ? (
          post.replies.map((reply) => <Reply key={reply.id} reply={reply} />)
        ) : (
          <h3>No comments yet</h3>
        )}
      </PerfectScrollbar>
    </div>
  );
}

export default Post;
