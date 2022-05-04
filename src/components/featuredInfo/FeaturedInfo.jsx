import React, { useEffect, useState } from "react";
import styles from "./FeaturedInfo.module.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { getStoreRevenue } from "../../lib/api";

const FeaturedInfo = () => {
  const [revenue, setRevenue] = useState([]);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const getRevenue = async () => {
      try {
        const data = await getStoreRevenue();
        setRevenue(data);
        setPercentage((data[1].total * 100) / data[0].total);
      } catch (error) {
        console.log(error);
      }
    };

    getRevenue();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <span className={styles.title}>Revenue</span>
        <div className={styles.moneyContainer}>
          <span className={styles.money}>${!revenue ? revenue : 0}</span>
          <span className={styles.rate}>
            %{Math.floor(percentage)}
            {percentage < 0 ? (
              <ArrowDownward className={`${styles.icon} ${styles.negative}`} />
            ) : (
              <ArrowUpward className={`${styles.icon}`} />
            )}
          </span>
        </div>
        <span className={styles.sub}>Compared to last month</span>
      </div>
      <div className={styles.item}>
        <span className={styles.title}>Sales</span>
        <div className={styles.moneyContainer}>
          <span className={styles.money}>$2,123</span>
          <span className={styles.rate}>
            <ArrowDownward className={`${styles.icon} ${styles.negative}`} />
            -11.4
          </span>
        </div>
        <span className={styles.sub}>Compared to last month</span>
      </div>
      <div className={styles.item}>
        <span className={styles.title}>Cost</span>
        <div className={styles.moneyContainer}>
          <span className={styles.money}>$2,123</span>
          <span className={styles.rate}>
            <ArrowUpward className={styles.icon} />
            +11.4
          </span>
        </div>
        <span className={styles.sub}>Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
