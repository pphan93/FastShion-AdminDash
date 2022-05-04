import React, { useState } from "react";
import styles from "./NewProduct.module.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { useDispatch } from "react-redux";

import app from "../../firebase";
import { addProduct } from "../../lib/api";

const NewProduct = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setInputs((prevItems) => {
      return { ...prevItems, [e.target.name]: e.target.value };
    });
  };

  console.log(inputs);

  const onCatHandler = (e) => {
    console.log(e.target.value.replace(/ /g, "").split(","));
    setCategories(e.target.value.replace(/ /g, "").split(","));
  };

  const onSizeHandler = (e) => {
    setSize(e.target.value.replace(/ /g, "").split(","));
  };

  const onColorHandler = (e) => {
    setColor(e.target.value.replace(/ /g, "").split(","));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const filename = new Date().getTime() + file.name;

    const storage = getStorage(app);
    const storageRef = ref(storage, filename);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);

          const product = {
            ...inputs,
            img: downloadURL,
            categories: categories,
            size: size,
            color: color,
          };

          console.log(product);

          addProduct(product, dispatch);
        });
      }
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>New Product</h1>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <div className={styles.item}>
          <label>Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          ></input>
        </div>
        <div className={styles.item}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Apple AirPods"
            onChange={onChangeHandler}
          ></input>
        </div>
        <div className={styles.item}>
          <label>Price</label>
          <input
            type="number"
            name="price"
            step=".01"
            placeholder="12.99"
            onChange={onChangeHandler}
          ></input>
        </div>
        <div className={styles.item}>
          <label>Categories</label>
          <input
            type="text"
            placeholder="jean,skirt,male"
            onChange={onCatHandler}
          ></input>
        </div>
        <div className={styles.item}>
          <label>Size</label>
          <input
            type="text"
            placeholder="XS,S,M,L,XL"
            onChange={onSizeHandler}
          ></input>
        </div>
        <div className={styles.item}>
          <label>Color</label>
          <input
            type="text"
            placeholder="Orange, White, Beige"
            onChange={onColorHandler}
          ></input>
        </div>
        <div className={styles.item}>
          <label>Description</label>
          <input
            type="text"
            name="desc"
            placeholder="Description..."
            onChange={onChangeHandler}
          ></input>
        </div>
        <div className={styles.item}>
          <label>Stock</label>
          <select
            className={styles.select}
            name="inStock"
            onChange={onChangeHandler}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <button type="submit" className={styles.button}>
          Create
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
