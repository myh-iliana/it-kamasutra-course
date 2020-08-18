import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import s from "./User.module.scss";

const User = () => {
  return (
    <div className={s.user}>
      <div className={s.avatar}>
        <img
          src="http://themashabrand.com/templates/Fluffs/assets/img/users/13.jpeg"
          alt=""
        />
      </div>

      <div className={s.details}>
        <div className={s.info}>
          <h4>
            <span>Anna Morgan</span>
            <div>
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </h4>
          <div className={s.description}>
            Welcome to the offical account of Anna Morgan. Success is in the
            PIXELS, <span>#pixels</span>
          </div>
          <div className={s.site}>www.themashabrand.com</div>
        </div>

        <button>
          <FontAwesomeIcon icon={faCheck} className={s.icon} />
          Following
        </button>
      </div>
    </div>
  );
};

export default User;
