import React from "react";
import styles from "./SideBar.module.css";
import { LineStyle, Timeline } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          <h3 className={styles.title}>Dashboard</h3>
          <ul className={styles.sidebarList}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.sidebarListItem} ${styles.active}`
                    : styles.sidebarListItem
                }
              >
                <LineStyle className={styles.icon} />
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.sidebarListItem} ${styles.active}`
                    : styles.sidebarListItem
                }
              >
                <Timeline className={styles.icon} />
                Products
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.sidebarListItem} ${styles.active}`
                    : styles.sidebarListItem
                }
              >
                <Timeline className={styles.icon} />
                Users
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.menu}>
          <h3 className={styles.title}>Quick Menu</h3>
          <ul className={styles.sidebarList}>
            <li>
              <NavLink
                to="/newuser"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.sidebarListItem} ${styles.active}`
                    : styles.sidebarListItem
                }
              >
                <LineStyle className={styles.icon} />
                Add New Users
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/newproduct"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.sidebarListItem} ${styles.active}`
                    : styles.sidebarListItem
                }
              >
                <Timeline className={styles.icon} />
                Add New Product
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <div className={styles.menu}>
          <h3 className={styles.title}>Notification</h3>
          <ul className={styles.sidebarList}>
            <li className={`${styles.sidebarListItem} ${styles.active}`}>
              <LineStyle className={styles.icon} />
              Home
            </li>
            <li className={styles.sidebarListItem}>
              <Timeline className={styles.icon} />
              Analytics
            </li>
            <li className={styles.sidebarListItem}>
              <TrendingUp className={styles.icon} />
              Sales
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default SideBar;
