import React, { useEffect, useState } from "react";
import styles from "./Product.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProducts, getProducts } from "../../lib/api";

const rows = [
  {
    id: 1,
    name: "Apple Airpods",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861342000",
    stock: 32,
    status: "active",
    price: "$120.00",
  },
  {
    id: 2,
    name: "Apple Airpods",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861342000",
    stock: 32,
    status: "active",
    price: "$120.00",
  },
  {
    id: 3,
    name: "Apple Airpods",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861342000",
    stock: 32,
    status: "active",
    price: "$120.00",
  },
  {
    id: 4,
    name: "Apple Airpods",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861342000",
    stock: 32,
    status: "active",
    price: "$120.00",
  },
  {
    id: 5,
    name: "Apple Airpods",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861342000",
    stock: 32,
    status: "active",
    price: "$120.00",
  },
];

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const onDeleteHandler = React.useCallback(
    (id) => {
      setTimeout(() => {
        deleteProducts(id, dispatch);
      });
    },
    [dispatch]
  );

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "img",
      headerName: "",
      sortable: false,
      width: 70,
      renderCell: (params) => {
        return (
          <div className={styles.img}>
            <img
              className={styles.productImg}
              src={params.row.img}
              alt=""
            ></img>
          </div>
        );
      },
    },
    //   { field: "firstName", headerName: "First name", width: 130 },
    //   { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "title",
      headerName: "Product",
      description: "This column has a value getter and is not sortable.",
      width: 160,
    },
    {
      field: "inStock",
      headerName: "Stock",
      type: "number",
      width: 50,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 90,
    },

    {
      field: "action",
      headerName: "Action",
      type: "string",
      width: 90,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row._id}`}>
              <button className={styles.buttonEdit}>Edit</button>
            </Link>
            <DeleteOutline
              className={styles.buttonDelete}
              onClick={() => onDeleteHandler(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className={styles.container}>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={products}
          columns={columns}
          pageSize={8}
          getRowId={(row) => row._id}
          rowsPerPageOptions={[8]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default Product;
