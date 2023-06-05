import React from "react";
import { useRef } from "react";
import Img1 from "../assets/LOGOOO.jpg";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { addSeller } from "../reduxStores/actions/sellerAction";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
function Signup({ addSeller }) {
  const email = useRef();
  const password = useRef();
  const address = useRef();
  const re_password = useRef();
  const name = useRef();
  const phone = useRef();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
    }
    const passwordq = password.current.value;
    const re_passwords = re_password.current.value;
    const emailq = email.current.value;
    const phoneNO = phone.current.value;
    const address = address.current.value;
    const nameSeller = name.current.value;
    console.log(emailq, passwordq);
    try {
      await addSeller(emailq, passwordq);
      navigate("/seller");
    } catch (error) {
      if (error.response && error.response.data) {
        alert("Login failed: Please cheak your credential");
      } else {
        alert("Login failed: Please cheak your credential");
        // setError("An error occurred. Please try again."); // Generic error message
      }
    }
  };
  const validate = () => {
    const passwordq = password.current.value;
    const re_passwords = re_password.current.value;
    const emailq = email.current.value;
    const phoneNO = phone.current.value;
    const address = address.current.value;
    const nameSeller = name.current.value;
    let check = false;
    if (password === re_password && password != "" && re_password != "") {
      check = true;
    } else {
      check = false;
      alert("Re-enter the password Fields And Do not Leave them Empty");
    }
  };
  return (
    <>
      <section className="" style={{ backgroundColor: "#9c86b9" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div
                className="card"
                style={{
                  borderRadius: "1rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{
                        borderRadius: "1rem 0 0 1rem",
                        height: "100%",
                        width: "400px",
                      }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center ">
                    <div className="card-body p-3 p-lg-5 text-black">
                      <div className="d-flex justify-content-start align-items-center mb-4">
                        <img src={Img1} alt="here" height="185px" />
                        <h2
                          className="fw-normal mb-3 pb-3 text-center fw-bold mt-4"
                          style={{ letterSpacing: "1px" }}
                        >
                          APNA STORE
                        </h2>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign Up your account
                        </h5>
                        <div className="form-outline mb-3">
                          <input
                            ref={name}
                            type="text"
                            id="name"
                            className="form-control form-control-lg"
                            required
                          />
                          <label className="form-label" htmlFor="name">
                            Name
                          </label>
                        </div>

                        <div className="form-outline mb-3">
                          <input
                            ref={email}
                            type="email"
                            id="email"
                            className="form-control form-control-lg"
                            required
                          />
                          <label className="form-label" htmlFor="email">
                            Email address
                          </label>
                        </div>
                        <div className="form-outline mb-3">
                          <input
                            ref={phone}
                            type="tel"
                            id="phone"
                            className="form-control form-control-lg"
                            required
                          />
                          <label className="form-label" htmlFor="phone">
                            Phone Number
                          </label>
                        </div>
                        <div className="form-outline mb-3">
                          <input
                            ref={address}
                            type="text"
                            id="address"
                            className="form-control form-control-lg"
                            required
                          />
                          <label className="form-label" htmlFor="address">
                            Address
                          </label>
                        </div>

                        <div className="form-outline mb-3">
                          <input
                            ref={password}
                            type="password"
                            id="password1"
                            className="form-control form-control-lg"
                            min="8"
                            max="36"
                            required
                          />
                          <label className="form-label" htmlFor="password1">
                            Password
                          </label>
                        </div>
                        <div className="form-outline mb-3">
                          <input
                            ref={re_password}
                            type="password"
                            id="password2"
                            className="form-control form-control-lg"
                            min="8"
                            max="36"
                            required
                          />
                          <label className="form-label" htmlFor="password2">
                            Re-Enter Password
                          </label>
                        </div>

                        <div className="pt-1 mb-3">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                          >
                            Sign Up
                          </button>
                        </div>

                        <p
                          className="mb-5 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          Already have an account?{" "}
                          <Link to="/login" style={{ color: "#393f81" }}>
                            Login
                          </Link>
                        </p>
                        <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  error: state.sellerStore.error,
});

const mapDispatchToProps = {
  addSeller: addSeller,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
