import React, { useEffect, useMemo, useState } from "react";
import styles from "./ProductDetail.module.css";
import { Link, useLocation } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { Publish } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getProductRevenue } from "../../lib/api";

const productData = [
  {
    name: "Jan",
    sales: 400,
  },
  {
    name: "Feb",
    sales: 400,
  },
  {
    name: "Mar",
    sales: 500,
  },
];

const ProductDetail = () => {
  const location = useLocation();
  const productID = location.pathname.split("/")[2];
  const [productStats, setProductStats] = useState([]);

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productID)
  );

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
        const data = await getProductRevenue(productID);
        console.log(data);
        const list = data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) => {
          return setProductStats((prevItems) => [
            ...prevItems,
            { name: MONTHS[item._id - 1], sales: item.total },
          ]);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getUsersStats();
  }, [MONTHS, productID]);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Product</h1>
        <Link to="/newProduct">
          <button className={styles.addButton}>Create</button>
        </Link>
      </div>
      <div className={styles.productTop}>
        <div className={styles.topLeft}>
          <Chart data={productStats} dataKey="sales" title="Sales" />
        </div>
        <div className={styles.topRight}>
          <div className={styles.infoTop}>
            <img className={styles.productImg} src={product.img} alt=""></img>
            <span className={styles.productName}>{product.title}</span>
          </div>
          <div className={styles.infoBottom}>
            <div className={styles.infoItem}>
              <span className={styles.infoKey}>id: </span>
              <span className={styles.infoValue}>{product._id}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoKey}>sale:$ </span>
              <span className={styles.infoValue}>123</span>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoKey}>in stock: </span>
              <span className={styles.infoValue}>{product.inStock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.productBottom}>
        <form className={styles.productForm}>
          <div className={styles.formLeft}>
            <label>Product name</label>
            <input type="text" placeholder={product.title}></input>
            <label>Product Description</label>
            <input type="text" placeholder={product.desc}></input>
            <label>Product Price</label>
            <input type="text" placeholder={product.price}></input>
            <label>In Stock</label>
            <select name="instock" id="inStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className={styles.formRight}>
            <div className={styles.productUpload}>
              <img className={styles.uploadImg} src="" alt=""></img>
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }}></input>
            </div>
            <button className={styles.button}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;
