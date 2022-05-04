import {
  addProductFailure,
  addProductStart,
  addProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductFailure,
  getProductStart,
  getProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
} from "../redux/productRedux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userRedux";

const API_URL = "http://localhost:5000/api/";

//Get login token to send to backend authorization
const TOKEN =
  localStorage.getItem("persist:root") === null
    ? null
    : JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        .currentUser === null
    ? null
    : JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        .currentUser.accessToken;

//login
export async function login(dispatch, user) {
  const subAPIURL = "auth/login";

  dispatch(loginStart());

  try {
    const response = await fetch(API_URL + subAPIURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    let data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Login unsuccessful, please try agian.");
    }

    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFailure());
  }
}

//get new users return total of 5
export async function newUser() {
  const subAPIURL = "user/?new=true";
  console.log();
  const response = await fetch(API_URL + subAPIURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: "Bearer " + TOKEN,
    },
  });
  let data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Get New Users unsucessful, please try again."
    );
  }

  return data;
}

//Get new orders
export async function newOrders() {
  const subAPIURL = "order";
  console.log();
  const response = await fetch(API_URL + subAPIURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: "Bearer " + TOKEN,
    },
  });
  let data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Get New Order unsucessful, please try again."
    );
  }

  return data;
}

//Get total # user per month for one year
export async function usersStats() {
  const subAPIURL = "user/stats";
  console.log();
  const response = await fetch(API_URL + subAPIURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: "Bearer " + TOKEN,
    },
  });
  let data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to retrieve user stats");
  }

  return data.data;
}

//get income from order
export async function getStoreRevenue() {
  const subAPIURL = "order/income";
  console.log();
  const response = await fetch(API_URL + subAPIURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: "Bearer " + TOKEN,
    },
  });
  let data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to retrieve order");
  }

  return data;
}

//get products
export async function getProducts(dispatch) {
  const subAPIURL = "product";

  dispatch(getProductStart());

  try {
    const response = await fetch(API_URL + subAPIURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Get Products failed, please try agian.");
    }

    dispatch(getProductSuccess(data));
  } catch (error) {
    dispatch(getProductFailure());
  }
}

//delete products
export async function deleteProducts(id, dispatch) {
  const subAPIURL = "product/";

  dispatch(deleteProductStart());

  try {
    const response = await fetch(API_URL + subAPIURL + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: "Bearer " + TOKEN,
      },
    });

    let data = await response.json();
    if (!response.ok) {
      throw new Error(
        data.message || "Delete Products failed, please try agian."
      );
    }

    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductFailure());
  }
}

//get income for specific product id
export async function getProductRevenue(productID) {
  console.log(productID);
  const subAPIURL = "order/income";
  console.log();
  const response = await fetch(API_URL + subAPIURL + "?pid=" + productID, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: "Bearer " + TOKEN,
    },
  });
  let data = await response.json();
  console.log(data);
  if (!response.ok) {
    throw new Error(data.message || "Unable to retrieve income stats");
  }

  return data;
}

//update product
export async function updateProduct(id, product, dispatch) {
  const subAPIURL = "product/";

  dispatch(updateProductStart());

  try {
    const response = await fetch(API_URL + subAPIURL + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: "Bearer " + TOKEN,
      },
    });

    let data = await response.json();
    if (!response.ok) {
      throw new Error(
        data.message || "Update Product failed, please try agian."
      );
    }

    dispatch(updateProductSuccess({ id, product }));
  } catch (error) {
    dispatch(updateProductFailure());
  }
}

//add product
export async function addProduct(product, dispatch) {
  const subAPIURL = "product/";

  dispatch(addProductStart());

  try {
    const response = await fetch(API_URL + subAPIURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: "Bearer " + TOKEN,
      },
      body: JSON.stringify(product),
    });

    let data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Add product failed, please try agian.");
    }

    dispatch(addProductSuccess(data));
  } catch (error) {
    dispatch(addProductFailure());
  }
}
