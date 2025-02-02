// export default MyNavbar;
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
// import {
//   Navbar,
//   Nav,
//   Container,
//   Form,
//   FormControl,
//   Button,
// } from "react-bootstrap";
import "./nav.css";
import GetBooking from "../get_booking/Get_Booking";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { LoggedInContext } from "../../Context/loggedUser";
import { AuthContext } from "../../Context/AuthContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  Navbar,
  Nav,
  Button,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";

function MyNavbar() {
  const { contextLoggedIn, setContextLoggenIn } = useContext(LoggedInContext);
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const isLoggedIn = authContext.isLoggedIn;
  const currentUser = authContext.currentUser;

  useEffect(() => {
    history.push("/");
  }, [isLoggedIn, currentUser]);

  const logOut = () => {
    localStorage.removeItem("loginUser");
    setContextLoggenIn("");
    authContext.logout();
  };

  var user = localStorage.getItem("user");
  user = JSON.parse(user);
  return (
    <Navbar
      style={{ opacity: " 0.8" }}
      className="navbar navbar-expand-lg navbar-light"
    >
      <div className="container-fluid">
        <Navbar.Brand class="remove">
          <Link to="/" className="navbar-brand">
            <h3 style={{ fontFamily: "cursive", fontWeight: "1000" }}>
              {" "}
              Tic
              <img
                className="d-inline mx-auto"
                src="https://i.ibb.co/jR5LcWJ/kisspng-hotel-computer-icons-symbol-high-resolution-india-map-5b5cb6413113c7-360607041532802625201.png"
                style={{ width: "30px" }}
                alt=""
              />
              <sub>Tac</sub>{" "}
            </h3>
          </Link>
        </Navbar.Brand>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-1 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="HotelsFilter"
              >
                List Hotels
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="Wishlist">
                WishList
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="AddHotelForm"
              >
                Add Hotel
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="GetBooking"
              >
                Booking
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            {/* <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            /> */}

            {
              !isLoggedIn ? (
                <>
                  <div className="d-flex m-2">
                    <Link
                      style={{ fontFamily: "cursive", fontWeight: "500" }}
                      className="nav-link active"
                      aria-current="page"
                      to="Register"
                    >
                      Register
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="d-flex m-2">
                    <h5 className="text-primary"> {` ${currentUser.name}`} </h5>
                  </div>

                  <div className="nav-item d-flex m-2">
                    <Link
                      style={{ fontWeight: "600" }}
                      to="Dashboard"
                      className="nav-link"
                    >
                      Dashboard
                    </Link>
                  </div>

                  <div className="d-flex m-2">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                      onClick={logOut}
                    >
                      log out
                    </Link>
                  </div>
                </>
              )
              /* <li className="nav-item">
<Link className="nav-link active" to="Dashboard">
Dashboard
</Link>
</li> */
            }

            {/* <button className="btn custom-search-btn" type="submit">
              Search
            </button> */}
          </form>

          {/* <div className="d-flex m-2">
            {`${contextLoggedIn ? "Hello " + contextLoggedIn.username : ""}`}
          </div>

          {contextLoggedIn && (
            <div className="nav-item">
              <Link to="Dashboard" className="nav-link">
                Dashboard
              </Link>
            </div>
          )} */}

          {/* <div className="d-flex m-2">

          <div className="d-flex m-2">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/"
              onClick={logOut}>
              {`${contextLoggedIn ? "Log out" : ""}`}
            </Link>
          </div> */}

          <div className="d-flex m-2">
            <Link to="/userprofile">
              <AccountCircleIcon fontSize="large"></AccountCircleIcon>
            </Link>
          </div>
        </div>
      </div>
    </Navbar>
  );
}

export default MyNavbar;
