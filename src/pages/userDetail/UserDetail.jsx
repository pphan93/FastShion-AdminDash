import React from "react";
import styles from "./UserDetail.module.css";
import {
  CalendarToday,
  Email,
  LocationCity,
  PermIdentity,
  Phone,
  Publish,
} from "@mui/icons-material";

import { Link } from "react-router-dom";

const UserDetail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Edit User</h1>
        <Link to="/newUser">
          <button className={styles.addButton}>Create</button>
        </Link>
      </div>
      <div className={styles.userContainer}>
        <div className={styles.userShow}>
          <div className={styles.userShowTop}>
            <img
              src="https://i.pravatar.cc/"
              alt=""
              className={styles.userShowImg}
            ></img>
            <div className={styles.userShowTopTitle}>
              <span className={styles.userShowName}>Anna Pecker</span>
              <span className={styles.userShowjobTitle}>Software Engineer</span>
            </div>
          </div>
          <div className={styles.userShowBottom}>
            <span className={styles.userShowBottomTitle}>Account Details</span>
            <div className={styles.userShowInfo}>
              <PermIdentity className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>annapecker12</span>
            </div>
            <div className={styles.userShowInfo}>
              <CalendarToday className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>10-12-1999</span>
            </div>
            <span className={styles.userShowBottomTitle}>Contact Details</span>
            <div className={styles.userShowInfo}>
              <Phone className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>+1 123 345 1234</span>
            </div>
            <div className={styles.userShowInfo}>
              <Email className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>
                annapecker12@email.com
              </span>
            </div>
            <div className={styles.userShowInfo}>
              <LocationCity className={styles.userShowIcon} />
              <span className={styles.userShowInfoTitle}>New York, USA</span>
            </div>
          </div>
        </div>
        <div className={styles.userUpdate}>
          <span className={styles.userUpdateTitle}>Edit</span>
          <form className={styles.userUpdateForm}>
            <div className={styles.userUpdateLeft}>
              <div className={styles.userUpdateItem}>
                <label>Username</label>
                <input
                  type="text"
                  placeholder=""
                  className={styles.userUpdateInput}
                ></input>
              </div>
              <div className={styles.userUpdateItem}>
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder=""
                  className={styles.userUpdateInput}
                ></input>
              </div>
              <div className={styles.userUpdateItem}>
                <label>Email</label>
                <input
                  type="email"
                  placeholder=""
                  className={styles.userUpdateInput}
                ></input>
              </div>
              <div className={styles.userUpdateItem}>
                <label>Phone</label>
                <input
                  type="text"
                  placeholder=""
                  className={styles.userUpdateInput}
                ></input>
              </div>
              <div className={styles.userUpdateItem}>
                <label>Address</label>
                <input
                  type="text"
                  placeholder=""
                  className={styles.userUpdateInput}
                ></input>
              </div>
            </div>

            <div className={styles.userUpdateRight}>
              <div className={styles.userUpdateUpload}>
                <img className={styles.userUpdateImg} src="" alt=""></img>
                <label htmlFor="file">
                  <Publish className={styles.publishIcon} />
                </label>
                <input
                  id="file"
                  type="file"
                  style={{ display: "none" }}
                ></input>
              </div>
              <button className={styles.userUpdateButton}>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
