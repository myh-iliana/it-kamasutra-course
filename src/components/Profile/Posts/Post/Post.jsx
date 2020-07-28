import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import s from "./Post.module.scss";

const Post = ({ likes, image }) => {
  return (
    <div className={s.item}>
      <img src={image} alt="" />
      <div className={s.likes}>
        <FontAwesomeIcon icon={faHeart} className={s.icon} />
        <span>{likes}</span>
      </div>
      <div className={s.save}>
        <FontAwesomeIcon icon={faBookmark} className={s.icon} />
      </div>
    </div>
  );
};

export default Post;
