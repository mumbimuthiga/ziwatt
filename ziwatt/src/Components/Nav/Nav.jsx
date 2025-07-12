import React from "react";

function Nav() {
  return (
    <>
      {/* {Navbar} */}
      <div className="nav w-100 fixed-top bg-white shadow-sm">
        <nav className="navbar navbar-expand-lg py-3 justify-content-between align-items-center w-100 nav-wrapper">
          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Mobile Logo */}
          <a href="#" className="navbar-brand mx-auto order-0 d-lg-none d-flex">
            <h2 className="m-0 fw-bold" style={{ letterSpacing: "2px" }}>
              Ziwatt Gift Shop
            </h2>
          </a>
          {/* Mobile Icon */}
          <ul className="d-lg-none align-items-center gap-3">
            <li className="nav-item">
              <a href="#">
                <i className="bi bi-search fs-5 text-dark"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" data-bs-toggle="modal" data-bs-target="#signupModal">
                <i className="bi bi-person fs-5 text-dark"></i>
              </a>
            </li>
            <li className="nav-item position-relative">
              <a href="http://">
                <i className="bi bi-heart fs-5 text-dark"></i>
                <span className="position-absolute top-0 start-100 translate-middle cart-qount rounded-pill">
                  0
                </span>
              </a>
            </li>
            <li className="nav-item position-relative">
              <a href="http://">
                <i className="bi bi-bag fs-5 text-dark"></i>
                <span className="position-absolute top-0 start-100 translate-middle cart-qount rounded-pill">
                  0
                </span>
              </a>
            </li>
          </ul>
          {/* Main Nav */}
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            {/* Left Nav Link  */}
            <ul className="navbar-nav nav-menu align-items-center gap-4">
              <li className="nav-item">
                <a href="http://" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="http://" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="http://" className="nav-link">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a href="http://" className="nav-link">
                  Store
                </a>
              </li>
              <li className="nav-item">
                <a href="http://" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="http://" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
            {/* Center Logo  */}
            <a href="#" className="navbar-brand order-0 d-none d-lg-flex">
              <h2 className="m-0 fw-bold" style={{ letterSpacing: "2px" }}>
                Ziwatt
              </h2>
            </a>
            {/* Right Icons */}
            <ul className="navbar-nav d-none d-lg-flex align-items-center gap-4">
              <li className="nav-item">
                <a href="#">
                  <i className="bi bi-search fs-5 text-dark"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href=""
                  data-bs-toggle="modal"
                  data-bs-target="#signupModal"
                >
                  <i className="bi bi-person fs-5 text-dark"></i>
                </a>
              </li>
              <li className="nav-item position-relative">
                <a href="http://">
                  <i className="bi bi-heart fs-5 text-dark"></i>
                  <span className="position-absolute top-0 start-100 translate-middle cart-qount rounded-pill">
                    0
                  </span>
                </a>
              </li>
              <li className="nav-item position-relative">
                <a href="http://">
                  <i className="bi bi-bag fs-5 text-dark"></i>
                  <span className="position-absolute top-0 start-100 translate-middle cart-qount rounded-pill">
                    0
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Sign Up Modal */}
      <div
        className="modal fade"
        id="signupModal"
        tabIndex="-1"
        aria-labelledby="signupModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4">
            <div className="modal-header border-0">
              <h5 className="modal-title fw-bold" id="signupModalLabel">
                SignUp
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="">
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your Password"
                    required
                  />
                </div>
                <p className="text-muted">
                  By signing up ,you agree to our{" "}
                  <a href="#" className="text-success text-decoration-none">
                    Terms
                  </a>{" "}
                  & 
                  <a href="#" className="text-success text-decoration-none">
                    Privacy Policy
                  </a>
                </p>
                <button type="button" className="btn btn-dark w-100">Sign Up</button>
              </form>
              <div className="text-center mt-3">
                <p>Already have an account ? <a href="#" className="text-sucess fw-bold">Login</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
