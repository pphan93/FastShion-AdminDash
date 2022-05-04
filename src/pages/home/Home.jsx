import React, { useEffect, useMemo, useState } from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { usersStats } from "../../lib/api";
import styles from "./Home.module.css";

const Home = () => {
  const [userStats, setUserStats] = useState([]);

  var MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getUsersStats = async () => {
      try {
        const data = await usersStats();

        data.map((item) => {
          return setUserStats((prevItems) => [
            ...prevItems,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ]);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getUsersStats();
  }, [MONTHS]);

  return (
    <div className={styles.home}>
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="Users Analytics"
        grid="true"
        dataKey="New User"
      />
      <div className={styles.widgets}>
        <WidgetSm />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;
