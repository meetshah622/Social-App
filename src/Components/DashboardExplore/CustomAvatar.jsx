import React from "react";
import "./CustomAvatar.scss";
export default function CustomAvatar({ iconSrc }) {
  return (
    <div className="customAvatarStyle">
      <img src={iconSrc} alt="avatar" />
    </div>
  );
}
