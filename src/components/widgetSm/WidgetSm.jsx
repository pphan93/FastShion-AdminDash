import React, { useEffect, useState } from "react";
import styles from "./WidgetSm.module.css";
import { Visibility } from "@mui/icons-material";
import { newUser } from "../../lib/api";

const WidgetSm = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await newUser();
        setUsers(data);
      } catch (error) {}
    };

    getUsers();
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.title}>New Join Members</span>
      <ul className={styles.list}>
        {users.map((user) => {
          return (
            <li key={user._id} className={styles.listItem}>
              <img
                src={user.img || "https://i.pravatar.cc/"}
                alt=""
                className={styles.img}
              ></img>
              <div className={styles.user}>
                <span className={styles.username}>{user.username}</span>
                <span className={styles.jobTitle}>{user.username}</span>
              </div>
              <button className={styles.button}>
                <Visibility className={styles.icon} /> Display
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WidgetSm;
