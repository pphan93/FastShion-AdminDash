import React from "react";
import styles from "./NewUser.module.css";

const NewUser = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>New User</h1>

      <form className={styles.newUserForm}>
        <div className={styles.item}>
          <label>UserName</label>
          <input type="text" placeholder="bobd"></input>
        </div>{" "}
        <div className={styles.item}>
          <label>Full Name</label>
          <input type="text" placeholder="John Doe"></input>
        </div>{" "}
        <div className={styles.item}>
          <label>Email</label>
          <input type="email" placeholder="johnd@email.com"></input>
        </div>{" "}
        <div className={styles.item}>
          <label>Password</label>
          <input type="password" placeholder="password"></input>
        </div>{" "}
        <div className={styles.item}>
          <label>Phone Number</label>
          <input type="text" placeholder="123 456 7890"></input>
        </div>{" "}
        <div className={styles.item}>
          <label>Address</label>
          <input type="text" placeholder="New York"></input>
        </div>
        <div className={styles.item}>
          <label>Gender</label>
          <div className={styles.gender}>
            <input type="radio" name="gender" id="male" value="male"></input>
            <label for="male">male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
            ></input>
            <label for="female">female</label>
            <input type="radio" name="gender" id="other" value="other"></input>
            <label for="other">other</label>
          </div>
        </div>
        <div className={styles.item}>
          <label>Active</label>
          <select className={styles.select} name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className={styles.button}>Create</button>
      </form>
    </div>
  );
};

export default NewUser;
