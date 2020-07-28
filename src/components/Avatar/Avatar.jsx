import React from "react";

import s from "./Avatar.module.scss";

const Avatar = ({ img, size = "40px", className, ...props }) => {
  return (
    <img
      src={img}
      alt=""
      className={`${s.image} ${className}`}
      style={{ "--size": size }}
      {...props}
    />
  );
};

export default Avatar;
