import React from "react";

import s from "./Avatar.module.scss";

import NoneAvatar from '../../img/none-avatar.png';

const Avatar = ({ img, size = 40, className, ...props }) => {
  return (
    <img
      src={img ? img : NoneAvatar}
      alt=""
      className={`${s.image} ${className}`}
      style={{ "--size": `${size}px` }}
      {...props}
    />
  );
};

export default Avatar;
