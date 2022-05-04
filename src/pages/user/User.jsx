import React, { useState } from "react";
import styles from "./User.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    avatar: "https://i.pravatar.cc/",
    email: "jon@email.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 2,
    lastName: "Snow",
    firstName: "Peter",
    avatar: "https://i.pravatar.cc/",
    email: "jon@email.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 3,
    lastName: "Snow",
    firstName: "Harry",
    avatar: "https://i.pravatar.cc/",
    email: "jon@email.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 4,
    lastName: "Snow",
    firstName: "Henry",
    avatar: "https://i.pravatar.cc/",
    email: "jon@email.com",
    status: "active",
    transaction: "$120.00",
  },
];

const User = () => {
  const [data, setData] = useState(rows);

  const onDeleteHandler = React.useCallback((id) => {
    setTimeout(() => {
      setData((prevItem) => {
        return prevItem.filter((item) => item.id !== id);
      });
    });
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "avatar",
      headerName: "",
      sortable: false,
      width: 70,
      renderCell: (params) => {
        return (
          <div className={styles.avatar}>
            <img
              className={styles.avatarImg}
              src={params.row.avatar}
              alt=""
            ></img>
          </div>
        );
      },
    },
    //   { field: "firstName", headerName: "First name", width: 130 },
    //   { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",

      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      width: 150,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      type: "number",
      width: 90,
    },
    {
      field: "status",
      headerName: "Status",
      type: "string",
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
            <Link to={`/user/${params.row.id}`}>
              <button className={styles.buttonEdit}>Edit</button>
            </Link>
            <DeleteOutline
              className={styles.buttonDelete}
              onClick={() => onDeleteHandler(params.row.id)}
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
          rows={data}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default User;
