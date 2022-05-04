import React, { useEffect, useState } from "react";
import styles from "./WidgetLarge.module.css";
import { newOrders } from "../../lib/api";
import { format } from "timeago.js";

const WidgetLarge = () => {
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const data = await newOrders();
        setOrder(data);
      } catch (error) {
        console.log(error);
      }
    };

    getOrders();
  }, []);

  console.log(orders);

  const Button = ({ type }) => {
    return (
      <button className={`${styles.button} ${styles[type]}`}>{type}</button>
    );
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Latest Transactions</h3>
      <table className={styles.table}>
        <tr className={styles.tableRow}>
          <th className={styles.tableHeader}>Customer</th>
          <th className={styles.tableHeader}>Date</th>
          <th className={styles.tableHeader}>Amount</th>
          <th className={styles.tableHeader}>Status</th>
        </tr>

        {orders.map((order) => {
          return (
            <tr key={order._id} className={styles.tableRow}>
              <td className={styles.user}>
                <img
                  src="https://i.pravatar.cc/"
                  alt=""
                  className={styles.img}
                ></img>
                <span className={styles.name}>{order.userId}</span>
              </td>
              <td className={styles.date}>{format(order.createdAt)}</td>
              <td className={styles.amount}>${order.amount}</td>
              <td className={styles.status}>
                <Button type={order.status} />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default WidgetLarge;
