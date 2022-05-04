import SideBar from "./components/sidebar/SideBar";
import Topbar from "./components/topbar/Topbar";
import styles from "./App.module.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import User from "./pages/user/User";
import UserDetail from "./pages/userDetail/UserDetail";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import ProductDetail from "./pages/productDetail/ProductDetail";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/login" && <Topbar />}

      <div className={styles.container}>
        {location.pathname !== "/login" && <SideBar />}

        <div className={styles.mainContainer}>
          <Routes>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="/users"
              element={
                <RequireAuth>
                  <User />
                </RequireAuth>
              }
            />
            <Route
              path="/user/:id"
              element={
                <RequireAuth>
                  <UserDetail />
                </RequireAuth>
              }
            />
            <Route
              path="/newUser"
              element={
                <RequireAuth>
                  <NewUser />
                </RequireAuth>
              }
            />
            <Route
              path="/products"
              element={
                <RequireAuth>
                  <Product />
                </RequireAuth>
              }
            />
            <Route
              path="/product/:productId"
              element={
                <RequireAuth>
                  <ProductDetail />
                </RequireAuth>
              }
            />
            <Route
              path="/newProduct"
              element={
                <RequireAuth>
                  <NewProduct />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

//Check to see if user is auth before they can see other pages or else route them to login page
function RequireAuth({ children }) {
  let auth =
    localStorage.getItem("persist:root") === null
      ? null
      : JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
          .currentUser === null
      ? null
      : JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
          .currentUser.isAdmin;
  let location = useLocation();

  if (!auth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default App;
