import React from "react";
import styles from "./Topbar.module.css";
import { Language, NotificationsNone, Settings } from "@mui/icons-material";

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <span className={styles.logo}>FastAdmin</span>
        </div>
        <div className={styles.right}>
          <div className={styles.iconwrapper}>
            <NotificationsNone />
            <span className={styles.notificationbadge}>2</span>
          </div>
          <div className={styles.iconwrapper}>
            <Language />
            <span className={styles.notificationbadge}>2</span>
          </div>
          <div className={styles.iconwrapper}>
            <Settings />
          </div>
          <img
            src="https://i.pravatar.cc/"
            alt=""
            className={styles.avatar}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
