import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../lib/api";
import styles from "./Login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onHandleClick = (e) => {
    e.preventDefault();
    //
    login(dispatch, { username, password });
  };

  return (
    // <div
    //   style={{
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     height: "100vh",
    //   }}
    // >
    //   <input
    //     type="text"
    //     placeholder="username"
    //     value={username}
    //     onChange={(e) => {
    //       setUsername(e.target.value);
    //     }}
    //   ></input>
    //   <input
    //     type="password"
    //     placeholder="password"
    //     value={password}
    //     onChange={(e) => {
    //       setPassword(e.target.value);
    //     }}
    //   ></input>
    //   <button onClick={onHandleClick}>Login</button>
    // </div>
    <div className={styles.container}>
      <div className={styles["login-form"]}>
        <form>
          <h1>Login to FastFashion Portal</h1>
          <div className={styles.content}>
            <div className={styles["input-field"]}>
              <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className={styles["input-field"]}>
              <input
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>
          <div className={styles["action"]}>
            <button onClick={onHandleClick}>Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
